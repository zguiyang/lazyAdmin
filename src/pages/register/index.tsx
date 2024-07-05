import { Avatar, Button, Col, Form, Input, Row, Space, Typography } from 'antd';
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

export default function RegisterPage() {
  const navigate = useNavigate();
  const [form] = Form.useForm<RegisterFormFields>();

  async function handleFinish(values: RegisterFormFields) {
    console.log('values', values);
    await setUserToken('776tggug');
    navigate('/');
  }

  return (
    <div className={styles.registerPageWrapper}>
      <div className={styles.registerPageThumb}>
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
      <div className={styles.registerPageContent}>
        <div className={styles.loginFormWrapper}>
          <div className={styles.registerTitle}>
            <Typography.Title>用户注册</Typography.Title>
            <Typography.Text>
              欢迎使用 Lazy Admin 后台管理系统, 请填写以下信息进行账号注册，即可登录系统。
            </Typography.Text>
          </div>
          <Form
            form={form}
            size={'large'}
            layout={'vertical'}
            autoComplete={'off'}
            variant={'filled'}
            className={styles.registerForm}
            initialValues={{ remember: true }}
            onFinish={handleFinish}
          >
            <Row gutter={{ md: 12, xl: 18, xxl: 24 }}>
              <Col xs={24} md={24} xl={12} xxl={8}>
                <Form.Item
                  label={'用户名'}
                  name={'username'}
                  validateTrigger={'onBlur'}
                  rules={[{ required: true, message: '请输入用户名' }]}
                >
                  <Input placeholder="请输入用户名" />
                </Form.Item>
              </Col>
              <Col xs={24} md={24} xl={12} xxl={8}>
                <Form.Item label={'用户昵称'}>
                  <Input placeholder="请输入用户昵称" />
                </Form.Item>
              </Col>
              <Col xs={24} md={24} xl={12} xxl={8}>
                <Form.Item label={'真实姓名'}>
                  <Input placeholder="请输入用户姓名" />
                </Form.Item>
              </Col>
              <Col xs={24} md={24} xl={12} xxl={8}>
                <Form.Item label={'用户手机号'}>
                  <Input placeholder="请输入用户手机号" />
                </Form.Item>
              </Col>
              <Col xs={24} md={24} xl={12} xxl={8}>
                <Form.Item label={'验证码'}>
                  <Input placeholder="请输入手机验证码" suffix={<Button type={'link'}>获取验证码</Button>} />
                </Form.Item>
              </Col>
              <Col xs={24} md={24} xl={12} xxl={8}>
                <Form.Item label={'用户邮箱'}>
                  <Input placeholder="请输入用户邮箱" />
                </Form.Item>
              </Col>
              <Col xs={24} md={24} xl={12} xxl={8}>
                <Form.Item label={'邮箱验证码'}>
                  <Input placeholder="请输入用户邮箱验证码" suffix={<Button type={'link'}>获取验证码</Button>} />
                </Form.Item>
              </Col>
              <Col xs={24} md={24} xl={12} xxl={8}>
                <Form.Item
                  label={'登录密码'}
                  name={'password'}
                  validateTrigger={'onBlur'}
                  rules={[{ required: true, message: '请输入密码' }]}
                >
                  <Input.Password placeholder="请输入密码" />
                </Form.Item>
              </Col>
              <Col xs={24} md={24} xl={12} xxl={8}>
                <Form.Item
                  label={'确认登录密码'}
                  name={'password'}
                  validateTrigger={'onBlur'}
                  rules={[{ required: true, message: '请输入密码' }]}
                >
                  <Input.Password placeholder="请输入密码" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item style={{ paddingTop: 8 }}>
                  <Space size={24}>
                    <Button type={'primary'} htmlType={'submit'} style={{ width: '14rem' }}>
                      提交
                    </Button>
                    <Typography.Text>
                      已有账号？<Typography.Link href={'/auth/login'}>立即登录</Typography.Link>
                    </Typography.Text>
                  </Space>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
}
