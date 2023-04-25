import React, { FC } from 'react';
import { Typography } from '@mui/material';
import { tabsType } from '../interfaces/tabsType';

const HomeDescription: FC<{ type: tabsType }> = ({ type }) => {
  return (
    <Typography sx={{ mt: 3 }} variant="body1" align="justify" gutterBottom>
      Our {type} compression feature allows you to reduce the file size of your{' '}
      {type}s without sacrificing quality. Simply drag and drop your image file
      onto the field below. You can also choose to upload an entire folder of
      {type}s by clicking the &quot;Upload From Folder&quot; button.
    </Typography>
  );
};

export default HomeDescription;
