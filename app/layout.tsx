import React from 'react';
import Header from '@app/ui/header/header';
import { NOTO_SANS } from '@app/ui/fonts/fonts';
import Providers from '@app/lib/providers';
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
        <Providers>
          <LayoutEffect />
          <Header />
          <main className="text-foreground bg-background">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
