'use client';

import React from 'react';
import Link from 'next/link';
import { ThemeAwareLogo } from '../common/ThemeAwareLogo';
import { ShieldCheck, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-line bg-paper-deep text-ink-soft py-16 text-sm">
      <div className="container-page space-y-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Editorial Colophon & Brand */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <ThemeAwareLogo height={28} />
              <span className="font-serif text-xl tracking-tight font-semibold text-ink">Tourpublish</span>
            </Link>
            <p className="text-sm text-ink-soft leading-relaxed max-w-sm">
              An independent curated directory of verified luxury tours across Italy. We connect travelers directly with vetted Italian nautical, alpine, and cultural operators without middleman markups.
            </p>
            <div className="text-xs space-y-1 font-mono text-ink-faint pt-2 border-t border-line/60">
              <p>Tourpublish Italia S.r.l. • P.IVA IT-84920194821</p>
              <p>Via dei Condotti 85, 00187 Roma (RM), Italy</p>
              <p>Direct bookings verified via staging.klnk.tv</p>
            </div>
          </div>

          {/* Col 2: Destinations */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink">Destinations</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/destinations/amalfi-coast" className="hover:text-ink transition-colors">Amalfi Coast</Link></li>
              <li><Link href="/destinations/tuscany" className="hover:text-ink transition-colors">Tuscany &amp; Chianti</Link></li>
              <li><Link href="/destinations/dolomites" className="hover:text-ink transition-colors">Dolomites &amp; Cortina</Link></li>
              <li><Link href="/destinations/lake-como" className="hover:text-ink transition-colors">Lake Como</Link></li>
              <li><Link href="/destinations/sicily" className="hover:text-ink transition-colors">Sicily &amp; Aeolian</Link></li>
              <li><Link href="/destinations" className="text-clay font-medium hover:underline inline-flex items-center gap-0.5">All 8 Terroirs →</Link></li>
            </ul>
          </div>

          {/* Col 3: Ways to Travel */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink">Ways to Travel</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/experiences/nautical-prive" className="hover:text-ink transition-colors">Nautical Privé</Link></li>
              <li><Link href="/experiences/alpine-traverses" className="hover:text-ink transition-colors">Alpine Traverses</Link></li>
              <li><Link href="/experiences/grand-cru-vaults" className="hover:text-ink transition-colors">Grand Cru Vaults</Link></li>
              <li><Link href="/experiences/aristocratic-villas" className="hover:text-ink transition-colors">Aristocratic Villas</Link></li>
              <li><Link href="/experiences/artisan-crypts" className="hover:text-ink transition-colors">Artisan &amp; Crypts</Link></li>
              <li><Link href="/experiences" className="text-clay font-medium hover:underline inline-flex items-center gap-0.5">Explore Styles →</Link></li>
            </ul>
          </div>

          {/* Col 4: Directory & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink">Directory</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-ink transition-colors">About Tourpublish</Link></li>
              <li><Link href="/tours" className="hover:text-ink transition-colors">All Published Tours</Link></li>
              <li><Link href="/privacy" className="hover:text-ink transition-colors">Privacy &amp; GDPR</Link></li>
              <li><Link href="/terms" className="hover:text-ink transition-colors">Terms of Service</Link></li>
              <li>
                <a
                  href="https://staging.klnk.tv/pushpak/2de2d421/italy-trip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-clay hover:text-clay-hover font-medium flex items-center gap-1"
                >
                  <span>staging.klnk.tv Link</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-faint">
          <p>© {new Date().getFullYear()} Tourpublish Italia S.r.l. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Direct operator booking protocol powered by</span>
            <a
              href="https://staging.klnk.tv/pushpak/2de2d421/italy-trip"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink hover:underline font-semibold"
            >
              staging.klnk.tv
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
