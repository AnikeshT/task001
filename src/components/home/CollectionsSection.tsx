'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Compass, ArrowRight, Anchor, Wine, Mountain, Sparkles } from 'lucide-react';
import { DestinationRegion } from '../../lib/types';

interface CollectionsSectionProps {
  onSelectRegion: (r: DestinationRegion) => void;
  onScrollToTours: () => void;
}

interface CollectionItem {
  id: string;
  title: string;
  region: DestinationRegion;
  subtitle: string;
  count: string;
  image: string;
  icon: React.ReactNode;
  badge: string;
}

export const CollectionsSection: React.FC<CollectionsSectionProps> = ({
  onSelectRegion,
  onScrollToTours,
}) => {
  const collections: CollectionItem[] = [
    {
      id: 'amalfi',
      title: 'Amalfi Coast & Capri Privé',
      region: 'Amalfi Coast & Capri',
      subtitle: 'Vintage Riva yacht charters, secluded grottos & cliffside villas',
      count: '3 Expeditions',
      image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
      icon: <Anchor className="w-5 h-5 text-sky-400" />,
      badge: 'Mediterranean Signature',
    },
    {
      id: 'tuscany',
      title: 'Tuscan Wine & Truffle Terroirs',
      region: 'Tuscany & Florence',
      subtitle: 'Private Brunello vault tastings, truffle hunting & Renaissance castles',
      count: '4 Expeditions',
      image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80',
      icon: <Wine className="w-5 h-5 text-rose-400" />,
      badge: 'Oenology Guild',
    },
    {
      id: 'dolomites',
      title: 'Dolomites Alpine & Via Ferrata',
      region: 'Dolomites & South Tyrol',
      subtitle: 'High-altitude ridge climbs, helicopter traverses & luxury rifugi',
      count: '2 Expeditions',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
      icon: <Mountain className="w-5 h-5 text-emerald-400" />,
      badge: 'Alpine Adventure',
    },
    {
      id: 'global',
      title: 'Rare Wilderness & Stargazing',
      region: 'Global Expeditions',
      subtitle: 'Socotra Dragon Blood forests & Namibia Dark Sky conservation safaris',
      count: '3 Expeditions',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
      icon: <Sparkles className="w-5 h-5 text-amber-400" />,
      badge: 'Uncharted Frontiers',
    },
  ];

  return (
    <section id="collections" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-coral">
            <Compass className="w-4 h-4" />
            <span>Curated Travel Portfolios</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">
            Handpicked Seasonal Collections
          </h2>
          <p className="text-sm text-slate-400 max-w-xl">
            Choose by geography or immersive passion. Every journey in our collections is verified for elite quality and authentic local operator stewardship.
          </p>
        </div>

        <button
          onClick={() => {
            onSelectRegion('All');
            onScrollToTours();
          }}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white transition-colors cursor-pointer"
        >
          <span>View All Expeditions</span>
          <ArrowRight className="w-4 h-4 text-brand-coral" />
        </button>
      </div>

      {/* Grid of Curated Collections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {collections.map((col, idx) => (
          <motion.div
            key={col.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            onClick={() => {
              onSelectRegion(col.region);
              onScrollToTours();
            }}
            className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-brand-coral/50 transition-all duration-300 shadow-xl"
          >
            {/* Background Image with Zoom */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url('${col.image}')` }}
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />

            {/* Top Badges */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide uppercase bg-brand-dark/70 backdrop-blur-md text-white border border-white/10">
                {col.badge}
              </span>
              <div className="p-2 rounded-full bg-brand-dark/70 backdrop-blur-md border border-white/10">
                {col.icon}
              </div>
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-4 left-4 right-4 space-y-2">
              <span className="text-[11px] font-mono font-medium text-brand-coral tracking-wider uppercase">
                {col.count}
              </span>
              <h3 className="text-xl font-bold text-white group-hover:text-brand-coral transition-colors leading-snug">
                {col.title}
              </h3>
              <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                {col.subtitle}
              </p>

              <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-white group-hover:translate-x-1 transition-transform">
                <span>Explore Region</span>
                <ArrowRight className="w-3.5 h-3.5 text-brand-coral" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
