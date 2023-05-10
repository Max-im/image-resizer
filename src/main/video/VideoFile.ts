import ffmpeg from './provider';
import InputFile from '../file/InputFile';

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
        .on('end', () => resolve())
        .on('error', (err) => reject(err))
        .run();
    });
  }
}
