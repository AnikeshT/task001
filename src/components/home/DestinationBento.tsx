'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Compass, Sparkles } from 'lucide-react';
import { DESTINATIONS_BENTO } from '../../data/toursData';
import { DestinationRegion } from '../../lib/types';

interface DestinationBentoProps {
  onSelectRegion: (region: DestinationRegion) => void;
}

export const DestinationBento: React.FC<DestinationBentoProps> = ({ onSelectRegion }) => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-coral/10 border border-brand-coral/20 text-brand-coral text-xs font-semibold uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5" />
            <span>Curated Terroirs & Horizons</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-white leading-tight">
            Iconic Destinations,{' '}
            <span className="font-serif italic font-normal text-brand-coral">
              Unrivaled Access.
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            From vintage wooden gozzo cruisers along Capri’s limestone grottos to century-old Brunello cellars in Tuscany, explore regions curated for travelers who seek authenticity over ordinary tourism.
          </p>
        </div>

        <div className="hidden md:flex items-center gap-3 text-xs text-slate-400 font-mono">
          <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse"></span>
          <span>5 Core Terroirs • Handcrafted Itineraries</span>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[280px]">
        {DESTINATIONS_BENTO.map((item, index) => {
          const isFeatured = item.colSpan === 'featured';
          const isDouble = item.colSpan === 'double';

          const colSpanClass = isFeatured
            ? 'md:col-span-2 lg:col-span-2 md:row-span-2'
            : isDouble
            ? 'md:col-span-2 lg:col-span-2'
            : 'col-span-1';

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => onSelectRegion(item.region)}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-brand-card cursor-pointer transition-all duration-500 hover:border-brand-coral/50 hover:shadow-2xl hover:shadow-brand-coral/10 ${colSpanClass}`}
            >
              {/* Background Image */}
              <div
                role="img"
                aria-label={`Landscape view of ${item.name}, ${item.country}`}
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url('${item.imageUrl}')` }}
              />

              {/* Gradient Scrims for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/40 to-black/20 transition-opacity duration-300 group-hover:via-brand-dark/30" />

              {/* Top Floating Badge */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-black/60 backdrop-blur-md text-white border border-white/15">
                  {item.country}
                </span>

                <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-brand-coral group-hover:border-brand-coral group-hover:rotate-45">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Information */}
              <div className="absolute bottom-5 left-5 right-5 z-10 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-medium text-brand-coral">
                    {item.tripsCount} Curated {item.tripsCount === 1 ? 'Expedition' : 'Expeditions'}
                  </span>
                </div>

                <h3
                  className={`font-sans font-bold text-white transition-colors group-hover:text-brand-coral ${
                    isFeatured ? 'text-2xl sm:text-3xl' : 'text-xl'
                  }`}
                >
                  {item.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
                  {item.tagline}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
