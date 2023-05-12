import fs from 'fs';
import path from 'path';
import Config from '../config/Config';

export default abstract class InputFile {
  config: Config;
  srcFile: string;
  outFile: string;
  name: string;

  // eslint-disable-next-line
  abstract handle(cb?: any): void;

  constructor(srcFile: string, config: Config) {
    this.config = config;
    this.srcFile = srcFile;
    this.name = path.basename(srcFile);
    this.outFile = path.join(config.outPath, this.name);
  }

  deleteSrcFile() {
    fs.unlinkSync(this.srcFile);
  }
}
