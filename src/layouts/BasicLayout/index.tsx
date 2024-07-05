import { LeftOutlined, LogoutOutlined, RightOutlined } from '@ant-design/icons';
import { Avatar, Button, Layout, Menu, Space, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import Logo from '@/assets/logo.svg';
import { removeUserToken } from '@/helper/auth';
import { findKeyPath, menuList } from '@/menus';

const { Sider, Content, Footer } = Layout;

export function BasicLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState(location.pathname);

  async function handleLogout() {
    await removeUserToken();
    navigate('/auth/login');
  }

  useEffect(() => {
    setSelectedKey(location.pathname);
  }, [location.pathname]);

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
        <div className={'basic-sidebar-trigger-button'} onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <RightOutlined style={{ fontSize: '16px' }} /> : <LeftOutlined style={{ fontSize: '16px' }} />}
        </div>
        <div className={'basic-layout-logo-wrapper'}>
          <img width={32} height={32} src={Logo} alt={'logo'} />
          {!collapsed ? <h1 className={'m-0 text-[24px]'}>Lazy Admin</h1> : null}
        </div>
        <div className={'basic-layout-menu-wrapper'}>
          <Menu
            selectedKeys={[selectedKey]}
            defaultOpenKeys={findKeyPath(menuList, selectedKey)}
            style={{ fontSize: '16px' }}
            theme={'light'}
            items={menuList}
            mode={'inline'}
            onClick={({ key }) => {
              navigate(key);
            }}
          />
        </div>
        <div className={'basic-sidebar-user-wrapper'}>
          <Space size={12}>
            <Avatar
              style={{ backgroundColor: '#f56a00' }}
              src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
              shape={'square'}
              size={'large'}
            />
            <div className={'flex flex-col text-left'}>
              <Typography.Text strong ellipsis={{ tooltip: true }}>
                Joy Zhao
              </Typography.Text>
              <Typography.Text type={'secondary'}>Admin</Typography.Text>
            </div>
          </Space>
          <div>
            <Button type={'text'} icon={<LogoutOutlined />} onClick={handleLogout}></Button>
          </div>
        </div>
      </Sider>
      <Layout className={'basic-layout-container'}>
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
