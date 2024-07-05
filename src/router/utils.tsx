import { PageLoading } from '@ant-design/pro-components';
import { isFunction } from 'radash';
import { Suspense, lazy } from 'react';
import { redirect } from 'react-router-dom';

import { getUserToken } from '@/helper/auth';

export function lazyElementLoader(importFn: () => any) {
  if (isFunction(importFn)) {
    const LazyComponent = lazy(importFn);
    return (
      <Suspense fallback={<PageLoading />}>
        <LazyComponent />
      </Suspense>
    );
  }
  return null;
}

export async function basicAuthLoader() {
  try {
    const userToken = await getUserToken();
    if (!userToken) {
      return redirect('/auth/login');
    }
    return true;
  } catch (err) {
    console.error(err);
    return redirect('/auth/login');
  }
}

export async function authLoader() {
  const userToken = await getUserToken();
  if (userToken) {
    return redirect('/');
  }
  return false;
}
