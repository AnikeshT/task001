'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Zap,
  DollarSign,
  HeartHandshake,
  QrCode,
  Sparkles,
} from 'lucide-react';

export const WhyTourpublish: React.FC = () => {
  const perks = [
    {
      icon: <DollarSign className="w-6 h-6 text-brand-emerald" />,
      title: 'Zero Middleman Markups',
      description:
        'Traditional travel agencies inflate Italian tour prices by 25–35%. On Tourpublish, all bookings route directly to Italian operators via staging.klnk.tv at their authentic local rate.',
    },
    {
      icon: <Zap className="w-6 h-6 text-brand-coral" />,
      title: 'Instant staging.klnk.tv Digital Pass',
      description:
        'Your Italian itinerary, marina gate entry, and skipper contacts sync in 1 click to your Apple Wallet or Google Wallet with offline interactive maps.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-sky-400" />,
      title: 'Vetted Italian Master Operators',
      description:
        'Every Italian operator undergoes strict on-the-ground verification: UIAGM alpine guides in Cortina, licensed Riva boat skippers in Amalfi, and DOCG Brunello cellars in Tuscany.',
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-amber-400" />,
      title: '7-Day Free Cancellation',
      description:
        'Plans change. Enjoy full refunds on all curated tours up to 7 days before departure with zero penalty fees or complicated ticket exchanges.',
    },
  ];

  return (
    <section id="why-tourpublish" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      <div className="rounded-3xl bg-gradient-to-br from-brand-card via-brand-dark to-brand-card border border-white/10 p-8 sm:p-12 md:p-16 shadow-2xl relative overflow-hidden">
        {/* Subtle Decorative Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-coral/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-coral">
            <Sparkles className="w-4 h-4" />
            <span>The Tourpublish Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight leading-tight">
            Why Modern Travelers Choose Tourpublish + KLNK
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            We are redefining experiential travel by connecting discerning travelers directly with the craftsmen who lead each voyage.
          </p>
        </div>

        {/* Perks Grid */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {perks.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="space-y-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-md">
                {p.icon}
              </div>
              <h3 className="text-base font-bold text-white">{p.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
