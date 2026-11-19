'use client';

import React from 'react';
import { Star, Clock, MapPin, ShieldCheck, ArrowRight, ArrowUpRight, Zap } from 'lucide-react';
import { TourItem, Currency } from '../../lib/types';
import { formatPrice } from '../../lib/utils';

interface TourCardProps {
  tour: TourItem;
  currency: Currency;
  onOpenDetail?: (tour: TourItem) => void;
  onBookKlnk?: (tour: TourItem) => void;
}

export const TourCard: React.FC<TourCardProps> = ({
  tour,
  currency,
  onOpenDetail,
}) => {
  const currentPrice =
    currency === 'EUR' ? tour.priceEur : currency === 'GBP' ? tour.priceGbp : tour.priceUsd;

  return (
    <article className="wayfare-card flex flex-col overflow-hidden group">
      {/* Media Header */}
      <div
        className="relative aspect-[16/10] overflow-hidden cursor-pointer"
        onClick={() => onOpenDetail?.(tour)}
      >
        <div
          role="img"
          aria-label={`Panoramic photograph of ${tour.name} in ${tour.destination}, Italy`}
          className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          style={{ backgroundImage: `url('${tour.heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 opacity-80" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-canvas-card/90 backdrop-blur-md text-ink border border-canvas-border shadow-xs">
            {tour.destination} · {tour.durationLabel}
          </span>

          {tour.badge && (
            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-brand-coral text-white shadow-xs">
              {tour.badge}
            </span>
          )}
        </div>

        {/* Travel Style Pill */}
        <div className="absolute bottom-3 left-3.5 flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-ink/80 text-canvas backdrop-blur-sm">
            {tour.travelStyle}
          </span>
          {tour.instantBooking && (
            <span className="px-2 py-1 rounded-md text-[11px] font-semibold bg-emerald-500 text-white flex items-center gap-1 shadow-xs">
              <Zap className="w-2.5 h-2.5 fill-white" />
              <span>Instant Pass</span>
            </span>
          )}
        </div>
      </div>

      {/* Card Content Body */}
      <div className="flex flex-1 flex-col p-6 justify-between space-y-4">
        <div className="space-y-3">
          {/* Operator and Rating Row */}
          <div className="flex items-center justify-between text-xs text-ink-muted">
            <div className="flex items-center gap-1.5 font-semibold text-ink">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>{tour.rating}</span>
              <span className="text-ink-muted font-normal">({tour.reviewCount} reviews)</span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-ink-soft">
              <img
                src={tour.operator.avatarUrl}
                alt={tour.operator.name}
                className="w-4 h-4 rounded-full object-cover border border-canvas-border shrink-0"
              />
              <span className="truncate max-w-[130px] font-medium">{tour.operator.name}</span>
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            </div>
          </div>

          {/* Title */}
          <div
            className="cursor-pointer"
            onClick={() => onOpenDetail?.(tour)}
          >
            <h3 className="font-display text-xl font-bold text-ink leading-snug group-hover:text-brand-coral transition-colors">
              {tour.name}
            </h3>
            <p className="text-xs text-ink-soft mt-1 leading-relaxed line-clamp-2">
              {tour.subtitle}
            </p>
          </div>

          {/* Key Inclusions preview */}
          <div className="pt-2 border-t border-canvas-border-subtle space-y-1">
            {tour.highlights.slice(0, 2).map((h, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-ink-soft">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-coral shrink-0" />
                <span className="truncate">{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & Dual Action Buttons */}
        <div className="pt-4 border-t border-canvas-border flex items-center justify-between gap-3">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-ink-muted block font-medium">
              From per traveler
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-display font-extrabold text-ink">
                {formatPrice(currentPrice, currency)}
              </span>
              <span className="text-[11px] text-ink-muted">all-inclusive</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onOpenDetail?.(tour)}
              className="px-3.5 py-2 rounded-full text-xs font-semibold text-ink hover:text-white bg-canvas hover:bg-ink border border-canvas-border transition-colors cursor-pointer"
            >
              Itinerary
            </button>

            <a
              href="https://staging.klnk.tv/pushpak/2de2d421/italy-trip"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-coral py-2 px-4 text-xs font-semibold cursor-pointer"
            >
              <span>Book Direct</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
