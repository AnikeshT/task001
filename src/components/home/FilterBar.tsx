'use client';

import React from 'react';
import {
  Search,
  X,
  SlidersHorizontal,
  RotateCcw,
  Sparkles,
  MapPin,
  Clock,
  Compass,
  CheckCircle2,
} from 'lucide-react';
import {
  DestinationRegion,
  TravelStyle,
  DurationFilter,
  FilterState,
} from '../../lib/types';

interface FilterBarProps {
  filters: FilterState;
  onChange: (updated: Partial<FilterState>) => void;
  onReset: () => void;
  matchingCount: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  onChange,
  onReset,
  matchingCount,
}) => {
  const regions: DestinationRegion[] = [
    'All',
    'Greek Islands',
    'Amalfi Coast',
    'Catalonia',
    'East Coast',
    'Western Europe',
    'Tuscany & Florence',
    'Dolomites & South Tyrol',
    'Sicily & Aeolian Islands',
    'Global Expeditions',
  ];

  const travelStyles: TravelStyle[] = [
    'All',
    'Luxury Private',
    'Small Group (Max 8)',
    'Alpine & Adventure',
    'Wine & Gastronomy',
    'Yacht & Coastal',
  ];

  const durationOptions: DurationFilter[] = [
    'All',
    '1-3 Days',
    '4-6 Days',
    '7+ Days',
  ];

  const isFiltered =
    filters.searchQuery.trim() !== '' ||
    filters.region !== 'All' ||
    filters.travelStyle !== 'All' ||
    filters.duration !== 'All' ||
    filters.instantOnly;

  return (
    <div className="w-full space-y-4 bg-brand-card/90 border border-white/10 rounded-2xl p-5 shadow-xl backdrop-blur-md">
      {/* Top Row: Search Input, Instant Booking Toggle & Reset */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Search Bar */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          <input
            type="text"
            value={filters.searchQuery}
            onChange={e => onChange({ searchQuery: e.target.value })}
            placeholder="Search tours, destinations, activities (e.g. Capri yacht, Brunello wine, Dolomites)..."
            className="w-full pl-10 pr-9 py-2 text-xs sm:text-sm rounded-xl bg-brand-dark/80 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:border-brand-coral"
          />
          {filters.searchQuery && (
            <button
              type="button"
              onClick={() => onChange({ searchQuery: '' })}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2.5 self-end sm:self-center shrink-0">
          {/* Instant KLNK Booking Toggle */}
          <button
            type="button"
            onClick={() => onChange({ instantOnly: !filters.instantOnly })}
            className={`px-3 py-2 rounded-xl text-xs font-medium border transition-all flex items-center gap-1.5 cursor-pointer select-none ${
              filters.instantOnly
                ? 'bg-brand-emerald/15 text-brand-emerald border-brand-emerald/40 font-semibold'
                : 'bg-brand-dark/60 text-slate-400 border-white/10 hover:text-white'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Instant KLNK Pass Only</span>
          </button>

          {/* Reset Filters */}
          {isFiltered && (
            <button
              type="button"
              onClick={onReset}
              className="px-3 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}

          {/* Match Counter Badge */}
          <div className="px-3 py-2 rounded-xl bg-brand-dark/80 border border-white/10 text-xs font-mono font-semibold text-slate-300">
            <span className="text-brand-coral">{matchingCount}</span> Expeditions
          </div>
        </div>
      </div>

      {/* Row 2: Destination Region Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 shrink-0 flex items-center gap-1 mr-1">
          <MapPin className="w-3.5 h-3.5 text-brand-coral" />
          Region:
        </span>
        <div className="flex items-center gap-1.5 flex-nowrap">
          {regions.map(r => {
            const isActive = filters.region === r;
            return (
              <button
                key={r}
                type="button"
                onClick={() => onChange({ region: r })}
                className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all border cursor-pointer select-none ${
                  isActive
                    ? 'bg-brand-coral text-white border-brand-coral shadow-md font-semibold'
                    : 'bg-brand-dark/60 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                {r}
              </button>
            );
          })}
        </div>
      </div>

      {/* Row 3: Travel Style & Duration Pills */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 pt-3 border-t border-white/10">
        {/* Travel Style Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar w-full md:w-auto">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 shrink-0 flex items-center gap-1 mr-1">
            <Compass className="w-3.5 h-3.5 text-brand-gold" />
            Style:
          </span>
          <div className="flex items-center gap-1.5 flex-nowrap">
            {travelStyles.map(st => {
              const isActive = filters.travelStyle === st;
              return (
                <button
                  key={st}
                  type="button"
                  onClick={() => onChange({ travelStyle: st })}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all border cursor-pointer select-none ${
                    isActive
                      ? 'bg-white/15 text-white border-white/30 font-semibold'
                      : 'bg-brand-dark/40 text-slate-400 border-white/5 hover:bg-white/5 hover:text-slate-200'
                  }`}
                >
                  {st}
                </button>
              );
            })}
          </div>
        </div>

        {/* Duration Pills */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1 mr-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            Duration:
          </span>
          {durationOptions.map(d => {
            const isActive = filters.duration === d;
            return (
              <button
                key={d}
                type="button"
                onClick={() => onChange({ duration: d })}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all border cursor-pointer select-none ${
                  isActive
                    ? 'bg-brand-coral/20 text-brand-coral border-brand-coral/50 font-semibold'
                    : 'bg-brand-dark/40 text-slate-400 border-white/5 hover:text-white'
                }`}
              >
                {d}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
