import React, { useContext, FC } from 'react';
import {
  Switch,
  FormControlLabel,
  FormGroup,
  FormControl,
  FormLabel,
  TextField,
  Button,
  Typography,
  Box,
} from '@mui/material';
import SettingsContext from '../context/Compress.context';

const Settings: FC = () => {
  const { settings, setSettings } = useContext(SettingsContext);

  const handleDeleteSourceFilesChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSettings!({ ...settings, deleteSourceFiles: e.target.checked });
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
      <FormControl component="fieldset">
        <FormLabel component="legend">Settings</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={settings.deleteSourceFiles}
                onChange={handleDeleteSourceFilesChange}
              />
            }
            label="Delete source files after compressing"
          />
          <FormControlLabel
            control={
              <Switch
                checked={settings.ignoreNonMediaFiles}
                onChange={handleIgnoreNonMediaFilesChange}
              />
            }
            label="Ignore non photo/video files"
          />
          <TextField
            label="Output Directory"
            value={settings.outputDirectory}
            onChange={handleOutputDirectoryChange}
            variant="outlined"
            margin="normal"
          />
          <Button variant="contained" color="primary">
            Browse
          </Button>
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default Settings;
