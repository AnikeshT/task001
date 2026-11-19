'use client';

import React, { useState } from 'react';
import {
  X,
  Star,
  MapPin,
  Clock,
  Users,
  ShieldCheck,
  Check,
  Calendar,
  Sparkles,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Globe,
  Award,
  Zap,
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

  if (!isOpen || !tour) return null;

  const currentPrice =
    currency === 'EUR' ? tour.priceEur : currency === 'GBP' ? tour.priceGbp : tour.priceUsd;

  const activePhoto = selectedImage || tour.heroImage;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div
        className="relative w-full max-w-4xl bg-brand-card border border-white/15 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] my-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 border border-white/20 transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto custom-scrollbar flex-1">
          {/* Header Image & Gallery */}
          <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-slate-900">
            <div
              className="w-full h-full bg-cover bg-center transition-all duration-500"
              style={{ backgroundImage: `url('${activePhoto}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-black/20 to-transparent" />

            {/* Top Badges */}
            <div className="absolute top-5 left-5 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-coral text-white shadow-md">
                {tour.badge || tour.travelStyle}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/60 backdrop-blur-md text-white border border-white/20 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-brand-coral" />
                <span>{tour.destination}</span>
              </span>
            </div>

            {/* Gallery Thumbnails Strip */}
            <div className="absolute bottom-4 left-5 right-5 flex items-center gap-2 overflow-x-auto no-scrollbar">
              {tour.galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`relative w-16 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    activePhoto === img ? 'border-brand-coral scale-105' : 'border-white/30 opacity-75 hover:opacity-100'
                  }`}
                >
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${img}')` }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Main Info */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Title & Operator Row */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-amber-400 font-bold">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span>{tour.rating}</span>
                  </div>
                  <span>•</span>
                  <span>{tour.reviewCount} verified traveler reviews</span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-brand-emerald font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Curated by {tour.operator.name}</span>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                {tour.name}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {tour.description}
              </p>
            </div>

            {/* At A Glance Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-brand-dark/70 border border-white/10 text-xs">
              <div className="space-y-0.5">
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">Duration</span>
                <span className="font-semibold text-white flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-brand-coral" />
                  {tour.durationLabel}
                </span>
              </div>
              <div className="space-y-0.5">
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">Group Size</span>
                <span className="font-semibold text-white flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-sky-400" />
                  {tour.groupSize}
                </span>
              </div>
              <div className="space-y-0.5">
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">Activity Level</span>
                <span className="font-semibold text-white flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  {tour.activityLevel}
                </span>
              </div>
              <div className="space-y-0.5">
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">Next Confirmed</span>
                <span className="font-semibold text-brand-emerald flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {tour.nextDeparture}
                </span>
              </div>
            </div>

            {/* Highlights List */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-brand-coral" />
                <span>Expedition Highlights</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                {tour.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <Check className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Tabs (Itinerary, Included, Operator) */}
            <div className="border-b border-white/10 flex items-center gap-6 text-sm font-semibold">
              <button
                type="button"
                onClick={() => setActiveTab('itinerary')}
                className={`pb-3 transition-colors relative cursor-pointer ${
                  activeTab === 'itinerary' ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span>Day-by-Day Itinerary ({tour.itinerary.length} Days)</span>
                {activeTab === 'itinerary' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-coral rounded-full" />
                )}
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('included')}
                className={`pb-3 transition-colors relative cursor-pointer ${
                  activeTab === 'included' ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span>What’s Included</span>
                {activeTab === 'included' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-coral rounded-full" />
                )}
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('operator')}
                className={`pb-3 transition-colors relative cursor-pointer ${
                  activeTab === 'operator' ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span>About Operator</span>
                {activeTab === 'operator' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-coral rounded-full" />
                )}
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
                      className="rounded-2xl border border-white/10 bg-brand-dark/50 overflow-hidden transition-colors"
                    >
                      <button
                        type="button"
                        onClick={() => setExpandedDay(isExpanded ? 0 : item.day)}
                        className="w-full p-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-full bg-brand-coral/20 text-brand-coral border border-brand-coral/40 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                            D{item.day}
                          </span>
                          <div>
                            <h5 className="text-sm font-bold text-white">{item.title}</h5>
                            <p className="text-xs text-slate-400 line-clamp-1">{item.summary}</p>
                          </div>
                        </div>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-slate-400" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400" />
                        )}
                      </button>

                      {isExpanded && (
                        <div className="p-4 pt-1 border-t border-white/5 text-xs text-slate-300 space-y-3 bg-brand-dark/30">
                          <p className="leading-relaxed">{item.description}</p>
                          <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-400 pt-2 border-t border-white/5">
                            {item.mealsIncluded && (
                              <span>
                                <strong className="text-slate-300">Meals:</strong> {item.mealsIncluded.join(', ')}
                              </span>
                            )}
                            {item.stayLocation && (
                              <span>
                                <strong className="text-slate-300">Stay:</strong> {item.stayLocation}
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Tab 2: Included & Excluded */}
            {activeTab === 'included' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                <div className="space-y-3 p-5 rounded-2xl bg-brand-emerald/5 border border-brand-emerald/20">
                  <h5 className="font-bold text-sm text-brand-emerald flex items-center gap-1.5">
                    <Check className="w-4 h-4" />
                    <span>Included with Your Booking</span>
                  </h5>
                  <ul className="space-y-2 text-slate-300">
                    {tour.included.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald mt-1.5 shrink-0" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 p-5 rounded-2xl bg-white/5 border border-white/10">
                  <h5 className="font-bold text-sm text-slate-300 flex items-center gap-1.5">
                    <X className="w-4 h-4 text-slate-400" />
                    <span>Not Included</span>
                  </h5>
                  <ul className="space-y-2 text-slate-400">
                    {tour.excluded.map((exc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-1.5 shrink-0" />
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Tab 3: About Operator */}
            {activeTab === 'operator' && (
              <div className="p-6 rounded-2xl bg-brand-dark/70 border border-white/10 space-y-4">
                <div className="flex items-center gap-4">
                  <div
                    className="w-16 h-16 rounded-2xl bg-cover bg-center border border-white/20 shrink-0"
                    style={{ backgroundImage: `url('${tour.operator.avatarUrl}')` }}
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-lg font-bold text-white">{tour.operator.name}</h4>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-brand-emerald/20 text-brand-emerald border border-brand-emerald/30">
                        Verified Operator
                      </span>
                    </div>
                    <p className="text-xs text-brand-coral font-medium">{tour.operator.tagline}</p>
                    <p className="text-xs text-slate-400">{tour.operator.location} • Founded {tour.operator.foundedYear}</p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {tour.operator.bio}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 border-t border-white/10 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Average Response</span>
                    <span className="font-bold text-white">{tour.operator.responseTime}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Operator Rating</span>
                    <span className="font-bold text-amber-400">★ {tour.operator.rating} / 5</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Specialization</span>
                    <span className="font-bold text-white truncate block">{tour.operator.specialty}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Fixed Sticky Footer Bar with Price and Booking Trigger */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-brand-dark/95 backdrop-blur-xl flex items-center justify-between gap-4 shrink-0">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl sm:text-3xl font-mono font-bold text-white">
                {formatPrice(currentPrice, currency)}
              </span>
              <span className="text-xs text-slate-400 font-mono">/ guest (all-inclusive)</span>
            </div>
            <span className="text-[11px] text-brand-emerald flex items-center gap-1">
              <Zap className="w-3 h-3" />
              <span>{tour.remainingSpots} spots remaining for {tour.nextDeparture}</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white bg-white/5 border border-white/10 transition-colors cursor-pointer hidden sm:block"
            >
              Close
            </button>

            <button
              type="button"
              onClick={() => onBookKlnk(tour)}
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-brand-coral hover:bg-brand-coral-hover text-white transition-all shadow-xl flex items-center gap-2 active:scale-95 cursor-pointer"
            >
              <span>Book via staging.klnk.tv</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
