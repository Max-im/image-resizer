import fs from 'node:fs';
import path from 'node:path';
import { ipcMain, IpcMainInvokeEvent } from "electron";
import ffmpeg from 'fluent-ffmpeg';
import ffmpegStatic from 'ffmpeg-static';
import { IMediaFile } from 'models/MediaFile';
import { IPercentData } from 'models/PercentData';
import { ISettings } from 'models/Settings';
import { ensureOutputDir } from './util/output';
import deleteFileWithRetry from './util/deletefile';
import { getVideoDuration } from './util/videoduration';

const FILE_END = 'fileEnd';
const COMPLETED = 'completed';

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

    function onProgress(progress: IProgressData) {
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

    return new Promise((resolve, reject) => {
        let ffmpegPath;
        if (process.env.NODE_ENV === 'production') {
            ffmpegPath = path.join(
                process.resourcesPath,
                'app.asar.unpacked',
                'node_modules',
                'ffmpeg-static',
                'ffmpeg.exe'
            );
        } else {
            ffmpegPath = ffmpegStatic;
        }

        if (ffmpegPath) {
            ffmpeg.setFfmpegPath(ffmpegPath);
        }

        ensureOutputDir(file.outputPath);

        ffmpeg(file.path)
            .format('avi')
            .videoCodec('libx264')
            .addOption('-crf', '23')
            .addOption('-preset', 'slow')
            .audioCodec('copy')
            .output(file.outputPath)
            .on('end', () => resolve(FILE_END))
            .on('error', (err) => reject(err.message))
            .on('progress', onProgress)
            .run();
    });
}

async function onCompress(event: IpcMainInvokeEvent, { media, settings }: { media: IMediaFile[], settings: ISettings }) {
    for (const file of media) {
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

ipcMain.handle('compress', onCompress);
