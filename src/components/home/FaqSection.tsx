'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Mail, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Form State with Full Validation & Error States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Full name is required.';
    } else if (name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(email.trim())) {
      newErrors.email = 'Please provide a valid email (e.g. name@domain.com).';
    }

    if (!message.trim()) {
      newErrors.message = 'Please provide details on your travel plans or question.';
    } else if (message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
    }, 700);
  };

  const faqs = [
    {
      question: 'How does direct booking through staging.klnk.tv work?',
      answer:
        'staging.klnk.tv is our dedicated direct-checkout engine. When you select an Italian tour, staging.klnk.tv routes your reservation straight to the verified operator’s reservation system. You receive an instant digital pass for Apple Wallet and Google Pay with zero middleman fees and guaranteed real-time availability.',
    },
    {
      question: 'Are all tours exclusively based in Italy?',
      answer:
        'Yes. Tourpublish targets the single, uncompromised niche of Luxury Tours in Italy. We curate verified journeys across the Amalfi Coast & Capri, Tuscany & Val d’Orcia, Dolomites & South Tyrol, Sicily & Aeolian Islands, and Lake Como with different independent Italian operators.',
    },
    {
      question: 'Can departures be customized for private yacht or villa groups?',
      answer:
        'All of our featured Italian operators specialize in bespoke private departures. If your preferred travel dates do not match our scheduled departures, send an inquiry or message our Rome concierge desk for custom yacht moorings, helicopter transfers, or private villa dinners.',
    },
    {
      question: 'What is the 7-day cancellation and refund guarantee?',
      answer:
        'Every Italian tour on Tourpublish comes with a transparent 7-day free cancellation guarantee. Cancel up to 7 full days before the scheduled departure date directly through staging.klnk.tv for a 100% full refund returned to your original payment method.',
    },
    {
      question: 'How are Italian operators vetted and verified?',
      answer:
        'We vet every operator individually. We require proof of official Italian licensing (Partita IVA), Guardia Costiera maritime skipper certifications, UIAGM alpine mountain guide accreditation, and comprehensive traveler liability insurance.',
    },
    {
      question: 'Which currencies are supported?',
      answer:
        'You can browse and book in USD ($), EUR (€), and GBP (£). Currency conversions reflect official European Central Bank reference exchange rates with zero foreign transaction markups.',
    },
  ];

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-white/10 space-y-12">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-slate-400">
          <HelpCircle className="w-4 h-4 text-brand-coral" />
          <span>Need Assistance?</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-sm text-slate-400">
          Everything you need to know about booking, our vetted Italian operators, and the staging.klnk.tv direct reservation pass.
        </p>
      </div>

      {/* Accordion FAQ Items */}
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

      {/* Interactive Concierge Inquiry Form (Demonstrating Form Error States) */}
      <div className="rounded-3xl bg-brand-card/90 border border-white/10 p-6 sm:p-8 space-y-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Mail className="w-4 h-4 text-brand-coral" />
              <span>Have a Custom Question? Ask Our Rome Concierge Desk</span>
            </h3>
            <p className="text-xs text-slate-400">
              Direct response within 2 hours from our Italian luxury travel team.
            </p>
          </div>
          <span className="text-[11px] font-mono text-brand-emerald bg-brand-emerald/10 border border-brand-emerald/20 px-2.5 py-1 rounded-full self-start sm:self-center">
            ● Desk Online
          </span>
        </div>

        {submitSuccess ? (
          <div className="rounded-2xl bg-brand-emerald/15 border border-brand-emerald/30 p-6 text-center space-y-3">
            <CheckCircle2 className="w-8 h-8 text-brand-emerald mx-auto" />
            <h4 className="text-base font-bold text-white">Inquiry Received</h4>
            <p className="text-xs text-slate-300 max-w-md mx-auto">
              Grazie! Your request has been routed to our Rome concierge desk. We will contact you via email shortly.
            </p>
            <button
              type="button"
              onClick={() => setSubmitSuccess(false)}
              className="text-xs text-brand-coral hover:underline font-semibold"
            >
              Send another question
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmitInquiry} className="space-y-4" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name Field with Error State */}
              <div className="space-y-1 text-left">
                <label className="text-xs font-semibold text-slate-300 block">
                  Your Full Name <span className="text-brand-coral">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={e => {
                    setName(e.target.value);
                    if (errors.name) setErrors(prev => ({ ...prev, name: undefined }));
                  }}
                  placeholder="e.g. Elena Rossi"
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-brand-dark/80 border text-xs text-white placeholder:text-slate-500 focus:outline-none transition-colors ${
                    errors.name ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-brand-coral'
                  }`}
                />
                {errors.name && (
                  <p className="text-[11px] text-red-400 flex items-center gap-1 pt-0.5">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Email Field with Error State */}
              <div className="space-y-1 text-left">
                <label className="text-xs font-semibold text-slate-300 block">
                  Email Address <span className="text-brand-coral">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={e => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors(prev => ({ ...prev, email: undefined }));
                  }}
                  placeholder="e.g. elena@example.com"
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-brand-dark/80 border text-xs text-white placeholder:text-slate-500 focus:outline-none transition-colors ${
                    errors.email ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-brand-coral'
                  }`}
                />
                {errors.email && (
                  <p className="text-[11px] text-red-400 flex items-center gap-1 pt-0.5">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Message Field with Error State */}
            <div className="space-y-1 text-left">
              <label className="text-xs font-semibold text-slate-300 block">
                Your Travel Question or Custom Dates <span className="text-brand-coral">*</span>
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={e => {
                  setMessage(e.target.value);
                  if (errors.message) setErrors(prev => ({ ...prev, message: undefined }));
                }}
                placeholder="Ask about private Riva yacht availability, dietary accommodation, or private helicopter transfers..."
                className={`w-full px-3.5 py-2.5 rounded-xl bg-brand-dark/80 border text-xs text-white placeholder:text-slate-500 focus:outline-none transition-colors ${
                  errors.message ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-brand-coral'
                }`}
              />
              {errors.message && (
                <p className="text-[11px] text-red-400 flex items-center gap-1 pt-0.5">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.message}</span>
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-1">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 rounded-full bg-brand-coral hover:bg-brand-coral-hover disabled:opacity-60 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <span>{isSubmitting ? 'Transmitting to Rome...' : 'Send Inquiry to Concierge'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
