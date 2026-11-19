'use client';

import React from 'react';
import { ShieldCheck, Smartphone, Search, Check, X } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Handcrafted Terroir Selection',
      desc: 'Browse private Italian yacht charters, grand cru vaults, and certified alpine traverses. Every journey is curated for privacy, historical authenticity, and small group intimacy.',
      icon: Search,
    },
    {
      num: '02',
      title: 'Direct Checkout via staging.klnk.tv',
      desc: 'Reserve directly with the verified Italian operator. Payment is processed securely via staging.klnk.tv with zero middleman commissions or hidden booking fees.',
      icon: ShieldCheck,
    },
    {
      num: '03',
      title: 'Instant Mobile Wallet Pass',
      desc: 'Receive an encrypted Apple Wallet or Google Wallet pass with offline marina gate entry, GPS meeting coordinates, and 24/7 Rome concierge contact.',
      icon: Smartphone,
    },
  ];

  return (
    <section id="why-tourpublish" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 border-b border-brand-border">
      {/* Editorial Header */}
      <div className="max-w-2xl space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-brand-coral font-semibold">
          The Direct Model
        </span>
        <h2 className="text-2xl sm:text-4xl font-sans font-bold text-brand-primary tracking-tight">
          How Direct Operator Booking Works
        </h2>
        <p className="text-brand-secondary text-xs sm:text-sm leading-relaxed">
          Traditional booking portals charge up to 35% commission and isolate travelers from their true host. Tourpublish connects you directly to generational Italian masters.
        </p>
      </div>

      {/* 3-Step Horizontal Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map(step => {
          const Icon = step.icon;
          return (
            <div
              key={step.num}
              className="rounded-xl bg-brand-surface border border-brand-border p-6 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-bold text-brand-coral">
                    {step.num}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#0e1013] border border-brand-border flex items-center justify-center text-brand-secondary">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-brand-primary">
                  {step.title}
                </h3>

                <p className="text-xs text-brand-secondary leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-brand-border/60 text-[11px] font-mono text-brand-muted flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald" />
                <span>Verified Italian Host Guarantee</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Transparent Comparison Table */}
      <div className="rounded-xl bg-brand-surface border border-brand-border overflow-hidden">
        <div className="p-4 sm:p-5 border-b border-brand-border bg-[#0e1013]/60">
          <h3 className="text-sm font-bold text-brand-primary">
            Why Direct on staging.klnk.tv Makes a Difference
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-brand-border text-xs">
          {/* Tourpublish Column */}
          <div className="p-5 space-y-3">
            <span className="text-xs font-bold text-brand-coral font-mono uppercase tracking-wider block">
              Tourpublish + staging.klnk.tv
            </span>
            <ul className="space-y-2 text-brand-secondary">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                <span><strong>0% Middleman Markups:</strong> Local operator rates straight to the host.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                <span><strong>Direct Host Line:</strong> Speak directly to your captain or sommelier.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                <span><strong>Instant Digital Wallet Pass:</strong> Apple &amp; Google Wallet offline check-in.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                <span><strong>7-Day Free Cancellation:</strong> Full 100% refund without penalty.</span>
              </li>
            </ul>
          </div>

          {/* Traditional OTA Column */}
          <div className="p-5 space-y-3 bg-[#0e1013]/30">
            <span className="text-xs font-bold text-brand-muted font-mono uppercase tracking-wider block">
              Traditional Travel Aggregators
            </span>
            <ul className="space-y-2 text-brand-muted">
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>25–35% hidden commission inflated into tour retail prices.</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>Anonymous call center support with no local Italian staff.</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>Paper PDF vouchers requiring physical hotel printing.</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>Complicated vouchers and non-refundable deposit traps.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
