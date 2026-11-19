'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ThemeAwareLogo } from '../common/ThemeAwareLogo';
import { Currency } from '../../lib/types';
import { Globe, Sparkles, Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  currentCurrency: Currency;
  onCurrencyChange: (c: Currency) => void;
  onOpenKlnkModal: (klnkUrl: string, tourTitle: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentCurrency,
  onCurrencyChange,
  onOpenKlnkModal,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currencies: Currency[] = ['USD', 'EUR', 'GBP'];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-dark/85 backdrop-blur-md border-b border-white/10 shadow-xl py-3.5'
          : 'bg-gradient-to-b from-brand-dark/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-8">
          <ThemeAwareLogo height={34} lightOnly />

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs uppercase tracking-widest font-semibold text-slate-300">
            <a
              href="#tours"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Expeditions</span>
            </a>
            <a
              href="#collections"
              className="hover:text-white transition-colors"
            >
              Curated Collections
            </a>
            <a
              href="#operators"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Master Operators</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald"></span>
            </a>
            <a
              href="#why-tourpublish"
              className="hover:text-white transition-colors"
            >
              Why KLNK
            </a>
            <a
              href="#faq"
              className="hover:text-white transition-colors"
            >
              FAQ
            </a>
          </nav>
        </div>

        {/* Right Actions: Currency Selector, KLNK Quick Link & Operator Join */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Currency Pill */}
          <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1 text-xs">
            {currencies.map(curr => (
              <button
                key={curr}
                type="button"
                onClick={() => onCurrencyChange(curr)}
                className={`px-2.5 py-1 rounded-full font-mono text-[11px] font-medium transition-all ${
                  currentCurrency === curr
                    ? 'bg-brand-coral text-white font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {curr}
              </button>
            ))}
          </div>

          {/* KLNK Live Status Pill */}
          <a
            href="https://klnk.tv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-brand-emerald/30 bg-brand-emerald/10 text-brand-emerald hover:bg-brand-emerald/20 transition-all"
            title="All tours powered by verified KLNK instant direct checkout"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-emerald"></span>
            </span>
            <span className="font-mono text-[11px] font-semibold">KLNK Engine Live</span>
          </a>

          {/* Primary CTA */}
          <a
            href="#tours"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-white text-brand-dark hover:bg-slate-200 transition-all shadow-md active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-coral" />
            <span>Discover Tours</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          {/* Mobile Currency Toggle */}
          <button
            type="button"
            onClick={() => {
              const next = currentCurrency === 'USD' ? 'EUR' : currentCurrency === 'EUR' ? 'GBP' : 'USD';
              onCurrencyChange(next);
            }}
            className="px-2.5 py-1 rounded-full text-xs font-mono font-bold border border-white/20 bg-white/5 text-white"
          >
            {currentCurrency}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-brand-dark border-b border-white/10 px-6 py-6 space-y-4 animate-fade-in">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-300">
            <a
              href="#tours"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1 flex items-center justify-between"
            >
              <span>Explore All Expeditions</span>
              <ArrowUpRight className="w-4 h-4 text-brand-coral" />
            </a>
            <a
              href="#collections"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1"
            >
              Curated Collections
            </a>
            <a
              href="#operators"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1"
            >
              Master Tour Operators
            </a>
            <a
              href="#why-tourpublish"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1"
            >
              Why Book via KLNK
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1"
            >
              Frequently Asked Questions
            </a>
          </nav>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Display Currency:</span>
              <div className="flex gap-1.5">
                {currencies.map(curr => (
                  <button
                    key={curr}
                    onClick={() => onCurrencyChange(curr)}
                    className={`px-2.5 py-1 rounded text-xs font-mono font-medium ${
                      currentCurrency === curr
                        ? 'bg-brand-coral text-white font-bold'
                        : 'bg-white/5 text-slate-300'
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
              className="w-full text-center py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-coral text-white shadow-lg"
            >
              Browse 2026 Expeditions
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
