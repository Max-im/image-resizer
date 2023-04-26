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
    <Box>
      <Typography variant="h4" align="center" gutterBottom>
        Welcome to Our App!
      </Typography>

      <Typography variant="body1" align="center" gutterBottom>
        Please select type of file you need to compress
      </Typography>

      <Box component="div">
        <HomeDescription />
        {/* <DragFiles type={tabs[value]} /> */}
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
  );
};

export default Home;
