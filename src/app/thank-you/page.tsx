import React from 'react';
import Link from 'next/link';
import { CheckCircle2, Smartphone, ArrowRight, Download, Phone, Mail } from 'lucide-react';
import { ThemeAwareLogo } from '../../components/common/ThemeAwareLogo';

export const metadata = {
  title: 'Booking Confirmed | Tourpublish Italy',
  description: 'Your Italian luxury expedition booking confirmation and digital pass powered by staging.klnk.tv.',
};

export default function ThankYouPage() {
  const liveTourUrl = 'https://staging.klnk.tv/pushpak/2de2d421/italy-trip';

  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col justify-between font-sans selection:bg-brand-coral selection:text-white">
      {/* Top Header */}
      <header className="border-b border-canvas-border py-4 px-6 bg-canvas">
        <div className="container-custom flex items-center justify-between">
          <ThemeAwareLogo height={28} />
          <Link
            href="/"
            className="text-xs font-semibold text-ink-muted hover:text-ink transition-colors"
          >
            ← Back to Directory
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-16">
        <div className="max-w-2xl w-full mx-auto space-y-8">
          {/* Header Status */}
          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center mx-auto text-emerald-700 shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wide bg-emerald-100 text-emerald-800 border border-emerald-300">
              Pass Confirmed • staging.klnk.tv
            </span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-ink tracking-tight">
              Grazie Mille! You’re Heading to Italy.
            </h1>
            <p className="text-ink-soft text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              Your direct operator reservation has been transmitted securely through staging.klnk.tv. Your host has been notified and your cryptographic mobile boarding pass is ready.
            </p>
          </div>

          {/* Digital Boarding Pass Card */}
          <div className="wayfare-card p-6 sm:p-8 space-y-6 bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-canvas-border pb-4">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-ink-muted font-bold font-mono">Pass Identification Token</span>
                <p className="text-xs font-mono font-bold text-ink mt-0.5">KLNK-IT-2026-9842X</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-bold font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span>Verified Direct</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
              <div>
                <span className="text-ink-muted block text-[11px] font-medium">Niche &amp; Region</span>
                <span className="font-semibold text-ink">Luxury Tours in Italy</span>
              </div>
              <div>
                <span className="text-ink-muted block text-[11px] font-medium">Operator Protocol</span>
                <span className="font-semibold text-ink">staging.klnk.tv</span>
              </div>
              <div>
                <span className="text-ink-muted block text-[11px] font-medium">Cancellation Policy</span>
                <span className="font-semibold text-emerald-700">7-Day 100% Refundable</span>
              </div>
            </div>

            {/* Wallet Pass Buttons */}
            <div className="pt-4 border-t border-canvas-border flex flex-col sm:flex-row items-center gap-3">
              <a
                href={liveTourUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark w-full sm:w-1/2 py-3 text-xs flex items-center justify-center gap-2"
              >
                <Smartphone className="w-4 h-4" />
                <span>Add to Apple Wallet</span>
              </a>
              <a
                href={liveTourUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full sm:w-1/2 py-3 text-xs flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-brand-coral" />
                <span>Save Google Wallet Pass</span>
              </a>
            </div>
          </div>

          {/* Concierge Assistance */}
          <div className="wayfare-card p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-ink-soft bg-canvas-card">
            <div>
              <p className="font-bold text-ink text-sm">Need personal itinerary adjustments?</p>
              <p className="text-ink-muted text-xs">Our Rome Conciergerie is available 24/7 for helicopter, yacht, and dietary requests.</p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0 font-medium">
              <a href="tel:+390669874100" className="hover:text-ink flex items-center gap-1.5 transition-colors">
                <Phone className="w-3.5 h-3.5 text-brand-coral" />
                <span>+39 06 6987 4100</span>
              </a>
              <a href="mailto:concierge@staging.klnk.tv" className="hover:text-ink flex items-center gap-1.5 transition-colors">
                <Mail className="w-3.5 h-3.5 text-brand-coral" />
                <span>concierge@staging.klnk.tv</span>
              </a>
            </div>
          </div>

          <div className="text-center pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-brand-coral hover:underline transition-colors"
            >
              <span>Explore More Italian Terroirs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-canvas-border py-6 text-center text-xs text-ink-muted">
        <p>© {new Date().getFullYear()} Tourpublish Italia S.r.l. • Via dei Condotti 85, 00187 Roma RM, Italy • Powered by staging.klnk.tv</p>
      </footer>
    </div>
  );
}
