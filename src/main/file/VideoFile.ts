import ffmpegPath from '@ffmpeg-installer/ffmpeg';
import ffmpeg from 'fluent-ffmpeg';
import InputFile from './InputFile';

ffmpeg.setFfmpegPath(ffmpegPath.path);

export default class VideoFile extends InputFile {
  async handle(): Promise<void> {
    return new Promise((resolve, reject) => {
      ffmpeg(this.srcFile)
        .format('avi')
        .videoCodec('libx264')
        .addOption('-crf', '23')
        .addOption('-preset', 'slow')
        .audioCodec('copy')
        .output(this.outFile)
        .on('end', resolve)
        .on('error', reject)
        .run();
    });
  }
}
