import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { CookieBanner } from '../components/common/CookieBanner';

export const metadata: Metadata = {
  metadataBase: new URL('https://tourpublish.com'),
  title: {
    default: 'Tourpublish — Travel in Small Groups, Led by Italian Locals',
    template: '%s | Tourpublish Italy',
  },
  description:
    'Small-group luxury tours across Italy: Amalfi Coast, Tuscany, Dolomites, Lake Como, Sicily, and Venice. Never more than eight travelers, direct operator rates on staging.klnk.tv.',
  keywords: [
    'Tourpublish',
    'Luxury Tours in Italy',
    'staging.klnk.tv',
    'Amalfi Coast Small Group Tour',
    'Tuscany Wine Tour',
    'Dolomites Via Ferrata',
    'Lake Como Riva Charter',
  ],
  authors: [{ name: 'Tourpublish Italia S.r.l.' }],
  creator: 'Tourpublish',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', sizes: '180x180', type: 'image/png' },
      { url: '/logo.jpg', type: 'image/jpeg' },
    ],
    apple: [
      { url: '/icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Tourpublish — Travel in Small Groups, Led by Italian Locals',
    description: 'Eight master routes across Italy. Groups of 8 or fewer, fixed all-inclusive prices and direct operator booking on staging.klnk.tv.',
    url: 'https://tourpublish.com',
    siteName: 'Tourpublish',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Tourpublish Italy',
      },
    ],
    locale: 'en_IT',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-canvas text-ink min-h-screen flex flex-col selection:bg-brand-coral/20 selection:text-brand-coral antialiased">
        {children}
        <CookieBanner />
        <Script
          id="tourpublish-analytics"
          strategy="afterInteractive"
          src="https://va.vercel-scripts.com/v1/script.js"
        />
      </body>
    </html>
  );
}
