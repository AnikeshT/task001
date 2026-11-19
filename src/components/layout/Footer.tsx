'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ThemeAwareLogo } from '../common/ThemeAwareLogo';
import { ShieldCheck, Mail, MapPin, Phone, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!email.trim()) {
      setErrorMessage('Please enter your email address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMessage('Please enter a valid email address (e.g., name@domain.com).');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage('Thank you! You are now subscribed to Tourpublish Italian Dispatches.');
      setEmail('');
    }, 600);
  };

  return (
    <footer className="bg-brand-dark border-t border-white/10 pt-16 pb-24 sm:pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1 & 2: Brand Identity, Address & Real Credentials */}
          <div className="lg:col-span-2 space-y-4">
            <ThemeAwareLogo height={32} lightOnly />
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              The premier curated directory for luxury tours in Italy. Connect directly to generational Italian operators with zero middleman markup, powered by staging.klnk.tv instant mobile wallet passes.
            </p>

            {/* Real Registered Contact Address */}
            <div className="pt-2 space-y-2 text-slate-300 font-sans text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-coral shrink-0 mt-0.5" />
                <span>
                  <strong>Tourpublish Italia S.r.l.</strong>
                  <br />
                  Via dei Condotti 85, 00187 Roma (RM), Italy
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-coral shrink-0" />
                <a href="tel:+390669874100" className="hover:text-white transition-colors">
                  +39 06 6987 4100 (Italian Concierge Desk)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-coral shrink-0" />
                <a href="mailto:concierge@staging.klnk.tv" className="hover:text-white transition-colors">
                  concierge@staging.klnk.tv
                </a>
              </div>
              <div className="text-[11px] text-slate-500 font-mono pt-1">
                Codice Fiscale / P.IVA: IT-84920194821 • REA RM-1428590
              </div>
            </div>
          </div>

          {/* Col 3: Italian Terroirs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Italian Terroirs</h4>
            <ul className="space-y-2">
              <li>
                <a href="#tours" className="hover:text-white transition-colors">Amalfi Coast & Capri</a>
              </li>
              <li>
                <a href="#tours" className="hover:text-white transition-colors">Tuscany & Val d’Orcia</a>
              </li>
              <li>
                <a href="#tours" className="hover:text-white transition-colors">Dolomites & South Tyrol</a>
              </li>
              <li>
                <a href="#tours" className="hover:text-white transition-colors">Sicilia & Aeolian Islands</a>
              </li>
              <li>
                <a href="#tours" className="hover:text-white transition-colors">Lake Como & Bellagio</a>
              </li>
              <li>
                <a href="#tours" className="hover:text-white transition-colors">Venice & Venetian Lagoon</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Technology & Verification */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">staging.klnk.tv</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://staging.klnk.tv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>staging.klnk.tv Engine</span>
                  <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse" />
                </a>
              </li>
              <li>
                <a href="#why-tourpublish" className="hover:text-white transition-colors">Zero Commission Guarantee</a>
              </li>
              <li>
                <a href="#why-tourpublish" className="hover:text-white transition-colors">Apple & Google Wallet Pass</a>
              </li>
              <li>
                <a href="#operators" className="hover:text-white transition-colors">Verified Italian Masters</a>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">GDPR Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Newsletter with Form Error States */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Italian Private Dispatch</h4>
            <p className="text-[11px] text-slate-400">
              Receive secret departure dates and private Riva yacht charters before public release.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2" noValidate>
              <div className="space-y-1">
                <input
                  type="email"
                  value={email}
                  onChange={e => {
                    setEmail(e.target.value);
                    if (errorMessage) setErrorMessage('');
                  }}
                  placeholder="Enter your email..."
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-brand-card border text-white placeholder:text-slate-500 text-xs focus:outline-none transition-colors ${
                    errorMessage
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-white/10 focus:border-brand-coral'
                  }`}
                  aria-label="Email address for dispatch"
                />
                {errorMessage && (
                  <p className="text-[11px] text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errorMessage}</span>
                  </p>
                )}
                {successMessage && (
                  <p className="text-[11px] text-brand-emerald flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{successMessage}</span>
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 rounded-xl bg-brand-coral hover:bg-brand-coral-hover disabled:opacity-60 text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{isSubmitting ? 'Subscribing...' : 'Subscribe'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Tourpublish Italia S.r.l. All rights reserved. Registered Italian Travel Directory.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link href="/thank-you" className="hover:text-slate-300 transition-colors">Confirmation Portal</Link>
            <a
              href="https://staging.klnk.tv"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 text-brand-coral font-medium"
            >
              Powered by staging.klnk.tv
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
