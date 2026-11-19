import React from 'react';
import Link from 'next/link';
import { ThemeAwareLogo } from '../../components/common/ThemeAwareLogo';
import { Scale, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service | Tourpublish Italy',
  description: 'Terms and conditions governing the use of Tourpublish Italian travel directory and staging.klnk.tv direct operator booking protocol.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col justify-between font-sans selection:bg-brand-coral selection:text-white">
      <header className="border-b border-canvas-border py-4 px-6 bg-canvas">
        <div className="container-custom flex items-center justify-between">
          <ThemeAwareLogo height={28} />
          <Link
            href="/"
            className="text-xs font-semibold text-ink-muted hover:text-ink transition-colors"
          >
            ← Back to Directory
          </Link>
        </div>
      </header>

      <main className="flex-1 py-14 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-card border border-canvas-border text-brand-coral text-xs font-bold uppercase tracking-wider">
            <Scale className="w-3.5 h-3.5" />
            <span>Italian Travel Directory Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-ink tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs text-ink-muted font-mono">
            Effective Date: November 2026 • Governing Law: Republic of Italy (Foro di Roma)
          </p>
        </div>

        <div className="space-y-8 text-sm text-ink-soft leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-ink">1. Scope of the Directory Service</h2>
            <p>
              Tourpublish Italia S.r.l. operates exclusively as a specialized editorial directory and discovery marketplace showcasing verified luxury tours in Italy. Each tour listed on Tourpublish is operated and fulfilled by an independent, vetted Italian commercial operator.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-ink">2. Direct Contract with Operators via staging.klnk.tv</h2>
            <p>
              When a traveler books an expedition through a link on Tourpublish, the transaction is processed directly through <strong>staging.klnk.tv</strong>. The legal contract of carriage, maritime charter, or guiding agreement is formed directly between the traveler and the designated local Italian operator. Tourpublish does not add middleman commission fees or markups to published operator prices.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-ink">3. 7-Day Free Cancellation Guarantee</h2>
            <p>
              All master expeditions featured on Tourpublish include a mandatory <strong>7-Day Free Cancellation Guarantee</strong>. You may cancel any reservation up to seven (7) calendar days prior to the scheduled departure time directly through staging.klnk.tv for a 100% full refund with zero cancellation fees.
            </p>
            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 space-y-1">
              <p className="font-bold flex items-center gap-1.5 text-emerald-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Zero Penalty Cancellation Standard</span>
              </p>
              <p>
                Cancellations requested inside of 7 days are governed by the specific Italian maritime or alpine weather emergency terms set by each operator.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-ink">4. Digital Mobile Passes (Apple Wallet &amp; Google Wallet)</h2>
            <p>
              Upon successful direct booking confirmation via staging.klnk.tv, an encrypted digital boarding token is generated. This pass grants private harbor pier entry, mountain rifugio access, and contact with the designated skipper or UIAGM guide.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-ink">5. Governing Law and Legal Venue</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of the Republic of Italy. Any disputes shall be subject to the exclusive jurisdiction of the Courts of Rome (Tribunale Ordinario di Roma, Italy).
            </p>
          </section>
        </div>

        <div className="pt-6 border-t border-canvas-border flex items-center justify-between text-xs text-ink-muted">
          <Link href="/privacy" className="hover:text-ink transition-colors font-medium">
            ← Read Privacy Policy
          </Link>
          <Link href="/" className="hover:text-ink transition-colors font-medium">
            Return to Luxury Italy Tours
          </Link>
        </div>
      </main>

      <footer className="border-t border-canvas-border py-6 text-center text-xs text-ink-muted">
        <p>© {new Date().getFullYear()} Tourpublish Italia S.r.l. • Via dei Condotti 85, 00187 Roma RM, Italy • Powered by staging.klnk.tv</p>
      </footer>
    </div>
  );
}
