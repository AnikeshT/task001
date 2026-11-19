'use client';

import React from 'react';
import { Compass, Sparkles, ArrowRight } from 'lucide-react';

interface StickyMobileCtaProps {
  onScrollToTours: () => void;
}

export const StickyMobileCta: React.FC<StickyMobileCtaProps> = ({ onScrollToTours }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-brand-dark/95 backdrop-blur-md border-t border-white/10 px-4 py-3 flex items-center justify-between shadow-2xl safe-bottom">
      <div className="flex flex-col">
        <span className="text-[10px] font-mono uppercase tracking-wider text-brand-coral font-bold flex items-center gap-1">
          <Sparkles className="w-3 h-3" />
          <span>Luxury Italy Tours</span>
        </span>
        <span className="text-xs text-white font-semibold">
          Direct on staging.klnk.tv
        </span>
      </div>

      <button
        type="button"
        onClick={onScrollToTours}
        className="px-4 py-2 rounded-full bg-brand-coral hover:bg-brand-coral-hover text-white text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5 active:scale-95 cursor-pointer"
      >
        <span>Explore Tours</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
