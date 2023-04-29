import React, { useContext, FC, useState } from 'react';
import {
  Switch,
  FormControlLabel,
  FormGroup,
  FormControl,
  FormLabel,
  Typography,
  Box,
  RadioGroup,
  Radio,
  Divider,
} from '@mui/material';
import SettingsContext from '../context/Compress.context';

const Settings: FC = () => {
  const { settings, setSettings } = useContext(SettingsContext);

  const handleDeleteSourceFilesChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSettings!({
      ...settings,
      deleteSourceFiles: e.target.checked,
    });
  };

  const handleIgnoreNonMediaFilesChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSettings!({ ...settings, ignoreNonMediaFiles: e.target.checked });
  };

  const handleOutputDirectoryChange = (e: any) => {
    setSettings!({ ...settings, outputDirectory: e.target.value });
  };

  return (
    <Box>
      <Typography variant="h4" align="center" gutterBottom>
        Settings
      </Typography>

      <FormControl>
        <FormGroup>
          <FormLabel>Non Media Files</FormLabel>
          <RadioGroup
            defaultValue="true"
            onChange={handleIgnoreNonMediaFilesChange}
          >
            <FormControlLabel value="true" control={<Radio />} label="Copy" />
            <FormControlLabel
              value="false"
              control={<Radio />}
              label="Ignore"
            />
          </RadioGroup>
        </FormGroup>
        <Divider sx={{ mt: 3, mb: 3 }} />
        <FormGroup>
          <FormLabel>Source Files</FormLabel>
          <FormControlLabel
            control={
              <Switch
                checked={settings.deleteSourceFiles}
                onChange={handleDeleteSourceFilesChange}
              />
            }
            label="Delete source files after compressing"
          />
        </FormGroup>

        <Divider sx={{ mt: 3, mb: 3 }} />

        <FormGroup>
          <FormLabel>Output Folder</FormLabel>
          <RadioGroup
            defaultValue="near"
            onChange={handleOutputDirectoryChange}
          >
            <FormControlLabel
              value="near"
              control={<Radio />}
              label="Near by Source folder"
            />
            <FormControlLabel
              value="inside"
              control={<Radio />}
              label="Inside Source folder"
            />
          </RadioGroup>
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default Settings;
