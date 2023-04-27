import React, { FC, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Backdrop,
  LinearProgress,
  Container,
  Typography,
  Box,
  Button,
} from '@mui/material';
import CompressContext from '../context/Compress.context';
import Statistic from '../components/Statistic';

const Compressing: FC = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>('Prepare');
  const [files, setFiles] = useState<number>(0);
  const [handled, setHandled] = useState<number>(0);
  const [completed, setCompleted] = useState<boolean>(false);
  const [errors, setErrors] = useState<number>(0);
  const [success, setSuccess] = useState<number>(0);
  const { targetFolder, setTargetFolder } = useContext(CompressContext);
  const isOpen = true;

  useEffect(() => {
    window.electron.ipcRenderer.sendMessage('compress.start', { targetFolder });
  }, [targetFolder]);

  window.electron.ipcRenderer.on('found.files', (data) => {
    setFiles(data);
    setTitle('Compressing');
  });

  window.electron.ipcRenderer.on('compress.file', () => {
    setHandled(handled + 1);
    setSuccess(success + 1);
  });

  window.electron.ipcRenderer.on('compress.error', (data) => {
    console.error(data);
    setHandled(handled + 1);
    setErrors(errors + 1);
  });

  window.electron.ipcRenderer.on('compress.completed', () => {
    setCompleted(true);
  });

  const onDone = () => {
    setTargetFolder();
    navigate('/');
  };

  return (
    <Backdrop
      open={isOpen}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      onClick={() => {}}
    >
      <Container
        maxWidth="xs"
        sx={{ bgcolor: 'white', pt: 2, pb: 1, textAlign: 'center' }}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>
          {title}
        </Typography>

        <Statistic
          handled={handled}
          files={files}
          success={success}
          errors={errors}
        />

        <Box sx={{ width: '100%', mt: 2 }}>
          <LinearProgress
            variant="determinate"
            value={(handled / files) * 100}
          />
        </Box>

        <Box sx={{ mt: 2 }}>
          {completed && (
            <Button variant="outlined" onClick={onDone}>
              Done
            </Button>
          )}
          {!completed && <Button variant="outlined">Cancel</Button>}
        </Box>
      </Container>
    </Backdrop>
  );
};

export default Compressing;
