import React from 'react';

const SuspenseLayout: React.FunctionComponent<any> = ({
  children,
  fallback,
}: {
  children: any
  fallback?: React.ReactNode
}) => (
  <React.Suspense fallback={fallback ?? <>Loading...</>}>
    {children}
  </React.Suspense>
);

export default SuspenseLayout;
