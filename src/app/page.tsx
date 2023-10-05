'use client';

import * as React from 'react';

import Community from '@/components/landing/Community';
import Embed from '@/components/landing/Embed';
import Features from '@/components/landing/Features';
import Main from '@/components/landing/main';
import Service from '@/components/landing/Service';

import Background from './back';

export default function HomePage() {
  return (
    <>
      <Background />
      <main>
        <section className='relative min-h-screen w-full overflow-clip'>
          <Main />
          <Embed />
          <Features />
          <Community />
          <Service />
        </section>
      </main>
    </>
  );
}
