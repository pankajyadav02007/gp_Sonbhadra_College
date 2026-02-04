import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GP Sonbhadra Polytechnic College - Quality Technical Education',
  description:
    'GP Sonbhadra Polytechnic College offers industry-focused diploma programs in engineering.',
  keywords: ['polytechnic college', 'engineering diploma', 'technical education'],

  icons: {
    icon: 'https://www.gpsonbhadra.in/LOGO5.png', // 👈 ONLINE ICON URL
  },

  openGraph: {
    title: 'GP Sonbhadra Polytechnic College',
    description: 'Quality Technical Education with 95% Placement Rate',
    images: [
      {
        url: 'https://www.gpsonbhadra.in/LOGO5.png',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'GP Sonbhadra Polytechnic College',
    description: 'Quality Technical Education with 95% Placement Rate',
    images: [
      {
        url: 'https://www.gpsonbhadra.in/LOGO5.png',
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
