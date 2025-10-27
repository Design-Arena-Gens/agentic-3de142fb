import './globals.css';
import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-heading' });
const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = {
  title: 'Aurora Salon',
  description: 'Feminine, elegant hair salon in the heart of the city. Book online.',
  metadataBase: new URL('https://agentic-3de142fb.vercel.app'),
  openGraph: {
    title: 'Aurora Salon',
    description: 'Feminine, elegant hair salon. Book online.',
    url: 'https://agentic-3de142fb.vercel.app',
    siteName: 'Aurora Salon',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Elegant haircut styled at Aurora Salon',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
