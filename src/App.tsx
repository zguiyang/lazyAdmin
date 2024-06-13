import {ConfigProvider, App as AntdApp} from 'antd';
import {BasicLayout} from '@/layouts/BasicLayout';
import Welcome from '@/pages/welcome';

function App() {
  return (
    <ConfigProvider>
      <AntdApp>
        <BasicLayout>
          <Welcome />
        </BasicLayout>
      </AntdApp>
    </ConfigProvider>
  );
}

export default App;
