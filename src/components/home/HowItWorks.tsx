'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Search, ShieldCheck, Smartphone, ArrowRight, CheckCircle2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Explore Italian Terroirs',
      subtitle: 'Verified local masters, zero generic aggregators',
      description:
        'Browse intimate private Riva charters, private Brunello cellar masterclasses, and certified Dolomites traverses. Every tour is vetted for historical authenticity, safety, and exclusivity.',
      badge: 'Italian Curation',
      icon: Search,
    },
    {
      step: '02',
      title: 'Direct Operator Checkout via staging.klnk.tv',
      subtitle: 'Zero commission markups, 100% transparent pricing',
      description:
        'When you select an Italian expedition, you checkout directly with the verified local operator powered by staging.klnk.tv secure payment infrastructure. No middleman agencies or surprise fees.',
      badge: 'staging.klnk.tv Engine',
      icon: ShieldCheck,
    },
    {
      step: '03',
      title: 'Instant Apple & Google Wallet Pass',
      subtitle: 'Live itinerary, GPS meeting points, offline entry',
      description:
        'Instantly receive your cryptographic digital boarding pass with embedded marina gate access, emergency concierge contacts, and live updates directly on your smartphone.',
      badge: 'Digital Pass',
      icon: Smartphone,
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-coral/10 border border-brand-coral/20 text-brand-coral text-xs font-semibold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Modern Way to Travel</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-sans font-bold text-white tracking-tight">
          How Tourpublish &{' '}
          <span className="font-serif italic font-normal text-brand-coral">
            KLNK Redefine Booking
          </span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Traditional booking portals charge up to 30% commission and hide the true host. Tourpublish connects discerning travelers directly to generational masters.
        </p>
      </div>

      {/* Steps Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {steps.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative rounded-3xl border border-white/10 bg-brand-card/80 p-8 space-y-6 flex flex-col justify-between hover:border-brand-coral/40 transition-all duration-300 group shadow-lg"
            >
              <div className="space-y-4">
                {/* Step Top Bar */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-3xl font-black text-brand-coral/40 group-hover:text-brand-coral transition-colors">
                    {item.step}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono uppercase tracking-wider bg-white/5 border border-white/10 text-slate-300">
                    {item.badge}
                  </span>
                </div>

                {/* Icon Box */}
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-coral group-hover:scale-110 group-hover:bg-brand-coral/10 transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-1">
                  <h3 className="text-xl font-sans font-bold text-white tracking-tight group-hover:text-brand-coral transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-400">
                    {item.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Feature Pill */}
              <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
                <span>Verified Direct Guarantee</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
