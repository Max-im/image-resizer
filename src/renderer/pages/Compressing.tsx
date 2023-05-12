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
import SettingsContext from '../context/Compress.context';
import Statistic from '../components/Statistic';

const Compressing: FC = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>('Prepare');
  const [files, setFiles] = useState<number>(0);
  const [currentFile, setSurrentFile] = useState<string>('');
  const [subProgress, setSubProgress] = useState<number>(0);
  const [handled, setHandled] = useState<number>(0);
  const [completed, setCompleted] = useState<boolean>(false);
  const [errors, setErrors] = useState<number>(0);
  const [success, setSuccess] = useState<number>(0);
  const [cancelled, setCancelled] = useState<boolean>(false);
  const { settings, setSettings } = useContext(SettingsContext);
  const isOpen = true;

  useEffect(() => {
    window.electron.ipcRenderer.sendMessage('compress.start', settings);
  }, [settings]);

  window.electron.ipcRenderer.on('found.files', (data) => {
    setFiles(data as number);
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
    setSubProgress(0);
  });

  window.electron.ipcRenderer.on('compress.cancelled', () => {
    setTitle('Cancelled');
    setSubProgress(0);
  });

  window.electron.ipcRenderer.on('compress.exception', (message) => {
    navigate(`/error?message=${message}`);
  });

  window.electron.ipcRenderer.on('compress.progress', (progress) => {
    setSubProgress(progress as number);
  });

  window.electron.ipcRenderer.on('file.start', (name) => {
    setSurrentFile(name as string);
    setSubProgress(0);
  });

  const onDone = () => {
    setSettings!({ ...settings, targetFolder: undefined });
    navigate('/');
  };

  const onCancel = () => {
    setTitle('Cancelling...');
    setCancelled(true);
    window.electron.ipcRenderer.sendMessage('compress.cancel');
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
        <Typography variant="h5" sx={{ mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ mb: 3 }}>
          Please wait
        </Typography>

        <Statistic
          handled={handled}
          files={files}
          success={success}
          errors={errors}
          subProgress={subProgress}
          currentFile={currentFile}
        />

        <Box sx={{ width: '100%', mt: 2 }}>
          <LinearProgress
            variant="determinate"
            value={(handled / files) * 100}
          />
        </Box>

        <Box sx={{ mt: 2 }}>
          {completed && (
            <Button variant="contained" onClick={onDone}>
              {cancelled ? 'Back' : 'Done'}
            </Button>
          )}
          {!completed && (
            <Button variant="outlined" onClick={onCancel}>
              Cancel
            </Button>
          )}
        </Box>
      </Container>
    </Backdrop>
  );
};

export default Compressing;
