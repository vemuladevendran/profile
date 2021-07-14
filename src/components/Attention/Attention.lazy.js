import React, { lazy, Suspense } from 'react';

const LazyAttention = lazy(() => import('./Attention'));

const Attention = props => (
  <Suspense fallback={null}>
    <LazyAttention {...props} />
  </Suspense>
);

export default Attention;
