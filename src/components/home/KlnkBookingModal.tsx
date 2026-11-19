'use client';

import React, { useState } from 'react';
import {
  X,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Users,
  ExternalLink,
  Lock,
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
  const [selectedDate, setSelectedDate] = useState<string>(tour?.nextDeparture || 'May 14, 2026');
  const [isSimulatingBooking, setIsSimulatingBooking] = useState<boolean>(false);
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);

  if (!isOpen || !tour) return null;

  const pricePerGuest =
    currency === 'EUR' ? tour.priceEur : currency === 'GBP' ? tour.priceGbp : tour.priceUsd;

  const totalPrice = pricePerGuest * guestsCount;

  const handleSimulateCheckout = () => {
    setIsSimulatingBooking(true);
    setTimeout(() => {
      setIsSimulatingBooking(false);
      setBookingSuccess(true);
    }, 900);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#14161b] border border-brand-border-strong rounded-xl shadow-modal overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-brand-border flex items-center justify-between bg-[#0e1013]">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-brand-muted block font-semibold">
              Direct Host Reservation
            </span>
            <h3 id="booking-modal-title" className="text-sm font-bold text-brand-primary flex items-center gap-1.5">
              <span>staging.klnk.tv Protocol</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald" />
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-brand-secondary hover:text-white hover:bg-brand-surface transition-colors cursor-pointer"
            aria-label="Close booking modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-4 overflow-y-auto max-h-[75vh] custom-scrollbar">
          {bookingSuccess ? (
            /* Booking Confirmed State */
            <div className="py-4 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-brand-emerald/15 border border-brand-emerald/30 text-brand-emerald flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-brand-primary">Digital Pass Generated</h4>
                <p className="text-xs text-brand-secondary max-w-xs mx-auto">
                  Your reservation with <strong className="text-white">{tour.operator.name}</strong> has been transmitted. Your pass is ready for Apple Wallet &amp; Google Wallet.
                </p>
              </div>

              {/* Pass Card */}
              <div className="p-4 rounded-lg bg-[#0e1013] border border-brand-border text-left space-y-2 text-xs">
                <div className="flex justify-between items-center text-brand-muted">
                  <span>Pass Token:</span>
                  <span className="font-mono text-brand-emerald font-bold">KLNK-IT-2026-X892</span>
                </div>
                <div className="flex justify-between items-center text-brand-muted">
                  <span>Expedition:</span>
                  <span className="text-white font-medium truncate max-w-[200px]">{tour.name}</span>
                </div>
                <div className="flex justify-between items-center text-brand-muted">
                  <span>Date &amp; Guests:</span>
                  <span className="text-white font-medium">{selectedDate} ({guestsCount} Guests)</span>
                </div>
                <div className="flex justify-between items-center text-brand-muted pt-2 border-t border-brand-border">
                  <span>Total Amount Paid:</span>
                  <span className="font-mono font-bold text-white">{formatPrice(totalPrice, currency)}</span>
                </div>
              </div>

              {/* Real URL link */}
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={tour.klnkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-lg bg-brand-coral hover:bg-brand-coral-hover text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
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
                  className="w-full py-2 rounded-lg text-xs font-medium text-brand-secondary hover:text-white bg-brand-surface border border-brand-border cursor-pointer"
                >
                  Return to Tourpublish Directory
                </button>
              </div>
            </div>
          ) : (
            /* Checkout Form */
            <>
              {/* Tour Overview Box */}
              <div className="flex items-center gap-3 p-3 rounded-lg bg-[#0e1013] border border-brand-border">
                <img
                  src={tour.heroImage}
                  alt={tour.name}
                  className="w-14 h-14 rounded-md object-cover shrink-0 border border-brand-border"
                />
                <div className="overflow-hidden min-w-0">
                  <span className="text-[10px] font-mono uppercase font-semibold text-brand-coral tracking-wider block">
                    {tour.destination}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-brand-primary truncate">{tour.name}</h4>
                  <p className="text-[11px] text-brand-muted truncate">Host: {tour.operator.name}</p>
                </div>
              </div>

              {/* Reservation Parameters: Date & Guests */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                {/* Date Picker */}
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase font-semibold text-brand-muted block tracking-wider flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-brand-muted" />
                    <span>Departure Date</span>
                  </label>
                  <select
                    value={selectedDate}
                    onChange={e => setSelectedDate(e.target.value)}
                    className="w-full p-2 rounded-lg bg-[#0e1013] border border-brand-border text-brand-primary focus:outline-none text-xs"
                  >
                    <option value={tour.nextDeparture}>{tour.nextDeparture} (Confirmed)</option>
                    <option value="June 12, 2026">June 12, 2026</option>
                    <option value="July 08, 2026">July 08, 2026</option>
                    <option value="September 15, 2026">September 15, 2026</option>
                  </select>
                </div>

                {/* Number of Guests */}
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase font-semibold text-brand-muted block tracking-wider flex items-center gap-1">
                    <Users className="w-3 h-3 text-brand-muted" />
                    <span>Number of Guests</span>
                  </label>
                  <div className="flex items-center rounded-lg bg-[#0e1013] border border-brand-border p-1 justify-between">
                    <button
                      type="button"
                      onClick={() => setGuestsCount(Math.max(1, guestsCount - 1))}
                      className="w-7 h-6 rounded bg-brand-surface hover:bg-brand-surface-hover text-white font-bold text-xs flex items-center justify-center cursor-pointer"
                    >
                      -
                    </button>
                    <span className="font-mono font-bold text-white text-xs">{guestsCount}</span>
                    <button
                      type="button"
                      onClick={() => setGuestsCount(Math.min(8, guestsCount + 1))}
                      className="w-7 h-6 rounded bg-brand-surface hover:bg-brand-surface-hover text-white font-bold text-xs flex items-center justify-center cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Price Calculation Breakdown */}
              <div className="p-3.5 rounded-lg bg-[#0e1013] border border-brand-border space-y-1.5 text-xs">
                <div className="flex justify-between text-brand-secondary">
                  <span>{formatPrice(pricePerGuest, currency)} × {guestsCount} Guests</span>
                  <span className="font-mono text-white font-medium">{formatPrice(totalPrice, currency)}</span>
                </div>
                <div className="flex justify-between text-brand-muted text-[11px]">
                  <span>Italian taxes &amp; harbor permits</span>
                  <span className="text-brand-emerald font-medium">Included</span>
                </div>
                <div className="flex justify-between text-brand-muted text-[11px]">
                  <span>staging.klnk.tv Direct Fee</span>
                  <span className="text-brand-emerald font-medium">$0 (0% Markup)</span>
                </div>
                <div className="pt-2 border-t border-brand-border flex justify-between items-baseline text-xs font-bold text-white">
                  <span>Total Due Host:</span>
                  <span className="font-mono text-base text-brand-coral">{formatPrice(totalPrice, currency)}</span>
                </div>
              </div>

              {/* Operator Direct Guarantee */}
              <div className="flex items-start gap-2 p-2.5 rounded-lg bg-brand-emerald/10 border border-brand-emerald/20 text-xs text-brand-emerald">
                <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5" />
                <span className="text-[11px] leading-relaxed">
                  <strong>Direct Host Guarantee:</strong> Funds are paid directly to {tour.operator.name} with no intermediaries. 100% refundable up to 7 days prior.
                </span>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                <button
                  type="button"
                  onClick={handleSimulateCheckout}
                  disabled={isSimulatingBooking}
                  className="w-full py-2.5 rounded-lg bg-brand-coral hover:bg-brand-coral-hover text-white text-xs sm:text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer disabled:opacity-50"
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
                  href={tour.klnkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-1 text-center text-xs text-brand-secondary hover:text-white flex items-center justify-center gap-1 transition-colors"
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
