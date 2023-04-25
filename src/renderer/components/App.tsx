import React, { useState } from 'react';

import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import CompressContext, {
  defaultCompressContext,
} from '../context/Compress.context';
import routes from '../routes/routes';
import Header from './Header';
import Loader from './Loader';

export default function App() {
  const [targetFolder, setTargetFolder] = useState<string | undefined>();

  return (
    <CompressContext.Provider value={{ targetFolder, setTargetFolder }}>
      <Router>
        <Header />
        <Container maxWidth="md" sx={{ mt: 2 }}>
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
        <Loader />
      </Router>
    </CompressContext.Provider>
  );
}
