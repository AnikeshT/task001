'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie, X } from 'lucide-react';

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
      className="fixed bottom-20 sm:bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 rounded-xl bg-[#14161b] border border-brand-border-strong p-4 shadow-dropdown text-xs space-y-3"
      role="region"
      aria-label="Cookie consent banner"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 text-brand-primary font-bold text-xs sm:text-sm">
          <Cookie className="w-4 h-4 text-brand-coral shrink-0" />
          <span>Italian Privacy &amp; Cookie Notice</span>
        </div>
        <button
          onClick={handleDecline}
          className="text-brand-muted hover:text-white p-1"
          aria-label="Close cookie banner"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      <p className="text-brand-secondary leading-relaxed text-[11px]">
        We use essential cookies to maintain your currency preference and filters, and privacy-first analytics to ensure high-speed directory performance. Under Italian GDPR, we never sell your personal data.
      </p>

      <div className="flex items-center justify-between gap-2 pt-1 border-t border-brand-border">
        <Link
          href="/privacy"
          className="text-[11px] text-brand-coral hover:underline font-medium"
        >
          Privacy Policy
        </Link>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleDecline}
            className="px-2.5 py-1 rounded-md text-brand-secondary hover:text-white bg-brand-surface border border-brand-border text-[11px] font-medium transition-colors"
          >
            Essential Only
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="px-3 py-1 rounded-md bg-brand-coral hover:bg-brand-coral-hover text-white text-[11px] font-semibold transition-colors"
          >
            Accept All
          </button>
        </div>
      </div>
    </aside>
  );
};
