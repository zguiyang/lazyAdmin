import { ProLayout } from '@ant-design/pro-components';
import { Outlet } from 'react-router-dom';

export function BasicLayout() {
  return (
    <ProLayout layout={'mix'}>
      <Outlet />
    </ProLayout>
  );
}
