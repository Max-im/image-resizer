import React, { FC, useContext, useEffect, useState } from 'react';
import {
  Backdrop,
  LinearProgress,
  Container,
  Typography,
  Box,
} from '@mui/material';
import CompressContext from '../context/Compress.context';

const Compressing: FC = () => {
  const [title, setTitle] = useState<string>('Prepare');
  const [progress, setProgress] = useState<number>(0);
  const [files, setFiles] = useState<number>(0);
  const { targetFolder } = useContext(CompressContext);
  const isOpen = true;

  useEffect(() => {
    window.electron.ipcRenderer.sendMessage('start.compress', { targetFolder });
  }, [targetFolder]);

  window.electron.ipcRenderer.on('found.files', (data) => {
    setFiles(data[0]);
    setTitle('Compressing');
  });

  window.electron.ipcRenderer.on('handle.file', (data) => {
    setProgress(progress + 1);
  });

  return (
    <Backdrop
      open={isOpen}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      onClick={() => {}}
    >
      <Container
        maxWidth="xs"
        sx={{ bgcolor: 'white', pt: 1, pb: 3, textAlign: 'center' }}
      >
        <Typography variant="h5" mb="2">
          {title}
        </Typography>
        <Box sx={{ width: '90%' }}>
          <LinearProgress variant="determinate" value={progress} />
        </Box>
      </Container>
    </Backdrop>
  );
};

export default Compressing;
