import { HomeOutlined, UserOutlined, UserSwitchOutlined } from '@ant-design/icons';

import type { MenuItem } from './types.ts';

export * from './types.ts';
export * from './utils.ts';

export const menuList: MenuItem[] = [
  {
    key: '/',
    label: '仪表盘',
    icon: <HomeOutlined />,
  },
  {
    key: '/users',
    icon: <UserOutlined />,
    label: '用户管理',
    children: [
      {
        key: '/users/list',
        label: '用户列表',
      },
    ],
  },
  {
    key: '/roles',
    icon: <UserSwitchOutlined />,
    label: '角色管理',
    children: [
      {
        key: '/roles/list',
        label: '角色列表',
      },
    ],
  },
];
