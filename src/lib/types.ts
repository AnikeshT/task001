export type Currency = 'USD' | 'EUR' | 'GBP';

export type DestinationRegion =
  | 'All'
  | 'Amalfi Coast'
  | 'Amalfi Coast & Capri'
  | 'Tuscany & Florence'
  | 'Dolomites & South Tyrol'
  | 'Sicily & Aeolian Islands'
  | 'Lake Como & Northern Lakes'
  | 'Venice & Venetian Lagoon'
  | 'Italian Riviera & Portofino';

export type TravelStyle =
  | 'All'
  | 'Luxury Private'
  | 'Small Group (Max 8)'
  | 'Alpine & Adventure'
  | 'Wine & Gastronomy'
  | 'Yacht & Coastal';

export type DurationFilter = 'All' | '1-3 Days' | '4-6 Days' | '7+ Days';

export interface DayItinerary {
  day: number;
  title: string;
  summary: string;
  description: string;
  mealsIncluded?: string[];
  stayLocation?: string;
  highlightPhoto?: string;
}

export interface TourOperator {
  id: string;
  name: string;
  tagline: string;
  location: string;
  verified: boolean;
  foundedYear: number;
  rating: number;
  reviewCount: number;
  avatarUrl: string;
  bio: string;
  specialty: string;
  responseTime: string;
  badge: string;
  quotes?: string;
}

export interface TourItem {
  id: string;
  klnkSlug: string;
  klnkUrl: string;
  name: string;
  subtitle: string;
  destination: string;
  region: DestinationRegion;
  country: string;
  priceUsd: number;
  priceEur: number;
  priceGbp: number;
  durationDays: number;
  durationLabel: string;
  groupSize: string;
  travelStyle: TravelStyle;
  rating: number;
  reviewCount: number;
  badge?: string;
  operator: TourOperator;
  heroImage: string;
  galleryImages: string[];
  description: string;
  highlights: string[];
  included: string[];
  excluded: string[];
  itinerary: DayItinerary[];
  nextDeparture: string;
  remainingSpots: number;
  languages: string[];
  activityLevel: 'Relaxed' | 'Moderate' | 'Active' | 'Challenging';
  instantBooking: boolean;
  meetingPoint?: string;
}

export interface DestinationBentoItem {
  id: string;
  name: string;
  region: DestinationRegion;
  country: string;
  tagline: string;
  tripsCount: number;
  imageUrl: string;
  colSpan?: 'single' | 'double' | 'featured';
}

export interface JournalArticle {
  id: string;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  author: string;
  date: string;
  summary: string;
  heroImage: string;
}

export interface FilterState {
  searchQuery: string;
  region: DestinationRegion;
  travelStyle: TravelStyle;
  duration: DurationFilter;
  maxPrice: number;
  selectedCurrency: Currency;
  instantOnly: boolean;
}
