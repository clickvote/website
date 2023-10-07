import * as React from 'react';

import Footer from '@/components/landing/Footer';
import Subscribe from '@/components/landing/Subscribe';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <>
        <div className='max-w-screen font-primary relative overflow-clip'>
          <Navbar />
          {children}
          <Subscribe />
          <Footer />
        </div>
        <ScrollToTop />
      </>
  );
}
