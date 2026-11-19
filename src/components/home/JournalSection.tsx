'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, ArrowRight, User } from 'lucide-react';
import { JOURNAL_ARTICLES } from '../../data/toursData';

export const JournalSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-semibold uppercase tracking-widest">
            <BookOpen className="w-3.5 h-3.5" />
            <span>The Tourpublish Journal</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-bold text-white tracking-tight">
            Stories from the{' '}
            <span className="font-serif italic font-normal text-brand-coral">
              Field & Vineyard
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            In-depth guides, historical essays, and insider perspectives written by certified sommeliers, alpine guides, and conservation biologists.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <span>Curated Field Dispatch</span>
          <span>•</span>
          <span className="text-brand-coral">Issue 04</span>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {JOURNAL_ARTICLES.map((article, idx) => (
          <motion.article
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-brand-card overflow-hidden hover:border-brand-coral/40 transition-all duration-300 shadow-xl"
          >
            {/* Top Media */}
            <div>
              <div className="relative aspect-[16/10] overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url('${article.heroImage}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent opacity-80" />
                
                {/* Category Pill */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-black/70 backdrop-blur-md text-white border border-white/15">
                  {article.category}
                </span>
              </div>

              {/* Text Info */}
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    {article.readTime}
                  </span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-sans font-bold text-white group-hover:text-brand-coral transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 line-clamp-3 leading-relaxed">
                  {article.summary}
                </p>
              </div>
            </div>

            {/* Author Footer */}
            <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <User className="w-3.5 h-3.5 text-brand-coral" />
                <span className="font-medium truncate max-w-[180px]">{article.author}</span>
              </div>

              <div className="text-xs font-semibold text-brand-coral flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Read Dispatch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
