import React, { lazy, Suspense } from 'react';

const LazyMyProjects = lazy(() => import('./MyProjects'));

const MyProjects = props => (
  <Suspense fallback={null}>
    <LazyMyProjects {...props} />
  </Suspense>
);

export default MyProjects;
