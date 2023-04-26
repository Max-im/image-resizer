import React, { FC, useContext } from 'react';
import { Button } from '@mui/material';
import CompressContext from '../context/Compress.context';

const UploadFromFolder: FC = () => {
  const { setTargetFolder } = useContext(CompressContext);

  const handleUpload = () => {
    window.electron.ipcRenderer.sendMessage('select.folder');
  };

  window.electron.ipcRenderer.on('select.folder', (data): void => {
    // @ts-ignore
    const path = data[0] as string;
    setTargetFolder(path);
  });

  return (
    <Button variant="outlined" component="label" onClick={handleUpload}>
      Select Folder
    </Button>
  );
};

export default UploadFromFolder;
