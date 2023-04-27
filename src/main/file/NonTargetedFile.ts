import fs from 'fs';
import InputFile from './InputFile';

export default class NonTargetedFile extends InputFile {
  async handle(): Promise<void> {
    return new Promise((resolve) => {
      fs.copyFileSync(this.srcFile, this.outFile);
      resolve();
    });
  }
}
