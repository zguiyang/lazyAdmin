import { Avatar, Button, Form, Input, Space, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

import logoImg from '@/assets/logo.svg';
import manRegisterImg from '@/assets/man-register.svg';
import { setUserToken } from '@/helper/auth';

import styles from './styles.module.scss';

export type RegisterFormFields = {
  username?: string;
  password?: string;
  remember?: string;
};

export default function ResetPasswordPage() {
  const navigate = useNavigate();
  const [form] = Form.useForm<RegisterFormFields>();

  async function handleFinish(values: RegisterFormFields) {
    console.log('values', values);
    await setUserToken('776tggug');
    navigate('/auth/login');
  }

  return (
    <div className={styles.resetPsdWrapper}>
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
          <img src={manRegisterImg} alt="login-bg" />
        </div>
      </div>
      <div className={styles.resetPsdContent}>
        <div className={styles.resetPsdFormWrapper}>
          <div className={styles.resetPsdTitle}>
            <Typography.Title>重置密码</Typography.Title>
            <Typography.Text>请输入新密码并提交以重置密码</Typography.Text>
          </div>
          <Form
            form={form}
            size={'large'}
            layout={'horizontal'}
            autoComplete={'off'}
            variant={'filled'}
            className={styles.resetPsdForm}
            onFinish={handleFinish}
          >
            <Form.Item
              label={'用户账号'}
              name={'account'}
              rules={[{ required: true, message: '请输入用户名或邮箱！' }]}
            >
              <Input placeholder={'请输入你的邮箱或账号名称'}></Input>
            </Form.Item>
            <Form.Item label={'新密码'} name={'password'} rules={[{ required: true, message: '请输入用户名或邮箱！' }]}>
              <Input.Password placeholder={'请输入你的新密码'}></Input.Password>
            </Form.Item>
            <Form.Item
              label={'确认密码'}
              name={'confirmPassword'}
              rules={[{ required: true, message: '请输入用户名或邮箱！' }]}
            >
              <Input.Password placeholder={'请再次输入你的新密码'}></Input.Password>
            </Form.Item>
            <Form.Item style={{ paddingTop: 32 }}>
              <Space size={24}>
                <Button type={'primary'} style={{ width: 120 }}>
                  提交
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
