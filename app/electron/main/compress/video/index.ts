import { IpcMainInvokeEvent } from "electron";
import ffmpeg from 'fluent-ffmpeg';
import { ensureOutputDir } from '../util/output';
import { getVideoDuration } from '../util/videoduration';
import { addVideoStatic } from '../util/videostatic';
import { IMediaFile } from 'models/MediaFile';
import { IPercentData } from 'models/PercentData';
import { IProgressData } from '../type';

const FILE_END = 'fileEnd';

let isCancelled = false;

export async function onCompressVideo(event: IpcMainInvokeEvent, file: IMediaFile) {
    const duration = await getVideoDuration(file.path);

    return new Promise((resolve, reject) => {
        addVideoStatic();

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

export function onVideoSetCancel(val: boolean) {
    isCancelled = val;
}


