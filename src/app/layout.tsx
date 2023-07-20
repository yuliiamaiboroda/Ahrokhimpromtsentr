import Link from 'next/link';

import './globals.css';
import { IBMPlexSans, nunito } from './fonts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${IBMPlexSans.variable} ${nunito.variable} min-h-screen bg-[linear-gradient(180deg,_#29392F_66.67%,_#394E2C_100%)] font-heading text-primary`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
