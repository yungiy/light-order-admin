// import library
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import files
import './style/tailwind.css';
import App from './App.jsx';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import Menus from './pages/Menus';
import Reservations from './pages/Reservations';
import Statistics from './pages/Statistics';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'orders',
        element: <Orders />,
      },
      {
        path: 'menus',
        element: <Menus />,
      },
      {
        path: 'reservations',
        element: <Reservations />,
      },
      {
        path: 'statistics',
        element: <Statistics />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
