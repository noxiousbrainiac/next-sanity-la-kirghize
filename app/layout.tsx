import React from 'react';
import { MAGILIO } from '@app/ui/fonts/fonts';
import '@app/ui/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={MAGILIO.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
