import { Suspense } from 'react';
import { HeadersNavigation } from '../HeadersNavigation/HeadersNavigation';

export const Layout = ({ children }) => {
  return (
    <div>
      <HeadersNavigation />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};
