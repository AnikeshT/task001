import React from 'react';
import Link from 'next/link';
import { ThemeAwareLogo } from '../../components/common/ThemeAwareLogo';
import { ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy & GDPR Compliance | Tourpublish Italy',
  description: 'Tourpublish Italia S.r.l. privacy notice, data protection practices, and direct operator booking security under EU GDPR.',
};

export default function PrivacyPage() {
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
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>EU GDPR &amp; Italian Data Protection Compliance</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-ink tracking-tight">
            Privacy Policy &amp; Data Security
          </h1>
          <p className="text-xs text-ink-muted font-mono">
            Last Updated: November 2026 • Tourpublish Italia S.r.l. (Via dei Condotti 85, Roma)
          </p>
        </div>

        <div className="space-y-8 text-sm text-ink-soft leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-ink">1. Data Controller Information</h2>
            <p>
              Tourpublish Italia S.r.l. (&quot;Tourpublish&quot;, &quot;we&quot;, &quot;us&quot;) operates the luxury travel directory service located at tourpublish.com. Under Regulation (EU) 2016/679 (General Data Protection Regulation - GDPR) and the Italian Privacy Code, the Data Controller is:
            </p>
            <div className="p-5 rounded-2xl bg-white border border-canvas-border font-mono text-xs text-ink space-y-1">
              <p className="font-bold">Tourpublish Italia S.r.l.</p>
              <p>Registered Address: Via dei Condotti 85, 00187 Roma (RM), Italy</p>
              <p>Codice Fiscale / P.IVA: IT-84920194821</p>
              <p>Data Protection Officer: privacy@tourpublish.com / concierge@staging.klnk.tv</p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-ink">2. Direct Operator Booking via staging.klnk.tv</h2>
            <p>
              Tourpublish serves as an independent curated directory of verified Italian luxury tour operators. When you initiate a booking, you are seamlessly transferred to <strong>staging.klnk.tv</strong>, an authorized, PCI-DSS Level 1 compliant direct booking checkout engine.
            </p>
            <p>
              Tourpublish does not store your credit card details, CVV codes, or banking credentials. All transaction processing and mobile boarding passes are handled cryptographically by staging.klnk.tv.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-ink">3. Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Contact Information:</strong> Email address when you submit an itinerary concierge inquiry.</li>
              <li><strong>Technical Data:</strong> Anonymized interaction metrics used exclusively to optimize performance.</li>
              <li><strong>Operator Communication:</strong> Notes submitted to local Italian operators regarding yacht boarding or dietary needs.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-ink">4. Your GDPR Rights</h2>
            <p>
              Under GDPR, you have the right to access, rectify, or erase your personal data. Contact our Data Protection Officer at <strong>privacy@tourpublish.com</strong>.
            </p>
          </section>
        </div>

        <div className="pt-6 border-t border-canvas-border flex items-center justify-between text-xs text-ink-muted">
          <Link href="/terms" className="hover:text-ink transition-colors font-medium">
            Read Terms of Service →
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
