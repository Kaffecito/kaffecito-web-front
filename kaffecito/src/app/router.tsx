import LoginPage from '../features/auth/pages/LoginPage';
import { createBrowserRouter } from 'react-router-dom';
import DashboardPage from '../features/dashboard/pages/DashboardPage';

// Importar páginas cuando estén creadas
// import { LoginPage } from '../features/auth/pages/LoginPage';
// import { DashboardPage } from '../features/dashboard/pages/DashboardPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
    // element: <DashboardPage />,
    children: [
      // Rutas anidadas aquí
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
  },
]); 