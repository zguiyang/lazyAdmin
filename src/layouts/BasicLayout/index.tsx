import { ProLayout } from '@ant-design/pro-components';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { menuRoutes } from '@/menus';

export function BasicLayout() {
  const [pathname, setPathname] = useState(window.location.pathname);
  return (
    <ProLayout
      layout={'side'}
      onPageChange={(location: any) => {
        setPathname(location.pathname as string);
      }}
      menuItemRender={(item, dom) => {
        return (
          <Link
            onClick={() => {
              setPathname(item.path || '/');
            }}
            to={item.path || '/'}
          >
            {dom}
          </Link>
        );
      }}
      location={{ pathname }}
      route={{
        path: '/',
        routes: menuRoutes,
      }}
    >
      <Outlet />
    </ProLayout>
  );
}
