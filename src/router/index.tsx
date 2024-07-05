import type { RouteObject } from 'react-router';
import { createBrowserRouter, redirect } from 'react-router-dom';

import { AuthLayout } from '@/layouts/AuthLayout';
import { BasicLayout } from '@/layouts/BasicLayout';

import { authLoader, basicAuthLoader, lazyElementLoader } from './utils.tsx';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <BasicLayout />,
    loader: basicAuthLoader,
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
    loader: authLoader,
    children: [
      {
        path: 'login',
        element: lazyElementLoader(() => import('@/pages/login')),
      },
      {
        path: 'register',
        element: lazyElementLoader(() => import('@/pages/register')),
      },
      {
        path: 'forgot-password',
        element: lazyElementLoader(() => import('@/pages/forgot-password')),
      },
    ],
  },
];

export default createBrowserRouter([...routes]);
