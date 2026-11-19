import React from 'react';
import Link from 'next/link';
import { CheckCircle2, Smartphone, ArrowRight, ShieldCheck, Mail, Phone, Calendar, Download } from 'lucide-react';
import { ThemeAwareLogo } from '../../components/common/ThemeAwareLogo';

export const metadata = {
  title: 'Booking Confirmed | Tourpublish Italy',
  description: 'Your Italian luxury expedition booking confirmation and digital pass powered by staging.klnk.tv.',
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-brand-dark text-slate-100 flex flex-col justify-between font-sans selection:bg-brand-coral selection:text-white">
      {/* Top Header */}
      <header className="border-b border-white/10 py-5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <ThemeAwareLogo height={32} lightOnly />
          <Link
            href="/"
            className="text-xs uppercase tracking-wider font-semibold text-slate-300 hover:text-white transition-colors"
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
            <div className="w-16 h-16 rounded-3xl bg-brand-emerald/15 border border-brand-emerald/30 flex items-center justify-center mx-auto text-brand-emerald shadow-xl">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20">
              Pass Confirmed • staging.klnk.tv
            </span>
            <h1 className="text-3xl sm:text-5xl font-sans font-bold text-white tracking-tight">
              Grazie Mille! You’re Heading to Italy.
            </h1>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Your direct operator reservation has been transmitted securely through staging.klnk.tv. Your host has been notified and your cryptographic mobile boarding pass is ready.
            </p>
          </div>

          {/* Digital Boarding Pass Card */}
          <div className="rounded-3xl bg-brand-card border border-white/10 p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Pass Identification Token</span>
                <p className="text-xs font-mono font-bold text-white">KLNK-IT-2026-9842X</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-brand-emerald font-semibold font-mono">
                <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse" />
                <span>Verified Direct</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
              <div>
                <span className="text-slate-400 block text-[11px]">Niche & Region</span>
                <span className="font-semibold text-white">Luxury Tours in Italy</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Operator Protocol</span>
                <span className="font-semibold text-white">staging.klnk.tv</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Cancellation Policy</span>
                <span className="font-semibold text-brand-emerald">7-Day 100% Refundable</span>
              </div>
            </div>

            {/* Wallet Pass Buttons */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
              <a
                href="https://staging.klnk.tv"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-1/2 py-3 px-4 rounded-2xl bg-black border border-white/20 hover:border-white/40 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <Smartphone className="w-4 h-4 text-white" />
                <span>Add to Apple Wallet</span>
              </a>
              <a
                href="https://staging.klnk.tv"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-1/2 py-3 px-4 rounded-2xl bg-white/5 border border-white/15 hover:bg-white/10 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <Download className="w-4 h-4 text-brand-coral" />
                <span>Save Google Wallet Pass</span>
              </a>
            </div>
          </div>

          {/* Concierge Assistance */}
          <div className="rounded-2xl bg-white/5 border border-white/10 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-300">
            <div>
              <p className="font-bold text-white">Need personal itinerary adjustments?</p>
              <p className="text-slate-400">Our Rome Conciergerie is available 24/7 for helicopter, yacht, and dietary requests.</p>
            </div>
            <div className="flex items-center gap-4 shrink-0 font-medium text-slate-200">
              <a href="tel:+390669874100" className="hover:text-white flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-brand-coral" />
                <span>+39 06 6987 4100</span>
              </a>
              <a href="mailto:concierge@staging.klnk.tv" className="hover:text-white flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-brand-coral" />
                <span>concierge@staging.klnk.tv</span>
              </a>
            </div>
          </div>

          <div className="text-center pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-coral hover:text-brand-coral-hover transition-colors"
            >
              <span>Explore More Italian Terroirs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Tourpublish Italia S.r.l. • Via dei Condotti 85, 00187 Roma RM, Italy • Powered by staging.klnk.tv</p>
      </footer>
    </div>
  );
}
