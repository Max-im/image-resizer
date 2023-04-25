import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import { tabsType } from 'renderer/interfaces/tabsType';
// import { DropzoneDialog } from 'material-ui-dropzone';

interface IUploadFile {
  type: tabsType;
  includeNested: boolean;
}

const UploadFile: FC<IUploadFile> = ({ type, includeNested }) => {
  const handleUpload = () => {
    window.electron.ipcRenderer.sendMessage('openFolder', { includeNested });
  };

  const setOpenDialog = () => {};

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Drag & Drop {type === 'photo' ? 'Images' : 'Videos'} Here
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '200px',
          border: '2px dashed grey',
          borderRadius: '10px',
          cursor: 'pointer',
        }}
        onClick={setOpenDialog}
      >
        {type.toUpperCase()}
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <Button variant="contained" component="label" onClick={handleUpload}>
          Upload From Folder
        </Button>
      </Box>
      {/* <DropzoneDialog
        open={openDialog}
        onSave={handleSaveDialog}
        onClose={handleCloseDialog}
        acceptedFiles={type === 'photo' ? ['image/*'] : ['video/*']}
        filesLimit={type === 'photo' ? 10 : 5}
        showPreviews={false}
        useChipsForPreview
        showFileNamesInPreview
        maxFileSize={20000000} // 20 MB
        dropzoneText={`Drag & Drop ${
          type === 'photo' ? 'Images' : 'Videos'
        } or Click to Upload`}
        dialogTitle={`Upload ${type === 'photo' ? 'Images' : 'Videos'}`}
        dropzoneProps={{
          multiple: true,
          webkitdirectory: includeNested,
        }}
      /> */}
    </Box>
  );
};

export default UploadFile;
