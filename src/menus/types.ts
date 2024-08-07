import type { MenuProps } from 'antd';

export type MenuItem = Required<MenuProps>['items'][number] & {
  children?: MenuItem[];
  label: string;
};
