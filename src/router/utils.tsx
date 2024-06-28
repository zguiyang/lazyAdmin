import { PageLoading } from '@ant-design/pro-components';
import { isFunction } from 'radash';
import { Suspense, lazy } from 'react';

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
