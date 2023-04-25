import React, { FC } from 'react';
import { Typography, Box } from '@mui/material';
import { tabsType } from 'renderer/interfaces/tabsType';
// import { DropzoneDialog } from 'material-ui-dropzone';

interface IUploadFile {
  type: tabsType;
}

const DragFiles: FC<IUploadFile> = ({ type }) => {
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

export default DragFiles;
