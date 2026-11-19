'use client';

import React from 'react';
import { Star, ShieldCheck, Quote } from 'lucide-react';

export const TravelerReviews: React.FC = () => {
  const reviews = [
    {
      author: 'Eleanor Vance',
      location: 'New York, USA',
      tourTitle: 'Amalfi Coast & Capri: Private Riva Yacht',
      rating: 5,
      date: 'September 2025',
      text: 'Booking through staging.klnk.tv was seamless. We had a private Riva yacht in Positano with Captain Marco, who took us into sea grottos completely hidden from the tourist ferries. Best travel decision we made in Italy.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    },
    {
      author: 'Marcus Lindholm',
      location: 'Stockholm, Sweden',
      tourTitle: 'Dolomites Alpine Traverse: Via Ferrata',
      rating: 5,
      date: 'July 2025',
      text: 'The mountain guides from Dolomite Alpine Masters were world-class. Traversing Tre Cime at dawn with zero crowds followed by hot Finnish saunas in the high rifugio was pure magic.',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
    },
    {
      author: 'Sophie & David Moreau',
      location: 'Geneva, Switzerland',
      tourTitle: 'Tuscan Terroir: Vintage Brunello Estates',
      rating: 5,
      date: 'October 2025',
      text: 'As wine collectors, we were blown away. Tasting unreleased vintages directly from 300-year-old Slavonian oak casks with the estate countess felt like a dream. Highly recommend Tourpublish.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-amber-400">
          <Star className="w-4 h-4 fill-amber-400" />
          <span>Real Traveler Stories</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">
          Rated 4.98 / 5 Across 2,400+ Journeys
        </h2>
        <p className="text-sm text-slate-400">
          Read candid reviews from travelers who explored Italy’s luxury terroirs with our verified Italian operators.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-brand-card border border-white/10 flex flex-col justify-between space-y-4 shadow-xl relative"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex text-amber-400">
                  {[...Array(r.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] font-mono text-slate-400">{r.date}</span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed italic">
                "{r.text}"
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full bg-cover bg-center border border-white/20 shrink-0"
                style={{ backgroundImage: `url('${r.avatar}')` }}
              />
              <div className="overflow-hidden min-w-0">
                <h4 className="text-xs font-bold text-white truncate">{r.author}</h4>
                <p className="text-[11px] text-slate-400 truncate">{r.location}</p>
                <p className="text-[10px] text-brand-coral font-medium truncate mt-0.5">{r.tourTitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
