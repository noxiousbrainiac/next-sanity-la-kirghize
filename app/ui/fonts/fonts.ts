import localFont from 'next/font/local';
import { Noto_Sans, Roboto } from 'next/font/google';

export const MAGILIO = localFont({
  src: './magilio.ttf',
  display: 'swap',
});

export const NOTO_SANS = Noto_Sans({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const ROBOTO = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});
