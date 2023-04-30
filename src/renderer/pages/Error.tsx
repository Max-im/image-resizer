import React, { FC } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useSearchParams, useNavigate } from 'react-router-dom';

const Error: FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const onBack = () => {
    navigate('/');
  };

  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      <Box sx={{ m: 'auto' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Error
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          {searchParams.get('message')}
        </Typography>
        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Button variant="outlined" color="error" onClick={onBack}>
            Ok
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Error;
