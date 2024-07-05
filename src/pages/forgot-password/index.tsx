import { Avatar, Button, Form, Input, Space, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

import forgotPsdImg from '@/assets/forgot-psd.svg';
import logoImg from '@/assets/logo.svg';
import { setUserToken } from '@/helper/auth';

import styles from './styles.module.scss';

export type RegisterFormFields = {
  username?: string;
  password?: string;
  remember?: string;
};

export default function ForgotPasswordPage() {
  const navigate = useNavigate();
  const [form] = Form.useForm<RegisterFormFields>();

  async function handleFinish(values: RegisterFormFields) {
    console.log('values', values);
    await setUserToken('776tggug');
    navigate('/auth/login');
  }

  return (
    <div className={styles.forgotPsdWrapper}>
      <div className={styles.forgotPsdThumb}>
        <div className={'space-x-4 flex items-center p-6'}>
          <Avatar
            size={48}
            src={<img src={logoImg} alt={'logo'} style={{ width: 28, height: 28 }} />}
            style={{ backgroundColor: '#fff' }}
          />
          <h1 className={'text-2xl font-bold'}>Lazy Admin</h1>
        </div>
        <div className={styles.thumbImage}>
          <img src={forgotPsdImg} alt="login-bg" />
        </div>
      </div>
      <div className={styles.forgotPsdContent}>
        <div className={styles.forgotPsdFormWrapper}>
          <div className={styles.forgotPsdTitle}>
            <Typography.Title>找回密码</Typography.Title>
            <Typography.Text>请输入用户名或邮箱，我们将发送密码重置链接到您的邮箱。</Typography.Text>
          </div>
          <Form
            form={form}
            size={'large'}
            layout={'horizontal'}
            autoComplete={'off'}
            variant={'filled'}
            className={styles.forgotPsdForm}
            onFinish={handleFinish}
          >
            <Form.Item
              label={'用户账号'}
              name={'account'}
              rules={[{ required: true, message: '请输入用户名或邮箱！' }]}
            >
              <Input placeholder={'请输入你的邮箱或账号名称'}></Input>
            </Form.Item>
            <Form.Item style={{ paddingTop: 32 }}>
              <Space size={24}>
                <Button type={'primary'} style={{ width: 120 }}>
                  提交
                </Button>
                <Typography.Text>
                  记得密码？<Typography.Link href={'/auth/login'}>返回登录</Typography.Link>
                </Typography.Text>
              </Space>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
