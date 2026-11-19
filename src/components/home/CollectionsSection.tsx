'use client';

import React from 'react';
import { Anchor, Wine, Mountain, Sparkles, ArrowRight } from 'lucide-react';
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
      icon: <Anchor className="w-4 h-4 text-sky-400" />,
      badge: 'Maritime Master',
    },
    {
      id: 'tuscany',
      title: 'Tuscan Wine & Truffle Terroirs',
      region: 'Tuscany & Florence',
      subtitle: 'Private Brunello vault tastings, truffle hunting & Renaissance castles',
      count: '4 Expeditions',
      image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80',
      icon: <Wine className="w-4 h-4 text-rose-400" />,
      badge: 'Oenology Guild',
    },
    {
      id: 'dolomites',
      title: 'Dolomites Alpine & Via Ferrata',
      region: 'Dolomites & South Tyrol',
      subtitle: 'High-altitude ridge climbs, helicopter traverses & luxury rifugi',
      count: '2 Expeditions',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
      icon: <Mountain className="w-4 h-4 text-emerald-400" />,
      badge: 'Alpine Traverse',
    },
    {
      id: 'como',
      title: 'Lake Como & Northern Lakes',
      region: 'Lake Como & Northern Lakes',
      subtitle: 'Vintage Riva mahogany launches, Villa Balbianello & lakeside tranquility',
      count: '3 Expeditions',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
      icon: <Sparkles className="w-4 h-4 text-amber-400" />,
      badge: 'Lakeside Aristocracy',
    },
  ];

  return (
    <section id="collections" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10 border-b border-brand-border">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-coral font-semibold">
            Thematic Curations
          </span>
          <h2 className="text-2xl sm:text-4xl font-sans font-bold text-brand-primary tracking-tight">
            Curated Travel Themes
          </h2>
          <p className="text-brand-secondary text-xs sm:text-sm leading-relaxed">
            Choose by geographical terroir or immersive passion. Every collection is curated for discerning travelers who demand authentic host stewardship.
          </p>
        </div>

        <button
          onClick={() => {
            onSelectRegion('All');
            onScrollToTours();
          }}
          className="text-xs font-semibold text-brand-coral hover:text-brand-coral-hover flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
        >
          <span>View All 8 Expeditions</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 4 Thematic Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {collections.map(c => (
          <div
            key={c.id}
            onClick={() => {
              onSelectRegion(c.region);
              onScrollToTours();
            }}
            className="group rounded-xl bg-brand-surface border border-brand-border overflow-hidden cursor-pointer hover:border-brand-border-strong transition-colors flex flex-col justify-between"
          >
            <div className="relative aspect-[16/11] overflow-hidden bg-[#0e1013]">
              <div
                role="img"
                aria-label={c.title}
                className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                style={{ backgroundImage: `url('${c.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14161b] via-transparent to-transparent opacity-85" />
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-[#0e1013]/90 text-white border border-brand-border backdrop-blur-sm">
                {c.icon}
                <span>{c.badge}</span>
              </div>
            </div>

            <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-brand-primary group-hover:text-brand-coral transition-colors">
                  {c.title}
                </h3>
                <p className="text-xs text-brand-secondary line-clamp-2 leading-relaxed mt-1">
                  {c.subtitle}
                </p>
              </div>

              <div className="pt-2 border-t border-brand-border flex items-center justify-between text-[11px] font-mono text-brand-muted">
                <span>{c.count}</span>
                <span className="text-brand-coral font-sans font-medium flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
