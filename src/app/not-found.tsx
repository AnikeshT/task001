import React from 'react';
import Link from 'next/link';
import { Compass, ArrowRight, Home } from 'lucide-react';
import { ThemeAwareLogo } from '../components/common/ThemeAwareLogo';

export const metadata = {
  title: 'Page Not Found (404) | Tourpublish',
  description: 'The requested Italian expedition or page could not be found. Explore curated luxury tours in Italy on Tourpublish.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col justify-between font-sans selection:bg-brand-coral selection:text-white">
      {/* Top Navbar */}
      <header className="border-b border-canvas-border py-4 px-6 bg-canvas">
        <div className="container-custom flex items-center justify-between">
          <ThemeAwareLogo height={30} />
          <Link
            href="/"
            className="text-xs uppercase tracking-wider font-semibold text-ink-muted hover:text-ink flex items-center gap-1.5 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </div>
      </header>

      {/* Main 404 Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-20 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-card border border-canvas-border text-brand-coral text-xs font-mono font-bold tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Error 404 • Destination Not Found</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-ink tracking-tight">
            Lost in an Italian Cove
          </h1>

          <p className="text-ink-soft text-sm sm:text-base leading-relaxed max-w-md mx-auto">
            The Italian expedition or page you are looking for has already departed or does not exist. Return to our verified directory to explore handcrafted departures across Amalfi, Tuscany, and the Dolomites.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="btn-coral text-xs py-3 px-6"
            >
              <span>Explore Italian Expeditions</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>

            <a
              href="https://staging.klnk.tv/pushpak/2de2d421/italy-trip"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs py-3 px-6"
            >
              <span>Verify on staging.klnk.tv</span>
            </a>
          </div>
        </div>
      </main>

      <footer className="border-t border-canvas-border py-6 text-center text-xs text-ink-muted">
        <p>© {new Date().getFullYear()} Tourpublish Italia S.r.l. • Via dei Condotti 85, 00187 Roma RM, Italy • Powered by staging.klnk.tv</p>
      </footer>
    </div>
  );
}
