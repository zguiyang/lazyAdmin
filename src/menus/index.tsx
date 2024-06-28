import { HomeFilled, UserOutlined } from '@ant-design/icons';
import type { MenuDataItem } from '@ant-design/pro-components';

export const menuRoutes: Omit<MenuDataItem, 'routes'>[] = [
  {
    path: '/',
    name: '仪表盘',
    icon: <HomeFilled />,
  },
  {
    path: '/users',
    icon: <UserOutlined />,
    name: '用户管理',
    children: [
      {
        path: '/users/list',
        name: '用户列表',
      },
    ],
  },
  {
    path: '/roles',
    icon: <UserOutlined />,
    name: '角色管理',
    children: [
      {
        path: '/roles/list',
        name: '角色列表',
      },
    ],
  },
];
