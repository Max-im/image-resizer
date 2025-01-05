import path from 'node:path';
import ffmpegStatic from 'ffmpeg-static';
import ffmpeg from 'fluent-ffmpeg';

export const addVideoStatic = () => {
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
}