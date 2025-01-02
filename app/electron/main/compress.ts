import fs from 'node:fs';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegStatic from 'ffmpeg-static';
import { ipcMain, IpcMainInvokeEvent } from "electron";
import { getVideoDurationInSeconds } from 'get-video-duration';
import { getOutputDir } from './util/output';
import { IMediaFile } from 'models/MediaFile';
import { IPercentData } from 'models/PercentData';

const FILE_END = 'fileEnd';
const COMPLETED = 'completed';

async function onCompressFile(event: IpcMainInvokeEvent, file: IMediaFile) {
    let duration: number | undefined;
    try {
        duration = await getVideoDurationInSeconds(file.path);
    } catch (err) {
        console.log(err);
    }

    return new Promise((resolve, reject) => {
        if (ffmpegStatic) {
            ffmpeg.setFfmpegPath(ffmpegStatic);
        }

        const outputDir = getOutputDir(file.path);

        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        ffmpeg(file.path)
            .format('avi')
            .videoCodec('libx264')
            .addOption('-crf', '23')
            .addOption('-preset', 'slow')
            .audioCodec('copy')
            .output(file.outputPath)
            .on('end', () => resolve(FILE_END))
            .on('error', (err) => reject(err.message))
            .on('progress', (progress) => {
                let { percent } = progress;
                let result = 0;

                if (percent) {
                    result = percent > 1 ? 100 : percent * 100;
                } else if (progress.timemark && duration) {
                    const [hours, min, sec] = progress.timemark.split(':');
                    const currentTime = Number(sec) + Number(min) * 60 + Number(hours) * 360;
                    result = currentTime / duration * 100;
                }
                const payload: IPercentData = { filePath: file.path, percent: result };
                event.sender.send('progress', payload);
            })
            .run();
    });
}

async function onCompress(event: IpcMainInvokeEvent, media: IMediaFile[]) {
    for (const file of media) {
        try {
            await onCompressFile(event, file) as string;
            event.sender.send(FILE_END, file.path);
        } catch (err) {
            console.log(err);
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
