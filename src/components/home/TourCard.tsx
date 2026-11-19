'use client';

import React from 'react';
import { Star, Clock, MapPin, ShieldCheck, ArrowRight, Zap } from 'lucide-react';
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
    <article className="group flex flex-col rounded-xl bg-brand-surface border border-brand-border hover:border-brand-border-strong transition-all duration-200 overflow-hidden shadow-card hover:shadow-card-hover">
      {/* Media Header */}
      <div
        className="relative aspect-[16/10] w-full overflow-hidden bg-[#0e1013] cursor-pointer"
        onClick={() => onOpenDetail(tour)}
      >
        <div
          role="img"
          aria-label={`Panoramic photo of ${tour.name} in ${tour.destination}, Italy`}
          className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          style={{ backgroundImage: `url('${tour.heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14161b] via-transparent to-black/25 opacity-90" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            {tour.badge && (
              <span className="px-2.5 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-brand-coral text-white shadow-sm">
                {tour.badge}
              </span>
            )}
            <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#0e1013]/85 text-brand-secondary border border-brand-border backdrop-blur-sm">
              {tour.travelStyle}
            </span>
          </div>

          {tour.instantBooking && (
            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-brand-emerald text-black flex items-center gap-1">
              <Zap className="w-2.5 h-2.5 fill-black" />
              <span>Instant Pass</span>
            </span>
          )}
        </div>

        {/* Destination & Duration Floating Pill */}
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs text-white">
          <div className="flex items-center gap-1 font-medium bg-[#0e1013]/85 px-2.5 py-1 rounded-md border border-brand-border backdrop-blur-sm text-[11px]">
            <MapPin className="w-3 h-3 text-brand-coral" />
            <span>{tour.destination}</span>
          </div>
          <div className="flex items-center gap-1 font-mono font-medium bg-[#0e1013]/85 px-2.5 py-1 rounded-md border border-brand-border backdrop-blur-sm text-[11px] text-brand-secondary">
            <Clock className="w-3 h-3 text-brand-muted" />
            <span>{tour.durationLabel}</span>
          </div>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
        {/* Rating and Operator Row */}
        <div className="flex items-center justify-between text-xs text-brand-secondary">
          <div className="flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="font-semibold text-brand-primary">{tour.rating}</span>
            <span className="text-brand-muted text-[11px]">({tour.reviewCount})</span>
          </div>

          {/* Verified Italian Operator Badge */}
          <div
            className="flex items-center gap-1.5 text-xs text-brand-secondary hover:text-brand-primary transition-colors"
            title={`Operated by verified Italian master: ${tour.operator.name}`}
          >
            <img
              src={tour.operator.avatarUrl}
              alt={tour.operator.name}
              className="w-4 h-4 rounded-full object-cover border border-brand-border shrink-0"
            />
            <span className="truncate max-w-[130px] font-medium">{tour.operator.name}</span>
            <ShieldCheck className="w-3.5 h-3.5 text-brand-emerald shrink-0" />
          </div>
        </div>

        {/* Title and Subtitle */}
        <div className="space-y-1.5 cursor-pointer" onClick={() => onOpenDetail(tour)}>
          <h3 className="text-base font-bold text-brand-primary group-hover:text-brand-coral transition-colors leading-snug line-clamp-2">
            {tour.name}
          </h3>
          <p className="text-xs text-brand-secondary line-clamp-2 leading-relaxed">
            {tour.subtitle}
          </p>
        </div>

        {/* 2 Key Highlights */}
        <div className="pt-2 border-t border-brand-border space-y-1">
          {tour.highlights.slice(0, 2).map((h, i) => (
            <div key={i} className="flex items-start gap-1.5 text-xs text-brand-secondary">
              <span className="w-1 h-1 rounded-full bg-brand-coral mt-1.5 shrink-0" />
              <span className="line-clamp-1">{h}</span>
            </div>
          ))}
        </div>

        {/* Price & Actions Row */}
        <div className="pt-3.5 border-t border-brand-border flex items-center justify-between gap-3">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-brand-muted block">
              From per guest
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-mono font-bold text-brand-primary">
                {formatPrice(currentPrice, currency)}
              </span>
              <span className="text-[10px] text-brand-muted font-mono">all-inclusive</span>
            </div>
          </div>

          {/* Dual Action Buttons */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => onOpenDetail(tour)}
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-brand-secondary hover:text-white bg-[#0e1013] hover:bg-brand-surface-elevated border border-brand-border transition-colors cursor-pointer"
            >
              Itinerary
            </button>

            <button
              type="button"
              onClick={() => onBookKlnk(tour)}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-brand-coral hover:bg-brand-coral-hover text-white transition-colors flex items-center gap-1 shadow-sm cursor-pointer"
            >
              <span>Book Direct</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
