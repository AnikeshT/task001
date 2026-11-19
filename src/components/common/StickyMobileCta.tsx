'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface StickyMobileCtaProps {
  onScrollToTours: () => void;
}

export const StickyMobileCta: React.FC<StickyMobileCtaProps> = ({ onScrollToTours }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-canvas/95 backdrop-blur-md border-t border-canvas-border px-4 py-3 flex items-center justify-between shadow-lg">
      <div className="flex flex-col">
        <span className="text-[10px] font-mono uppercase tracking-wider text-brand-coral font-bold">
          Luxury Italy Tours
        </span>
        <span className="text-xs text-ink font-semibold">
          Direct on staging.klnk.tv
        </span>
      </div>

      <button
        type="button"
        onClick={onScrollToTours}
        className="btn-coral py-2 px-4 text-xs font-semibold cursor-pointer shadow-sm"
      >
        <span>Explore Trips</span>
        <ArrowRight className="w-3.5 h-3.5 ml-1" />
      </button>
    </div>
  );
};
