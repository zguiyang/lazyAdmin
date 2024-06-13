import React from 'react';
import {ProLayout} from '@ant-design/pro-components';

export function BasicLayout(props: {children: React.ReactNode}) {
  return <ProLayout layout={'mix'}>{props.children}</ProLayout>;
}
