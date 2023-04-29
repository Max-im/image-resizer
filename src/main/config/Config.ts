import fs from 'fs';
import path from 'path';
import ISettings from '../../contracts/ISettings';

export default class Config {
  srcPath: string;
  srcDir: string;
  outPath: string;

  constructor(data: ISettings) {
    const { targetFolder } = data;

    this.srcPath = path.dirname(targetFolder);
    this.srcDir = path.basename(targetFolder);
    let outPath;
    if (data.outputDirectory === 'near') {
      outPath = path.join(this.srcPath, `${this.srcDir}_compressed`);
    } else {
      outPath = path.join(targetFolder, `${this.srcDir}_compressed`);
    }
    this.outPath = outPath;

    if (!fs.existsSync(this.outPath)) {
      fs.mkdirSync(this.outPath);
    }
  }
}
