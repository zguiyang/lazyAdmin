import { HomeFilled, UserOutlined } from '@ant-design/icons';
import type { MenuDataItem } from '@ant-design/pro-components';

export const menuRoutes: Omit<MenuDataItem, 'routes'>[] = [
  {
    path: '/',
    name: '仪表盘',
    icon: <HomeFilled />,
  },
  {
    path: '/user',
    key: 'user',
    icon: <UserOutlined />,
    name: '用户管理',
  },
  {
    path: '/role',
    key: 'role',
    icon: <UserOutlined />,
    name: '角色管理',
  },
];
