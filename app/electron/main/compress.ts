import fs from 'node:fs';
import { ipcMain, IpcMainInvokeEvent } from "electron";
import ffmpeg from 'fluent-ffmpeg';
import { deleteFileWithRetry } from './util/deletefile';
import { ensureOutputDir } from './util/output';
import { getVideoDuration } from './util/videoduration';
import { addVideoStatic } from './util/videostatic';
import { IMediaFile } from 'models/MediaFile';
import { IPercentData } from 'models/PercentData';
import { ISettings } from 'models/Settings';

const FILE_END = 'fileEnd';
const COMPLETED = 'completed';

let isCancelled = false;

interface IProgressData {
    frames: number;
    currentFps: number;
    currentKbps: number;
    targetSize: number;
    timemark: string;
    percent?: number | undefined;
}

async function onCompressFile(event: IpcMainInvokeEvent, file: IMediaFile) {
    const duration = await getVideoDuration(file.path);

    return new Promise((resolve, reject) => {
        addVideoStatic();
        ensureOutputDir(file.outputPath);

        const ffmpegProcess = ffmpeg(file.path)
            .format('avi')
            .videoCodec('libx264')
            .addOption('-crf', '23')
            .addOption('-preset', 'slow')
            .audioCodec('copy')
            .output(file.outputPath)
            .on('end', () => resolve(FILE_END))
            .on('error', (err) => reject(err.message))
            .on('progress', onProgress);

            const ffmpegProc = ffmpegProcess;

            ffmpegProcess.run();

            function onProgress(progress: IProgressData) {
                if (isCancelled) {
                    ffmpegProc.kill('SIGKILL');
                    return;
                }
                let { percent } = progress;
                let result = 0;
        
                if (percent) {
                    result = percent > 100 ? 100 : percent;
                } else if (progress.timemark && duration) {
                    const [hours, min, sec] = progress.timemark.split(':');
                    const currentTime = Number(sec) + Number(min) * 60 + Number(hours) * 360;
                    result = currentTime / duration * 100;
                }
                const payload: IPercentData = { filePath: file.path, percent: result };
                event.sender.send('progress', payload);
            }
    });
}

async function onCompress(event: IpcMainInvokeEvent, { media, settings }: { media: IMediaFile[], settings: ISettings }) {
    isCancelled = false;
    for (const file of media) {
        if (isCancelled) {
            break;
        }
        try {
            await onCompressFile(event, file) as string;
            if (settings.deleteSrc) {
                deleteFileWithRetry(file.path);
            }

            event.sender.send(FILE_END, {path: file.path, size: fs.statSync(file.outputPath).size});
        } catch (err) {
            event.sender.send('log', err);
            let message = `An error occurred while compressing ${file.name}`;
            if (err instanceof Error) {
                message = err.message;
            }
            event.sender.send('fileError', { filePath: file.path, message });
        }
    }
    event.sender.send(COMPLETED);
}


function onCancel() {
    isCancelled = true;
}

ipcMain.handle('compress', onCompress);
ipcMain.handle('cancelCompress', onCancel);
