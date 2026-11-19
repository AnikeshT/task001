'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie, X, ShieldCheck } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('tourpublish_cookie_consent');
      if (!consent) {
        const timer = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // LocalStorage unavailable
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('tourpublish_cookie_consent', 'accepted');
    } catch {}
    setVisible(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem('tourpublish_cookie_consent', 'declined');
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      className="fixed bottom-20 sm:bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 rounded-2xl bg-white border border-canvas-border p-5 shadow-2xl text-xs space-y-3.5"
      role="region"
      aria-label="Cookie consent banner"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 font-display font-bold text-sm text-ink">
          <Cookie className="w-4 h-4 text-brand-coral shrink-0" />
          <span>Privacy &amp; Cookie Preferences</span>
        </div>
        <button
          onClick={handleDecline}
          className="text-ink-muted hover:text-ink p-1 rounded-lg transition-colors cursor-pointer"
          aria-label="Close cookie banner"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      <p className="text-ink-soft leading-relaxed text-xs">
        We use essential cookies to remember your currency preference and filters, and anonymous analytics to ensure fast directory performance. We never sell your data or share it with third-party advertisers.
      </p>

      <div className="flex items-center justify-between gap-3 pt-2 border-t border-canvas-border">
        <Link
          href="/privacy"
          className="text-[11px] text-brand-coral hover:underline font-semibold"
        >
          Privacy Policy
        </Link>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleDecline}
            className="px-3 py-1.5 rounded-full text-ink-soft hover:text-ink bg-canvas-card border border-canvas-border text-[11px] font-semibold transition-colors cursor-pointer"
          >
            Essential Only
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="px-4 py-1.5 rounded-full bg-ink hover:bg-brand-coral text-canvas hover:text-white text-[11px] font-semibold transition-all shadow-xs cursor-pointer"
          >
            Accept All
          </button>
        </div>
      </div>
    </aside>
  );
};
