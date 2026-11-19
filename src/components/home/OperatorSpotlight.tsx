'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, MessageSquare, Star, ArrowRight } from 'lucide-react';
import { MASTER_OPERATORS } from '../../data/toursData';

interface OperatorSpotlightProps {
  onSelectOperatorTour: (operatorName: string) => void;
}

export const OperatorSpotlight: React.FC<OperatorSpotlightProps> = ({
  onSelectOperatorTour,
}) => {
  const operatorsList = Object.values(MASTER_OPERATORS);

  return (
    <section id="operators" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-emerald">
          <ShieldCheck className="w-4 h-4" />
          <span>Vetted Independent Masters</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">
          Meet the Local Operators Behind Tourpublish
        </h2>
        <p className="text-sm text-slate-400 leading-relaxed">
          We don’t aggregate anonymous mass tours. Every expedition in Tourpublish is designed, owned, and guided by recognized local craftsmen, certified mountaineers, and heritage estate guilds.
        </p>
      </div>

      {/* Operator Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {operatorsList.map((op, idx) => (
          <motion.div
            key={op.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-6 rounded-2xl bg-brand-card border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between space-y-4 shadow-xl"
          >
            {/* Top Row: Avatar & Bio */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div
                  className="w-16 h-16 rounded-2xl bg-cover bg-center border border-white/20 shrink-0 shadow-md"
                  style={{ backgroundImage: `url('${op.avatarUrl}')` }}
                />
                <div className="overflow-hidden min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-base font-bold text-white truncate">{op.name}</h3>
                    <ShieldCheck className="w-4 h-4 text-brand-emerald shrink-0" />
                  </div>
                  <p className="text-xs text-brand-coral font-medium truncate">{op.tagline}</p>
                  <p className="text-[11px] text-slate-400">{op.location} • Est. {op.foundedYear}</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                {op.bio}
              </p>
            </div>

            {/* Bottom Row: Stats & View Tours */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
              <div className="flex items-center gap-1 text-amber-400 font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span>{op.rating}</span>
                <span className="text-slate-400 font-normal">({op.reviewCount})</span>
              </div>

              <button
                type="button"
                onClick={() => onSelectOperatorTour(op.name)}
                className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1 group transition-colors cursor-pointer"
              >
                <span>View Expeditions</span>
                <ArrowRight className="w-3.5 h-3.5 text-brand-coral group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
