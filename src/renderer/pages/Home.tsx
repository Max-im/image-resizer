import React, { FC, useState } from 'react';
import {
  Box,
  Tab,
  Tabs,
  Typography,
  Switch,
  FormControlLabel,
} from '@mui/material';
import UploadFile from '../components/UploadFiles';
import HomeDescription from '../components/HomeDescription';
import { tabsType } from '../interfaces/tabsType';

const tabs: tabsType[] = ['photo', 'video'];

const Home: FC = () => {
  const [value, setValue] = useState<number>(0);
  const [type, setType] = useState<tabsType>(tabs[0]);
  const [includeNested, setIncludeNested] = useState(true);

  const handleTabChange = (e: any, index: number) => {
    setValue(index);
    setType(tabs[index]);
  };

  const handleIncludeNestedChange = () => {
    setIncludeNested(!includeNested);
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

      <Box component="div" id={`${type}-panel`} aria-labelledby={`${type}-tab`}>
        <HomeDescription type={type} />
        <UploadFile type={type} includeNested={includeNested} />
        <FormControlLabel
          control={
            <Switch
              checked={includeNested}
              onChange={handleIncludeNestedChange}
            />
          }
          label="Include Nested Folders"
        />
      </Box>
    </Box>
  );
};

export default Home;
