'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { DESTINATIONS_BENTO } from '../../data/toursData';
import { DestinationRegion } from '../../lib/types';

interface DestinationBentoProps {
  onSelectRegion: (region: DestinationRegion) => void;
}

export const DestinationBento: React.FC<DestinationBentoProps> = ({ onSelectRegion }) => {
  return (
    <section id="terroirs" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10 border-b border-brand-border">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-coral font-semibold">
            Geographic Curation
          </span>
          <h2 className="text-2xl sm:text-4xl font-sans font-bold text-brand-primary tracking-tight">
            Explore by Italian Terroir
          </h2>
          <p className="text-brand-secondary text-xs sm:text-sm leading-relaxed">
            From the vertical pastel cliffs of Positano to the pale dolomite limestone spires of Cortina, browse hand-crafted departures organized by regional geography.
          </p>
        </div>

        <div className="text-xs text-brand-muted font-mono shrink-0">
          5 Core Regions • 8 Handcrafted Expeditions
        </div>
      </div>

      {/* Bento Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[240px] sm:auto-rows-[260px]">
        {DESTINATIONS_BENTO.map(item => {
          const isFeatured = item.colSpan === 'featured';
          const isDouble = item.colSpan === 'double';

          const colSpanClass = isFeatured
            ? 'md:col-span-2 lg:col-span-2 md:row-span-2'
            : isDouble
            ? 'md:col-span-2 lg:col-span-2'
            : 'col-span-1';

          return (
            <div
              key={item.id}
              onClick={() => onSelectRegion(item.region)}
              className={`group relative overflow-hidden rounded-xl border border-brand-border bg-brand-surface cursor-pointer transition-colors duration-200 hover:border-brand-border-strong ${colSpanClass}`}
            >
              {/* Background Image */}
              <div
                role="img"
                aria-label={`Landscape view of ${item.name}, ${item.country}`}
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                style={{ backgroundImage: `url('${item.imageUrl}')` }}
              />

              {/* Controlled Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1013] via-[#0e1013]/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-75" />

              {/* Top Meta Tag */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono uppercase tracking-wider bg-[#0e1013]/85 text-brand-secondary border border-brand-border backdrop-blur-sm">
                  {item.tripsCount} {item.tripsCount === 1 ? 'Expedition' : 'Expeditions'}
                </span>

                <div className="w-8 h-8 rounded-lg bg-[#0e1013]/80 border border-brand-border flex items-center justify-center text-brand-secondary transition-colors group-hover:text-white group-hover:bg-brand-coral group-hover:border-brand-coral">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-4 left-4 right-4 z-10 space-y-1">
                <h3
                  className={`font-sans font-bold text-white transition-colors group-hover:text-brand-coral ${
                    isFeatured ? 'text-xl sm:text-2xl' : 'text-base sm:text-lg'
                  }`}
                >
                  {item.name}
                </h3>
                <p className="text-xs text-brand-secondary line-clamp-2 leading-relaxed">
                  {item.tagline}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
