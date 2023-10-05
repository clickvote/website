import { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Stay up to date with the latest updates from CLICKVOTE',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
