import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GPS On Bhadra Polytechnic College - Quality Technical Education',
  description: 'GPS On Bhadra Polytechnic College offers industry-focused diploma programs in engineering. AICTE approved institution with excellent placement records and modern infrastructure.',
  keywords: ['polytechnic college', 'engineering diploma', 'technical education', 'GPS On Bhadra', 'placement'],
  openGraph: {
    title: 'GPS On Bhadra Polytechnic College',
    description: 'Quality Technical Education with 95% Placement Rate',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GPS On Bhadra Polytechnic College',
    description: 'Quality Technical Education with 95% Placement Rate',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
