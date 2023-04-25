import React, { FC, useState, useContext } from 'react';
import { Box, Tab, Tabs, Typography, Button } from '@mui/material';
import DragFiles from '../components/DragFiles';
import HomeDescription from '../components/HomeDescription';
import { tabsType } from '../interfaces/tabsType';
import UploadFromFolder from '../components/UploadFromFolder';
import CompressContext from '../context/Compress.context';

const tabs: tabsType[] = ['photo', 'video'];

const Home: FC = () => {
  const [value, setValue] = useState<number>(0);
  const context = useContext(CompressContext);

  const handleTabChange = (e: any, index: number) => {
    setValue(index);
  };

  const onCompress = () => {
    console.log('start');
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
        <DragFiles type={tabs[value]} />
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
