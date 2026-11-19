'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ThemeAwareLogo } from '../common/ThemeAwareLogo';
import { Currency } from '../../lib/types';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentCurrency: Currency;
  onCurrencyChange: (c: Currency) => void;
  onOpenKlnkModal: (klnkUrl: string, tourTitle: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentCurrency,
  onCurrencyChange,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currencies: Currency[] = ['EUR', 'USD', 'GBP'];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#0e1013]/95 backdrop-blur-md border-b border-brand-border py-3'
          : 'bg-[#0e1013]/80 backdrop-blur-sm border-b border-brand-border/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Desktop Navigation */}
        <div className="flex items-center gap-10">
          <ThemeAwareLogo height={30} lightOnly />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-medium tracking-wide text-brand-secondary">
            <a
              href="#tours"
              className="hover:text-brand-primary transition-colors py-1"
            >
              Expeditions
            </a>
            <a
              href="#terroirs"
              className="hover:text-brand-primary transition-colors py-1"
            >
              Italian Terroirs
            </a>
            <a
              href="#operators"
              className="hover:text-brand-primary transition-colors py-1"
            >
              Master Operators
            </a>
            <a
              href="#journal"
              className="hover:text-brand-primary transition-colors py-1"
            >
              Journal
            </a>
            <a
              href="#why-tourpublish"
              className="hover:text-brand-primary transition-colors py-1"
            >
              How Direct Booking Works
            </a>
            <a
              href="#faq"
              className="hover:text-brand-primary transition-colors py-1"
            >
              Concierge &amp; FAQ
            </a>
          </nav>
        </div>

        {/* Right Actions: Currency Selector & Direct Link */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Segmented Currency Selector */}
          <div className="flex items-center rounded-lg bg-brand-surface border border-brand-border p-0.5 text-xs">
            {currencies.map(curr => (
              <button
                key={curr}
                type="button"
                onClick={() => onCurrencyChange(curr)}
                className={`px-2.5 py-1 rounded-md font-mono text-[11px] font-medium transition-colors ${
                  currentCurrency === curr
                    ? 'bg-brand-surface-elevated text-white font-semibold shadow-sm border border-brand-border-strong'
                    : 'text-brand-secondary hover:text-white'
                }`}
              >
                {curr}
              </button>
            ))}
          </div>

          {/* Staging Engine Status */}
          <a
            href="https://staging.klnk.tv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-brand-border bg-brand-surface text-brand-secondary hover:text-white hover:border-brand-border-strong transition-colors"
            title="Bookings are processed directly with verified Italian operators via staging.klnk.tv"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald" />
            <span className="font-mono text-[11px]">staging.klnk.tv</span>
          </a>

          {/* Primary Action Button */}
          <a
            href="#tours"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold bg-brand-coral hover:bg-brand-coral-hover text-white transition-colors shadow-sm"
          >
            <span>Explore Tours</span>
          </a>
        </div>

        {/* Mobile Hamburger & Currency */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => {
              const next = currentCurrency === 'EUR' ? 'USD' : currentCurrency === 'USD' ? 'GBP' : 'EUR';
              onCurrencyChange(next);
            }}
            className="px-2.5 py-1 rounded-lg text-xs font-mono font-semibold border border-brand-border bg-brand-surface text-white"
          >
            {currentCurrency}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-brand-surface border border-brand-border text-white hover:bg-brand-surface-hover"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0e1013] border-b border-brand-border px-5 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-brand-secondary">
            <a
              href="#tours"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1 flex items-center justify-between"
            >
              <span>Explore All Italian Tours</span>
              <ArrowUpRight className="w-4 h-4 text-brand-coral" />
            </a>
            <a
              href="#terroirs"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1"
            >
              Italian Terroirs
            </a>
            <a
              href="#operators"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1"
            >
              Master Italian Operators
            </a>
            <a
              href="#journal"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1"
            >
              Travel Journal
            </a>
            <a
              href="#why-tourpublish"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1"
            >
              How Direct Booking Works
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1"
            >
              Concierge &amp; FAQ
            </a>
          </nav>

          <div className="pt-4 border-t border-brand-border flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs text-brand-secondary">
              <span>Display Currency:</span>
              <div className="flex gap-1.5">
                {currencies.map(curr => (
                  <button
                    key={curr}
                    onClick={() => onCurrencyChange(curr)}
                    className={`px-2.5 py-1 rounded text-xs font-mono font-medium ${
                      currentCurrency === curr
                        ? 'bg-brand-coral text-white font-bold'
                        : 'bg-brand-surface text-brand-secondary'
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>

            <a
              href="#tours"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-brand-coral text-white"
            >
              Browse Italian Expeditions
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
