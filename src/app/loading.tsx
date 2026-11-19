import React from 'react';
import { Compass } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-brand-dark flex flex-col items-center justify-center p-6 space-y-6">
      {/* Animated Brand Pulse */}
      <div className="relative">
        <div className="w-16 h-16 rounded-3xl bg-brand-coral/10 border border-brand-coral/30 flex items-center justify-center text-brand-coral animate-pulse">
          <Compass className="w-8 h-8 animate-spin" style={{ animationDuration: '6s' }} />
        </div>
        <div className="absolute -inset-1 rounded-3xl bg-brand-coral/20 blur-xl animate-pulse pointer-events-none" />
      </div>

      <div className="text-center space-y-2">
        <p className="text-xs uppercase tracking-widest font-mono text-brand-coral font-bold">
          Tourpublish Conciergerie
        </p>
        <p className="text-sm text-slate-300">
          Loading Curated Luxury Tours in Italy...
        </p>
      </div>

      {/* Skeleton Mock Bar */}
      <div className="w-48 h-1 rounded-full bg-white/10 overflow-hidden relative">
        <div className="w-1/3 h-full bg-brand-coral rounded-full animate-[pulse_1.5s_ease-in-out_infinite]" />
      </div>
    </div>
  );
}
