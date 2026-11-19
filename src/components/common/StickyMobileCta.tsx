'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface StickyMobileCtaProps {
  onScrollToTours: () => void;
}

export const StickyMobileCta: React.FC<StickyMobileCtaProps> = ({ onScrollToTours }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0e1013]/95 backdrop-blur-md border-t border-brand-border px-4 py-3 flex items-center justify-between shadow-dropdown">
      <div className="flex flex-col">
        <span className="text-[10px] font-mono uppercase tracking-wider text-brand-coral font-bold">
          Luxury Italy Tours
        </span>
        <span className="text-xs text-brand-primary font-medium">
          Direct on staging.klnk.tv
        </span>
      </div>

      <button
        type="button"
        onClick={onScrollToTours}
        className="px-4 py-2 rounded-lg bg-brand-coral hover:bg-brand-coral-hover text-white text-xs font-semibold uppercase tracking-wider shadow-sm flex items-center gap-1.5 transition-colors cursor-pointer"
      >
        <span>Explore Tours</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
