import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/globals.css';
import '@/styles/colors.css';

import Footer from '@/components/landing/Footer';
import Subscribe from '@/components/landing/Subscribe';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';

import { siteConfig } from '@/constant/config';

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.png',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  generator: 'Next.js',
  keywords: 'clickvote, novu, open-source, nextjs, react',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className='max-w-screen font-primary relative overflow-clip'>
          <Navbar />
          {children}
          <Subscribe />
          <Footer />
        </div>
        <ScrollToTop />
      </body>
    </html>
  );
}
