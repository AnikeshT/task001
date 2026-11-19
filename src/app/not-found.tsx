import React from 'react';
import Link from 'next/link';
import { Compass, ArrowRight, ShieldCheck, Home } from 'lucide-react';
import { ThemeAwareLogo } from '../components/common/ThemeAwareLogo';

export const metadata = {
  title: 'Page Not Found (404) | Tourpublish',
  description: 'The requested Italian expedition or page could not be found. Explore curated luxury tours in Italy on Tourpublish.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-dark text-slate-100 flex flex-col justify-between font-sans selection:bg-brand-coral selection:text-white">
      {/* Top Navbar */}
      <header className="border-b border-white/10 py-5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <ThemeAwareLogo height={32} lightOnly />
          <Link
            href="/"
            className="text-xs uppercase tracking-wider font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </div>
      </header>

      {/* Main 404 Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-20 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-coral/10 border border-brand-coral/20 text-brand-coral text-xs font-semibold uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5" />
            <span>Error 404 • Lost in the Mediterranean</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-sans font-black text-white tracking-tight">
            Lost in a{' '}
            <span className="font-serif italic font-normal text-brand-coral">
              Secret Cove.
            </span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            The Italian expedition or page you are looking for has already set sail or never existed. Return to our verified directory to explore hand-crafted departures across Amalfi, Tuscany, and the Dolomites.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-brand-coral hover:bg-brand-coral-hover text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Italian Expeditions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://staging.klnk.tv"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-semibold transition-all flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-brand-emerald" />
              <span>Verify on staging.klnk.tv</span>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Tourpublish Italia S.r.l. • Direct Italian Operator Bookings via staging.klnk.tv</p>
      </footer>
    </div>
  );
}
