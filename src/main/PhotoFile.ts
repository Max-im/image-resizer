import Jimp from 'jimp';
import InputFile from './InputFile';

export default class PhotoFile extends InputFile {
  isTarget = true;

  // constructor(srcFile: string) {
  //   super(srcFile);
  // }

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
