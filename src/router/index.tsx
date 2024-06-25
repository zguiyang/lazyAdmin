import { createBrowserRouter } from 'react-router-dom';

import { AuthLayout } from '@/layouts/AuthLayout';
import { BasicLayout } from '@/layouts/BasicLayout';
import LoginPage from '@/pages/login';
import WelcomePage from '@/pages/welcome';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BasicLayout />,
    children: [
      {
        index: true,
        element: <WelcomePage />,
      },
    ],
  },
  {
    path: 'auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
    ],
  },
]);
