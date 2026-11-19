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
    <div className="min-h-screen bg-[#0e1013] text-brand-primary flex flex-col justify-between font-sans selection:bg-brand-coral selection:text-white">
      {/* Top Navbar */}
      <header className="border-b border-brand-border py-4 px-6 bg-[#0e1013]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <ThemeAwareLogo height={30} lightOnly />
          <Link
            href="/"
            className="text-xs uppercase tracking-wider font-semibold text-brand-secondary hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </div>
      </header>

      {/* Main 404 Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-20 text-center">
        <div className="max-w-xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-surface border border-brand-border text-brand-coral text-xs font-mono tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Error 404 • Destination Not Found</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-sans font-bold text-brand-primary tracking-tight">
            Lost in an Italian Cove
          </h1>

          <p className="text-brand-secondary text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
            The Italian expedition or page you are looking for has already departed or does not exist. Return to our verified directory to explore handcrafted departures across Amalfi, Tuscany, and the Dolomites.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-2.5">
            <Link
              href="/"
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-brand-coral hover:bg-brand-coral-hover text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <span>Explore Italian Expeditions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://staging.klnk.tv"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-brand-surface hover:bg-brand-surface-hover border border-brand-border text-brand-secondary hover:text-white text-xs font-medium transition-colors flex items-center justify-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4 text-brand-emerald" />
              <span>Verify on staging.klnk.tv</span>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-brand-border py-5 text-center text-xs text-brand-muted">
        <p>© {new Date().getFullYear()} Tourpublish Italia S.r.l. • Direct Italian Operator Bookings via staging.klnk.tv</p>
      </footer>
    </div>
  );
}
