import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const { Sider, Content, Footer } = Layout;

export function BasicLayout() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout className={'basic-layout'} hasSider={true}>
      <Sider
        trigger={null}
        width={248}
        collapsible={true}
        collapsed={collapsed}
        className={'basic-layout-sidebar'}
        theme={'light'}
      >
        <div className={'basic-layout-logo-wrapper'}>
          <img
            width={36}
            height={36}
            src={'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'}
            alt={'logo'}
          />
          <h1 className={'m-0 text-[24px]'}>Lazy Admin</h1>
        </div>
        <div className={'basic-layout-menu-wrapper'}>
          <Menu
            theme={'light'}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'nav 1',
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'nav 2',
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'nav 3',
              },
            ]}
          />
        </div>
        <div className={'basic-sidebar-trigger-wrapper'}>
          <Button
            type={'text'}
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          />
        </div>
      </Sider>
      <Layout className={'basic-layout-container'}>
        {/* <Header className={'basic-layout-header'} style={{ backgroundColor: colorBgContainer, paddingLeft: 0 }}>
          <div className={'header-left'}>
            <Space size={0}>
              <Button
                style={{
                  fontSize: '14px',
                  width: 48,
                  height: 64,
                }}
                type={'text'}
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
              ></Button>
              <Button
                type={'text'}
                icon={<ReloadOutlined />}
                onClick={() => window.location.reload()}
                style={{ fontSize: '14px', width: 48, height: 64 }}
              ></Button>
            </Space>
          </div>
          <div className={'header-center'}>中间内容区域</div>
          <div className={'header-right'}>右侧区域</div>
        </Header>*/}
        <Content className={'basic-layout-main'}>
          <Outlet />
        </Content>
        <Footer className={'basic-layout-footer'} style={{ textAlign: 'center' }}>
          Lazy Admin ©{new Date().getFullYear()} Created by Joy Zhao
        </Footer>
      </Layout>
    </Layout>
  );
}
