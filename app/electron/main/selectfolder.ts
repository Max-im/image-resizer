import { dialog, ipcMain } from "electron";

async function openFolderSelection() {
    const data = await dialog.showOpenDialog({
      properties: ['openFile', 'openDirectory'],
    });
    if (data.canceled) return;
  }
  
ipcMain.handle('selectfolder', openFolderSelection);
  