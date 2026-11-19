'use client';

import React from 'react';
import { ShieldCheck, Zap, DollarSign, HeartHandshake } from 'lucide-react';

export const WhyTourpublish: React.FC = () => {
  const perks = [
    {
      icon: <DollarSign className="w-5 h-5 text-brand-emerald" />,
      title: 'Zero Middleman Markups',
      description:
        'Traditional travel agencies inflate Italian tour prices by 25–35%. On Tourpublish, all bookings route directly to Italian operators via staging.klnk.tv at their authentic local rate.',
    },
    {
      icon: <Zap className="w-5 h-5 text-brand-coral" />,
      title: 'Instant staging.klnk.tv Digital Pass',
      description:
        'Your Italian itinerary, marina gate entry, and skipper contacts sync in 1 click to your Apple Wallet or Google Wallet with offline interactive maps.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-sky-400" />,
      title: 'Vetted Italian Master Operators',
      description:
        'Every Italian operator undergoes strict on-the-ground verification: UIAGM alpine guides in Cortina, licensed Riva boat skippers in Amalfi, and DOCG Brunello cellars in Tuscany.',
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-amber-400" />,
      title: '7-Day Free Cancellation',
      description:
        'Plans change. Enjoy full refunds on all curated Italian tours up to 7 days before departure with zero penalty fees or complicated ticket exchanges.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10 border-b border-brand-border">
      {/* Header */}
      <div className="max-w-2xl space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-brand-coral font-semibold">
          Platform Guarantees
        </span>
        <h2 className="text-2xl sm:text-4xl font-sans font-bold text-brand-primary tracking-tight">
          The Tourpublish Standard
        </h2>
        <p className="text-brand-secondary text-xs sm:text-sm leading-relaxed">
          Four uncompromised principles that protect travelers and local Italian craftsmen on every expedition.
        </p>
      </div>

      {/* 4 Clean Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {perks.map((p, idx) => (
          <div
            key={idx}
            className="rounded-xl bg-brand-surface border border-brand-border p-6 space-y-3 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#0e1013] border border-brand-border flex items-center justify-center">
                {p.icon}
              </div>
              <h3 className="text-sm font-bold text-brand-primary">{p.title}</h3>
              <p className="text-xs text-brand-secondary leading-relaxed">{p.description}</p>
            </div>

            <div className="pt-2 text-[10px] font-mono uppercase tracking-wider text-brand-muted">
              Standard 0{idx + 1}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
