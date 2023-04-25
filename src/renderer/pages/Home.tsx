import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Tab, Tabs, Typography, Button } from '@mui/material';
import HomeDescription from '../components/HomeDescription';
import { tabsType } from '../interfaces/tabsType';
import UploadFromFolder from '../components/UploadFromFolder';
// import DragFiles from '../components/DragFiles';

const tabs: tabsType[] = ['photo', 'video'];

const Home: FC = () => {
  const [value, setValue] = useState<number>(0);
  const navigate = useNavigate();

  const handleTabChange = (e: any, index: number) => {
    setValue(index);
  };

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

      <Tabs value={value} onChange={handleTabChange} aria-label="tabs">
        {tabs.map((tab) => (
          <Tab key={tab} label={tab} id={`${tab}-tab`} />
        ))}
      </Tabs>

      <Box component="div" id={`${tabs[value]}-panel`}>
        <HomeDescription type={tabs[value]} />
        {/* <DragFiles type={tabs[value]} /> */}
        <UploadFromFolder />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <Button variant="contained" onClick={onCompress}>
          Compress
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
