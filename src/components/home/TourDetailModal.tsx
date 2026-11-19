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
  onBookKlnk?: (tour: TourItem) => void;
}

export const TourDetailModal: React.FC<TourDetailModalProps> = ({
  tour,
  currency,
  isOpen,
  onClose,
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/70 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-canvas-card border border-canvas-border rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] my-auto"
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-tour-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 hover:bg-white text-ink border border-canvas-border shadow-md transition-colors cursor-pointer"
          aria-label="Close details"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1">
          {/* Header Image & Gallery */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-canvas">
            <div
              role="img"
              aria-label={`Photo of ${tour.name}`}
              className="w-full h-full bg-cover bg-center transition-all duration-300"
              style={{ backgroundImage: `url('${activePhoto}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-coral text-white shadow-xs">
                {tour.badge || tour.travelStyle}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-ink border border-canvas-border flex items-center gap-1 shadow-xs">
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
                  className={`w-14 h-10 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    activePhoto === img
                      ? 'border-brand-coral scale-105 shadow-md'
                      : 'border-white/60 opacity-80 hover:opacity-100'
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
          <div className="p-6 sm:p-8 space-y-6">
            {/* Header Information */}
            <div className="space-y-2 border-b border-canvas-border pb-5">
              <div className="flex flex-wrap items-center gap-3 text-xs text-ink-muted font-semibold">
                <span className="flex items-center gap-1 text-amber-500">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span>{tour.rating}</span>
                </span>
                <span>•</span>
                <span>{tour.reviewCount} verified guest reviews</span>
                <span>•</span>
                <span className="text-brand-coral">{tour.groupSize}</span>
                <span>•</span>
                <span>{tour.activityLevel} Activity</span>
              </div>

              <h2
                id="modal-tour-title"
                className="text-2xl sm:text-3xl font-display font-bold text-ink leading-tight"
              >
                {tour.name}
              </h2>
              <p className="text-sm text-ink-soft leading-relaxed">
                {tour.description}
              </p>
            </div>

            {/* Key Highlights */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-ink">
                Expedition Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-ink-soft">
                {tour.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 bg-canvas/60 p-3 rounded-xl border border-canvas-border">
                    <Check className="w-4 h-4 text-brand-coral shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-medium">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="border-b border-canvas-border flex items-center gap-6 text-xs font-bold">
              <button
                type="button"
                onClick={() => setActiveTab('itinerary')}
                className={`pb-2.5 transition-colors cursor-pointer border-b-2 ${
                  activeTab === 'itinerary'
                    ? 'border-ink text-ink'
                    : 'border-transparent text-ink-muted hover:text-ink'
                }`}
              >
                Day-by-Day Itinerary ({tour.itinerary.length} Days)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('included')}
                className={`pb-2.5 transition-colors cursor-pointer border-b-2 ${
                  activeTab === 'included'
                    ? 'border-ink text-ink'
                    : 'border-transparent text-ink-muted hover:text-ink'
                }`}
              >
                Inclusions &amp; Logistics
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('operator')}
                className={`pb-2.5 transition-colors cursor-pointer border-b-2 ${
                  activeTab === 'operator'
                    ? 'border-ink text-ink'
                    : 'border-transparent text-ink-muted hover:text-ink'
                }`}
              >
                Verified Operator ({tour.operator.name})
              </button>
            </div>

            {/* Tab 1: Itinerary Accordion */}
            {activeTab === 'itinerary' && (
              <div className="space-y-3">
                {tour.itinerary.map(item => {
                  const isExpanded = expandedDay === item.day;
                  return (
                    <div
                      key={item.day}
                      className="border border-canvas-border rounded-2xl overflow-hidden bg-white transition-colors"
                    >
                      <button
                        type="button"
                        onClick={() => setExpandedDay(isExpanded ? 0 : item.day)}
                        className="w-full p-4 flex items-center justify-between text-left hover:bg-canvas/40 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-7 h-7 rounded-full bg-ink text-canvas text-xs font-bold flex items-center justify-center shrink-0">
                            {item.day}
                          </span>
                          <div>
                            <p className="text-sm font-bold text-ink">{item.title}</p>
                            <p className="text-xs text-ink-muted font-medium">{item.summary}</p>
                          </div>
                        </div>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-ink shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-ink-muted shrink-0" />
                        )}
                      </button>

                      {isExpanded && (
                        <div className="px-4 pb-4 pt-1 border-t border-canvas-border-subtle text-xs text-ink-soft space-y-2.5 bg-canvas/20">
                          <p className="leading-relaxed">{item.description}</p>
                          <div className="flex flex-wrap gap-4 pt-2 text-ink-muted font-mono text-[11px]">
                            {item.mealsIncluded && (
                              <span>Meals: {item.mealsIncluded.join(', ')}</span>
                            )}
                            {item.stayLocation && (
                              <span>Overnight: {item.stayLocation}</span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Tab 2: Inclusions & Logistics */}
            {activeTab === 'included' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-5 rounded-2xl bg-white border border-canvas-border space-y-3">
                  <h4 className="font-bold text-ink uppercase tracking-wider flex items-center gap-1.5 text-[11px]">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Included Services</span>
                  </h4>
                  <ul className="space-y-2 text-ink-soft">
                    {tour.included.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-canvas-border space-y-3">
                  <h4 className="font-bold text-ink uppercase tracking-wider text-[11px]">
                    Not Included &amp; Disclaimers
                  </h4>
                  <ul className="space-y-2 text-ink-soft">
                    {tour.excluded.map((exc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-coral mt-1.5 shrink-0" />
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                  {tour.meetingPoint && (
                    <div className="pt-3 border-t border-canvas-border text-ink-muted font-mono text-[11px]">
                      Departure Launch Pier: {tour.meetingPoint}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Tab 3: Operator Spotlight */}
            {activeTab === 'operator' && (
              <div className="p-6 rounded-2xl bg-white border border-canvas-border space-y-4">
                <div className="flex items-center gap-4">
                  <img
                    src={tour.operator.avatarUrl}
                    alt={tour.operator.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-canvas-border"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-lg font-display font-bold text-ink">{tour.operator.name}</h4>
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    </div>
                    <p className="text-xs text-ink-muted">{tour.operator.location} • Est. {tour.operator.foundedYear}</p>
                    <p className="text-xs font-semibold text-brand-coral mt-0.5">{tour.operator.tagline}</p>
                  </div>
                </div>

                <p className="text-xs text-ink-soft leading-relaxed">{tour.operator.bio}</p>

                <div className="grid grid-cols-3 gap-3 pt-3 border-t border-canvas-border text-xs">
                  <div>
                    <span className="text-ink-muted block text-[10px] uppercase font-mono">Response Time</span>
                    <span className="font-bold text-ink">{tour.operator.responseTime}</span>
                  </div>
                  <div>
                    <span className="text-ink-muted block text-[10px] uppercase font-mono">Host Rating</span>
                    <span className="font-bold text-amber-500">★ {tour.operator.rating} / 5</span>
                  </div>
                  <div>
                    <span className="text-ink-muted block text-[10px] uppercase font-mono">Verification</span>
                    <span className="font-bold text-emerald-700">{tour.operator.badge}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sticky Footer Bar */}
        <div className="p-4 sm:p-5 border-t border-canvas-border bg-canvas flex items-center justify-between gap-4 shrink-0">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-display font-extrabold text-ink">
                {formatPrice(currentPrice, currency)}
              </span>
              <span className="text-xs text-ink-muted">/ traveler (all-inclusive)</span>
            </div>
            <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
              <Zap className="w-3 h-3 fill-emerald-600" />
              <span>{tour.remainingSpots} spots remaining for {tour.nextDeparture}</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-full text-xs font-semibold text-ink hover:text-white bg-canvas-card hover:bg-ink border border-canvas-border transition-colors cursor-pointer hidden sm:block"
            >
              Close
            </button>

            <a
              href="https://staging.klnk.tv/pushpak/2de2d421/italy-trip"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-coral py-2.5 px-6 text-xs font-semibold flex items-center gap-1.5 shadow-md cursor-pointer"
            >
              <span>Reserve Direct on staging.klnk.tv</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
