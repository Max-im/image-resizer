import ffmpeg from 'fluent-ffmpeg';
import InputFile from './InputFile';

const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;

ffmpeg.setFfmpegPath(ffmpegPath);

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
