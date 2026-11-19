'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ThemeAwareLogo } from '../common/ThemeAwareLogo';
import { Currency } from '../../lib/types';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  currentCurrency: Currency;
  onCurrencyChange: (c: Currency) => void;
  onOpenKlnkModal?: (klnkUrl: string, tourTitle: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentCurrency,
  onCurrencyChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currencies: Currency[] = ['EUR', 'USD', 'GBP'];

  return (
    <header className="sticky top-0 z-50 border-b border-canvas-border bg-canvas/95 backdrop-blur-md py-4">
      <div className="container-custom flex items-center justify-between">
        {/* Brand Logo & Tagline */}
        <div className="flex items-center gap-10">
          <ThemeAwareLogo height={36} />

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-ink-soft">
            <a href="#journey-preview" className="hover:text-ink transition-colors flex items-center gap-1.5 text-brand-coral">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-coral animate-ping" />
              <span>Itineraries</span>
            </a>
            <a href="#trip-matcher" className="hover:text-ink transition-colors">
              Route Matcher
            </a>
            <a href="#trips" className="hover:text-ink transition-colors">
              Browse Trips
            </a>
            <a href="#destinations" className="hover:text-ink transition-colors">
              Destinations
            </a>
            <a href="#philosophy" className="hover:text-ink transition-colors">
              Why Direct
            </a>
            <a href="#reviews" className="hover:text-ink transition-colors">
              Reviews
            </a>
            <a href="#faq" className="hover:text-ink transition-colors">
              FAQ
            </a>
          </nav>
        </div>

        {/* Right Actions: Currency & CTA */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Segmented Currency Pill */}
          <div className="flex items-center rounded-full bg-canvas-card border border-canvas-border p-1 text-xs">
            {currencies.map(curr => (
              <button
                key={curr}
                type="button"
                onClick={() => onCurrencyChange(curr)}
                className={`px-2.5 py-1 rounded-full font-mono text-[11px] font-semibold transition-all cursor-pointer ${
                  currentCurrency === curr
                    ? 'bg-ink text-canvas shadow-xs'
                    : 'text-ink-muted hover:text-ink'
                }`}
              >
                {curr}
              </button>
            ))}
          </div>

          {/* Staging Engine Badge */}
          <a
            href="https://staging.klnk.tv/pushpak/2de2d421/italy-trip"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-canvas-border bg-canvas-card text-ink-soft hover:text-ink transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span className="font-mono text-[11px]">staging.klnk.tv</span>
          </a>

          {/* Wayfare Primary Pill Button */}
          <a
            href="#trips"
            className="btn-dark text-xs py-2 px-5"
          >
            <span>Explore trips</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => {
              const next = currentCurrency === 'EUR' ? 'USD' : currentCurrency === 'USD' ? 'GBP' : 'EUR';
              onCurrencyChange(next);
            }}
            className="px-2.5 py-1 rounded-full text-xs font-mono font-bold border border-canvas-border bg-canvas-card text-ink"
          >
            {currentCurrency}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl border border-canvas-border bg-canvas-card text-ink"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-canvas border-b border-canvas-border px-5 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-base font-semibold text-ink-soft">
            <a
              href="#trips"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-ink py-1 flex items-center justify-between"
            >
              <span>Explore Italian Trips</span>
              <ArrowRight className="w-4 h-4 text-brand-coral" />
            </a>
            <a
              href="#destinations"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-ink py-1"
            >
              Eight Italian Terroirs
            </a>
            <a
              href="#philosophy"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-ink py-1"
            >
              Small on Purpose, Local by Design
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-ink py-1"
            >
              Traveler Reviews
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-ink py-1"
            >
              FAQ &amp; Concierge
            </a>
          </nav>

          <div className="pt-4 border-t border-canvas-border">
            <a
              href="https://staging.klnk.tv/pushpak/2de2d421/italy-trip"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-coral w-full text-center text-xs py-3"
            >
              <span>Reserve Direct on staging.klnk.tv</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
