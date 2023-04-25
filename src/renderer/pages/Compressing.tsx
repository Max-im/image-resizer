import React, { FC, useContext, useEffect } from 'react';
import { Box } from '@mui/material';
import CompressContext from '../context/Compress.context';

const Compressing: FC = () => {
  const { targetFolder } = useContext(CompressContext);

  useEffect(() => {
    window.electron.ipcRenderer.sendMessage('start.compress', { targetFolder });
  }, [targetFolder]);

  window.electron.ipcRenderer.on('found.files', (data): void => {
    console.log(data, 'ddddddd');
  });

  return (
    <Box>
      dfs
      <Box>dfs</Box>
    </Box>
  );
};

export default Compressing;
