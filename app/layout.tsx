import React from 'react';
import Header from '@app/ui/Header';
import { NOTO_SANS } from '@app/ui/fonts/fonts';
import StoreProvider from '@app/lib/store/StoreProvider';
import LayoutEffect from '@app/lib/store/LayoutEffect';
import '@app/ui/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={NOTO_SANS.className}>
        <StoreProvider>
          <LayoutEffect />
          <Header />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
