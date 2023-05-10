import Jimp from 'jimp';
import InputFile from '../file/InputFile';

export default class PhotoFile extends InputFile {
  async handle(): Promise<void> {
    return new Promise((resolve, reject) => {
      Jimp.read(this.srcFile, (err, file) => {
        if (err) reject(err);
        else {
          file.quality(60).write(this.outFile);

          resolve();
        }
      });
    });
  }
}
