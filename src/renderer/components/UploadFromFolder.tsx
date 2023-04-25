import React, { FC, useContext } from 'react';
import { Button, Box } from '@mui/material';
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
    <Box sx={{ mt: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <Button
          variant="contained"
          component="label"
          onClick={handleUpload}
          size="small"
        >
          Upload From Folder
        </Button>
      </Box>
    </Box>
  );
};

export default UploadFromFolder;
