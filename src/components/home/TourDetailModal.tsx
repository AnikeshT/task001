'use client';

import React, { useState, useEffect } from 'react';
import {
  X,
  Star,
  MapPin,
  Clock,
  ShieldCheck,
  Check,
  ChevronDown,
  ChevronUp,
  Zap,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { TourItem, Currency } from '../../lib/types';
import { formatPrice } from '../../lib/utils';

interface TourDetailModalProps {
  tour: TourItem | null;
  currency: Currency;
  isOpen: boolean;
  onClose: () => void;
  onBookKlnk: (tour: TourItem) => void;
}

export const TourDetailModal: React.FC<TourDetailModalProps> = ({
  tour,
  currency,
  isOpen,
  onClose,
  onBookKlnk,
}) => {
  const [activeTab, setActiveTab] = useState<'itinerary' | 'included' | 'operator'>('itinerary');
  const [expandedDay, setExpandedDay] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !tour) return null;

  const currentPrice =
    currency === 'EUR' ? tour.priceEur : currency === 'GBP' ? tour.priceGbp : tour.priceUsd;

  const activePhoto = selectedImage || tour.heroImage;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/85 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#14161b] border border-brand-border-strong rounded-xl shadow-modal overflow-hidden flex flex-col max-h-[90vh] my-auto"
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-tour-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 z-20 p-2 rounded-lg bg-[#0e1013]/80 hover:bg-[#0e1013] text-brand-secondary hover:text-white border border-brand-border transition-colors cursor-pointer"
          aria-label="Close details"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto custom-scrollbar flex-1">
          {/* Header Image & Gallery */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#0e1013]">
            <div
              role="img"
              aria-label={`Photo of ${tour.name}`}
              className="w-full h-full bg-cover bg-center transition-all duration-300"
              style={{ backgroundImage: `url('${activePhoto}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#14161b] via-[#14161b]/30 to-transparent" />

            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded text-xs font-semibold bg-brand-coral text-white shadow-sm">
                {tour.badge || tour.travelStyle}
              </span>
              <span className="px-2.5 py-1 rounded text-xs font-medium bg-[#0e1013]/90 text-white border border-brand-border flex items-center gap-1">
                <MapPin className="w-3 h-3 text-brand-coral" />
                <span>{tour.destination}</span>
              </span>
            </div>

            {/* Gallery Thumbnails */}
            <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2 overflow-x-auto no-scrollbar">
              {tour.galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`w-14 h-10 rounded-md overflow-hidden shrink-0 border transition-all cursor-pointer ${
                    activePhoto === img
                      ? 'border-brand-coral scale-105 shadow-sm'
                      : 'border-brand-border opacity-70 hover:opacity-100'
                  }`}
                  aria-label={`View image ${idx + 1}`}
                >
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${img}')` }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details Body */}
          <div className="p-6 space-y-6">
            {/* Header Information */}
            <div className="space-y-2 border-b border-brand-border pb-5">
              <div className="flex flex-wrap items-center gap-3 text-xs text-brand-secondary font-mono">
                <span className="flex items-center gap-1 text-amber-400 font-semibold font-sans">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{tour.rating}</span>
                </span>
                <span>•</span>
                <span>{tour.reviewCount} verified guest reviews</span>
                <span>•</span>
                <span className="text-brand-coral font-medium">{tour.groupSize}</span>
                <span>•</span>
                <span>{tour.activityLevel} Activity</span>
              </div>

              <h2
                id="modal-tour-title"
                className="text-xl sm:text-2xl font-bold text-brand-primary leading-snug"
              >
                {tour.name}
              </h2>
              <p className="text-xs sm:text-sm text-brand-secondary leading-relaxed">
                {tour.description}
              </p>
            </div>

            {/* Key Highlights */}
            <div className="space-y-2.5">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-primary">
                Expedition Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {tour.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-brand-secondary">
                    <Check className="w-3.5 h-3.5 text-brand-coral shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="border-b border-brand-border flex items-center gap-6 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setActiveTab('itinerary')}
                className={`pb-2.5 transition-colors cursor-pointer border-b-2 ${
                  activeTab === 'itinerary'
                    ? 'border-brand-coral text-white'
                    : 'border-transparent text-brand-secondary hover:text-white'
                }`}
              >
                Day-by-Day Itinerary ({tour.itinerary.length} Days)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('included')}
                className={`pb-2.5 transition-colors cursor-pointer border-b-2 ${
                  activeTab === 'included'
                    ? 'border-brand-coral text-white'
                    : 'border-transparent text-brand-secondary hover:text-white'
                }`}
              >
                Inclusions &amp; Meeting Point
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('operator')}
                className={`pb-2.5 transition-colors cursor-pointer border-b-2 ${
                  activeTab === 'operator'
                    ? 'border-brand-coral text-white'
                    : 'border-transparent text-brand-secondary hover:text-white'
                }`}
              >
                Verified Operator
              </button>
            </div>

            {/* Tab 1: Day-by-Day Itinerary */}
            {activeTab === 'itinerary' && (
              <div className="space-y-2.5">
                {tour.itinerary.map(item => {
                  const isExpanded = expandedDay === item.day;
                  return (
                    <div
                      key={item.day}
                      className="rounded-lg border border-brand-border bg-[#0e1013] overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => setExpandedDay(isExpanded ? 0 : item.day)}
                        className="w-full p-3.5 flex items-center justify-between text-left hover:bg-brand-surface transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-7 h-7 rounded-md bg-brand-surface border border-brand-border text-brand-coral font-mono text-xs font-bold flex items-center justify-center shrink-0">
                            D{item.day}
                          </span>
                          <div>
                            <h4 className="text-xs sm:text-sm font-bold text-brand-primary">{item.title}</h4>
                            <p className="text-[11px] text-brand-muted line-clamp-1">{item.summary}</p>
                          </div>
                        </div>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-brand-muted" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-brand-muted" />
                        )}
                      </button>

                      {isExpanded && (
                        <div className="p-3.5 pt-1 border-t border-brand-border text-xs text-brand-secondary space-y-2 bg-[#0e1013]/60">
                          <p className="leading-relaxed">{item.description}</p>
                          <div className="flex flex-wrap items-center gap-3 text-[11px] text-brand-muted pt-2 border-t border-brand-border/40 font-mono">
                            {item.mealsIncluded && (
                              <span>Meals: {item.mealsIncluded.join(', ')}</span>
                            )}
                            {item.stayLocation && (
                              <span>Stay: {item.stayLocation}</span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Tab 2: Included & Meeting Point */}
            {activeTab === 'included' && (
              <div className="space-y-5 text-xs">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Inclusions */}
                  <div className="rounded-lg bg-[#0e1013] border border-brand-border p-4 space-y-2.5">
                    <span className="font-mono font-bold uppercase tracking-wider text-brand-emerald block text-[11px]">
                      Included in Expedition
                    </span>
                    <ul className="space-y-1.5 text-brand-secondary">
                      {tour.included.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-brand-emerald shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Exclusions */}
                  <div className="rounded-lg bg-[#0e1013] border border-brand-border p-4 space-y-2.5">
                    <span className="font-mono font-bold uppercase tracking-wider text-brand-muted block text-[11px]">
                      Not Included
                    </span>
                    <ul className="space-y-1.5 text-brand-muted">
                      {tour.excluded.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-muted mt-1.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Meeting Point Box */}
                {tour.meetingPoint && (
                  <div className="rounded-lg bg-[#0e1013] border border-brand-border p-4 flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-brand-coral shrink-0 mt-0.5" />
                    <div>
                      <span className="font-mono uppercase font-bold text-[11px] text-brand-primary block">
                        Official Meeting Coordinates
                      </span>
                      <p className="text-xs text-brand-secondary">{tour.meetingPoint}</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Tab 3: Operator Information */}
            {activeTab === 'operator' && (
              <div className="rounded-lg bg-[#0e1013] border border-brand-border p-5 space-y-4">
                <div className="flex items-center gap-3">
                  <img
                    src={tour.operator.avatarUrl}
                    alt={tour.operator.name}
                    className="w-12 h-12 rounded-lg object-cover border border-brand-border shrink-0"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-bold text-brand-primary">{tour.operator.name}</h4>
                      <ShieldCheck className="w-4 h-4 text-brand-emerald shrink-0" />
                    </div>
                    <p className="text-xs text-brand-coral font-medium">{tour.operator.tagline}</p>
                    <p className="text-[11px] text-brand-muted">{tour.operator.location}</p>
                  </div>
                </div>

                <p className="text-xs text-brand-secondary leading-relaxed">{tour.operator.bio}</p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 border-t border-brand-border text-xs font-mono">
                  <div>
                    <span className="text-brand-muted block text-[10px]">Response Time</span>
                    <span className="font-bold text-white">{tour.operator.responseTime}</span>
                  </div>
                  <div>
                    <span className="text-brand-muted block text-[10px]">Host Rating</span>
                    <span className="font-bold text-amber-400">★ {tour.operator.rating} / 5</span>
                  </div>
                  <div>
                    <span className="text-brand-muted block text-[10px]">Verification</span>
                    <span className="font-bold text-brand-emerald">{tour.operator.badge}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Grounded Sticky Footer Bar */}
        <div className="p-4 border-t border-brand-border bg-[#0e1013] flex items-center justify-between gap-4 shrink-0">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl sm:text-2xl font-mono font-bold text-brand-primary">
                {formatPrice(currentPrice, currency)}
              </span>
              <span className="text-xs text-brand-muted font-mono">/ guest (all-inclusive)</span>
            </div>
            <span className="text-[11px] text-brand-emerald flex items-center gap-1">
              <Zap className="w-3 h-3" />
              <span>{tour.remainingSpots} spots remaining for {tour.nextDeparture}</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-medium text-brand-secondary hover:text-white bg-brand-surface border border-brand-border transition-colors cursor-pointer hidden sm:block"
            >
              Close
            </button>

            <a
              href={tour.klnkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-brand-coral hover:bg-brand-coral-hover text-white transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer"
            >
              <span>Reserve Direct via staging.klnk.tv</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
