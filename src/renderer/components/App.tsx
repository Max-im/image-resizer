import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import routes from '../routes/routes';
import Header from './Header';
import Loader from './Loader';

export default function App() {
  return (
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
  );
}
