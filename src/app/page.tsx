'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Navbar } from '../components/layout/Navbar';
import { ThemeAwareLogo } from '../components/common/ThemeAwareLogo';
import { InteractiveJourneyExplorer } from '../components/home/InteractiveJourneyExplorer';
import { TripMatcher } from '../components/home/TripMatcher';
import { TourCard } from '../components/home/TourCard';
import { TourDetailModal } from '../components/home/TourDetailModal';
import { KlnkBookingModal } from '../components/home/KlnkBookingModal';
import { StickyMobileCta } from '../components/common/StickyMobileCta';
import { MASTER_TOURS, MASTER_OPERATORS } from '../data/toursData';
import { TourItem, Currency, DestinationRegion, TravelStyle } from '../lib/types';
import {
  Star,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Lock,
  ChevronDown,
  ChevronUp,
  MapPin,
  Calendar,
  Sparkles,
  Users,
  Compass,
  HeartHandshake,
  Send,
  Sailboat,
  Mountain,
  Wine,
  Building2,
} from 'lucide-react';

export default function HomePage() {
  const [currency, setCurrency] = useState<Currency>('EUR');
  const [selectedRegion, setSelectedRegion] = useState<DestinationRegion>('All');
  const [selectedStyle, setSelectedStyle] = useState<TravelStyle>('All');

  // Modals
  const [detailTour, setDetailTour] = useState<TourItem | null>(null);
  const [bookingTour, setBookingTour] = useState<TourItem | null>(null);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Concierge Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: 'Amalfi Coast & Capri',
    travelers: '2',
    date: '',
    message: '',
  });

  const liveBookingUrl = 'https://staging.klnk.tv/pushpak/2de2d421/italy-trip';

  // Filtered Tours Calculation
  const filteredTours = useMemo(() => {
    return MASTER_TOURS.filter(tour => {
      if (selectedRegion !== 'All') {
        if (selectedRegion === 'Amalfi Coast') {
          if (!tour.region.includes('Amalfi') && !tour.destination.toLowerCase().includes('amalfi')) return false;
        } else if (tour.region !== selectedRegion) {
          return false;
        }
      }
      if (selectedStyle !== 'All' && tour.travelStyle !== selectedStyle) return false;
      return true;
    });
  }, [selectedRegion, selectedStyle]);

  const placesWeKnow = [
    {
      name: 'Amalfi Coast & Capri',
      region: 'Amalfi Coast',
      tagline: 'Private wooden gozzos, cliffside villas & golden hour cruising',
      image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    },
    {
      name: 'Tuscany & Chianti',
      region: 'Tuscany & Florence',
      tagline: 'Centuries-old Brunello cellars, truffle woods & private estates',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    },
    {
      name: 'Dolomites & South Tyrol',
      region: 'Dolomites & South Tyrol',
      tagline: 'High alpine traverses, UIAGM mountain masters & secluded rifugi',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    },
    {
      name: 'Lake Como & Bellagio',
      region: 'Lake Como & Northern Lakes',
      tagline: 'Aristocratic palaces, classic Riva launches & private gardens',
      image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80',
    },
    {
      name: 'Sicily & Aeolian Islands',
      region: 'Sicily & Aeolian Islands',
      tagline: 'Volcanic catamaran charters, Taormina & secluded coves',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    },
    {
      name: 'Venice & Venetian Lagoon',
      region: 'Venice & Venetian Lagoon',
      tagline: 'Private water limousines, Doge crypts & secret Murano forges',
      image: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1200&q=80',
    },
    {
      name: 'Italian Riviera & Portofino',
      region: 'Italian Riviera & Portofino',
      tagline: 'Ligurian sea inlets, San Fruttuoso Abbey & private cliff paths',
      image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80',
    },
    {
      name: 'Piedmont Langhe & Barolo',
      region: 'Piedmont Langhe & Barolo',
      tagline: 'Alba white truffles, 100-year Barolo crus & Royal Savoy castles',
      image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  const travelStyles = [
    {
      title: 'Nautical Privé & Coastal Charters',
      icon: <Sailboat className="w-5 h-5 text-brand-coral" />,
      tag: 'Yacht & Coastal',
      desc: 'Hand-crafted Riva launches and classic wooden gozzo boats across Capri, Portofino, Lake Como, and the Aeolian Islands.',
      highlights: 'Private skipper & steward · Sunset Prosecco · Secluded coves',
    },
    {
      title: 'Alpine High Routes & Via Ferrata',
      icon: <Mountain className="w-5 h-5 text-brand-coral" />,
      tag: 'Alpine & Adventure',
      desc: 'Traversing the legendary Dolomite spires with certified UIAGM alpine guides and staying in private mountain rifugi.',
      highlights: 'Certified UIAGM guide · Five-course rifugio dinner · Gear included',
    },
    {
      title: 'Grand Cru Vaults & White Truffle Foraging',
      icon: <Wine className="w-5 h-5 text-brand-coral" />,
      tag: 'Wine & Gastronomy',
      desc: 'Private barrel tastings in centuries-old Chianti and Barolo vaults, accompanied by master trifulau and truffle hounds.',
      highlights: 'Master Sommelier tastings · Dog truffle hunt · Vineyard pairings',
    },
    {
      title: 'Aristocratic Lakeside Palaces & Heritage Villas',
      icon: <Building2 className="w-5 h-5 text-brand-coral" />,
      tag: 'Luxury Private',
      desc: 'Exclusive key access to private aristocratic estates on Lake Como, Venice grand canal palazzi, and Medici gardens.',
      highlights: 'Private palace curator · After-hours grounds · Private dock entry',
    },
  ];

  const faqs = [
    {
      q: 'How big are the groups?',
      a: 'We cap our small-group departures at strictly eight travelers (and many departures run with 4 to 6). This guarantees private boat boarding without crowds, intimate vineyard lunches with estate owners, and agile high-altitude alpine guiding.',
    },
    {
      q: 'What is included in the published price?',
      a: 'Every price published on Tourpublish is 100% all-inclusive: verified Italian master skippers or UIAGM guides, handpicked luxury accommodations, private ground and water transfers, all museum/villa permits, and curated culinary experiences with wine.',
    },
    {
      q: 'How does the direct booking via staging.klnk.tv work?',
      a: 'When you choose a tour, you are redirected directly to that operator’s verified checkout on staging.klnk.tv. There are zero agency markups or hidden booking fees. Upon reservation, you receive an instant cryptographic mobile boarding pass for Apple Wallet and Google Wallet.',
    },
    {
      q: 'What is your cancellation guarantee?',
      a: 'All master tours listed on Tourpublish include our mandatory 7-Day 100% Free Cancellation Standard. You can cancel up to seven days prior to departure directly on staging.klnk.tv with zero penalty fees.',
    },
    {
      q: 'Can I join as a solo traveler?',
      a: 'Yes. Many travelers join our small groups solo. You can either book your own private room or request twin sharing if available. You will never be paired with strangers in single-room settings.',
    },
    {
      q: 'Can you customize private departure dates for our group?',
      a: 'Absolutely. Every tour can be booked as a 100% bespoke private expedition for your family, corporate retreat, or honeymoon. Our Rome Conciergerie coordinates directly with the local operator.',
    },
  ];

  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col font-sans">
      <Navbar currentCurrency={currency} onCurrencyChange={setCurrency} />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* 1. WAYFARE-INSPIRED HERO SECTION */}
        {/* ========================================================================= */}
        <section className="pt-12 sm:pt-20 pb-16 border-b border-canvas-border">
          <div className="container-custom space-y-10">
            {/* Hero Copy Block */}
            <div className="max-w-4xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-canvas-card border border-canvas-border text-ink shadow-xs">
                <span className="w-2 h-2 rounded-full bg-brand-coral" />
                <span className="uppercase tracking-wider text-[11px]">Independent Directory of Verified Italian Master Operators</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-ink leading-[0.98] tracking-tight">
                Italy, unmediated. <br className="hidden sm:inline" />
                <span className="italic font-serif font-normal text-brand-coral">Direct from the hands</span> that keep it.
              </h1>

              <p className="text-lg sm:text-xl text-ink-soft max-w-2xl leading-relaxed">
                Eight guarded routes across the Amalfi coastline, Chianti vaults, Dolomite traverses, and Venetian lagoons. Never more than eight guests, fixed all-inclusive rates, and unmediated bookings with vetted Italian masters.
              </p>

              {/* Action Buttons & Review Proof */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-5">
                <div className="flex items-center gap-3">
                  <a href="#journey-preview" className="btn-dark text-sm px-6 py-3.5 flex items-center gap-2">
                    <Compass className="w-4 h-4 text-brand-coral" />
                    <span>Explore Itineraries</span>
                  </a>
                  <a href="#trips" className="btn-outline text-sm px-6 py-3.5">
                    <span>Browse All Tours</span>
                  </a>
                </div>

                <div className="flex items-center gap-2.5 text-xs font-semibold text-ink-muted pl-1 sm:border-l sm:border-canvas-border sm:pl-5 font-mono">
                  <div className="flex items-center text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <span>4.98 / 5.0 • 1,240 Verified Journeys</span>
                </div>
              </div>
            </div>

            {/* Hero Wide Atmospheric Photography with Badges */}
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden rounded-3xl sm:rounded-4xl border border-canvas-border shadow-md">
              <div
                role="img"
                aria-label="Private wooden Riva boat cruising Positano and Capri along the Amalfi Coast"
                className="w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out hover:scale-[1.02]"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=2200&q=85')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

              {/* Floating Overlay Info Card */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-canvas-card/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-canvas-border max-w-md shadow-lg">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-coral block">
                  Featured Italian Expedition
                </span>
                <p className="font-display text-base sm:text-lg font-bold text-ink mt-0.5">
                  Amalfi Coast by Foot, Riva Launch and Cliffside Villa
                </p>
                <div className="flex items-center justify-between text-xs text-ink-muted mt-2 pt-2 border-t border-canvas-border-subtle">
                  <span>Amalfi Nautical Privé · Positano</span>
                  <a
                    href="https://staging.klnk.tv/pushpak/2de2d421/italy-trip"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-coral font-bold hover:underline flex items-center gap-1"
                  >
                    <span>Reserve Direct</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. STATS & PHILOSOPHY: SMALL ON PURPOSE. LOCAL BY DESIGN. */}
        {/* ========================================================================= */}
        <section id="philosophy" className="py-16 sm:py-24 border-b border-canvas-border bg-canvas-card/60">
          <div className="container-custom space-y-12">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-ink-muted block">
                How We Operate
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-ink tracking-tight mt-2">
                Small on purpose. Local by design.
              </h2>
            </div>

            {/* 4 Stat Cards Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="wayfare-card p-6 sm:p-8 space-y-2">
                <h3 className="text-4xl sm:text-5xl font-display font-extrabold text-ink">
                  2011
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-ink-muted uppercase tracking-wider">
                  Vetting Italian operators since
                </p>
              </div>

              <div className="wayfare-card p-6 sm:p-8 space-y-2">
                <h3 className="text-4xl sm:text-5xl font-display font-extrabold text-ink">
                  8 max
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-ink-muted uppercase tracking-wider">
                  Travelers per departure
                </p>
              </div>

              <div className="wayfare-card p-6 sm:p-8 space-y-2">
                <h3 className="text-4xl sm:text-5xl font-display font-extrabold text-ink">
                  100%
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-ink-muted uppercase tracking-wider">
                  Guides who live locally
                </p>
              </div>

              <div className="wayfare-card p-6 sm:p-8 space-y-2">
                <h3 className="text-4xl sm:text-5xl font-display font-extrabold text-ink">
                  24/7
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-ink-muted uppercase tracking-wider">
                  Support while you travel
                </p>
              </div>
            </div>

            {/* Manifesto Quote Banner */}
            <div className="wayfare-card p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-canvas border-2 border-canvas-border">
              <div className="space-y-2 max-w-2xl">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-ink text-canvas inline-block">
                  Directory Standard
                </span>
                <h4 className="text-xl sm:text-2xl font-display font-bold text-ink leading-snug">
                  &ldquo;Every trip is scouted and verified by our own team before it goes on directory sale.&rdquo;
                </h4>
                <p className="text-xs sm:text-sm text-ink-soft leading-relaxed">
                  We don’t scrape aggregate listings. We personally meet the captains in Positano, hike with the UIAGM alpine guides in Cortina, and taste the barrels in Montalcino.
                </p>
              </div>

              <a
                href={liveBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark text-xs py-3 px-6 shrink-0"
              >
                <span>View staging.klnk.tv pass</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2.5 INTERACTIVE JOURNEY EXPLORER (BESPOKE TRAVEL EXPERIENCE)              */}
        {/* ========================================================================= */}
        <InteractiveJourneyExplorer onSelectTour={setDetailTour} />

        {/* ========================================================================= */}
        {/* 2.8 BESPOKE ROUTE MATCHER WIDGET                                          */}
        {/* ========================================================================= */}
        <TripMatcher onSelectTour={setDetailTour} />

        {/* ========================================================================= */}
        {/* 3. EIGHT PLACES WE KNOW BY HEART (DESTINATIONS) */}
        {/* ========================================================================= */}
        <section id="destinations" className="py-16 sm:py-24 border-b border-canvas-border">
          <div className="container-custom space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-ink-muted block">
                  Regional Guides
                </span>
                <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-ink tracking-tight mt-2">
                  Eight places we know by heart
                </h2>
                <p className="text-sm sm:text-base text-ink-soft mt-2 max-w-xl">
                  From private coves in Capri to high alpine refuges in the Dolomites and 100-year Barolo cellars.
                </p>
              </div>

              <a href="#trips" className="text-sm font-bold text-ink hover:text-brand-coral transition-colors flex items-center gap-1">
                <span>View all trips</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Destination Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {placesWeKnow.map((place, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setSelectedRegion(place.region as DestinationRegion);
                    document.getElementById('trips')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="wayfare-card overflow-hidden group cursor-pointer flex flex-col justify-between"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={place.image}
                      alt={place.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />
                    <div className="absolute top-3 left-3 bg-ink/80 backdrop-blur-sm text-canvas text-[11px] font-semibold px-2.5 py-1 rounded-full">
                      Italy
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="font-display text-xl font-bold text-ink group-hover:text-brand-coral transition-colors">
                      {place.name}
                    </h3>
                    <p className="text-xs text-ink-soft leading-relaxed line-clamp-2">
                      {place.tagline}
                    </p>
                    <span className="text-xs font-bold text-brand-coral pt-2 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Explore trips</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. FIND A TRIP THAT FITS (INTERACTIVE TRIPS CATALOGUE CMS) */}
        {/* ========================================================================= */}
        <section id="trips" className="py-16 sm:py-24 border-b border-canvas-border bg-canvas-card/40">
          <div className="container-custom space-y-10">
            <div className="space-y-4 max-w-3xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-ink-muted block">
                The Catalogue
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-ink tracking-tight">
                Find a trip that fits
              </h2>
              <p className="text-base text-ink-soft leading-relaxed">
                Filter by destination or travel style. Every price includes guides, stays, private boat or alpine transport, and most meals.
              </p>
            </div>

            {/* Destination Pill Filters */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
                {['All', 'Amalfi Coast', 'Tuscany & Florence', 'Dolomites & South Tyrol', 'Lake Como & Northern Lakes', 'Sicily & Aeolian Islands', 'Venice & Venetian Lagoon'].map(reg => (
                  <button
                    key={reg}
                    type="button"
                    onClick={() => setSelectedRegion(reg as DestinationRegion)}
                    className={`pill-tab whitespace-nowrap cursor-pointer ${
                      selectedRegion === reg ? 'pill-tab-active' : 'pill-tab-inactive'
                    }`}
                  >
                    {reg === 'All' ? 'All destinations' : reg.split('&')[0].trim()}
                  </button>
                ))}
              </div>

              {/* Travel Style Secondary Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar text-xs">
                {['All', 'Luxury Private', 'Yacht & Coastal', 'Wine & Gastronomy', 'Alpine & Adventure'].map(st => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => setSelectedStyle(st as TravelStyle)}
                    className={`px-3 py-1 rounded-full border transition-all cursor-pointer ${
                      selectedStyle === st
                        ? 'bg-ink text-canvas font-semibold border-ink'
                        : 'border-canvas-border text-ink-muted hover:border-ink hover:text-ink'
                    }`}
                  >
                    {st === 'All' ? 'All travel styles' : st}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Count & Protocol Notice */}
            <div className="flex items-center justify-between text-xs text-ink-muted border-b border-canvas-border pb-3 font-mono">
              <span>SHOWING {filteredTours.length} OF {MASTER_TOURS.length} EXPEDITIONS</span>
              <span className="hidden sm:inline">DIRECT OPERATOR BOOKING VIA STAGING.KLNK.TV</span>
            </div>

            {/* Trips Grid */}
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
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. FIVE KINDS OF TRIP, ONE WAY OF RUNNING THEM */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-24 border-b border-canvas-border">
          <div className="container-custom space-y-12">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-ink-muted block">
                Travel Styles
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-ink tracking-tight mt-2">
                Five kinds of trip, one way of running them
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {travelStyles.map((style, i) => (
                <div key={i} className="wayfare-card p-6 sm:p-8 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-2xl bg-canvas flex items-center justify-center border border-canvas-border">
                      {style.icon}
                    </div>
                    <h3 className="font-display text-2xl font-bold text-ink">
                      {style.title}
                    </h3>
                    <p className="text-sm text-ink-soft leading-relaxed">
                      {style.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-canvas-border-subtle flex items-center justify-between text-xs text-ink-muted">
                    <span className="font-semibold text-ink">{style.highlights}</span>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedStyle(style.tag as TravelStyle);
                        document.getElementById('trips')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-brand-coral font-bold hover:underline flex items-center gap-1"
                    >
                      <span>Filter trips</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. HOW IT WORKS: ROUGH IDEA TO PACKED BAG IN THREE STEPS */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-24 border-b border-canvas-border bg-canvas-card/60">
          <div className="container-custom space-y-12 max-w-4xl">
            <div className="text-center space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-ink-muted block">
                Direct Booking Process
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-ink tracking-tight">
                From a rough idea to a packed bag in three steps
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="wayfare-card p-8 space-y-3 text-center bg-canvas">
                <div className="w-12 h-12 rounded-full bg-ink text-canvas font-display font-bold text-xl flex items-center justify-center mx-auto">
                  1
                </div>
                <h4 className="font-display text-xl font-bold text-ink">Tell us where and when</h4>
                <p className="text-xs text-ink-soft leading-relaxed">
                  Browse our eight Italian destinations or request bespoke dates. No rigid group schedules or unwanted detours.
                </p>
              </div>

              <div className="wayfare-card p-8 space-y-3 text-center bg-canvas">
                <div className="w-12 h-12 rounded-full bg-ink text-canvas font-display font-bold text-xl flex items-center justify-center mx-auto">
                  2
                </div>
                <h4 className="font-display text-xl font-bold text-ink">We plan it with you</h4>
                <p className="text-xs text-ink-soft leading-relaxed">
                  We connect you directly with the verified Italian operator—whether captain, sommelier, or mountain guide.
                </p>
              </div>

              <div className="wayfare-card p-8 space-y-3 text-center bg-canvas">
                <div className="w-12 h-12 rounded-full bg-ink text-canvas font-display font-bold text-xl flex items-center justify-center mx-auto">
                  3
                </div>
                <h4 className="font-display text-xl font-bold text-ink">Travel with a local leader</h4>
                <p className="text-xs text-ink-soft leading-relaxed">
                  Book direct on staging.klnk.tv for zero commission fees and receive instant Apple Wallet &amp; Google Wallet boarding passes.
                </p>
              </div>
            </div>

            {/* Direct Booking Endpoint Banner */}
            <div className="wayfare-card p-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-canvas border-2 border-canvas-border">
              <div className="space-y-1">
                <p className="font-display font-bold text-ink text-base">Direct Host Booking Active</p>
                <p className="text-xs font-mono text-ink-soft">https://staging.klnk.tv/pushpak/2de2d421/italy-trip</p>
              </div>
              <a
                href={liveBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-coral text-xs py-2.5 px-5 shrink-0"
              >
                <span>Open staging.klnk.tv pass</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. ONE PRICE, NOTHING TO ADD UP LATER (INCLUSIONS) */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-24 border-b border-canvas-border">
          <div className="container-custom space-y-12">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-ink-muted block">
                Transparent Standard
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-ink tracking-tight mt-2">
                One price, nothing to add up later
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="wayfare-card p-6 sm:p-8 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-canvas flex items-center justify-center border border-canvas-border text-brand-coral font-bold font-mono">
                  01
                </div>
                <h4 className="font-display text-xl font-bold text-ink">A local leader</h4>
                <p className="text-xs text-ink-soft leading-relaxed">
                  Always a certified Italian skipper, UIAGM alpine mountain guide, or master sommelier who lives in the region.
                </p>
              </div>

              <div className="wayfare-card p-6 sm:p-8 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-canvas flex items-center justify-center border border-canvas-border text-brand-coral font-bold font-mono">
                  02
                </div>
                <h4 className="font-display text-xl font-bold text-ink">Stays with character</h4>
                <p className="text-xs text-ink-soft leading-relaxed">
                  Private cliffside Positano suites, historic Chianti wine castles, and private five-course alpine rifugi.
                </p>
              </div>

              <div className="wayfare-card p-6 sm:p-8 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-canvas flex items-center justify-center border border-canvas-border text-brand-coral font-bold font-mono">
                  03
                </div>
                <h4 className="font-display text-xl font-bold text-ink">All ground &amp; water transport</h4>
                <p className="text-xs text-ink-soft leading-relaxed">
                  Private wooden gozzos, classic Riva mahogany launches, and private Mercedes Sprinter transfers.
                </p>
              </div>

              <div className="wayfare-card p-6 sm:p-8 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-canvas flex items-center justify-center border border-canvas-border text-brand-coral font-bold font-mono">
                  04
                </div>
                <h4 className="font-display text-xl font-bold text-ink">Most meals &amp; pairings</h4>
                <p className="text-xs text-ink-soft leading-relaxed">
                  Barrel tastings in centuries-old vaults, fresh Mediterranean crudo lunches, and private villa dinners.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. WHAT TRAVELERS SAY WHEN THEY GET HOME (REVIEWS) */}
        {/* ========================================================================= */}
        <section id="reviews" className="py-16 sm:py-24 border-b border-canvas-border bg-canvas-card/60">
          <div className="container-custom space-y-12">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-ink-muted block">
                Verified Feedback
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-ink tracking-tight mt-2">
                What travelers say when they get home
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="wayfare-card p-8 space-y-4 bg-canvas flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-ink leading-relaxed italic">
                    &ldquo;Stepping onto Captain Salvatore’s wooden gozzo in Positano felt like stepping into another era. Zero tourist crowds, swimming in turquoise Faraglioni caves, and drinking chilled Greco di Tufo while the sun dipped behind Capri.&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-canvas-border text-xs text-ink-muted">
                  <span className="font-bold text-ink block">Elena &amp; Marcus Vance</span>
                  <span>London, UK · Amalfi Coast by Foot &amp; Riva</span>
                </div>
              </div>

              <div className="wayfare-card p-8 space-y-4 bg-canvas flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-ink leading-relaxed italic">
                    &ldquo;The Via Ferrata in Cortina with Marco was extraordinary. He has guided these limestone peaks for 25 years. The private rifugio served a five-course venison and polenta dinner with local Lagrein that rivaled any Michelin table in Milan.&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-canvas-border text-xs text-ink-muted">
                  <span className="font-bold text-ink block">Dr. Julian Ross</span>
                  <span>Zurich, Switzerland · Dolomites Alpine Traverse</span>
                </div>
              </div>

              <div className="wayfare-card p-8 space-y-4 bg-canvas flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-ink leading-relaxed italic">
                    &ldquo;Truffle hunting with Bruno and his Lagotto Romagnolo hounds in Val d'Orcia, followed by sampling 1997 Brunello di Montalcino straight from the barrel. No other travel platform offers direct access like this.&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-canvas-border text-xs text-ink-muted">
                  <span className="font-bold text-ink block">Claire &amp; Henry Beaumont</span>
                  <span>New York, USA · Tuscany Table &amp; Vaults</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 9. GOOD TO KNOW BEFORE YOU BOOK (FAQ ACCORDION) */}
        {/* ========================================================================= */}
        <section id="faq" className="py-16 sm:py-24 border-b border-canvas-border">
          <div className="container-custom space-y-12 max-w-4xl">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-ink-muted block">
                Frequently Asked Questions
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-ink tracking-tight mt-2">
                Good to know before you book
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="wayfare-card p-6 transition-colors cursor-pointer"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h4 className="font-display text-lg font-bold text-ink">
                        {faq.q}
                      </h4>
                      <div className="w-7 h-7 rounded-full bg-canvas flex items-center justify-center shrink-0 border border-canvas-border">
                        {isOpen ? <ChevronUp className="w-4 h-4 text-ink" /> : <ChevronDown className="w-4 h-4 text-ink-muted" />}
                      </div>
                    </div>
                    {isOpen && (
                      <p className="text-sm text-ink-soft leading-relaxed mt-4 pt-4 border-t border-canvas-border-subtle">
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 10. TELL US WHERE YOU WANT TO GO (CONCIERGE FORM) */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-24 border-b border-canvas-border bg-canvas-card">
          <div className="container-custom max-w-3xl space-y-8">
            <div className="text-center space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-coral block">
                Rome Conciergerie Desk
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-ink tracking-tight">
                Tell us where you want to go.
              </h2>
              <p className="text-sm sm:text-base text-ink-soft max-w-xl mx-auto">
                Need a private wooden Riva charter, custom dates, or helicopter alpine transfers? Tell us what you have in mind and our Rome desk will respond within 30 minutes.
              </p>
            </div>

            {formSubmitted ? (
              <div className="wayfare-card p-8 text-center space-y-3 bg-white border-2 border-emerald-600">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-display text-2xl font-bold text-ink">Grazie Mille! Your inquiry has been received.</h4>
                <p className="text-sm text-ink-soft max-w-md mx-auto">
                  Our Rome conciergerie has notified the operator. You will receive direct itinerary details and your staging.klnk.tv pass link shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={e => {
                  e.preventDefault();
                  setFormSubmitted(true);
                }}
                className="wayfare-card p-6 sm:p-10 space-y-5 bg-white"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-ink">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Lord Anthony Vance"
                      className="w-full px-4 py-3 rounded-xl border border-canvas-border text-sm focus:border-ink outline-none bg-canvas/30"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-ink">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="anthony@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-canvas-border text-sm focus:border-ink outline-none bg-canvas/30"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-ink">Preferred Destination</label>
                    <select
                      value={formData.destination}
                      onChange={e => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full px-3 py-3 rounded-xl border border-canvas-border text-sm focus:border-ink outline-none bg-canvas/30"
                    >
                      <option>Amalfi Coast &amp; Capri</option>
                      <option>Tuscany &amp; Chianti</option>
                      <option>Dolomites &amp; Cortina</option>
                      <option>Lake Como &amp; Bellagio</option>
                      <option>Sicily &amp; Aeolian</option>
                      <option>Venice Venetian Lagoon</option>
                      <option>Italian Riviera &amp; Portofino</option>
                      <option>Piedmont Langhe Barolo</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-ink">Travelers</label>
                    <select
                      value={formData.travelers}
                      onChange={e => setFormData({ ...formData, travelers: e.target.value })}
                      className="w-full px-3 py-3 rounded-xl border border-canvas-border text-sm focus:border-ink outline-none bg-canvas/30"
                    >
                      <option>1 Traveler (Solo)</option>
                      <option>2 Travelers (Couple)</option>
                      <option>3–4 Travelers (Small Group)</option>
                      <option>5–8 Travelers (Full Group Charter)</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-ink">Estimated Departure</label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={e => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3 py-3 rounded-xl border border-canvas-border text-sm focus:border-ink outline-none bg-canvas/30"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-ink">Personal Requests &amp; Notes</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="e.g. Seeking private wooden Riva launch for sunset cruise to Capri, plus Michelin restaurant booking."
                    className="w-full px-4 py-3 rounded-xl border border-canvas-border text-sm focus:border-ink outline-none bg-canvas/30"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-coral w-full py-3.5 text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Concierge Request to Host</span>
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      {/* ========================================================================= */}
      {/* 11. WAYFARE DARK ESPRESSO FOOTER (#14120e) */}
      {/* ========================================================================= */}
      <footer className="bg-[#14120e] text-[#f5efe4] pt-20 pb-12 border-t border-black">
        <div className="container-custom space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Col 1 & 2: Brand and Colophon */}
            <div className="lg:col-span-2 space-y-5">
              <ThemeAwareLogo lightOnly={true} height={36} />
              <h3 className="font-display text-2xl font-bold tracking-tight text-white mt-4">
                Where to next?
              </h3>
              <p className="text-sm text-[#a9a190] leading-relaxed max-w-sm">
                Tourpublish is a curated Italian luxury directory connecting discerning travelers directly with vetted local master operators. Never more than eight travelers, fixed all-inclusive prices, and verified passes.
              </p>

              <div className="text-xs font-mono text-[#857e70] space-y-1 pt-2">
                <p>Tourpublish Italia S.r.l. • P.IVA IT-84920194821</p>
                <p>Via dei Condotti 85, 00187 Roma RM, Italy</p>
                <p className="text-white font-semibold">
                  Official protocol: <a href="https://staging.klnk.tv/pushpak/2de2d421/italy-trip" target="_blank" rel="noopener noreferrer" className="text-brand-coral hover:underline">staging.klnk.tv</a>
                </p>
              </div>
            </div>

            {/* Col 3: Trips & Destinations */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white">Destinations</h4>
              <ul className="space-y-2 text-sm text-[#a9a190]">
                <li><a href="#trips" onClick={() => setSelectedRegion('Amalfi Coast')} className="hover:text-white transition-colors">Amalfi Coast</a></li>
                <li><a href="#trips" onClick={() => setSelectedRegion('Tuscany & Florence')} className="hover:text-white transition-colors">Tuscany &amp; Chianti</a></li>
                <li><a href="#trips" onClick={() => setSelectedRegion('Dolomites & South Tyrol')} className="hover:text-white transition-colors">Dolomites Alpine</a></li>
                <li><a href="#trips" onClick={() => setSelectedRegion('Lake Como & Northern Lakes')} className="hover:text-white transition-colors">Lake Como &amp; Bellagio</a></li>
                <li><a href="#trips" onClick={() => setSelectedRegion('Sicily & Aeolian Islands')} className="hover:text-white transition-colors">Sicily &amp; Aeolian</a></li>
                <li><a href="#trips" onClick={() => setSelectedRegion('Venice & Venetian Lagoon')} className="hover:text-white transition-colors">Venetian Lagoon</a></li>
              </ul>
            </div>

            {/* Col 4: Platform & Operators */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white">Directory</h4>
              <ul className="space-y-2 text-sm text-[#a9a190]">
                <li><a href="#philosophy" className="hover:text-white transition-colors">Small on Purpose</a></li>
                <li><a href="#philosophy" className="hover:text-white transition-colors">Verified Guilds</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Traveler Reviews</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ &amp; Inclusions</a></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy &amp; GDPR</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>

            {/* Col 5: Direct Protocol */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white">Direct Pass</h4>
              <p className="text-xs text-[#a9a190] leading-relaxed">
                Transactions and mobile boarding tokens are handled directly by staging.klnk.tv.
              </p>
              <a
                href={liveBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-coral text-xs py-2 px-4 inline-flex items-center gap-1.5"
              >
                <span>staging.klnk.tv Endpoint</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-[#25211a] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#857e70]">
            <p>© {new Date().getFullYear()} Tourpublish Italia S.r.l. All rights reserved.</p>
            <p>Built with zero middleman commissions for independent Italian operators.</p>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <StickyMobileCta onScrollToTours={() => document.getElementById('trips')?.scrollIntoView({ behavior: 'smooth' })} />

      {/* Modals */}
      {detailTour && (
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
      )}

      {bookingTour && (
        <KlnkBookingModal
          tour={bookingTour}
          currency={currency}
          isOpen={Boolean(bookingTour)}
          onClose={() => setBookingTour(null)}
        />
      )}
    </div>
  );
}
