import IRoute from '../interfaces/IRoute';
import Home from '../pages/Home';
import About from '../pages/About';
import Settings from '../pages/Settings';
import Compressing from '../pages/Compressing';

const routes: IRoute[] = [
  {
    url: '/',
    title: 'Compress',
    element: Home,
    inMenu: true,
  },
  {
    url: '/about',
    title: 'About',
    element: About,
    inMenu: true,
  },
  {
    url: '/settings',
    title: 'Settings',
    element: Settings,
    inMenu: true,
  },
  {
    url: '/compressnig',
    title: 'Compressing...',
    element: Compressing,
    inMenu: false,
  },
];

export default routes;
