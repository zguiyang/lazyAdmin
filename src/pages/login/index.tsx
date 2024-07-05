import { GithubFilled, GoogleOutlined } from '@ant-design/icons';
import { Avatar, Button, Checkbox, Form, Input, Space, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

import logoImg from '@/assets/logo.svg';
import msnWorkImg from '@/assets/man-work.svg';
import { setUserToken } from '@/helper/auth';

import styles from './styles.module.scss';

export type LoginFormFields = {
  username?: string;
  password?: string;
  remember?: string;
};

export default function LoginPage() {
  const navigate = useNavigate();
  const [form] = Form.useForm<LoginFormFields>();

  async function handleFinish(values: LoginFormFields) {
    console.log('values', values);
    await setUserToken('776tggug');
    navigate('/');
  }

  return (
    <div className={styles.loginPageWrapper}>
      <div className={styles.loginPageThumb}>
        <div className={'space-x-4 flex items-center p-6'}>
          <Avatar
            size={48}
            src={<img src={logoImg} alt={'logo'} style={{ width: 28, height: 28 }} />}
            style={{ backgroundColor: '#fff' }}
          />
          <h1 className={'text-2xl font-bold'}>Lazy Admin</h1>
        </div>
        <div className={styles.thumbImage}>
          <img src={msnWorkImg} alt="login-bg" />
        </div>
      </div>
      <div className={styles.loginPageContent}>
        <div className={styles.loginFormWrapper}>
          <div className={styles.loginTitle}>
            <Typography.Title>用户登录</Typography.Title>
            <Typography.Text>欢迎使用 Lazy Admin 后台管理系统</Typography.Text>
          </div>
          <Form
            form={form}
            size={'large'}
            layout={'vertical'}
            autoComplete={'off'}
            className={styles.loginForm}
            initialValues={{ remember: true }}
            onFinish={handleFinish}
          >
            <Form.Item
              label={'登录账号'}
              name={'username'}
              validateTrigger={'onBlur'}
              rules={[{ required: true, message: '请输入用户名' }]}
            >
              <Input placeholder="请输入用户名" />
            </Form.Item>
            <Form.Item
              label={'登录密码'}
              name={'password'}
              validateTrigger={'onBlur'}
              rules={[{ required: true, message: '请输入密码' }]}
            >
              <Input.Password placeholder="请输入密码" />
            </Form.Item>
            <Form.Item style={{ marginBottom: 0 }}>
              <div className={'flex justify-between items-center'}>
                <Form.Item style={{ marginBottom: 0 }} name={'remember'} valuePropName={'checked'} noStyle={true}>
                  <Checkbox>记住我</Checkbox>
                </Form.Item>
                <Typography.Link href={'/auth/forgot-password'}>忘记密码?</Typography.Link>
              </div>
            </Form.Item>
            <Form.Item style={{ paddingTop: 8 }}>
              <Button type={'primary'} block htmlType={'submit'}>
                登录
              </Button>
            </Form.Item>
            <Form.Item>
              <Typography.Text>
                还没有账号？<Typography.Link href={'/auth/register'}>立即注册</Typography.Link>
              </Typography.Text>
            </Form.Item>
            <Form.Item style={{ paddingTop: 24 }}>
              <div className={'w-full flex flex-col'}>
                <Typography.Text>其他登录方式</Typography.Text>
                <Space size={12} className={'w-full mt-4'}>
                  <Button icon={<GithubFilled />} />
                  <Button icon={<GoogleOutlined />} />
                </Space>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
