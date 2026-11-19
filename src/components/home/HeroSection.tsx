'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Search,
  MapPin,
  Compass,
  ShieldCheck,
  Star,
  ArrowRight,
  TrendingUp,
  ChevronDown,
  Check,
} from 'lucide-react';
import { DestinationRegion, TravelStyle } from '../../lib/types';

interface HeroSectionProps {
  selectedRegion: DestinationRegion;
  onSelectRegion: (r: DestinationRegion) => void;
  selectedStyle: TravelStyle;
  onSelectStyle: (s: TravelStyle) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onScrollToTours: () => void;
  totalToursCount: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  selectedRegion,
  onSelectRegion,
  selectedStyle,
  onSelectStyle,
  searchQuery,
  onSearchChange,
  onScrollToTours,
  totalToursCount,
}) => {
  const [regionDropdownOpen, setRegionDropdownOpen] = useState(false);
  const [styleDropdownOpen, setStyleDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const styleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setRegionDropdownOpen(false);
      }
      if (styleRef.current && !styleRef.current.contains(e.target as Node)) {
        setStyleDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const regionsList: DestinationRegion[] = [
    'All',
    'Amalfi Coast & Capri',
    'Tuscany & Florence',
    'Dolomites & South Tyrol',
    'Sicily & Aeolian Islands',
    'Lake Como & Northern Lakes',
    'Venice & Venetian Lagoon',
    'Italian Riviera & Portofino',
  ];

  const travelStylesList: TravelStyle[] = [
    'All',
    'Luxury Private',
    'Small Group (Max 8)',
    'Alpine & Adventure',
    'Wine & Gastronomy',
    'Yacht & Coastal',
  ];

  const popularKeywords = [
    'Amalfi Riva Yacht',
    'Brunello di Montalcino',
    'Dolomites Via Ferrata',
    'Lake Como Bellagio',
    'Stromboli Catamaran',
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-brand-dark">
      {/* Background High-Impact Imagery with Luxury Wayfare / Tavelo Style Warm Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=2200&q=85')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-brand-dark/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-brand-dark/60 to-brand-dark" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* Subtle Pre-header Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-slate-200 text-xs font-medium shadow-lg"
        >
          <span className="p-1 rounded-full bg-brand-coral text-white">
            <Sparkles className="w-3 h-3" />
          </span>
          <span className="font-semibold text-white tracking-wide">2026 Italian Expedition Season</span>
          <span className="text-slate-400">•</span>
          <span className="text-brand-coral font-medium">Direct Booking via staging.klnk.tv</span>
        </motion.div>

        {/* Main Editorial Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-black tracking-tight text-white leading-[1.08]">
            Curated Luxury Tours in Italy,{' '}
            <span className="font-serif italic font-normal text-brand-coral block sm:inline">
              crafted by local masters.
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed">
            Discover private Riva yachts in Amalfi, centenarian Brunello vaults in Tuscany, and high-altitude Dolomites traverses. Every tour connects you directly to verified Italian operators with instant mobile wallet passes.
          </p>
        </motion.div>

        {/* Floating Discovery Search Dock (CTA Above The Fold) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto relative z-30"
        >
          <div className="p-2.5 sm:p-3 rounded-2xl sm:rounded-full bg-brand-card/95 border border-white/15 backdrop-blur-xl shadow-2xl flex flex-col sm:flex-row items-center gap-2">
            {/* Search Input */}
            <div className="flex-1 w-full flex items-center gap-2.5 px-4 py-2 sm:py-0 border-b sm:border-b-0 sm:border-r border-white/10">
              <Search className="w-4 h-4 text-brand-coral shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => onSearchChange(e.target.value)}
                placeholder="Where in Italy would you like to experience? (e.g. Amalfi, Brunello, Lake Como...)"
                className="w-full bg-transparent text-xs sm:text-sm text-white placeholder:text-slate-400 focus:outline-none"
                aria-label="Search Italian tours"
              />
            </div>

            {/* Region Dropdown */}
            <div className="relative w-full sm:w-auto shrink-0" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => {
                  setRegionDropdownOpen(!regionDropdownOpen);
                  setStyleDropdownOpen(false);
                }}
                className="w-full sm:w-auto flex items-center justify-between sm:justify-start gap-2.5 px-4 py-2 rounded-xl sm:rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs sm:text-sm font-semibold transition-all select-none cursor-pointer"
                aria-label="Select Italian region"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span>{selectedRegion}</span>
                </div>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${regionDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {regionDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 sm:left-auto sm:right-0 top-full mt-2 w-60 rounded-2xl bg-[#1c1c1f] border border-white/15 shadow-2xl p-2 z-50 text-left space-y-0.5 max-h-72 overflow-y-auto"
                  >
                    {regionsList.map(region => {
                      const isSelected = selectedRegion === region;
                      return (
                        <button
                          key={region}
                          type="button"
                          onClick={() => {
                            onSelectRegion(region);
                            setRegionDropdownOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all text-left ${
                            isSelected
                              ? 'bg-white/10 text-white font-bold'
                              : 'text-slate-300 hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          <span>{region}</span>
                          {isSelected && <Check className="w-4 h-4 text-white shrink-0" />}
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Travel Style Selector */}
            <div className="relative w-full sm:w-auto shrink-0" ref={styleRef}>
              <button
                type="button"
                onClick={() => {
                  setStyleDropdownOpen(!styleDropdownOpen);
                  setRegionDropdownOpen(false);
                }}
                className="w-full sm:w-auto flex items-center justify-between sm:justify-start gap-2.5 px-4 py-2 rounded-xl sm:rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs sm:text-sm font-semibold transition-all select-none cursor-pointer"
                aria-label="Select Italian travel style"
              >
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-slate-400" />
                  <span>{selectedStyle}</span>
                </div>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${styleDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {styleDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 sm:left-auto sm:right-0 top-full mt-2 w-52 rounded-2xl bg-[#1c1c1f] border border-white/15 shadow-2xl p-2 z-50 text-left space-y-0.5"
                  >
                    {travelStylesList.map(st => {
                      const isSelected = selectedStyle === st;
                      return (
                        <button
                          key={st}
                          type="button"
                          onClick={() => {
                            onSelectStyle(st);
                            setStyleDropdownOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all text-left ${
                            isSelected
                              ? 'bg-white/10 text-white font-bold'
                              : 'text-slate-300 hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          <span>{st}</span>
                          {isSelected && <Check className="w-4 h-4 text-white shrink-0" />}
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Above The Fold Button */}
            <button
              type="button"
              onClick={onScrollToTours}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-brand-coral hover:bg-brand-coral-hover text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 shrink-0 active:scale-95 cursor-pointer"
            >
              <span>Explore Italy ({totalToursCount})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Trending Keyword Pills */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400">
            <span className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              <TrendingUp className="w-3.5 h-3.5 text-brand-coral" />
              Popular in Italy:
            </span>
            {popularKeywords.map(keyword => (
              <button
                key={keyword}
                onClick={() => {
                  onSearchChange(keyword);
                  onScrollToTours();
                }}
                className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-brand-coral/40 transition-all text-xs cursor-pointer"
              >
                {keyword}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Social Proof & Value Stats Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-white/10"
        >
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-amber-400 font-bold text-lg">
              <Star className="w-4 h-4 fill-amber-400" />
              <span>4.98 / 5</span>
            </div>
            <span className="text-xs text-slate-400">2,400+ Verified Reviews</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-white font-bold text-lg">
              <ShieldCheck className="w-4 h-4 text-brand-emerald" />
              <span>100% Verified</span>
            </div>
            <span className="text-xs text-slate-400">Italian Master Operators</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-white font-bold text-lg">
              <span className="text-brand-coral font-mono">0%</span>
              <span>Middleman Fee</span>
            </div>
            <span className="text-xs text-slate-400">Direct Operator Rates</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-white font-bold text-lg">
              <span className="font-mono text-brand-emerald">staging.klnk.tv</span>
              <span>1-Click</span>
            </div>
            <span className="text-xs text-slate-400">Instant Digital Wallet Pass</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
