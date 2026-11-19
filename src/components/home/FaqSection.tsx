'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How does booking through KLNK work?',
      answer:
        'KLNK is our proprietary direct-checkout protocol. When you select a tour, KLNK routes your reservation straight to the verified operator’s reservation system. You receive an instant digital pass for Apple Wallet and Google Pay with zero middleman fees and guaranteed real-time availability.',
    },
    {
      question: 'Are these tours suitable for private tailoring and customized dates?',
      answer:
        'Yes! All of our featured operators specialize in private and small-group journeys. If your travel dates do not match our scheduled departures, simply click "Inquire with Operator" inside any tour listing to request custom dates or bespoke group itineraries.',
    },
    {
      question: 'What is the cancellation and refund policy?',
      answer:
        'Every tour on Tourpublish comes with a transparent 7-day free cancellation guarantee. Cancel up to 7 full days before the scheduled departure date for a 100% full refund returned to your original payment method.',
    },
    {
      question: 'How are operators selected and vetted on Tourpublish?',
      answer:
        'We vet every operator individually. We require proof of official licensing, maritime skipper certifications, UIAGM mountain guide accreditation, comprehensive traveler liability insurance, and an unblemished safety history.',
    },
    {
      question: 'Which currencies are supported?',
      answer:
        'You can browse and book in USD ($), EUR (€), and GBP (£). Currency conversions are updated hourly via official European Central Bank reference exchange rates with zero foreign transaction markups.',
    },
  ];

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-white/10">
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-slate-400">
          <HelpCircle className="w-4 h-4 text-brand-coral" />
          <span>Need Assistance?</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-sm text-slate-400">
          Everything you need to know about booking, our vetted operators, and the KLNK direct reservation pass.
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-brand-card overflow-hidden transition-all"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors cursor-pointer"
              >
                <span className="text-sm font-bold text-white">{faq.question}</span>
                {isOpen ? (
                  <ChevronUp className="w-4 h-4 text-brand-coral shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                )}
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 bg-brand-dark/30">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
