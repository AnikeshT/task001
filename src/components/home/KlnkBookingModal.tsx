'use client';

import React, { useState } from 'react';
import {
  X,
  Lock,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Users,
  Smartphone,
  ExternalLink,
  ArrowRight,
} from 'lucide-react';
import { TourItem, Currency } from '../../lib/types';
import { formatPrice } from '../../lib/utils';

interface KlnkBookingModalProps {
  tour: TourItem | null;
  currency: Currency;
  isOpen: boolean;
  onClose: () => void;
}

export const KlnkBookingModal: React.FC<KlnkBookingModalProps> = ({
  tour,
  currency,
  isOpen,
  onClose,
}) => {
  const [guestsCount, setGuestsCount] = useState<number>(2);
  const [isSimulatingBooking, setIsSimulatingBooking] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  if (!isOpen || !tour) return null;

  const liveTourUrl = 'https://staging.klnk.tv/pushpak/2de2d421/italy-trip';

  const pricePerGuest =
    currency === 'EUR' ? tour.priceEur : currency === 'GBP' ? tour.priceGbp : tour.priceUsd;

  const totalPrice = pricePerGuest * guestsCount;

  const handleSimulateCheckout = () => {
    setIsSimulatingBooking(true);
    setTimeout(() => {
      setIsSimulatingBooking(false);
      setBookingSuccess(true);
      if (typeof window !== 'undefined') {
        window.open(liveTourUrl, '_blank');
      }
    }, 600);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-canvas-card border border-canvas-border rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
      >
        {/* Header */}
        <div className="p-5 border-b border-canvas-border flex items-center justify-between bg-canvas">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-ink-muted block font-bold">
              Direct Host Reservation
            </span>
            <h3 id="booking-modal-title" className="text-sm font-display font-bold text-ink flex items-center gap-1.5">
              <span>staging.klnk.tv Protocol</span>
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-ink hover:bg-canvas-card transition-colors cursor-pointer"
            aria-label="Close booking modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          {bookingSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center mx-auto text-emerald-700 shadow-sm">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-display font-bold text-ink">
                Booking Transmitted to Host!
              </h4>
              <p className="text-xs text-ink-soft leading-relaxed max-w-sm mx-auto">
                Your direct reservation request has been transmitted securely via staging.klnk.tv. Your digital boarding pass has been created.
              </p>

              <div className="p-4 rounded-2xl bg-canvas border border-canvas-border text-left text-xs space-y-2">
                <div className="flex justify-between items-center text-ink-muted">
                  <span>Pass Identification Token:</span>
                  <span className="font-mono font-bold text-ink">KLNK-IT-2026-9842X</span>
                </div>
                <div className="flex justify-between items-center text-ink-muted">
                  <span>Operator Host:</span>
                  <span className="font-medium text-ink">{tour.operator.name}</span>
                </div>
                <div className="flex justify-between items-center text-ink-muted pt-2 border-t border-canvas-border">
                  <span>Total Amount:</span>
                  <span className="font-mono font-bold text-ink">{formatPrice(totalPrice, currency)}</span>
                </div>
              </div>

              {/* Real URL link */}
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={liveTourUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-coral w-full py-3 text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Open Live Page on staging.klnk.tv</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setBookingSuccess(false);
                    onClose();
                  }}
                  className="w-full py-2.5 rounded-full text-xs font-semibold text-ink hover:bg-canvas transition-colors cursor-pointer"
                >
                  Return to Italian Catalogue
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Tour Summary Card */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-canvas border border-canvas-border">
                <img
                  src={tour.heroImage}
                  alt={tour.name}
                  className="w-16 h-14 rounded-xl object-cover shrink-0"
                />
                <div className="overflow-hidden">
                  <h4 className="text-xs font-display font-bold text-ink truncate">{tour.name}</h4>
                  <p className="text-[11px] text-ink-muted truncate">{tour.destination} • {tour.durationLabel}</p>
                  <p className="text-[11px] font-semibold text-brand-coral">Operated by {tour.operator.name}</p>
                </div>
              </div>

              {/* Guests Count Selector */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-ink flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-brand-coral" />
                    <span>Number of Guests:</span>
                  </span>
                  <span className="text-xs font-mono font-bold text-ink">
                    {guestsCount} {guestsCount === 1 ? 'Traveler' : 'Travelers'}
                  </span>
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 4, 6, 8].map(num => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setGuestsCount(num)}
                      className={`flex-1 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                        guestsCount === num
                          ? 'bg-ink text-canvas shadow-xs'
                          : 'bg-canvas border border-canvas-border text-ink-muted hover:text-ink'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              {/* Direct Booking Breakdown */}
              <div className="p-4 rounded-2xl bg-canvas border border-canvas-border space-y-2 text-xs">
                <div className="flex justify-between items-center text-ink-muted">
                  <span>Price per traveler:</span>
                  <span className="font-mono text-ink">{formatPrice(pricePerGuest, currency)}</span>
                </div>
                <div className="flex justify-between items-center text-ink-muted">
                  <span>Travelers:</span>
                  <span className="font-mono text-ink">× {guestsCount}</span>
                </div>
                <div className="flex justify-between items-center text-emerald-700 font-semibold">
                  <span>Agency Booking Commission:</span>
                  <span className="font-mono">€0.00 (Zero markup)</span>
                </div>
                <div className="flex justify-between items-center text-ink font-bold pt-2 border-t border-canvas-border">
                  <span>Total Direct Rate:</span>
                  <span className="text-base font-display font-extrabold text-ink">
                    {formatPrice(totalPrice, currency)}
                  </span>
                </div>
              </div>

              {/* Guarantees */}
              <div className="space-y-1.5 text-[11px] text-ink-soft">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>7-Day Free Cancellation Standard (100% full refund)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-brand-coral shrink-0" />
                  <span>Instant Apple Wallet &amp; Google Wallet boarding pass</span>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 space-y-2.5">
                <button
                  type="button"
                  onClick={handleSimulateCheckout}
                  disabled={isSimulatingBooking}
                  className="btn-coral w-full py-3.5 text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>
                    {isSimulatingBooking
                      ? 'Connecting to staging.klnk.tv...'
                      : `Instant Reserve ${formatPrice(totalPrice, currency)} via staging.klnk.tv`}
                  </span>
                </button>

                {/* Direct External Link */}
                <a
                  href={liveTourUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-1 text-center text-xs text-ink-muted hover:text-ink flex items-center justify-center gap-1 transition-colors"
                >
                  <span>Or view live listing directly on staging.klnk.tv</span>
                  <ExternalLink className="w-3 h-3 text-brand-coral" />
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
