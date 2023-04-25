import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import routes from '../routes/routes';
import '../styles/header.css';

const Header: FC = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: '#ddd' }}>
      <Container maxWidth="md" sx={{ mt: 1, mb: 1 }}>
        <Box sx={{ flexGrow: 1, display: 'flex' }}>
          {routes
            .filter((route) => route.inMenu)
            .map((route) => (
              <NavLink
                key={route.url}
                to={route.url}
                className={({ isActive }) =>
                  isActive ? 'navLink__active navLink' : 'navLink'
                }
              >
                <Button
                  variant="outlined"
                  size="small"
                  sx={{ display: 'block', bgcolor: 'white' }}
                >
                  {route.title}
                </Button>
              </NavLink>
            ))}
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
