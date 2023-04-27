import fs from 'fs';
import path from 'path';
import IStartCompress from '../../contracts/IStartCompress';

export default class Config {
  srcPath: string;
  srcDir: string;
  outPath: string;

  constructor(data: IStartCompress) {
    const { targetFolder } = data;
    // const folder = targetFolder.replace(/(\s+)/g, '\/$1');

    this.srcPath = path.dirname(targetFolder);
    this.srcDir = path.basename(targetFolder);
    this.outPath = path.join(this.srcPath, `${this.srcDir}_compressed`);

    if (!fs.existsSync(this.outPath)) {
      fs.mkdirSync(this.outPath);
    }
  }
}
