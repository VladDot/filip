'use client';

import { usePathname } from 'next/navigation';

import { Header } from '../header';
import { Footer } from '../footer';

export const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const isMinimalPage = pathname === '/privacy' || pathname === '/terms';

  return (
    <>
      {!isMinimalPage && <Header />}
      {children}
      {!isMinimalPage && <Footer />}
    </>
  );
};
