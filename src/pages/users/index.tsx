import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, Space, Table, Typography } from 'antd';

import PageTitle from '@/components/PageTitle';
import type { TableColumn } from '@/types/common';

export function ActionButtons() {
  return (
    <Space size={12} className={'action-buttons'}>
      <Button type={'primary'} icon={<PlusOutlined />}>
        创建用户
      </Button>
    </Space>
  );
}

export default function UserPage() {
  const columns: TableColumn<any> = [
    {
      title: '用户名',
      dataIndex: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '年龄',
      dataIndex: 'age',
    },
    {
      title: '地址',
      dataIndex: 'address',
    },
    {
      title: '电话',
      dataIndex: 'phone',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
    },
    {
      title: '操作',
      dataIndex: 'action',
      align: 'right',
      render: () => {
        return (
          <Space size={8} align={'end'}>
            <Typography.Link type={'danger'}>删除</Typography.Link>
            <Typography.Link>编辑</Typography.Link>
            <Typography.Link>详情</Typography.Link>
          </Space>
        );
      },
    },
  ];
  const tableData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      phone: '13812345678',
      email: 'john.brown@example.com',
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      phone: '13912345678',
      email: 'jim.green@example.com',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      phone: '13712345678',
      email: 'joe.black@example.com',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  return (
    <div className={'users-page'}>
      <PageTitle actions={<ActionButtons />} />
      <div className={'page-search-wrapper'}>
        <div className={'left-wrapper'}>操作区域</div>
        <div className={'right-wrapper'}>
          <Form layout={'inline'} labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
            <Form.Item label={'用户名'}>
              <Input placeholder={'请输入用户名'} />
            </Form.Item>
            <Form.Item label={'邮箱'}>
              <Input placeholder={'请输入邮箱'} />
            </Form.Item>
            <Form.Item label={'状态'}>
              <Select defaultValue={'全部'} style={{ width: 120 }}>
                <Select.Option value={'全部'}>全部</Select.Option>
                <Select.Option value={'正常'}>正常</Select.Option>
                <Select.Option value={'冻结'}>冻结</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label={false} style={{ marginRight: 0 }}>
              <Space size={8}>
                <Button type={'primary'} ghost>
                  查询
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className={'page-table-wrapper'}>
        <Table dataSource={tableData} columns={columns} bordered={false} />
      </div>
    </div>
  );
}
