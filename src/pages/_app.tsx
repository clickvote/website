import {Analytics} from "@vercel/analytics/react";
import type { AppProps } from 'next/app';
import React from "react";

import '@/styles/globals.css';
import '@/styles/colors.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
        <Component {...pageProps} />
        <Analytics />
    </>
  );
}
