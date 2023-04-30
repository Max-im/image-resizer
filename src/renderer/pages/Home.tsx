import React, { FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import HomeDescription from '../components/HomeDescription';
import UploadFromFolder from '../components/UploadFromFolder';
import SettingsContext from '../context/Compress.context';

const Home: FC = () => {
  const navigate = useNavigate();
  const { settings } = useContext(SettingsContext);

  const onCompress = () => {
    navigate('/compressnig');
  };

  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      <Box sx={{ m: 'auto' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Welcome to <br/>Media Compressor
        </Typography>

        <Box component="div">
          <HomeDescription />
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            {!settings.targetFolder && <UploadFromFolder />}
            {settings.targetFolder && (
              <Button variant="contained" onClick={onCompress}>
                Compress
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
