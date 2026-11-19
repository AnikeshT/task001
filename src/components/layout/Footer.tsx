'use client';

import React from 'react';
import { ThemeAwareLogo } from '../common/ThemeAwareLogo';
import { Sparkles, ShieldCheck, Mail, ArrowRight, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/10 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <ThemeAwareLogo height={32} lightOnly />
            <p className="text-slate-300 max-w-sm leading-relaxed">
              Tourpublish is the premier verified travel directory for handcrafted small-group and private luxury expeditions. Powered by KLNK direct-to-operator booking.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-brand-emerald font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>All 2026 Tours Covered by 100% Direct Operator Guarantee</span>
            </div>
          </div>

          {/* Col 2: Destinations */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Curated Regions</h4>
            <ul className="space-y-2">
              <li>
                <a href="#tours" className="hover:text-white transition-colors">Amalfi Coast & Capri</a>
              </li>
              <li>
                <a href="#tours" className="hover:text-white transition-colors">Tuscany & Val d’Orcia</a>
              </li>
              <li>
                <a href="#tours" className="hover:text-white transition-colors">Dolomites High Passes</a>
              </li>
              <li>
                <a href="#tours" className="hover:text-white transition-colors">Sicily & Aeolian Islands</a>
              </li>
              <li>
                <a href="#tours" className="hover:text-white transition-colors">Socotra Dragon Blood Island</a>
              </li>
              <li>
                <a href="#tours" className="hover:text-white transition-colors">Namibia Dark Sky Safari</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Technology */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">KLNK Protocol</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://klnk.tv" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>KLNK Direct Engine</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald" />
                </a>
              </li>
              <li>
                <a href="#why-tourpublish" className="hover:text-white transition-colors">Zero Markup Guarantee</a>
              </li>
              <li>
                <a href="#why-tourpublish" className="hover:text-white transition-colors">Apple & Google Wallet Pass</a>
              </li>
              <li>
                <a href="#operators" className="hover:text-white transition-colors">Operator Verification Standards</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">7-Day Free Cancellation</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Private Dispatch</h4>
            <p className="text-[11px] text-slate-400">
              Receive secret dates and unlisted yacht charters before public release.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email..."
                className="w-full px-3.5 py-2 rounded-xl bg-brand-card border border-white/10 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:border-brand-coral"
              />
              <button
                type="button"
                className="w-full py-2 rounded-xl bg-brand-coral hover:bg-brand-coral-hover text-white text-xs font-bold uppercase tracking-wider transition-all"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-12 mt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Tourpublish Ltd. All rights reserved. Crafted for world travelers.</p>
          <div className="flex items-center gap-6">
            <a href="#tours" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#tours" className="hover:text-slate-300">Terms of Service</a>
            <a href="#tours" className="hover:text-slate-300">Operator Portal</a>
            <a href="https://klnk.tv" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 text-brand-coral font-medium">
              Powered by KLNK
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
