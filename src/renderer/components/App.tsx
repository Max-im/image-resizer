import React, { useState } from 'react';

import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import ISettings from '../interfaces/ISettings';
import SettingsContext, { defaultSettings } from '../context/Compress.context';
import routes from '../routes/routes';
import Header from './Header';
import '../styles/app.css';

export default function App() {
  const [settings, setSettings] = useState<ISettings>(defaultSettings);

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      <Router>
        <Header />
        <Container className="app__container" maxWidth="md" sx={{ mt: 2 }}>
          <Routes>
            {routes.map((route) => (
              <Route
                path={route.url}
                key={route.url}
                element={<route.element />}
              />
            ))}
          </Routes>
        </Container>
      </Router>
    </SettingsContext.Provider>
  );
}
