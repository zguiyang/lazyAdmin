import { App as AntdApp, ConfigProvider } from 'antd';
import { RouterProvider } from 'react-router-dom';

import router from '@/router';

function App() {
  return (
    <ConfigProvider>
      <AntdApp>
        <RouterProvider router={router} />
      </AntdApp>
    </ConfigProvider>
  );
}

export default App;
