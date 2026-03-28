import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Disclaimer', description: 'FormForge affiliate disclosure and disclaimer.' };

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Disclaimer</h1>
      <div className="prose prose-lg prose-purple max-w-none text-gray-700">
        <h2>Affiliate Disclosure</h2>
        <p>FormForge participates in affiliate programs with Typeform, JotForm, Tally, Formstack, and other form-building platforms. When you click on links to these products and make a purchase, we may earn a commission at no additional cost to you.</p>
        <p>This affiliate revenue helps us keep FormForge completely free for all users.</p>
        <h2>Editorial Independence</h2>
        <p>Our recommendations are based on our own evaluation and research. We only recommend products we believe provide genuine value. Affiliate relationships do not influence our editorial content or product rankings.</p>
        <h2>No Warranty</h2>
        <p>FormForge is provided &quot;as is&quot; without warranty of any kind. We make no guarantees about the accuracy, reliability, or suitability of the generated HTML code for any particular purpose.</p>
        <h2>FTC Compliance</h2>
        <p>In accordance with FTC guidelines, we disclose that some links on this website are affiliate links. This means we may receive compensation when you click through and take action on partner websites.</p>
      </div>
    </div>
  );
}
