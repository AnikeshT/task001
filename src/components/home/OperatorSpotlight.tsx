'use client';

import React from 'react';
import { ShieldCheck, Clock, ArrowRight } from 'lucide-react';
import { MASTER_OPERATORS } from '../../data/toursData';

interface OperatorSpotlightProps {
  onSelectOperatorTour: (operatorName: string) => void;
}

export const OperatorSpotlight: React.FC<OperatorSpotlightProps> = ({
  onSelectOperatorTour,
}) => {
  const operatorsList = Object.values(MASTER_OPERATORS);

  return (
    <section id="operators" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10 border-b border-brand-border">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-emerald font-semibold">
            Independent Host Verification
          </span>
          <h2 className="text-2xl sm:text-4xl font-sans font-bold text-brand-primary tracking-tight">
            Verified Italian Master Operators
          </h2>
          <p className="text-brand-secondary text-xs sm:text-sm leading-relaxed">
            Every expedition is owned and operated by licensed local craftsmen: Guardia Costiera maritime captains, UIAGM alpine guides, and multi-generational wine estates.
          </p>
        </div>

        <div className="text-xs text-brand-muted font-mono shrink-0">
          8 Certified Italian Guilds • Zero Middlemen
        </div>
      </div>

      {/* Structured Operator Directory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {operatorsList.map(op => (
          <div
            key={op.id}
            className="rounded-xl bg-brand-surface border border-brand-border p-5 space-y-4 flex flex-col justify-between hover:border-brand-border-strong transition-colors"
          >
            <div className="space-y-3">
              {/* Header with Avatar & Status */}
              <div className="flex items-center gap-3">
                <img
                  src={op.avatarUrl}
                  alt={op.name}
                  className="w-12 h-12 rounded-lg object-cover border border-brand-border shrink-0"
                />
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-sm font-bold text-brand-primary truncate">{op.name}</h3>
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-emerald shrink-0" />
                  </div>
                  <p className="text-[11px] text-brand-secondary truncate">{op.location}</p>
                  <span className="text-[10px] font-mono text-brand-muted">Est. {op.foundedYear}</span>
                </div>
              </div>

              {/* Specialty & Bio */}
              <p className="text-xs text-brand-secondary line-clamp-3 leading-relaxed">
                {op.bio}
              </p>

              {/* Authentic Host Quote */}
              {op.quotes && (
                <div className="rounded-lg bg-[#0e1013] p-2.5 border border-brand-border text-[11px] text-brand-secondary italic">
                  &ldquo;{op.quotes}&rdquo;
                </div>
              )}
            </div>

            {/* Bottom Meta & Action */}
            <div className="pt-3 border-t border-brand-border space-y-2">
              <div className="flex items-center justify-between text-[11px] text-brand-muted font-mono">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>Responds {op.responseTime}</span>
                </span>
                <span className="text-amber-400 font-semibold">★ {op.rating}</span>
              </div>

              <button
                type="button"
                onClick={() => onSelectOperatorTour(op.name)}
                className="w-full py-1.5 rounded-md text-xs font-medium text-brand-secondary hover:text-white bg-[#0e1013] hover:bg-brand-surface-elevated border border-brand-border transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>View Hosted Tours</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
