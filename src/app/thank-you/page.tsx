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
    <div className="min-h-screen bg-[#0e1013] text-brand-primary flex flex-col justify-between font-sans selection:bg-brand-coral selection:text-white">
      {/* Top Header */}
      <header className="border-b border-brand-border py-4 px-6 bg-[#0e1013]/90 backdrop-blur-md sticky top-0 z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <ThemeAwareLogo height={28} lightOnly />
          <Link
            href="/"
            className="text-xs font-semibold text-brand-secondary hover:text-white transition-colors"
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
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <span className="inline-block px-3 py-1 rounded-md text-xs font-mono font-medium tracking-wide bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
              Pass Confirmed • staging.klnk.tv
            </span>
            <h1 className="text-2xl sm:text-4xl font-semibold text-white tracking-tight">
              Grazie Mille! You’re Heading to Italy.
            </h1>
            <p className="text-brand-secondary text-sm leading-relaxed max-w-xl mx-auto">
              Your direct operator reservation has been transmitted securely through staging.klnk.tv. Your host has been notified and your cryptographic mobile boarding pass is ready.
            </p>
          </div>

          {/* Digital Boarding Pass Card */}
          <div className="rounded-2xl bg-[#14161b] border border-brand-border p-6 sm:p-7 space-y-6 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-brand-border pb-4">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-brand-muted">Pass Identification Token</span>
                <p className="text-xs font-mono font-bold text-white mt-0.5">KLNK-IT-2026-9842X</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Verified Direct</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
              <div>
                <span className="text-brand-muted block text-[11px]">Niche & Region</span>
                <span className="font-semibold text-white">Luxury Tours in Italy</span>
              </div>
              <div>
                <span className="text-brand-muted block text-[11px]">Operator Protocol</span>
                <span className="font-semibold text-white">staging.klnk.tv</span>
              </div>
              <div>
                <span className="text-brand-muted block text-[11px]">Cancellation Policy</span>
                <span className="font-semibold text-emerald-400">7-Day 100% Refundable</span>
              </div>
            </div>

            {/* Wallet Pass Buttons */}
            <div className="pt-4 border-t border-brand-border flex flex-col sm:flex-row items-center gap-3">
              <a
                href="https://staging.klnk.tv/pushpak/2de2d421/italy-trip"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-1/2 py-2.5 px-4 rounded-lg bg-[#1a1d24] border border-brand-border hover:border-white/40 text-white text-xs font-medium flex items-center justify-center gap-2 transition-all"
              >
                <Smartphone className="w-4 h-4 text-white" />
                <span>Add to Apple Wallet</span>
              </a>
              <a
                href="https://staging.klnk.tv/pushpak/2de2d421/italy-trip"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-1/2 py-2.5 px-4 rounded-lg bg-[#1a1d24] border border-brand-border hover:border-white/40 text-white text-xs font-medium flex items-center justify-center gap-2 transition-all"
              >
                <Download className="w-4 h-4 text-brand-coral" />
                <span>Save Google Wallet Pass</span>
              </a>
            </div>
          </div>

          {/* Concierge Assistance */}
          <div className="rounded-xl bg-[#14161b] border border-brand-border p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-brand-secondary">
            <div>
              <p className="font-semibold text-white">Need personal itinerary adjustments?</p>
              <p className="text-brand-muted text-[13px]">Our Rome Conciergerie is available 24/7 for helicopter, yacht, and dietary requests.</p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0 font-medium text-brand-secondary">
              <a href="tel:+390669874100" className="hover:text-white flex items-center gap-1.5 transition-colors">
                <Phone className="w-3.5 h-3.5 text-brand-coral" />
                <span>+39 06 6987 4100</span>
              </a>
              <a href="mailto:concierge@staging.klnk.tv" className="hover:text-white flex items-center gap-1.5 transition-colors">
                <Mail className="w-3.5 h-3.5 text-brand-coral" />
                <span>concierge@staging.klnk.tv</span>
              </a>
            </div>
          </div>

          <div className="text-center pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-brand-coral hover:text-white transition-colors"
            >
              <span>Explore More Italian Terroirs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-brand-border py-6 text-center text-xs text-brand-muted">
        <p>© {new Date().getFullYear()} Tourpublish Italia S.r.l. • Via dei Condotti 85, 00187 Roma RM, Italy • Powered by staging.klnk.tv</p>
      </footer>
    </div>
  );
}
