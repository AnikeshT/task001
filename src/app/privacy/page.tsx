import React from 'react';
import Link from 'next/link';
import { ThemeAwareLogo } from '../../components/common/ThemeAwareLogo';
import { ShieldCheck, Lock, Mail, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy & GDPR Compliance | Tourpublish Italy',
  description: 'Tourpublish Italia S.r.l. privacy notice, data protection practices, and direct operator booking security under EU GDPR.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-brand-dark text-slate-100 flex flex-col justify-between font-sans selection:bg-brand-coral selection:text-white">
      <header className="border-b border-white/10 py-5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <ThemeAwareLogo height={32} lightOnly />
          <Link
            href="/"
            className="text-xs uppercase tracking-wider font-semibold text-slate-300 hover:text-white transition-colors"
          >
            ← Back to Directory
          </Link>
        </div>
      </header>

      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-coral/10 border border-brand-coral/20 text-brand-coral text-xs font-semibold uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>EU GDPR & Italian Data Protection Compliance</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-sans font-bold text-white tracking-tight">
            Privacy Policy & Data Security
          </h1>
          <p className="text-xs text-slate-400 font-mono">
            Last Updated: November 2026 • Tourpublish Italia S.r.l. (Via dei Condotti 85, Roma)
          </p>
        </div>

        <div className="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed space-y-8">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Data Controller Information</h2>
            <p>
              Tourpublish Italia S.r.l. (&quot;Tourpublish&quot;, &quot;we&quot;, &quot;us&quot;) operates the luxury travel directory service located at tourpublish.com. Under Regulation (EU) 2016/679 (General Data Protection Regulation - GDPR) and the Italian Privacy Code (Legislative Decree no. 196/2003, amended by Legislative Decree no. 101/2018), the Data Controller is:
            </p>
            <div className="rounded-xl bg-white/5 border border-white/10 p-4 font-mono text-xs text-slate-300 space-y-1">
              <p><strong>Tourpublish Italia S.r.l.</strong></p>
              <p>Registered Address: Via dei Condotti 85, 00187 Roma (RM), Italy</p>
              <p>Codice Fiscale / P.IVA: IT-84920194821</p>
              <p>Data Protection Officer (DPO): privacy@tourpublish.com / concierge@staging.klnk.tv</p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Direct Operator Booking via staging.klnk.tv</h2>
            <p>
              Tourpublish serves as an independent curated directory of verified Italian luxury tour operators. When you initiate a booking, you are seamlessly transferred to <strong>staging.klnk.tv</strong>, an authorized, PCI-DSS Level 1 compliant direct booking checkout engine.
            </p>
            <p>
              Tourpublish does not store your credit card details, CVV codes, or full banking payment credentials on our servers. All transaction processing, Apple Pay/Google Pay tokens, and cryptographic mobile boarding passes are handled in accordance with strict cryptographic standards managed by staging.klnk.tv and its banking partners.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Contact Information:</strong> Email address when you subscribe to our Italian Private Dispatch newsletter or submit an itinerary concierge request.</li>
              <li><strong>Technical &amp; Usage Data:</strong> Anonymized IP address, browser type, device information, and interactions on our directory used exclusively to optimize performance across mobile and desktop devices.</li>
              <li><strong>Operator Communication:</strong> Notes and preferences submitted to local Italian operators regarding dietary needs, yacht boarding arrangements, or alpine guide sizes.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Your GDPR Rights</h2>
            <p>
              As a European or international data subject, you have the right to request access to your personal data, request rectification or erasure (&quot;right to be forgotten&quot;), restrict processing, or request data portability. To exercise these rights, contact our Data Protection Officer at <strong>privacy@tourpublish.com</strong> or via registered post to our Rome conciergerie office.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Cookies &amp; Tracking Technologies</h2>
            <p>
              We use strictly necessary cookies to store your preferred currency (USD, EUR, GBP) and filter selections. Non-essential analytical cookies are only loaded after you provide affirmative consent via our Cookie Consent banner. You can update your preferences at any time.
            </p>
          </section>
        </div>

        <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <Link href="/terms" className="hover:text-white transition-colors">
            Read Terms of Service →
          </Link>
          <Link href="/" className="hover:text-white transition-colors">
            Return to Luxury Italy Tours
          </Link>
        </div>
      </main>

      <footer className="border-t border-white/10 py-6 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Tourpublish Italia S.r.l. • Via dei Condotti 85, 00187 Roma RM, Italy • Powered by staging.klnk.tv</p>
      </footer>
    </div>
  );
}
