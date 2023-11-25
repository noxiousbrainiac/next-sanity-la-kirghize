import React from 'react';
import { NOTO_SANS } from '@app/ui/fonts/fonts';
import Providers from '@app/lib/providers';
import LayoutEffect from '@app/store/layout-effect';
import '@app/ui/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={NOTO_SANS.className}>
        <Providers>
          <LayoutEffect />
          {children}
        </Providers>
      </body>
    </html>
  );
}
