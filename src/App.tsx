import { App as AntdApp, ConfigProvider } from 'antd';
import { RouterProvider } from 'react-router-dom';

import router from '@/router';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#605BFF',
          colorLink: '#605BFF',
          colorLinkActive: '#605BFF',
          colorLinkHover: '#8B5FBF',
        },
        components: {
          Layout: {
            headerHeight: 32,
          },
          Menu: {
            iconSize: 18,
            collapsedIconSize: 18,
          },
        },
      }}
    >
      <AntdApp>
        <RouterProvider router={router} />
      </AntdApp>
    </ConfigProvider>
  );
}

export default App;
