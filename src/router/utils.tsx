import { isFunction } from 'radash';
import { Suspense, lazy } from 'react';

export function lazyElementLoader(importFn: () => any) {
  if (isFunction(importFn)) {
    const LazyComponent = lazy(importFn);
    return (
      <Suspense fallback={<div>Loading Page...</div>}>
        <LazyComponent />
      </Suspense>
    );
  }
  return null;
}
