import ffmpeg from './provider';
import InputFile from '../file/InputFile';

export default class VideoFile extends InputFile {
  async handle(reply: any): Promise<void> {
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
        .on('progress', (progress) => {
          const { percent } = progress;

          // if (!percent && progress.timemark) {
          //   const [hours, min, sec] = progress.timemark.split(':');
          //   const currentHandledTime =
          //     Number(sec) + Number(min * 60) + Number(hours * 360);
          //   percent = currentHandledTime / durationVal;
          // }

          if (percent) {
            const formatted = percent > 1 ? 100 : Math.round(percent * 100);
            reply('compress.progress', formatted);
          }
        })
        .run();
    });
  }
}
