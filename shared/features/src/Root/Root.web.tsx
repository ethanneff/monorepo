'use client';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import {
  Geist_Mono as geistFontMono,
  Geist as geistFontSans,
} from 'next/font/google';
import { type PropsWithChildren } from 'react';

const geistSans = geistFontSans({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const geistMono = geistFontMono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export const Root = ({ children }: PropsWithChildren) => {
  return (
    <html
      className="dark"
      lang="en"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};
