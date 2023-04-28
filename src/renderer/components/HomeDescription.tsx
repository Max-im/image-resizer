import React, { FC } from 'react';
import { Typography } from '@mui/material';

const HomeDescription: FC = () => {
  return (
    <Typography
      sx={{ mt: 3, mb: 3 }}
      variant="body1"
      align="center"
      gutterBottom
    >
      Our media compression feature allows you to reduce the file size of your{' '}
      photo and video files without sacrificing quality.
    </Typography>
  );
};

export default HomeDescription;
