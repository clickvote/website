import { DefaultSeo } from 'next-seo';
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
          <DefaultSeo
              title='Clickvote - Like, Upvote And Review Any Context'
              description='Seamlessly Integrate Like, Upvote, and Review Components into Your App with React / Angular / Svelte / Vue'
              additionalLinkTags={[
                  {
                      rel: 'icon',
                      href: 'https://clickvote.dev/favicon.ico'
                  },
                  {
                      rel: 'apple-touch-icon',
                      href: 'https://clickvote.dev/images/apple-touch-icon.png',
                      sizes: '76x76'
              }]}
              openGraph={{
                  type: 'website',
                  locale: 'en_IE',
                  url: 'https://clickvote.dev',
                  siteName: 'Clickvote',
                  images: [
                      {url: 'https://clickvote.dev/images/og.png', alt: 'Clickvote - Like, Upvote And Review Any Context'}
                  ]
              }}
              twitter={{
                  handle: '@clickvote',
                  site: '@clickvote',
                  cardType: 'summary_large_image',
              }}
          />
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
