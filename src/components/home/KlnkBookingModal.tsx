'use client';

import React, { useState } from 'react';
import {
  X,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Users,
  ExternalLink,
  ArrowRight,
  QrCode,
  CreditCard,
  Lock,
  Sparkles,
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
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-lg bg-brand-card border border-white/20 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-brand-dark/70">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-brand-coral/20 text-brand-coral border border-brand-coral/30">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block font-semibold">
                Direct Operator Checkout
              </span>
              <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                <span>KLNK Checkout Engine</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald"></span>
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 overflow-y-auto max-h-[75vh] custom-scrollbar">
          {bookingSuccess ? (
            /* Booking Confirmed State */
            <div className="py-6 text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-brand-emerald/20 border border-brand-emerald/40 text-brand-emerald flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-bold text-white">KLNK Pass Issued!</h4>
                <p className="text-xs text-slate-300 max-w-xs mx-auto">
                  Your reservation with <strong className="text-white">{tour.operator.name}</strong> has been confirmed. Your pass is ready in Apple Wallet.
                </p>
              </div>

              {/* Pass Card */}
              <div className="p-4 rounded-2xl bg-brand-dark/80 border border-white/10 text-left space-y-2 text-xs">
                <div className="flex justify-between items-center text-slate-400">
                  <span>Pass Token:</span>
                  <span className="font-mono text-brand-emerald font-bold">KLNK-2026-X892</span>
                </div>
                <div className="flex justify-between items-center text-slate-400">
                  <span>Expedition:</span>
                  <span className="text-white font-medium truncate max-w-[200px]">{tour.name}</span>
                </div>
                <div className="flex justify-between items-center text-slate-400">
                  <span>Date & Guests:</span>
                  <span className="text-white font-medium">{selectedDate} ({guestsCount} Guests)</span>
                </div>
                <div className="flex justify-between items-center text-slate-400 pt-2 border-t border-white/10">
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
                  className="w-full py-3 rounded-full bg-brand-coral hover:bg-brand-coral-hover text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <span>Open Live Page on KLNK.tv</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => {
                    setBookingSuccess(false);
                    onClose();
                  }}
                  className="w-full py-2.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white bg-white/5 border border-white/10"
                >
                  Return to Tourpublish Directory
                </button>
              </div>
            </div>
          ) : (
            /* Checkout Form */
            <>
              {/* Tour Overview Box */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-brand-dark/60 border border-white/10">
                <div
                  className="w-16 h-16 rounded-xl bg-cover bg-center shrink-0 border border-white/15"
                  style={{ backgroundImage: `url('${tour.heroImage}')` }}
                />
                <div className="overflow-hidden min-w-0">
                  <span className="text-[10px] uppercase font-semibold text-brand-coral tracking-wider block">
                    {tour.destination}
                  </span>
                  <h4 className="text-sm font-bold text-white truncate">{tour.name}</h4>
                  <p className="text-xs text-slate-400 truncate">Operated by {tour.operator.name}</p>
                </div>
              </div>

              {/* Reservation Parameters: Date & Guests */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                {/* Date Picker / Departure */}
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-semibold text-slate-400 block tracking-wider flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    <span>Departure Date</span>
                  </label>
                  <select
                    value={selectedDate}
                    onChange={e => setSelectedDate(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-brand-dark border border-white/10 text-white focus:outline-none text-xs"
                  >
                    <option value={tour.nextDeparture}>{tour.nextDeparture} (Confirmed)</option>
                    <option value="June 12, 2026">June 12, 2026</option>
                    <option value="July 08, 2026">July 08, 2026</option>
                    <option value="September 15, 2026">September 15, 2026</option>
                  </select>
                </div>

                {/* Number of Guests */}
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-semibold text-slate-400 block tracking-wider flex items-center gap-1">
                    <Users className="w-3 h-3 text-slate-400" />
                    <span>Number of Guests</span>
                  </label>
                  <div className="flex items-center rounded-xl bg-brand-dark border border-white/10 p-1 justify-between">
                    <button
                      type="button"
                      onClick={() => setGuestsCount(Math.max(1, guestsCount - 1))}
                      className="w-8 h-7 rounded-lg bg-white/5 hover:bg-white/10 text-white font-bold text-sm flex items-center justify-center cursor-pointer"
                    >
                      -
                    </button>
                    <span className="font-mono font-bold text-white text-xs">{guestsCount}</span>
                    <button
                      type="button"
                      onClick={() => setGuestsCount(Math.min(8, guestsCount + 1))}
                      className="w-8 h-7 rounded-lg bg-white/5 hover:bg-white/10 text-white font-bold text-sm flex items-center justify-center cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Price Calculation Breakdown */}
              <div className="p-4 rounded-2xl bg-brand-dark/40 border border-white/10 space-y-2 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>{formatPrice(pricePerGuest, currency)} × {guestsCount} Guests</span>
                  <span className="font-mono text-white">{formatPrice(totalPrice, currency)}</span>
                </div>
                <div className="flex justify-between text-slate-400 text-[11px]">
                  <span>Local taxes & harbor permits</span>
                  <span className="text-brand-emerald font-medium">Included</span>
                </div>
                <div className="flex justify-between text-slate-400 text-[11px]">
                  <span>KLNK Direct Platform Fee</span>
                  <span className="text-brand-emerald font-medium">$0 (0% Markup)</span>
                </div>
                <div className="pt-2 border-t border-white/10 flex justify-between items-baseline text-sm font-bold text-white">
                  <span>Total Amount:</span>
                  <span className="font-mono text-lg text-brand-coral">{formatPrice(totalPrice, currency)}</span>
                </div>
              </div>

              {/* Operator Direct Guarantee */}
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-brand-emerald/10 border border-brand-emerald/20 text-xs text-brand-emerald">
                <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  <strong>100% Direct Guarantee:</strong> Funds are paid directly to {tour.operator.name} with no intermediaries. Free cancellation up to 7 days prior.
                </span>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  type="button"
                  onClick={handleSimulateCheckout}
                  disabled={isSimulatingBooking}
                  className="w-full py-3.5 rounded-full bg-brand-coral hover:bg-brand-coral-hover text-white text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl transition-all active:scale-95 cursor-pointer disabled:opacity-50"
                >
                  <Lock className="w-4 h-4" />
                  <span>
                    {isSimulatingBooking
                      ? 'Connecting to KLNK Gateway...'
                      : `Instant Reserve ${formatPrice(totalPrice, currency)} via KLNK`}
                  </span>
                </button>

                {/* Direct External Link */}
                <a
                  href={tour.klnkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 text-center text-xs text-slate-400 hover:text-white flex items-center justify-center gap-1 transition-colors"
                >
                  <span>Or view live listing on klnk.tv</span>
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
