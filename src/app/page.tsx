import Link from 'next/link';
import affiliates from '@/data/affiliates.json';

const features = [
  { icon: '🚀', title: 'No Sign-Up Required', desc: 'Start building forms instantly. No account, no email, no friction.' },
  { icon: '📋', title: 'Your Code, Your Rules', desc: 'Generate clean HTML code you fully own. Embed it anywhere — no platform lock-in.' },
  { icon: '🔒', title: '100% Private', desc: 'All data stays in your browser. Nothing is sent to our servers — ever.' },
  { icon: '🎨', title: '13+ Field Types', desc: 'Text, email, phone, dropdowns, checkboxes, file uploads, headings, and more.' },
  { icon: '📱', title: 'Responsive Output', desc: 'Generated forms look great on desktop, tablet, and mobile devices.' },
  { icon: '⚡', title: '3 Style Themes', desc: 'Choose from Default, Modern, or Minimal CSS themes for your form.' },
];

const steps = [
  { num: '1', title: 'Pick Your Fields', desc: 'Choose from 13+ field types or start with a pre-built template. Drag to reorder.' },
  { num: '2', title: 'Customize Everything', desc: 'Edit labels, placeholders, options, and validation. Make it yours.' },
  { num: '3', title: 'Copy & Embed', desc: 'Get clean HTML + CSS code. Paste it into your website, WordPress, or anywhere.' },
];

const faqs = [
  { q: 'Is FormForge really free?', a: 'Yes, 100% free. No hidden charges, no premium tiers, no feature locks. Every field type and template is available to everyone.' },
  { q: 'Do I need to sign up?', a: 'No. Start building forms immediately — no account required. Your form data is saved locally in your browser.' },
  { q: 'Can I use the generated code on any website?', a: 'Absolutely. The HTML code is standard and works on any platform — WordPress, Wix, Squarespace, static sites, or custom web apps.' },
  { q: 'Is my data secure?', a: 'All form building happens in your browser using localStorage. We never transmit or store any of your data on our servers.' },
  { q: 'What field types are available?', a: 'We offer 13+ field types: text input, email, phone, textarea, dropdown select, radio buttons, checkboxes, date picker, number input, file upload, headings, paragraphs, and dividers.' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-purple-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Build Beautiful Forms{' '}
            <span className="text-[--color-primary]">in Minutes</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Free online form builder — no sign-up, no coding. Drag &amp; drop fields,
            customize everything, and get clean HTML code to embed anywhere.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/form-builder" className="inline-block bg-[--color-primary] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[--color-primary-dark] transition-colors shadow-lg shadow-purple-200">
              Start Building — Free →
            </Link>
            <Link href="/templates" className="inline-block border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-[--color-primary] hover:text-[--color-primary] transition-colors">
              Browse Templates
            </Link>
          </div>
          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-1">🚫 No sign-up</span>
            <span className="flex items-center gap-1">💻 Code is yours</span>
            <span className="flex items-center gap-1">🔒 100% private</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">Why Choose FormForge?</h2>
          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">Everything you need to create professional forms — without writing code or paying a dime.</p>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{f.title}</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">How It Works</h2>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="w-16 h-16 mx-auto bg-[--color-primary] text-white rounded-full flex items-center justify-center text-2xl font-bold">{s.num}</div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{s.title}</h3>
                <p className="mt-3 text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliate */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">Need Hosted Forms with Analytics?</h2>
          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">FormForge gives you the HTML code. If you need hosted forms, payment collection, or advanced workflows, try these top-rated platforms.</p>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
            {affiliates.map((p) => (
              <div key={p.slug} className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{p.name}</h3>
                  <span className="bg-purple-100 text-[--color-primary] text-sm font-semibold px-3 py-1 rounded-full">★ {p.rating}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{p.description}</p>
                <p className="text-[--color-primary] font-semibold mb-4">{p.price}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.features.slice(0, 3).map((f) => (
                    <span key={f} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">{f}</span>
                  ))}
                </div>
                <a href={`/go/${p.slug}`} target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-[--color-primary] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[--color-primary-dark] transition-colors text-sm">
                  Try {p.name} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-5 font-semibold text-gray-900 hover:bg-gray-50 transition-colors cursor-pointer">
                  {faq.q}
                  <svg className="faq-icon w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
