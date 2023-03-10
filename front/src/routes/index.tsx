import { createBrowserRouter } from 'react-router-dom';
import Pokedex from '../pages/Pokedex';

const router = createBrowserRouter([
  {
    index: true,
    element: <Pokedex />,
  },
  {
    path: '/pokedex/:page',
    element: <Pokedex />,
  },
]);

export default router;
