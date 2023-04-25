import React, { FC } from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

const Loader: FC = () => {
  const isOpen = false;

  return (
    <Backdrop
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isOpen}
      onClick={() => {}}
    >
      <CircularProgress color="primary" />
    </Backdrop>
  );
};

export default Loader;
