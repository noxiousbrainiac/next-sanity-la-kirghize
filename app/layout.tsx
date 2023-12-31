import React from 'react';
import { NOTO_SANS } from '@app/ui/fonts/fonts';
import Providers from '@app/lib/providers';
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
          {children}
        </Providers>
      </body>
    </html>
  );
}
