'use client';

import React from 'react';
import { Search, X, RotateCcw, MapPin, Compass, Clock, Check } from 'lucide-react';
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
    'Amalfi Coast & Capri',
    'Tuscany & Florence',
    'Dolomites & South Tyrol',
    'Sicily & Aeolian Islands',
    'Lake Como & Northern Lakes',
    'Venice & Venetian Lagoon',
    'Italian Riviera & Portofino',
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
    <div className="w-full space-y-4 rounded-xl bg-brand-surface border border-brand-border p-4 sm:p-5 shadow-card">
      {/* Top Row: Search Input & Status */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-muted pointer-events-none" />
          <input
            type="text"
            value={filters.searchQuery}
            onChange={e => onChange({ searchQuery: e.target.value })}
            placeholder="Filter by keyword (e.g. Riva, Brunello, Via Ferrata, Taormina)..."
            className="w-full pl-10 pr-9 py-2 text-xs sm:text-sm rounded-lg bg-[#0e1013] border border-brand-border text-brand-primary placeholder:text-brand-muted focus:outline-none focus:border-brand-border-strong transition-colors"
          />
          {filters.searchQuery && (
            <button
              type="button"
              onClick={() => onChange({ searchQuery: '' })}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-muted hover:text-white"
              aria-label="Clear search query"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2.5 shrink-0 self-end sm:self-center">
          {/* Instant staging.klnk.tv Pass Toggle */}
          <button
            type="button"
            onClick={() => onChange({ instantOnly: !filters.instantOnly })}
            className={`px-3 py-2 rounded-lg text-xs font-medium border transition-colors flex items-center gap-1.5 cursor-pointer ${
              filters.instantOnly
                ? 'bg-brand-emerald/10 text-brand-emerald border-brand-emerald/30 font-semibold'
                : 'bg-[#0e1013] text-brand-secondary border-brand-border hover:text-white'
            }`}
          >
            <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center ${
              filters.instantOnly ? 'bg-brand-emerald border-brand-emerald' : 'border-brand-muted'
            }`}>
              {filters.instantOnly && <Check className="w-2.5 h-2.5 text-black stroke-[3]" />}
            </div>
            <span>Instant Pass Only</span>
          </button>

          {/* Reset Action */}
          {isFiltered && (
            <button
              type="button"
              onClick={onReset}
              className="px-3 py-2 rounded-lg text-xs font-medium text-brand-secondary hover:text-white hover:bg-brand-surface-hover border border-brand-border transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}

          {/* Match Counter Badge */}
          <div className="px-3 py-2 rounded-lg bg-[#0e1013] border border-brand-border text-xs font-mono font-medium text-brand-secondary">
            <span className="text-brand-coral font-bold">{matchingCount}</span> Departures
          </div>
        </div>
      </div>

      {/* Row 2: Region Segment Selector */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar border-t border-brand-border pt-3">
        <span className="text-[11px] font-mono uppercase tracking-wider text-brand-muted shrink-0 flex items-center gap-1 mr-1">
          <MapPin className="w-3.5 h-3.5 text-brand-coral" />
          Terroir:
        </span>
        <div className="flex items-center gap-1.5 flex-nowrap">
          {regions.map(r => {
            const isActive = filters.region === r;
            return (
              <button
                key={r}
                type="button"
                onClick={() => onChange({ region: r })}
                className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors border cursor-pointer ${
                  isActive
                    ? 'bg-brand-coral text-white border-brand-coral font-semibold shadow-sm'
                    : 'bg-[#0e1013] text-brand-secondary border-brand-border hover:text-white hover:border-brand-border-strong'
                }`}
              >
                {r === 'All' ? 'All Terroirs' : r}
              </button>
            );
          })}
        </div>
      </div>

      {/* Row 3: Travel Style & Duration Controls */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 pt-3 border-t border-brand-border">
        {/* Style Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar w-full md:w-auto">
          <span className="text-[11px] font-mono uppercase tracking-wider text-brand-muted shrink-0 flex items-center gap-1 mr-1">
            <Compass className="w-3.5 h-3.5 text-brand-secondary" />
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
                  className={`px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors border cursor-pointer ${
                    isActive
                      ? 'bg-brand-surface-elevated text-white border-brand-border-strong font-semibold'
                      : 'bg-[#0e1013] text-brand-secondary border-brand-border hover:text-brand-primary'
                  }`}
                >
                  {st === 'All' ? 'All Styles' : st}
                </button>
              );
            })}
          </div>
        </div>

        {/* Duration Segment */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="text-[11px] font-mono uppercase tracking-wider text-brand-muted flex items-center gap-1 mr-1">
            <Clock className="w-3.5 h-3.5 text-brand-secondary" />
            Length:
          </span>
          {durationOptions.map(d => {
            const isActive = filters.duration === d;
            return (
              <button
                key={d}
                type="button"
                onClick={() => onChange({ duration: d })}
                className={`px-2 py-1 rounded-md text-xs font-mono font-medium transition-colors border cursor-pointer ${
                  isActive
                    ? 'bg-brand-coral/15 text-brand-coral border-brand-coral/40 font-semibold'
                    : 'bg-[#0e1013] text-brand-secondary border-brand-border hover:text-white'
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
