import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { CookieBanner } from '../components/common/CookieBanner';

export const metadata: Metadata = {
  metadataBase: new URL('https://tourpublish.com'),
  title: {
    default: 'Tourpublish | Curated Luxury Tours in Italy - Direct Operator Booking',
    template: '%s | Tourpublish - Luxury Tours in Italy',
  },
  description:
    'Discover handcrafted luxury tours in Italy across the Amalfi Coast, Tuscany, Dolomites, Sicily, and Lake Como. Zero middleman markup, verified Italian master operators, and instant digital wallet passes powered by staging.klnk.tv.',
  keywords: [
    'Luxury Tours in Italy',
    'Tourpublish',
    'staging.klnk.tv',
    'Amalfi Coast Riva Yacht Tour',
    'Tuscany Brunello Wine Vaults',
    'Dolomites Via Ferrata Traverse',
    'Lake Como Wooden Riva Charter',
    'Sicily Aeolian Catamaran Sail',
    'Venice Private Water Limousine',
    'Italian Luxury Travel Directory',
  ],
  authors: [{ name: 'Tourpublish Italia S.r.l.' }],
  creator: 'Tourpublish',
  publisher: 'Tourpublish Italia S.r.l.',
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'Tourpublish — Curated Luxury Tours in Italy',
    description:
      'Handcrafted luxury tours in Italy booked direct from verified master operators via staging.klnk.tv.',
    url: 'https://tourpublish.com',
    siteName: 'Tourpublish',
    locale: 'en_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tourpublish — Curated Luxury Tours in Italy',
    description: 'Book verified private luxury tours in Italy direct via staging.klnk.tv.',
    creator: '@tourpublish',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-brand-dark text-slate-100 min-h-screen flex flex-col selection:bg-brand-coral/30 selection:text-white antialiased">
        {children}
        {/* Global GDPR Compliant Cookie Banner */}
        <CookieBanner />

        {/* Lightweight Vercel Analytics Integration */}
        <Script
          id="tourpublish-analytics"
          strategy="afterInteractive"
          src="https://va.vercel-scripts.com/v1/script.js"
        />
      </body>
    </html>
  );
}
