import fs from 'node:fs';
import path from 'node:path';
import { dialog, ipcMain, IpcMainInvokeEvent } from "electron";
import { IMediaFile, MediaFile } from '../../models/MediaFile';
  

async function onCompress(event: IpcMainInvokeEvent, filePath: string) {
    console.log(filePath, '1111111111111111');
    

    return true
}

ipcMain.handle('compress', onCompress);
