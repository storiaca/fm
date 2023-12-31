import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
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
      <body suppressHydrationWarning={true} className={inter.className}>
        <Navigation />
        <div className="max-w-[1200px] m-auto">{children}</div>
      </body>
    </html>
  );
}
