import path from 'path';

export default abstract class InputFile {
  srcFile: string;
  outFile: string;
  name: string;

  abstract isTarget(): boolean;
  abstract handle(): void;

  constructor(srcFile: string, ext: string) {
    this.srcFile = srcFile;
    this.name = path.basename(srcFile, ext);
    this.outFile = this.isTarget() ? '' : '';
  }
}
