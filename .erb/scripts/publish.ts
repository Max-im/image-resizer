import fs from 'fs';
import path from 'path';
import rimraf from 'rimraf';
// import ghpages from 'gh-pages';

const archiver = require('archiver');

const archiveFileName = 'MediaCompressor.zip';
const archivePath = path.resolve(__dirname, '../../www', archiveFileName);

rimraf.sync(archivePath);

const buildFolder = path.resolve(__dirname, '../../release/build');
const files = fs.readdirSync(buildFolder);
const targetFile = files.find((fileName) => {
  if (/^Media\sCompressor\sSetup\s.*\.exe$/.test(fileName)) {
    return true;
  }
  return false;
});

if (!targetFile) throw new Error('Built File not found');

const filePath = path.resolve(__dirname, '../../release/build', targetFile);

const output = fs.createWriteStream(archivePath);

const archive = archiver('zip', {
  zlib: { level: 1 },
});

output.on('end', () => {
  console.log('Data has been drained');
});

archive.on('warning', (err: any) => {
  if (err.code === 'ENOENT') {
    // log warning
  } else {
    // throw error
    throw err;
  }
});

output.on('close', () => {
  console.log(`${archive.pointer()} total bytes`);
  console.log('archiver has been closed.');
});

archive.on('error', (err: any) => {
  throw err;
});

archive.pipe(output);
archive.append(fs.createReadStream(filePath), { name: targetFile });
archive.finalize();
