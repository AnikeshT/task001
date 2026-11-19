'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Star,
  Clock,
  Users,
  MapPin,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Zap,
} from 'lucide-react';
import { TourItem, Currency } from '../../lib/types';
import { formatPrice } from '../../lib/utils';

interface TourCardProps {
  tour: TourItem;
  currency: Currency;
  onOpenDetail: (tour: TourItem) => void;
  onBookKlnk: (tour: TourItem) => void;
}

export const TourCard: React.FC<TourCardProps> = ({
  tour,
  currency,
  onOpenDetail,
  onBookKlnk,
}) => {
  const currentPrice =
    currency === 'EUR' ? tour.priceEur : currency === 'GBP' ? tour.priceGbp : tour.priceUsd;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="group relative flex flex-col rounded-2xl bg-brand-card border border-white/10 hover:border-brand-coral/50 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-brand-coral/5"
    >
      {/* Media Header with Image Carousel / Featured Photo */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900 cursor-pointer" onClick={() => onOpenDetail(tour)}>
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url('${tour.heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-black/30" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            {tour.badge && (
              <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-brand-coral text-white shadow-md">
                {tour.badge}
              </span>
            )}
            <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-brand-dark/80 backdrop-blur-md text-white border border-white/10">
              {tour.travelStyle}
            </span>
          </div>

          {/* Instant KLNK Badge */}
          {tour.instantBooking && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-brand-emerald/90 text-white flex items-center gap-1 shadow-sm">
              <Zap className="w-3 h-3 fill-white" />
              <span>Instant KLNK</span>
            </span>
          )}
        </div>

        {/* Destination & Duration Bottom Floating Pill */}
        <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-xs text-white">
          <div className="flex items-center gap-1 font-medium bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full">
            <MapPin className="w-3.5 h-3.5 text-brand-coral" />
            <span>{tour.destination}</span>
          </div>
          <div className="flex items-center gap-1 font-medium bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full">
            <Clock className="w-3.5 h-3.5 text-slate-300" />
            <span>{tour.durationLabel}</span>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        {/* Rating and Operator Row */}
        <div className="flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="font-bold text-white">{tour.rating}</span>
            <span className="text-slate-400">({tour.reviewCount} reviews)</span>
          </div>

          {/* Operator Badge */}
          <div
            className="flex items-center gap-1.5 text-[11px] text-slate-300 hover:text-white"
            title={`Operated by ${tour.operator.name}`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-brand-emerald" />
            <span className="truncate max-w-[140px]">{tour.operator.name}</span>
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className="space-y-1.5 cursor-pointer" onClick={() => onOpenDetail(tour)}>
          <h3 className="text-lg font-bold text-white group-hover:text-brand-coral transition-colors leading-snug line-clamp-2">
            {tour.name}
          </h3>
          <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
            {tour.subtitle}
          </p>
        </div>

        {/* Highlights List */}
        <div className="pt-2 border-t border-white/10 space-y-1">
          {tour.highlights.slice(0, 2).map((h, i) => (
            <div key={i} className="flex items-start gap-1.5 text-xs text-slate-300">
              <span className="w-1 h-1 rounded-full bg-brand-coral mt-1.5 shrink-0" />
              <span className="line-clamp-1">{h}</span>
            </div>
          ))}
        </div>

        {/* Price & Action Row */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
          <div>
            <span className="text-[10px] uppercase font-semibold text-slate-400 block tracking-wider">
              From per guest
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-mono font-bold text-white">
                {formatPrice(currentPrice, currency)}
              </span>
              <span className="text-[11px] text-slate-400 font-mono">/ all-inclusive</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onOpenDetail(tour)}
              className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
            >
              Itinerary
            </button>

            <button
              type="button"
              onClick={() => onBookKlnk(tour)}
              className="px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-brand-coral hover:bg-brand-coral-hover text-white transition-all shadow-md flex items-center gap-1 active:scale-95 cursor-pointer"
            >
              <span>Book KLNK</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
