'use client';

import React from 'react';
import { Clock, ArrowRight, User } from 'lucide-react';
import { JOURNAL_ARTICLES } from '../../data/toursData';

export const JournalSection: React.FC = () => {
  const leadArticle = JOURNAL_ARTICLES[0];
  const sideArticles = JOURNAL_ARTICLES.slice(1);

  return (
    <section id="journal" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10 border-b border-brand-border">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-gold font-semibold">
            Field Dispatches
          </span>
          <h2 className="text-2xl sm:text-4xl font-sans font-bold text-brand-primary tracking-tight">
            The Tourpublish Italian Journal
          </h2>
          <p className="text-brand-secondary text-xs sm:text-sm leading-relaxed">
            Essays on private oenology, First World War alpine routes, and century-old maritime boat craft penned by certified sommeliers and mountain guides.
          </p>
        </div>

        <div className="text-xs text-brand-muted font-mono shrink-0">
          Issue 04 • Italian Autumn Dispatch
        </div>
      </div>

      {/* Editorial Split: Lead Article (Left) + List (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Lead Featured Article */}
        {leadArticle && (
          <article className="lg:col-span-7 rounded-xl bg-brand-surface border border-brand-border overflow-hidden flex flex-col justify-between group hover:border-brand-border-strong transition-colors">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#0e1013]">
              <div
                role="img"
                aria-label={leadArticle.title}
                className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                style={{ backgroundImage: `url('${leadArticle.heroImage}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14161b] via-transparent to-transparent opacity-80" />
              <span className="absolute top-4 left-4 px-2.5 py-1 rounded-md text-[11px] font-mono uppercase tracking-wider bg-[#0e1013]/90 text-brand-primary border border-brand-border">
                {leadArticle.category}
              </span>
            </div>

            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-xs text-brand-muted font-mono">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{leadArticle.readTime}</span>
                  </span>
                  <span>•</span>
                  <span>{leadArticle.date}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-brand-primary group-hover:text-brand-coral transition-colors leading-snug">
                  {leadArticle.title}
                </h3>

                <p className="text-xs sm:text-sm text-brand-secondary leading-relaxed line-clamp-3">
                  {leadArticle.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-brand-border flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-brand-secondary">
                  <User className="w-3.5 h-3.5 text-brand-coral" />
                  <span className="font-medium">{leadArticle.author}</span>
                </div>
                <span className="text-brand-coral font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </article>
        )}

        {/* Companion Articles (Stacked) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {sideArticles.map(article => (
            <article
              key={article.id}
              className="flex-1 rounded-xl bg-brand-surface border border-brand-border overflow-hidden flex flex-col sm:flex-row group hover:border-brand-border-strong transition-colors"
            >
              <div className="relative sm:w-48 aspect-[16/10] sm:aspect-auto overflow-hidden bg-[#0e1013] shrink-0">
                <div
                  role="img"
                  aria-label={article.title}
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  style={{ backgroundImage: `url('${article.heroImage}')` }}
                />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-[11px] text-brand-muted font-mono">
                    <span>{article.category}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h4 className="text-sm font-bold text-brand-primary group-hover:text-brand-coral transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-xs text-brand-secondary line-clamp-2 leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-2 border-t border-brand-border flex items-center justify-between text-[11px] text-brand-muted">
                  <span className="truncate max-w-[160px]">{article.author}</span>
                  <span className="text-brand-coral font-medium flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Read</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
