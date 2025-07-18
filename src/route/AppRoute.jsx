import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Staking from '../pages/Staking';

// Create the routes
const router = createBrowserRouter([
  {
    path: '/', // Homepage
    element: <HomePage />,
  },
  {
    path: '/staking',
    element: <Staking />,
  },
]);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
