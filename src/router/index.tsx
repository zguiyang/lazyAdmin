import type { RouteObject } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

import { AuthLayout } from '@/layouts/AuthLayout';
import { BasicLayout } from '@/layouts/BasicLayout';

import { lazyElementLoader } from './utils.tsx';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <BasicLayout />,
    children: [
      {
        index: true,
        element: lazyElementLoader(() => import('@/pages/dashboard')),
      },
      {
        path: 'user',
        element: lazyElementLoader(() => import('@/pages/user')),
      },
      {
        path: 'role',
        element: lazyElementLoader(() => import('@/pages/roles')),
      },
    ],
  },
  {
    path: 'auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: lazyElementLoader(() => import('@/pages/login')),
      },
    ],
  },
];

export default createBrowserRouter([...routes]);
