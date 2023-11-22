import React from 'react';
import { NOTO_SANS } from '@app/ui/fonts/fonts';
import StoreProvider from '@app/lib/store/StoreProvider';
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
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
