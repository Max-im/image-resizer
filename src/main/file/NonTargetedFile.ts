import fs from 'fs';
import InputFile from './InputFile';

export default class NonTargetedFile extends InputFile {
  async handle(): Promise<void> {
    return new Promise((resolve) => {
      if (this.config.ignoreNonMediaFiles) resolve();
      else {
        fs.copyFileSync(this.srcFile, this.outFile);
        resolve();
      }
    });
  }

  deleteSrcFile(): void {
    if (this.config.ignoreNonMediaFiles) return;
    fs.unlinkSync(this.srcFile);
  }
}
