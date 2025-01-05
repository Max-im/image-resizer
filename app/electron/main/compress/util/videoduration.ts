import path from 'node:path';
import ffmpeg from 'fluent-ffmpeg';
import ffprobeInstaller from '@ffprobe-installer/ffprobe';
import { getVideoDurationInSeconds } from 'get-video-duration';

export const getVideoDuration = async (filePath: string) => {
    const ffprobePath =
        process.env.NODE_ENV === 'production'
            ? path.join(
                process.resourcesPath,
                'app.asar.unpacked',
                'node_modules',
                '@ffprobe-installer',
                'win32-x64',
                'ffprobe.exe'
            )
            : ffprobeInstaller.path;

    ffmpeg.setFfprobePath(ffprobePath);

    const duration = await getVideoDurationInSeconds(filePath, ffprobePath);
}