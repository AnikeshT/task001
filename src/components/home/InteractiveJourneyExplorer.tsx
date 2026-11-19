'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Calendar,
  Users,
  Compass,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Star,
  Sun,
  Sunset,
  Sunrise,
  Sparkles,
  ChevronRight,
  Anchor,
  Mountain,
  Wine,
  Building,
  Sailboat,
} from 'lucide-react';
import { MASTER_TOURS } from '../../data/toursData';
import { TourItem } from '../../lib/types';

interface JourneyDay {
  dayNumber: number;
  dayTitle: string;
  activityTitle: string;
  description: string;
  highlight: string;
  image: string;
}

interface LuxuryJourney {
  id: string;
  destination: string;
  title: string;
  tagline: string;
  duration: string;
  groupSize: string;
  startingPrice: string;
  guideName: string;
  guideRole: string;
  matchedTourId: string;
  klnkUrl: string;
  categoryIcon: 'boat' | 'mountain' | 'wine' | 'villa';
  days: JourneyDay[];
}

const LUXURY_JOURNEYS: LuxuryJourney[] = [
  {
    id: 'amalfi',
    destination: 'Amalfi Coast & Capri',
    title: 'The Private Riva Voyage Along the Amalfi Cliffs',
    tagline: 'Cruise secluded turquoise coves, dine on clifftop terraces, and sleep in historic coastal villas.',
    duration: '5 Days / 4 Nights',
    groupSize: 'Max 8 Travelers',
    startingPrice: '€2,850',
    guideName: 'Luigi Esposito',
    guideRole: 'Positano Native & Licensed Captain',
    matchedTourId: 'amalfi-private-boat',
    klnkUrl: 'https://staging.klnk.tv/pushpak/2de2d421/italy-trip',
    categoryIcon: 'boat',
    days: [
      {
        dayNumber: 1,
        dayTitle: 'Day 1: Arrival & Sunset Aperitivo',
        activityTitle: 'Welcome to Positano & Private Cliffside Terrace Dinner',
        description:
          'Arrive at your boutique villa overlooking the pastel terraces of Positano. Settle in with a private chilled limoncello tasting and a candlelit dinner prepared by our private chef featuring freshly caught Mediterranean sea bass.',
        highlight: 'Private clifftop terrace overlooking the illuminated bay of Positano',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1800&q=85',
      },
      {
        dayNumber: 2,
        dayTitle: 'Day 2: Capri by Wooden Riva',
        activityTitle: 'Cruising the Faraglioni & Secret Island Caverns',
        description:
          'Board our restored vintage Riva boat for an exclusive full-day navigation around Capri. Drop anchor inside the Emerald and White grottos for private swimming before lunch at an exclusive beach club accessible only by sea.',
        highlight: 'Swimming in hidden caverns away from tourist ferries',
        image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1800&q=85',
      },
      {
        dayNumber: 3,
        dayTitle: 'Day 3: Ravello Gardens & Classical Cellars',
        activityTitle: 'Villa Cimbrone Infinity Terrace & Furore Wine Tasting',
        description:
          'Ascend the mountains to tranquil Ravello. Stroll through the breathtaking infinity gardens of Villa Cimbrone high above the sea, followed by a private reserve wine tasting on the steep terraced vineyards of Furore.',
        highlight: 'Panoramic view from 1,200 feet above the Gulf of Salerno',
        image: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=1800&q=85',
      },
      {
        dayNumber: 4,
        dayTitle: 'Day 4: Secret Cove Snorkeling & Nerano',
        activityTitle: 'Nerano Bay Spaghettata & Private Yacht Relaxation',
        description:
          'Glide across the protected Marine Reserve of Punta Campanella. Anchor in the turquoise shallows of Nerano for a relaxed lunch of the famous local zucchini pasta paired with crisp Falanghina.',
        highlight: 'Direct water taxi arrival to legendary seaside trattoria',
        image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1800&q=85',
      },
    ],
  },
  {
    id: 'tuscany',
    destination: 'Tuscany & Florence',
    title: 'The Great Estates: Brunello Vaults & Cypress Hills',
    tagline: 'Private access to historic castle cellars, truffle foraging, and medieval hill town lunches.',
    duration: '6 Days / 5 Nights',
    groupSize: 'Max 8 Travelers',
    startingPrice: '€2,650',
    guideName: 'Niccolò de’ Medici',
    guideRole: 'Sommelier & Historic Estate Steward',
    matchedTourId: 'tuscany-brunello-cellars',
    klnkUrl: 'https://staging.klnk.tv/pushpak/2de2d421/italy-trip',
    categoryIcon: 'wine',
    days: [
      {
        dayNumber: 1,
        dayTitle: 'Day 1: Florence to Chianti Ridges',
        activityTitle: 'Check-in at 12th-Century Wine Estate & Welcome Toast',
        description:
          'Meet in Florence and travel south into the rolling cypress hills of Chianti Classico. Check in to your private suites in a restored medieval estate surrounded by ancient olive groves and manicured gardens.',
        highlight: 'Private barrel room tasting of single-vineyard Chianti Classico Gran Selezione',
        image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1800&q=85',
      },
      {
        dayNumber: 2,
        dayTitle: 'Day 2: Montalcino Brunello Reserve',
        activityTitle: 'Underground Cellar Tour & Family Vintage Vault Tasting',
        description:
          'A journey through the iconic Val d’Orcia landscape to the hilltop fortress of Montalcino. Visit two legendary, family-run estates to taste library vintages of Brunello di Montalcino straight from the oak casks.',
        highlight: 'Library vintage tasting unavailable on public wine tours',
        image: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=1800&q=85',
      },
      {
        dayNumber: 3,
        dayTitle: 'Day 3: Oak Forest Truffle Hunt',
        activityTitle: 'Walking with Trained Truffle Dogs & Farmhouse Feast',
        description:
          'Join a local truffle master and his skilled lagotto dogs in the private oak woods near San Gimignano. Unearth fragrant black and white truffles, followed by a multi-course farmhouse pasta lunch featuring your harvest.',
        highlight: 'Hands-on hunt and immediate four-course truffle lunch',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1800&q=85',
      },
      {
        dayNumber: 4,
        dayTitle: 'Day 4: Siena Private Palace Tour',
        activityTitle: 'Private Palio Contrada Access & Piazza del Campo Sunset',
        description:
          'Walk through private courtyards in Siena usually closed to travelers. Learn the fierce, centuries-old secrets of the Palio horse race from a Contrada elder, followed by a sunset aperitif facing the Palazzo Pubblico.',
        highlight: 'Exclusive entrance to private historical Contrada museum and chapel',
        image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1800&q=85',
      },
    ],
  },
  {
    id: 'dolomites',
    destination: 'The Dolomites Alpine',
    title: 'High Alpine Peaks & Private Mountain Refuges',
    tagline: 'Spectacular mountain passes, guided scenic ridge walks, and cozy alpine fine dining under the stars.',
    duration: '5 Days / 4 Nights',
    groupSize: 'Max 6 Travelers',
    startingPrice: '€2,450',
    guideName: 'Matteo Unterkircher',
    guideRole: 'Certified UIAGM Alpine Mountain Guide',
    matchedTourId: 'dolomites-luxury-traverse',
    klnkUrl: 'https://staging.klnk.tv/pushpak/2de2d421/italy-trip',
    categoryIcon: 'mountain',
    days: [
      {
        dayNumber: 1,
        dayTitle: 'Day 1: Cortina d’Ampezzo Welcome',
        activityTitle: 'Alpine Chalet Check-in & Gear Fitting',
        description:
          'Arrive in glamorous Cortina d’Ampezzo beneath the towering Tofane peaks. Meet your certified alpine guide for route orientation and enjoy a hearty South Tyrolean dinner paired with regional Lagrein wine.',
        highlight: 'Panoramic orientation overlooking the Cortina amphitheater',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1800&q=85',
      },
      {
        dayNumber: 2,
        dayTitle: 'Day 2: Tre Cime di Lavaredo Circuit',
        activityTitle: 'Morning Traverse Across Iconic Pink Limestone Towers',
        description:
          'Depart early before the day visitors arrive to hike the dramatic loop around the Drei Zinnen / Tre Cime di Lavaredo. Watch the vertical rock faces glow vibrant gold and pink in the morning sun.',
        highlight: 'Sunrise viewing of the world-famous three stone pillars',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1800&q=85',
      },
      {
        dayNumber: 3,
        dayTitle: 'Day 3: High Refuge Stay Above the Clouds',
        activityTitle: 'Helicopter Hop to Lagazuoi & Stargazing Dinner',
        description:
          'Take a scenic mountain lift or helicopter to high-altitude Rifugio Lagazuoi at 9,000 feet. Enjoy a world-class three-course dinner and sleep above the clouds with an uninterrupted view of the Milky Way.',
        highlight: 'Sleeping at 9,000 feet with 360-degree alpine horizon',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1800&q=85',
      },
      {
        dayNumber: 4,
        dayTitle: 'Day 4: Val Badia Ladin Heritage',
        activityTitle: 'Descent to Val Badia & Artisan Cheese Tasting',
        description:
          'Descend through wildflower meadows into the peaceful valley of Val Badia. Discover the unique Ladin mountain culture and visit a high-pasture dairy farm for freshly aged alpine cheeses.',
        highlight: 'Private cheese and cured speck tasting at a traditional mountain barn',
        image: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=1800&q=85',
      },
    ],
  },
  {
    id: 'como',
    destination: 'Lake Como & Bellagio',
    title: 'Grand Waterfront Villas & Classic Riva Boats',
    tagline: 'Private water gates, magnificent neoclassical gardens, and lakeside champagne terraces.',
    duration: '4 Days / 3 Nights',
    groupSize: 'Max 6 Travelers',
    startingPrice: '€2,950',
    guideName: 'Fabrizio Villa',
    guideRole: 'Private Boat Captain & Bellagio Native',
    matchedTourId: 'lake-como-riva-yacht',
    klnkUrl: 'https://staging.klnk.tv/pushpak/2de2d421/italy-trip',
    categoryIcon: 'villa',
    days: [
      {
        dayNumber: 1,
        dayTitle: 'Day 1: Arrival in Tremezzo',
        activityTitle: 'Waterfront Villa Check-in & Sunset Cruise',
        description:
          'Check into your luxury lakeside retreat in Tremezzo. In the evening, step straight onto our mahogany wooden boat for a sunset champagne cruise past the sparkling waterfront promenades of Bellagio and Varenna.',
        highlight: 'Glass of vintage prosecco as twilight settles on the lake',
        image: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=1800&q=85',
      },
      {
        dayNumber: 2,
        dayTitle: 'Day 2: Private Access to Villa Balbianello',
        activityTitle: 'Exclusive Water-Gate Docking & Loggia Tour',
        description:
          'Avoid the walking crowds by arriving at Villa del Balbianello via its private historical water dock. Enjoy a private guided walk through the tiered gardens and iconic ivy-covered arches seen in cinema history.',
        highlight: 'Private entry via the historic stone water staircase',
        image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1800&q=85',
      },
      {
        dayNumber: 3,
        dayTitle: 'Day 3: Bellagio Artisans & Wine Cellars',
        activityTitle: 'Hidden Cobblestone Alleys & Private Silk Workshop',
        description:
          'Explore the cobblestone staircases of Bellagio with our local guide. Visit an artisanal Lake Como silk studio, followed by a sommelier-led wine and local olive oil tasting in a 300-year-old stone vaulted cellar.',
        highlight: 'Behind-the-scenes visit with a master silk craftsman',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1800&q=85',
      },
    ],
  },
  {
    id: 'sicily',
    destination: 'Sicily & Aeolian Islands',
    title: 'Volcanic Island Hopping & Azure Catamaran Sailing',
    tagline: 'Sail cobalt blue seas, watch Stromboli erupt at night, and savor authentic Sicilian island cuisine.',
    duration: '7 Days / 6 Nights',
    groupSize: 'Max 8 Travelers',
    startingPrice: '€2,750',
    guideName: 'Sebastiano Fazio',
    guideRole: 'Aeolian Sailor & Marine Naturalist',
    matchedTourId: 'sicily-aeolian-yacht',
    klnkUrl: 'https://staging.klnk.tv/pushpak/2de2d421/italy-trip',
    categoryIcon: 'boat',
    days: [
      {
        dayNumber: 1,
        dayTitle: 'Day 1: Embarkation in Milazzo',
        activityTitle: 'Welcome Aboard Luxury Catamaran & Sail to Lipari',
        description:
          'Board our spacious, modern sailing catamaran in Milazzo. Sail across deep blue waters to the historic island of Lipari, dropping anchor in a quiet turquoise bay for a welcome swim before dinner ashore.',
        highlight: 'First ocean sunset from the front trampoline deck',
        image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1800&q=85',
      },
      {
        dayNumber: 2,
        dayTitle: 'Day 2: Panarea Secluded Coves',
        activityTitle: 'Snorkeling Prehistoric Inlets & Chic Island Strolls',
        description:
          'Cruise to glamorous Panarea, famous for its whitewashed houses and crystalline waters. Snorkel above submerged volcanic fumaroles that bubble gently from the seabed, followed by an evening aperitivo at a terrace lounge.',
        highlight: 'Snorkeling over underwater volcanic bubble vents',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1800&q=85',
      },
      {
        dayNumber: 3,
        dayTitle: 'Day 3: Stromboli Night Volcano Watch',
        activityTitle: 'Witnessing Glowing Lava Eruptions from the Water',
        description:
          'Sail beneath the smoking summit of active volcano Stromboli. In the evening, hold position offshore to safely watch the natural night fireworks as incandescent lava bursts against the dark Mediterranean sky.',
        highlight: 'Viewing fiery volcanic bursts under a sky full of stars',
        image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1800&q=85',
      },
      {
        dayNumber: 4,
        dayTitle: 'Day 4: Salina Sweet Malvasia Vineyards',
        activityTitle: 'Twin Green Volcanic Peaks & Local Island Tasting',
        description:
          'Visit lush Salina, covered in wild caper bushes and sweet Malvasia grapes. Tour an organic family vineyard for a tasting of golden dessert wine paired with artisan Sicilian goat cheeses and crusty bread.',
        highlight: 'Wine tasting overlooking sheer cliffs dropping into the sea',
        image: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=1800&q=85',
      },
    ],
  },
];

type LightMood = 'morning' | 'midday' | 'sunset';

interface InteractiveJourneyExplorerProps {
  onSelectTour?: (tour: TourItem) => void;
  onOpenKlnkModal?: (url: string, title: string) => void;
}

export const InteractiveJourneyExplorer: React.FC<InteractiveJourneyExplorerProps> = ({
  onSelectTour,
}) => {
  const [activeJourneyIdx, setActiveJourneyIdx] = useState(0);
  const [activeDayIdx, setActiveDayIdx] = useState(0);
  const [lightMood, setLightMood] = useState<LightMood>('midday');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const journey = LUXURY_JOURNEYS[activeJourneyIdx];
  const day = journey.days[activeDayIdx] || journey.days[0];

  // Reset to Day 1 when switching journey
  const handleSelectJourney = (idx: number) => {
    setActiveJourneyIdx(idx);
    setActiveDayIdx(0);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const moodGradients = {
    morning: 'from-amber-400/20 via-orange-300/10 to-transparent',
    midday: 'from-sky-400/15 via-blue-500/05 to-transparent',
    sunset: 'from-rose-500/25 via-purple-600/15 to-transparent',
  }[lightMood];

  const matchedTour =
    MASTER_TOURS.find(t => t.id === journey.matchedTourId) || MASTER_TOURS[0];

  return (
    <section id="journey-preview" className="py-20 sm:py-28 bg-[#fdfbf7] border-y border-canvas-border relative overflow-hidden">
      {/* Background Decorative Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-coral/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10 space-y-12">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER                                                            */}
        {/* ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-canvas-border">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-canvas-border text-xs font-semibold text-ink-soft shadow-xs">
              <Compass className="w-3.5 h-3.5 text-brand-coral" />
              <span className="uppercase tracking-wider text-[11px]">Interactive Journey Explorer</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink">
              Look inside the itinerary <br className="hidden sm:inline" />
              <span className="text-brand-coral italic font-serif font-normal">before you pack your bag.</span>
            </h2>
            <p className="text-sm sm:text-base text-ink-soft leading-relaxed">
              Step through our hand-scouted Italian journeys day by day. Switch destinations, explore the morning and evening plans, and see exactly what makes small-group travel so special.
            </p>
          </div>

          {/* Quick Mood Filter */}
          <div className="flex items-center gap-2 bg-white p-1.5 rounded-2xl border border-canvas-border shadow-xs self-start md:self-auto text-xs font-semibold">
            <span className="text-[11px] uppercase tracking-wider text-ink-muted px-2 hidden sm:inline">Lighting Mood</span>
            <button
              type="button"
              onClick={() => setLightMood('morning')}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
                lightMood === 'morning'
                  ? 'bg-amber-100 text-amber-900 shadow-xs'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              <Sunrise className="w-3.5 h-3.5 text-amber-600" />
              <span>Morning</span>
            </button>
            <button
              type="button"
              onClick={() => setLightMood('midday')}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
                lightMood === 'midday'
                  ? 'bg-sky-100 text-sky-900 shadow-xs'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              <Sun className="w-3.5 h-3.5 text-sky-600" />
              <span>Midday</span>
            </button>
            <button
              type="button"
              onClick={() => setLightMood('sunset')}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
                lightMood === 'sunset'
                  ? 'bg-rose-100 text-rose-900 shadow-xs'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              <Sunset className="w-3.5 h-3.5 text-rose-600" />
              <span>Sunset</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESTINATION TABS (CLEAR ENGLISH)                                          */}
        {/* ========================================================================= */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {LUXURY_JOURNEYS.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleSelectJourney(idx)}
              className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 border ${
                activeJourneyIdx === idx
                  ? 'bg-ink text-canvas border-ink shadow-sm'
                  : 'bg-white text-ink-soft border-canvas-border hover:border-ink hover:text-ink'
              }`}
            >
              <span>{item.destination}</span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                activeJourneyIdx === idx ? 'bg-white/20 text-white' : 'bg-canvas-card text-ink-muted'
              }`}>
                {item.duration.split(' ')[0]} Days
              </span>
            </button>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* MAIN INTERACTIVE DISPLAY: PHOTO CARD (LEFT) & DAY-BY-DAY DETAILS (RIGHT)  */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ========================================================================= */}
          {/* LEFT: INTERACTIVE SCENERY CARD WITH DEPTH TILT & DAY BADGE                */}
          {/* ========================================================================= */}
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-7 relative"
          >
            <motion.div
              animate={{
                rotateX: mousePos.y * -8,
                rotateY: mousePos.x * 10,
              }}
              transition={{ type: 'spring', stiffness: 150, damping: 20 }}
              className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-3xl overflow-hidden shadow-2xl border border-canvas-border select-none bg-black"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Dynamic Image with Cross-Fade on Day Change */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${journey.id}-${day.dayNumber}`}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1.02 }}
                  exit={{ opacity: 0, scale: 1.0 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="absolute inset-[-5%] bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${day.image})`,
                    transform: `translate3d(${mousePos.x * -20}px, ${mousePos.y * -15}px, 0)`,
                  }}
                />
              </AnimatePresence>

              {/* Natural Sunlight Wash */}
              <div className={`absolute inset-0 bg-gradient-to-t ${moodGradients} pointer-events-none transition-all duration-700`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/20 pointer-events-none" />

              {/* Top Floating Badges */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10 pointer-events-none">
                <div className="bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-xs font-semibold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-coral animate-ping" />
                  <span>{journey.destination}</span>
                </div>

                <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono font-bold text-ink shadow-sm">
                  {journey.groupSize}
                </div>
              </div>

              {/* Bottom Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-10 text-white space-y-2 pointer-events-none drop-shadow-md">
                <div className="flex items-center gap-2">
                  <span className="bg-brand-coral text-white text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full">
                    Day {day.dayNumber} Preview
                  </span>
                  <span className="text-xs text-white/80 font-medium">
                    {journey.duration}
                  </span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-snug">
                  {day.activityTitle}
                </h3>
                <p className="text-xs sm:text-sm text-white/90 font-sans line-clamp-2 max-w-xl">
                  {day.highlight}
                </p>
              </div>
            </motion.div>

            {/* Quick Helper Text Under Card */}
            <div className="mt-4 flex items-center justify-between text-xs text-ink-muted">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-brand-coral" />
                Move your cursor to tilt photo perspective
              </span>
              <span className="font-mono font-semibold text-ink">
                From {journey.startingPrice} per person all-inclusive
              </span>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT: INTERACTIVE DAY-BY-DAY SCRUBBER & BOOKING CARD                     */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Day Selector Pills */}
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink-muted block">
                Select Itinerary Day
              </span>
              <div className="grid grid-cols-4 gap-2">
                {journey.days.map((d, idx) => (
                  <button
                    key={d.dayNumber}
                    type="button"
                    onClick={() => setActiveDayIdx(idx)}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold text-center transition-all cursor-pointer border ${
                      activeDayIdx === idx
                        ? 'bg-brand-coral text-white border-brand-coral shadow-md scale-[1.02]'
                        : 'bg-white text-ink-soft border-canvas-border hover:border-ink hover:text-ink'
                    }`}
                  >
                    <span className="block text-[10px] uppercase opacity-75 font-mono">Day</span>
                    <span className="font-bold text-sm leading-tight">{d.dayNumber}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Day Narrative Card */}
            <div className="bg-white rounded-3xl border border-canvas-border p-6 sm:p-7 space-y-5 shadow-lg">
              
              <div className="space-y-1.5 border-b border-canvas-border pb-4">
                <span className="text-xs font-mono font-bold text-brand-coral uppercase tracking-wider">
                  {day.dayTitle}
                </span>
                <h4 className="font-display text-xl sm:text-2xl font-bold text-ink leading-snug">
                  {day.activityTitle}
                </h4>
              </div>

              {/* Day Description */}
              <p className="text-xs sm:text-sm text-ink-soft leading-relaxed">
                {day.description}
              </p>

              {/* Special Experience Highlight Box */}
              <div className="bg-canvas-card p-4 rounded-2xl border border-canvas-border space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-ink-muted block">
                  Signature Experience
                </span>
                <p className="text-xs font-semibold text-ink flex items-start gap-2">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0 mt-0.5" />
                  <span>{day.highlight}</span>
                </p>
              </div>

              {/* Verified Guide Badge */}
              <div className="flex items-center justify-between text-xs pt-1 border-t border-canvas-border">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-ink text-canvas flex items-center justify-center font-bold text-xs">
                    {journey.guideName[0]}
                  </div>
                  <div>
                    <span className="font-bold text-ink block leading-none">{journey.guideName}</span>
                    <span className="text-[10px] text-ink-muted font-sans block mt-0.5">{journey.guideRole}</span>
                  </div>
                </div>

                <span className="text-[11px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Verified Guide
                </span>
              </div>

              {/* Direct Booking Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={journey.klnkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-full bg-brand-coral hover:bg-[#e0313f] text-white font-semibold text-xs text-center transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book This Journey Direct</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {onSelectTour && (
                  <button
                    type="button"
                    onClick={() => onSelectTour(matchedTour)}
                    className="w-full sm:w-auto py-3.5 px-5 rounded-full bg-canvas hover:bg-canvas-card border border-canvas-border text-xs font-semibold text-ink transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Full Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Trust Footer */}
              <div className="flex items-center justify-between text-[10px] font-mono text-ink-muted pt-1">
                <span>Direct operator protocol via staging.klnk.tv</span>
                <span>Zero middleman commission</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
