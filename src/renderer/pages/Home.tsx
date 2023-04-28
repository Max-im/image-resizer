import React, { FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import HomeDescription from '../components/HomeDescription';
import UploadFromFolder from '../components/UploadFromFolder';
import CompressContext from '../context/Compress.context';
// import DragFiles from '../components/DragFiles';

const Home: FC = () => {
  const navigate = useNavigate();
  const { targetFolder } = useContext(CompressContext);

  const onCompress = () => {
    navigate('/compressnig');
  };

  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      <Box sx={{ m: 'auto' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Welcome to Our App!
        </Typography>

        <Box component="div">
          <HomeDescription />
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            {!targetFolder && <UploadFromFolder />}
            {targetFolder && (
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
