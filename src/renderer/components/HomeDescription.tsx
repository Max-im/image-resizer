import React, { FC } from 'react';
import { Typography, Chip } from '@mui/material';
import { tabsType } from '../interfaces/tabsType';

const HomeDescription: FC<{ type: tabsType }> = ({ type }) => {
  return (
    <Typography sx={{ mt: 3 }} variant="body1" align="justify" gutterBottom>
      Our {type} compression feature allows you to reduce the file size of your{' '}
      {type}s without sacrificing quality.
    </Typography>
  );
};

export default HomeDescription;
