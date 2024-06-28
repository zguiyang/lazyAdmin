import type { RouteObject } from 'react-router';
import { createBrowserRouter, redirect } from 'react-router-dom';

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
        path: 'users',
        loader: () => redirect('/users/list'),
      },
      {
        path: 'users/list',
        element: lazyElementLoader(() => import('@/pages/users')),
      },
      {
        path: 'roles',
        loader: () => redirect('/roles/list'),
      },
      {
        path: 'roles/list',
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
