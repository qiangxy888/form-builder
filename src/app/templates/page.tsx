import Link from 'next/link';
import type { Metadata } from 'next';
import { templates } from '@/lib/templates';

export const metadata: Metadata = {
  title: 'Free Form Templates — Contact, Feedback, Registration & More',
  description: 'Browse our collection of free form templates. Contact forms, feedback surveys, registration forms, and more — ready to customize.',
};

export default function TemplatesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Form Templates</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Start with a pre-built template and customize it to your needs. All templates are free.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((t) => (
          <div key={t.id} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">{t.icon}</div>
            <h2 className="text-xl font-bold text-gray-900">{t.name}</h2>
            <p className="mt-2 text-gray-600 text-sm">{t.description}</p>
            <p className="mt-3 text-xs text-gray-500">{t.config.fields.length} fields</p>
            <Link href={`/form-builder?template=${t.id}`} className="mt-6 inline-block bg-[--color-primary] text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-[--color-primary-dark] transition-colors">
              Use Template →
            </Link>
          </div>
        ))}
      </div>
      {/* Affiliate CTA */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Want Hosted Forms with Analytics?</h2>
        <p className="mt-3 text-gray-600">Check out these top-rated form platforms for hosted solutions.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a href="/go/typeform" target="_blank" rel="noopener noreferrer nofollow" className="px-6 py-2.5 bg-[--color-primary] text-white rounded-lg font-semibold text-sm">Try Typeform →</a>
          <a href="/go/jotform" target="_blank" rel="noopener noreferrer nofollow" className="px-6 py-2.5 border-2 border-[--color-primary] text-[--color-primary] rounded-lg font-semibold text-sm">Try JotForm →</a>
        </div>
      </div>
    </div>
  );
}
