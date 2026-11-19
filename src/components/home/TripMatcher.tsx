'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  Sailboat,
  Mountain,
  Wine,
  Building2,
  Calendar,
  Users,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  Star,
  Clock,
} from 'lucide-react';
import { MASTER_TOURS } from '../../data/toursData';
import { TourItem } from '../../lib/types';
import { sound } from '../../lib/sound';

type TerrainType = 'coast' | 'tuscany' | 'dolomites' | 'como' | 'sicily';
type GroupStyle = 'small-group' | 'private';
type SeasonType = 'spring' | 'summer' | 'autumn';

interface MatchedResult {
  terrain: TerrainType;
  title: string;
  destination: string;
  duration: string;
  leadGuide: string;
  guideRole: string;
  pricePerPerson: string;
  image: string;
  highlights: string[];
  klnkUrl: string;
  matchedTourId: string;
}

const MATCHED_DATA: Record<TerrainType, MatchedResult> = {
  coast: {
    terrain: 'coast',
    title: 'The Private Riva Voyage & Capri Sea Caves',
    destination: 'Amalfi Coast & Capri',
    duration: '5 Days / 4 Nights',
    leadGuide: 'Luigi Esposito',
    guideRole: 'Licensed Positano Captain & Native Skipper',
    pricePerPerson: '€2,850',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1400&q=85',
    highlights: [
      'Private restored wooden Riva boat charter',
      'Exclusive swim inside Faraglioni sea caverns',
      'Clifftop Ravello infinity garden tasting',
    ],
    klnkUrl: 'https://staging.klnk.tv/pushpak/2de2d421/italy-trip',
    matchedTourId: 'amalfi-private-boat',
  },
  tuscany: {
    terrain: 'tuscany',
    title: 'Historic Brunello Vaults & Oak Truffle Forests',
    destination: 'Tuscany & Chianti',
    duration: '6 Days / 5 Nights',
    leadGuide: 'Niccolò de’ Medici',
    guideRole: 'Sommelier & 12th-Century Estate Steward',
    pricePerPerson: '€2,650',
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1400&q=85',
    highlights: [
      'Private cellar barrel tasting in Montalcino',
      'Hands-on truffle foraging with trained lagotto dogs',
      'Historic Contrada palace tour in Siena',
    ],
    klnkUrl: 'https://staging.klnk.tv/pushpak/2de2d421/italy-trip',
    matchedTourId: 'tuscany-brunello-cellars',
  },
  dolomites: {
    terrain: 'dolomites',
    title: 'High Alpine Peaks & Private Mountain Refuges',
    destination: 'The Dolomites Alpine',
    duration: '5 Days / 4 Nights',
    leadGuide: 'Matteo Unterkircher',
    guideRole: 'Certified UIAGM Alpine Mountain Guide',
    pricePerPerson: '€2,450',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85',
    highlights: [
      'Tre Cime di Lavaredo sunrise loop before crowds',
      'High refuge stay at 9,000 feet above the clouds',
      'South Tyrolean artisan mountain dairy feast',
    ],
    klnkUrl: 'https://staging.klnk.tv/pushpak/2de2d421/italy-trip',
    matchedTourId: 'dolomites-luxury-traverse',
  },
  como: {
    terrain: 'como',
    title: 'Classic Wooden Riva Run & Private Waterfront Villas',
    destination: 'Lake Como & Bellagio',
    duration: '4 Days / 3 Nights',
    leadGuide: 'Fabrizio Villa',
    guideRole: 'Private Boat Captain & Bellagio Native',
    pricePerPerson: '€2,950',
    image: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=1400&q=85',
    highlights: [
      'Exclusive water-gate mooring at Villa Balbianello',
      'Sunset champagne cruise along Bellagio villas',
      'Private master silk workshop in cobblestone alleys',
    ],
    klnkUrl: 'https://staging.klnk.tv/pushpak/2de2d421/italy-trip',
    matchedTourId: 'lake-como-riva-yacht',
  },
  sicily: {
    terrain: 'sicily',
    title: 'Volcanic Island Sailing & Azure Catamaran Bays',
    destination: 'Sicily & Aeolian Islands',
    duration: '7 Days / 6 Nights',
    leadGuide: 'Sebastiano Fazio',
    guideRole: 'Aeolian Sailor & Marine Naturalist',
    pricePerPerson: '€2,750',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1400&q=85',
    highlights: [
      'Night volcanic fireworks viewing from the catamaran',
      'Snorkeling over underwater volcanic bubble vents',
      'Sweet Malvasia vineyard tasting on Salina cliffs',
    ],
    klnkUrl: 'https://staging.klnk.tv/pushpak/2de2d421/italy-trip',
    matchedTourId: 'sicily-aeolian-yacht',
  },
};

interface TripMatcherProps {
  onSelectTour?: (tour: TourItem) => void;
}

export const TripMatcher: React.FC<TripMatcherProps> = ({ onSelectTour }) => {
  const [selectedTerrain, setSelectedTerrain] = useState<TerrainType>('coast');
  const [selectedGroup, setSelectedGroup] = useState<GroupStyle>('small-group');
  const [selectedSeason, setSelectedSeason] = useState<SeasonType>('spring');

  const result = MATCHED_DATA[selectedTerrain];
  const matchedTour =
    MASTER_TOURS.find(t => t.id === result.matchedTourId) || MASTER_TOURS[0];

  const handleTerrainClick = (t: TerrainType) => {
    sound.playClick(750);
    setSelectedTerrain(t);
  };

  const handleGroupClick = (g: GroupStyle) => {
    sound.playClick(600);
    setSelectedGroup(g);
  };

  const handleSeasonClick = (s: SeasonType) => {
    sound.playClick(500);
    setSelectedSeason(s);
  };

  return (
    <section id="trip-matcher" className="py-20 sm:py-28 bg-[#faf7f0] border-b border-canvas-border relative overflow-hidden">
      <div className="container-custom space-y-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-canvas-border text-xs font-semibold text-ink-soft shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-brand-coral" />
            <span className="uppercase tracking-wider text-[11px]">Bespoke Route Matcher</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-ink">
            Find the journey that fits <br className="hidden sm:inline" />
            <span className="text-brand-coral italic font-serif font-normal">your travel rhythm.</span>
          </h2>
          <p className="text-sm sm:text-base text-ink-soft leading-relaxed">
            Select your preferred landscape, party size, and travel window. Our route engine matches you directly with the verified local master and exact departure dates.
          </p>
        </div>

        {/* 2-Column Interactive Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT: 3-Step Controls */}
          <div className="lg:col-span-6 space-y-8 bg-white p-6 sm:p-8 rounded-3xl border border-canvas-border shadow-md">
            
            {/* Step 1: Landscape Choice */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-ink-muted">
                  Step 1 • Choose Your Italian Landscape
                </label>
                <span className="text-xs font-semibold text-brand-coral">
                  {result.destination}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: 'coast', label: 'Amalfi Coast & Sea', desc: 'Private wooden boat, sea caves, cliffside villas', icon: Sailboat },
                  { id: 'tuscany', label: 'Tuscany & Chianti', desc: 'Ancient cellars, cypress hills, truffle hunts', icon: Wine },
                  { id: 'dolomites', label: 'The Dolomites Alpine', desc: 'Granite towers, high refuges, sky walks', icon: Mountain },
                  { id: 'como', label: 'Lake Como Waterfront', desc: 'Classic wooden speedboats, historic villas', icon: Building2 },
                  { id: 'sicily', label: 'Sicily & Aeolian', desc: 'Island hopping, volcano watch, azure bays', icon: Compass },
                ].map(item => {
                  const Icon = item.icon;
                  const isSelected = selectedTerrain === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleTerrainClick(item.id as TerrainType)}
                      className={`p-3.5 rounded-2xl text-left transition-all border cursor-pointer flex flex-col justify-between gap-2 ${
                        isSelected
                          ? 'bg-ink text-white border-ink shadow-md scale-[1.01]'
                          : 'bg-[#faf7f0] text-ink border-canvas-border hover:border-ink/40'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <Icon className={`w-4 h-4 ${isSelected ? 'text-brand-coral' : 'text-ink-soft'}`} />
                        {isSelected && <span className="w-2 h-2 rounded-full bg-brand-coral" />}
                      </div>
                      <div>
                        <div className="font-bold text-xs">{item.label}</div>
                        <div className={`text-[10px] mt-0.5 line-clamp-1 ${isSelected ? 'text-white/80' : 'text-ink-muted'}`}>
                          {item.desc}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Group Preference */}
            <div className="space-y-3 pt-4 border-t border-canvas-border">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-ink-muted block">
                Step 2 • Group Size Preference
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handleGroupClick('small-group')}
                  className={`p-3.5 rounded-2xl text-left transition-all border cursor-pointer ${
                    selectedGroup === 'small-group'
                      ? 'bg-ink text-white border-ink shadow-md'
                      : 'bg-[#faf7f0] text-ink border-canvas-border hover:border-ink/40'
                  }`}
                >
                  <Users className="w-4 h-4 mb-1.5 text-brand-coral" />
                  <div className="font-bold text-xs">Small Group Departure</div>
                  <div className={`text-[10px] mt-0.5 ${selectedGroup === 'small-group' ? 'text-white/80' : 'text-ink-muted'}`}>
                    Max 8 travelers per group
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => handleGroupClick('private')}
                  className={`p-3.5 rounded-2xl text-left transition-all border cursor-pointer ${
                    selectedGroup === 'private'
                      ? 'bg-ink text-white border-ink shadow-md'
                      : 'bg-[#faf7f0] text-ink border-canvas-border hover:border-ink/40'
                  }`}
                >
                  <Sparkles className="w-4 h-4 mb-1.5 text-brand-coral" />
                  <div className="font-bold text-xs">Private Departure</div>
                  <div className={`text-[10px] mt-0.5 ${selectedGroup === 'private' ? 'text-white/80' : 'text-ink-muted'}`}>
                    Custom dates for your circle
                  </div>
                </button>
              </div>
            </div>

            {/* Step 3: Season Window */}
            <div className="space-y-3 pt-4 border-t border-canvas-border">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-ink-muted block">
                Step 3 • Preferred Travel Window
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'spring', title: 'Spring Blossom', months: 'May - June' },
                  { id: 'summer', title: 'High Summer', months: 'July - August' },
                  { id: 'autumn', title: 'Autumn Harvest', months: 'Sept - October' },
                ].map(season => {
                  const isSelected = selectedSeason === season.id;
                  return (
                    <button
                      key={season.id}
                      type="button"
                      onClick={() => handleSeasonClick(season.id as SeasonType)}
                      className={`p-3 rounded-2xl text-center transition-all border cursor-pointer ${
                        isSelected
                          ? 'bg-brand-coral text-white border-brand-coral shadow-sm'
                          : 'bg-[#faf7f0] text-ink border-canvas-border hover:border-ink/40'
                      }`}
                    >
                      <div className="font-bold text-xs">{season.title}</div>
                      <div className={`text-[10px] mt-0.5 ${isSelected ? 'text-white/90' : 'text-ink-muted'}`}>
                        {season.months}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* RIGHT: Live Matched Result Card */}
          <div className="lg:col-span-6 sticky top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={result.terrain}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="bg-white rounded-3xl overflow-hidden border border-canvas-border shadow-xl space-y-6"
              >
                {/* Photo Header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                  <img
                    src={result.image}
                    alt={result.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="bg-brand-coral text-white text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                      Best Match For You
                    </span>
                    <span className="bg-white/95 backdrop-blur-md text-ink text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                      {result.duration}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs font-mono font-semibold text-amber-300 block">
                      {result.destination}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-0.5 leading-snug">
                      {result.title}
                    </h3>
                  </div>
                </div>

                {/* Details & Inclusions */}
                <div className="p-6 sm:p-7 pt-0 space-y-6">
                  
                  {/* Highlights List */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-ink-muted block">
                      Scouted Highlights Included
                    </span>
                    <ul className="space-y-1.5 text-xs text-ink-soft">
                      {result.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-brand-coral shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Lead Guide & Rating */}
                  <div className="bg-[#faf7f0] p-4 rounded-2xl border border-canvas-border flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-ink text-white font-bold flex items-center justify-center text-xs">
                        {result.leadGuide[0]}
                      </div>
                      <div>
                        <div className="font-bold text-xs text-ink">{result.leadGuide}</div>
                        <div className="text-[10px] text-ink-muted">{result.guideRole}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-amber-500 justify-end">
                        <Star className="w-3.5 h-3.5 fill-amber-500" />
                        <span className="text-xs font-bold text-ink ml-1">4.98</span>
                      </div>
                      <div className="text-[9px] font-mono text-ink-muted">Verified Guide</div>
                    </div>
                  </div>

                  {/* Pricing & Direct Booking Buttons */}
                  <div className="space-y-3 pt-2 border-t border-canvas-border">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-xs text-ink-muted block">All-Inclusive Price</span>
                        <div className="text-2xl font-display font-black text-ink">
                          {result.pricePerPerson}
                          <span className="text-xs font-normal text-ink-muted"> / guest</span>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Direct Staging Pass
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <a
                        href={result.klnkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:flex-1 py-3.5 px-6 rounded-full bg-brand-coral hover:bg-[#e0313f] text-white font-semibold text-xs text-center transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Reserve Matched Seat</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      {onSelectTour && (
                        <button
                          type="button"
                          onClick={() => onSelectTour(matchedTour)}
                          className="w-full sm:w-auto py-3.5 px-5 rounded-full bg-canvas-card hover:bg-canvas border border-canvas-border text-xs font-semibold text-ink transition-all cursor-pointer flex items-center justify-center gap-1.5"
                        >
                          <span>Full Itinerary</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
