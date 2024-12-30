import fs from 'node:fs';
import path from 'node:path';
import { dialog, ipcMain } from "electron";
import { MediaFile } from '../../models/MediaFile';

const supportedFiles = ['mp4'];

function readDirFiles(folderPath: string): string[] {
    if (!fs.lstatSync(folderPath).isDirectory()) {
      if (Array.isArray(folderPath)) return folderPath;
      return [folderPath];
    }
    const files = fs.readdirSync(folderPath);
    const data = [];

    for (const fileName of files) {
        data.push(...readDirFiles(`${folderPath}/${fileName}`));
    }
    return data;
  }
  

async function openFolderSelection() {
    const data = await dialog.showOpenDialog({
        properties: ['openFile', 'openDirectory'],
    });

    if (data.canceled) return;

    if (!data.filePaths || !data.filePaths[0]) {
        throw new Error('No file path selected');
    }

    const media = readDirFiles(data.filePaths[0]);
    if(!media.length) {
        throw new Error('The folder is empty');
    }

    const mediaFiles = [];
    for (const item of media) {
        const fileName = path.basename(item);
        if (supportedFiles.includes(path.extname(fileName).toLowerCase().replace('.', ''))) {
            mediaFiles.push(item);
        }
    }

    if (!mediaFiles.length) {
        throw new Error('No supported media files found');
    }

    return mediaFiles.map(file => new MediaFile(file, fs.statSync(file).size));
}

ipcMain.handle('selectfolder', openFolderSelection);
