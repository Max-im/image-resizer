import React, { FC, useContext } from 'react';
import { Button } from '@mui/material';
import SettingsContext from '../context/Compress.context';

const UploadFromFolder: FC = () => {
  const { settings, setSettings } = useContext(SettingsContext);

  const handleUpload = () => {
    window.electron.ipcRenderer.sendMessage('select.folder');
  };

  window.electron.ipcRenderer.on('select.folder', (data): void => {
    // @ts-ignore
    const path = data[0] as string;
    setSettings!({ ...settings, targetFolder: path });
  });

  return (
    <Button variant="outlined" component="label" onClick={handleUpload}>
      Select Folder
    </Button>
  );
};

export default UploadFromFolder;
