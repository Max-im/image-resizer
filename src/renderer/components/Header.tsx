import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Tabs, Tab } from '@mui/material';
import routes from '../routes/routes';
import '../styles/header.css';

const Header: FC = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState<number>(0);

  const menuRoutes = routes.filter((route) => route.inMenu);

  const onNavigate = (e: Event, val: number) => {
    setValue(val);
    navigate(menuRoutes[val].url);
  };

  return (
    <Box position="static" sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Container maxWidth="md" sx={{ mt: 1, mb: 1 }}>
        {/* @ts-ignore */}
        <Tabs value={value} onChange={onNavigate}>
          {menuRoutes.map((route) => (
            <Tab label={route.title} />
          ))}
        </Tabs>
      </Container>
    </Box>
  );
};

export default Header;
