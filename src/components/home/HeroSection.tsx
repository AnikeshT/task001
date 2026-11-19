'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Search, MapPin, Compass, ChevronDown, Check, ArrowRight, ShieldCheck, Star } from 'lucide-react';
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

  const popularRegions = [
    { label: 'Amalfi Coast', region: 'Amalfi Coast & Capri' as DestinationRegion },
    { label: 'Tuscan Terroir', region: 'Tuscany & Florence' as DestinationRegion },
    { label: 'Dolomites Alpine', region: 'Dolomites & South Tyrol' as DestinationRegion },
    { label: 'Lake Como', region: 'Lake Como & Northern Lakes' as DestinationRegion },
    { label: 'Sicilia & Aeolian', region: 'Sicily & Aeolian Islands' as DestinationRegion },
  ];

  return (
    <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 px-4 sm:px-6 lg:px-8 border-b border-brand-border bg-[#0e1013] overflow-hidden">
      {/* Background High-Impact Imagery with Subtle Controlled Gradient Scrim */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=2200&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e1013] via-[#0e1013]/85 to-[#0e1013]/60" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-10">
        {/* Editorial Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-surface border border-brand-border text-xs font-mono tracking-wide text-brand-secondary">
            <span>Verified Travel Directory</span>
            <span className="text-brand-muted">•</span>
            <span className="text-brand-coral font-medium">Direct Booking via staging.klnk.tv</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-sans font-bold tracking-tight text-brand-primary leading-[1.12]">
            Curated Luxury Tours in Italy,{' '}
            <span className="font-serif italic font-normal text-brand-coral">
              Booked Direct.
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-brand-secondary font-normal leading-relaxed max-w-2xl mx-auto">
            Discover private classic Riva yacht charters, century-old Brunello vaults, and high-altitude Dolomites traverses. Handcrafted departures connected directly to generational Italian operators.
          </p>
        </div>

        {/* Functional Search & Filter Console (Grounded Product Tool) */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl bg-brand-surface border border-brand-border-strong p-2 sm:p-2.5 shadow-dropdown flex flex-col md:flex-row items-stretch gap-2">
            {/* Search Input */}
            <div className="flex-1 flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-[#0e1013] border border-brand-border text-xs sm:text-sm">
              <Search className="w-4 h-4 text-brand-muted shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => onSearchChange(e.target.value)}
                placeholder="Search experiences, destinations, or operators..."
                className="w-full bg-transparent text-brand-primary placeholder:text-brand-muted focus:outline-none"
                aria-label="Search Italian luxury experiences"
              />
            </div>

            {/* Region Dropdown Selector */}
            <div className="relative md:w-56 shrink-0" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => {
                  setRegionDropdownOpen(!regionDropdownOpen);
                  setStyleDropdownOpen(false);
                }}
                className="w-full flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-lg bg-[#0e1013] border border-brand-border text-brand-primary hover:border-brand-border-strong text-xs sm:text-sm transition-colors text-left"
                aria-label="Select Italian region"
              >
                <div className="flex items-center gap-2 truncate">
                  <MapPin className="w-3.5 h-3.5 text-brand-muted shrink-0" />
                  <span className="truncate">{selectedRegion === 'All' ? 'All Terroirs' : selectedRegion}</span>
                </div>
                <ChevronDown className={`w-3.5 h-3.5 text-brand-muted transition-transform shrink-0 ${regionDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Popover Dropdown Menu */}
              {regionDropdownOpen && (
                <div className="absolute left-0 right-0 top-full mt-1.5 rounded-lg bg-brand-surface-elevated border border-brand-border-strong shadow-dropdown p-1.5 z-50 text-left space-y-0.5 max-h-64 overflow-y-auto">
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
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-xs font-medium transition-colors text-left ${
                          isSelected
                            ? 'bg-brand-coral/10 text-brand-coral font-semibold'
                            : 'text-brand-secondary hover:bg-brand-surface-hover hover:text-white'
                        }`}
                      >
                        <span className="truncate">{region === 'All' ? 'All Italian Terroirs' : region}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-brand-coral shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Travel Style Dropdown */}
            <div className="relative md:w-48 shrink-0" ref={styleRef}>
              <button
                type="button"
                onClick={() => {
                  setStyleDropdownOpen(!styleDropdownOpen);
                  setRegionDropdownOpen(false);
                }}
                className="w-full flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-lg bg-[#0e1013] border border-brand-border text-brand-primary hover:border-brand-border-strong text-xs sm:text-sm transition-colors text-left"
                aria-label="Select travel style"
              >
                <div className="flex items-center gap-2 truncate">
                  <Compass className="w-3.5 h-3.5 text-brand-muted shrink-0" />
                  <span className="truncate">{selectedStyle === 'All' ? 'All Styles' : selectedStyle}</span>
                </div>
                <ChevronDown className={`w-3.5 h-3.5 text-brand-muted transition-transform shrink-0 ${styleDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {styleDropdownOpen && (
                <div className="absolute left-0 right-0 top-full mt-1.5 rounded-lg bg-brand-surface-elevated border border-brand-border-strong shadow-dropdown p-1.5 z-50 text-left space-y-0.5">
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
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-xs font-medium transition-colors text-left ${
                          isSelected
                            ? 'bg-brand-coral/10 text-brand-coral font-semibold'
                            : 'text-brand-secondary hover:bg-brand-surface-hover hover:text-white'
                        }`}
                      >
                        <span className="truncate">{st === 'All' ? 'All Travel Styles' : st}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-brand-coral shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Search Trigger Button */}
            <button
              type="button"
              onClick={onScrollToTours}
              className="px-5 py-2.5 rounded-lg bg-brand-coral hover:bg-brand-coral-hover text-white text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2 shrink-0 shadow-sm"
            >
              <span>Explore ({totalToursCount})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Clean Region Quick Links */}
          <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2 text-xs text-brand-secondary">
            <span className="text-[11px] font-mono text-brand-muted uppercase tracking-wider">Quick Terroirs:</span>
            {popularRegions.map(item => (
              <button
                key={item.label}
                type="button"
                onClick={() => {
                  onSelectRegion(item.region);
                  onScrollToTours();
                }}
                className="px-2.5 py-1 rounded-md bg-brand-surface border border-brand-border text-brand-secondary hover:text-brand-primary hover:border-brand-border-strong text-xs transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grounded Value Proposition Bar (No Neon Blobs) */}
        <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-brand-border text-xs text-brand-secondary">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-brand-surface border border-brand-border flex items-center justify-center text-amber-400 shrink-0">
              <Star className="w-4 h-4 fill-amber-400" />
            </div>
            <div>
              <span className="font-semibold text-brand-primary block">4.98 / 5 Rating</span>
              <span className="text-[11px] text-brand-muted">2,400+ Verified Guests</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-brand-surface border border-brand-border flex items-center justify-center text-brand-emerald shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="font-semibold text-brand-primary block">Verified Operators</span>
              <span className="text-[11px] text-brand-muted">Licensed Italian Masters</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-brand-surface border border-brand-border flex items-center justify-center text-brand-coral shrink-0 font-mono font-bold text-xs">
              0%
            </div>
            <div>
              <span className="font-semibold text-brand-primary block">Zero Markups</span>
              <span className="text-[11px] text-brand-muted">Direct Host Rates</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-brand-surface border border-brand-border flex items-center justify-center text-brand-primary shrink-0 font-mono text-[10px] font-bold">
              PASS
            </div>
            <div>
              <span className="font-semibold text-brand-primary block">staging.klnk.tv Pass</span>
              <span className="text-[11px] text-brand-muted">Apple &amp; Google Wallet</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
