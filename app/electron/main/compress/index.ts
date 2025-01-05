import fs from 'node:fs';
import { ipcMain, IpcMainInvokeEvent } from "electron";
import { deleteFileWithRetry } from './util/deletefile';
import { IMediaFile } from 'models/MediaFile';
import { ISettings } from 'models/Settings';
import { onCompressVideo, onVideoSetCancel } from './video';
import { onCompressPhoto } from './photo';
import { ensureOutputDir } from '../util/output';

const FILE_END = 'fileEnd';
const COMPLETED = 'completed';

let isCancelled = false;

async function onCompress(event: IpcMainInvokeEvent, { media, settings }: { media: IMediaFile[], settings: ISettings }) {
    isCancelled = false;
    onVideoSetCancel(false);

    for (const file of media) {
        if (isCancelled) {
            break;
        }
        const actionsMap = {
            video: onCompressVideo,
            photo: onCompressPhoto
        };


        try {
            ensureOutputDir(file.outputPath);

            if (actionsMap[file.type]) {
                await actionsMap[file.type](event, file);
            }
            if (settings.deleteSrc) {
                deleteFileWithRetry(file.path);
            }

            event.sender.send(FILE_END, {path: file.path, size: fs.statSync(file.outputPath).size});
        } catch (err) {
            event.sender.send('log', err);
            let message = `An error occurred while compressing ${file.name}`;
            if (err instanceof Error) {
                message = err.message;
            }
            event.sender.send('fileError', { filePath: file.path, message });
        }
    }
    event.sender.send(COMPLETED);
}


function onCancel() {
    isCancelled = true;
    onVideoSetCancel(true);
}

ipcMain.handle('compress', onCompress);
ipcMain.handle('cancelCompress', onCancel);
