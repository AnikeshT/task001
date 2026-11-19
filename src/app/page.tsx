'use client';

import React, { useState, useMemo } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { HeroSection } from '../components/home/HeroSection';
import { DestinationBento } from '../components/home/DestinationBento';
import { HowItWorks } from '../components/home/HowItWorks';
import { CollectionsSection } from '../components/home/CollectionsSection';
import { FilterBar } from '../components/home/FilterBar';
import { TourCard } from '../components/home/TourCard';
import { TourDetailModal } from '../components/home/TourDetailModal';
import { KlnkBookingModal } from '../components/home/KlnkBookingModal';
import { OperatorSpotlight } from '../components/home/OperatorSpotlight';
import { JournalSection } from '../components/home/JournalSection';
import { WhyTourpublish } from '../components/home/WhyTourpublish';
import { TravelerReviews } from '../components/home/TravelerReviews';
import { FaqSection } from '../components/home/FaqSection';
import { Footer } from '../components/layout/Footer';
import { MASTER_TOURS } from '../data/toursData';
import {
  TourItem,
  Currency,
  FilterState,
  DestinationRegion,
  TravelStyle,
} from '../lib/types';
import { Compass, Sparkles, RotateCcw } from 'lucide-react';

export default function HomePage() {
  // Global Currency State
  const [currency, setCurrency] = useState<Currency>('USD');

  // Master Filter State
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    region: 'All',
    travelStyle: 'All',
    duration: 'All',
    maxPrice: 20000,
    selectedCurrency: 'USD',
    instantOnly: false,
  });

  // Modal States
  const [detailTour, setDetailTour] = useState<TourItem | null>(null);
  const [bookingTour, setBookingTour] = useState<TourItem | null>(null);

  const handleUpdateFilters = (updated: Partial<FilterState>) => {
    setFilters(prev => ({ ...prev, ...updated }));
  };

  const handleResetFilters = () => {
    setFilters({
      searchQuery: '',
      region: 'All',
      travelStyle: 'All',
      duration: 'All',
      maxPrice: 20000,
      selectedCurrency: currency,
      instantOnly: false,
    });
  };

  // Filtered Tours Calculation
  const filteredTours = useMemo(() => {
    return MASTER_TOURS.filter(tour => {
      // 1. Region Filter
      if (filters.region !== 'All') {
        if (filters.region === 'Amalfi Coast') {
          if (
            tour.region !== 'Amalfi Coast' &&
            tour.region !== 'Amalfi Coast & Capri' &&
            !tour.destination.toLowerCase().includes('amalfi')
          ) {
            return false;
          }
        } else if (filters.region === 'Western Europe') {
          const europeanCountries = ['Italy', 'Greece', 'Spain', 'France', 'Switzerland'];
          if (!europeanCountries.includes(tour.country)) {
            return false;
          }
        } else if (tour.region !== filters.region) {
          return false;
        }
      }

      // 2. Travel Style Filter
      if (filters.travelStyle !== 'All' && tour.travelStyle !== filters.travelStyle) {
        return false;
      }

      // 3. Duration Filter
      if (filters.duration === '1-3 Days' && tour.durationDays > 3) return false;
      if (filters.duration === '4-6 Days' && (tour.durationDays < 4 || tour.durationDays > 6)) return false;
      if (filters.duration === '7+ Days' && tour.durationDays < 7) return false;

      // 4. Instant Booking Only Filter
      if (filters.instantOnly && !tour.instantBooking) {
        return false;
      }

      // 5. Free-text Search Query
      if (filters.searchQuery.trim().length > 0) {
        const q = filters.searchQuery.toLowerCase();
        const matchesName = tour.name.toLowerCase().includes(q);
        const matchesSub = tour.subtitle.toLowerCase().includes(q);
        const matchesDest = tour.destination.toLowerCase().includes(q);
        const matchesDesc = tour.description.toLowerCase().includes(q);
        const matchesOp = tour.operator.name.toLowerCase().includes(q);
        const matchesHighlights = tour.highlights.some(h => h.toLowerCase().includes(q));

        if (!matchesName && !matchesSub && !matchesDest && !matchesDesc && !matchesOp && !matchesHighlights) {
          return false;
        }
      }

      return true;
    });
  }, [filters]);

  const scrollToTours = () => {
    const el = document.getElementById('tours');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark text-slate-100 flex flex-col font-sans">
      {/* Top Fixed Navigation */}
      <Navbar
        currentCurrency={currency}
        onCurrencyChange={setCurrency}
        onOpenKlnkModal={(url, title) => {
          const match = MASTER_TOURS.find(t => t.klnkUrl === url) || MASTER_TOURS[0];
          setBookingTour(match);
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. High-Impact Editorial Hero Section (Wayfare / Tavelo Style) */}
        <HeroSection
          selectedRegion={filters.region}
          onSelectRegion={r => {
            handleUpdateFilters({ region: r });
            scrollToTours();
          }}
          selectedStyle={filters.travelStyle}
          onSelectStyle={s => {
            handleUpdateFilters({ travelStyle: s });
            scrollToTours();
          }}
          searchQuery={filters.searchQuery}
          onSearchChange={q => handleUpdateFilters({ searchQuery: q })}
          onScrollToTours={scrollToTours}
          totalToursCount={filteredTours.length}
        />

        {/* 2. Destination Bento Grid (Wayfare Style) */}
        <DestinationBento
          onSelectRegion={r => {
            handleUpdateFilters({ region: r });
            scrollToTours();
          }}
        />

        {/* 3. How It Works: Direct Booking + KLNK Apple/Google Wallet Pass */}
        <HowItWorks />

        {/* 4. Curated Framer-Style Collections */}
        <CollectionsSection
          onSelectRegion={r => {
            handleUpdateFilters({ region: r });
            scrollToTours();
          }}
          onScrollToTours={scrollToTours}
        />

        {/* 5. Master Tour Directory Section */}
        <section id="tours" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-brand-coral">
                <Compass className="w-4 h-4" />
                <span>Verified Tour Directory</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">
                All Curated Expeditions
              </h2>
              <p className="text-sm text-slate-400 max-w-xl">
                Explore handcrafted small-group and private luxury departures. Filter by region, travel style, duration, or search keywords.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse" />
              <span>Showing {filteredTours.length} of {MASTER_TOURS.length} Expeditions</span>
            </div>
          </div>

          {/* Interactive Multi-Facet Filter Bar */}
          <FilterBar
            filters={filters}
            onChange={handleUpdateFilters}
            onReset={handleResetFilters}
            matchingCount={filteredTours.length}
          />

          {/* Tour Cards Grid */}
          {filteredTours.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTours.map(tour => (
                <TourCard
                  key={tour.id}
                  tour={tour}
                  currency={currency}
                  onOpenDetail={t => setDetailTour(t)}
                  onBookKlnk={t => setBookingTour(t)}
                />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="py-20 text-center space-y-4 bg-brand-card/50 rounded-3xl border border-white/10 p-8">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-slate-400">
                <Compass className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">No matching expeditions found</h3>
              <p className="text-sm text-slate-400 max-w-md mx-auto">
                We couldn’t find any tours matching your active filter criteria. Try clearing some filters or searching for another destination.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="px-6 py-2.5 rounded-full bg-brand-coral hover:bg-brand-coral-hover text-white text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset All Filters</span>
              </button>
            </div>
          )}
        </section>

        {/* 6. Operator Spotlight Section */}
        <OperatorSpotlight
          onSelectOperatorTour={opName => {
            handleUpdateFilters({ searchQuery: opName });
            scrollToTours();
          }}
        />

        {/* 7. The Tourpublish Journal (Wayfare Editorial Section) */}
        <JournalSection />

        {/* 8. Why Tourpublish + KLNK Section */}
        <WhyTourpublish />

        {/* 9. Real Traveler Reviews */}
        <TravelerReviews />

        {/* 10. Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Tour Detail Modal */}
      <TourDetailModal
        tour={detailTour}
        currency={currency}
        isOpen={Boolean(detailTour)}
        onClose={() => setDetailTour(null)}
        onBookKlnk={tour => {
          setDetailTour(null);
          setBookingTour(tour);
        }}
      />

      {/* Interactive KLNK Booking Modal */}
      <KlnkBookingModal
        tour={bookingTour}
        currency={currency}
        isOpen={Boolean(bookingTour)}
        onClose={() => setBookingTour(null)}
      />
    </div>
  );
}
