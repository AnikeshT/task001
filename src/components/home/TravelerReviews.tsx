'use client';

import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';

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
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10 border-b border-brand-border">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
            Verified Guest Impressions
          </span>
          <h2 className="text-2xl sm:text-4xl font-sans font-bold text-brand-primary tracking-tight">
            Rated 4.98 / 5 Across 2,400+ Journeys
          </h2>
          <p className="text-brand-secondary text-xs sm:text-sm leading-relaxed">
            Read candid notes from travelers who explored Italy’s luxury terroirs with our verified Italian operators.
          </p>
        </div>

        <div className="text-xs text-brand-muted font-mono shrink-0 flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-brand-emerald" />
          <span>100% Verified Direct Departures</span>
        </div>
      </div>

      {/* 3 Editorial Reviews */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="rounded-xl bg-brand-surface border border-brand-border p-6 flex flex-col justify-between space-y-4 hover:border-brand-border-strong transition-colors"
          >
            <div className="space-y-3">
              {/* Stars & Date */}
              <div className="flex items-center justify-between text-xs">
                <div className="flex text-amber-400">
                  {[...Array(r.rating)].map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] font-mono text-brand-muted">{r.date}</span>
              </div>

              {/* Quote */}
              <p className="text-xs sm:text-sm text-brand-secondary leading-relaxed italic">
                &ldquo;{r.text}&rdquo;
              </p>

              {/* Tour Referenced */}
              <div className="pt-2 text-[11px] font-mono text-brand-coral font-medium">
                {r.tourTitle}
              </div>
            </div>

            {/* Author Attribution */}
            <div className="pt-3 border-t border-brand-border flex items-center gap-3">
              <img
                src={r.avatar}
                alt={r.author}
                className="w-9 h-9 rounded-full object-cover border border-brand-border shrink-0"
              />
              <div className="text-xs">
                <p className="font-bold text-brand-primary">{r.author}</p>
                <p className="text-[11px] text-brand-muted">{r.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
