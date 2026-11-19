import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tourpublish — Curated Luxury Tours & Expeditions | Book Direct via KLNK',
  description:
    'Discover handcrafted small-group and private luxury expeditions across the Amalfi Coast, Tuscany, Dolomites, and wild frontiers. Zero middleman markups, 100% verified operators, instant booking powered by KLNK.',
  keywords: [
    'Tourpublish',
    'KLNK',
    'Luxury Tours Italy',
    'Amalfi Coast Yacht Tour',
    'Tuscany Wine Tour',
    'Dolomites Via Ferrata',
    'Socotra Expedition',
    'Namibia Safari',
    'Travel Directory',
  ],
  authors: [{ name: 'Tourpublish' }],
  openGraph: {
    title: 'Tourpublish — Curated Luxury Tours & Rare Expeditions',
    description:
      'Handcrafted luxury expeditions booked direct from master local operators via KLNK.',
    url: 'https://tourpublish.com',
    siteName: 'Tourpublish',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Tourpublish Luxury Travel Directory',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tourpublish — Curated Luxury Tours & Rare Expeditions',
    description: 'Book verified small-group and private luxury expeditions direct via KLNK.',
    images: ['https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-brand-dark text-slate-100 min-h-screen flex flex-col selection:bg-brand-coral/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
