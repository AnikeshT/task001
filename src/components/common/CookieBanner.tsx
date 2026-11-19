'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Cookie, X } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('tourpublish_cookie_consent');
      if (!consent) {
        // Show banner after short delay for smooth loading
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

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-20 sm:bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 rounded-2xl bg-brand-card/95 border border-white/15 p-5 shadow-2xl backdrop-blur-xl text-slate-200 text-xs space-y-3.5"
          role="region"
          aria-label="Cookie consent banner"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <Cookie className="w-4 h-4 text-brand-coral shrink-0" />
              <span>Italian Privacy & Cookie Notice</span>
            </div>
            <button
              onClick={handleDecline}
              className="text-slate-400 hover:text-white p-1"
              aria-label="Close cookie banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-slate-400 leading-relaxed text-[11px]">
            We use strictly necessary cookies to remember your currency preference and filters, and privacy-first analytics to ensure high-speed directory performance. Under Italian GDPR, we never sell your personal data.
          </p>

          <div className="flex items-center justify-between gap-2 pt-1">
            <Link
              href="/privacy"
              className="text-[11px] text-brand-coral hover:underline font-medium"
            >
              Learn More
            </Link>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleDecline}
                className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 text-[11px] font-semibold transition-colors"
              >
                Essential Only
              </button>
              <button
                type="button"
                onClick={handleAccept}
                className="px-3.5 py-1.5 rounded-lg bg-brand-coral hover:bg-brand-coral-hover text-white text-[11px] font-bold shadow-md transition-all active:scale-95"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};
