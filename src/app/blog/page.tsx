import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog — Form Building Tips, Guides & Comparisons',
  description: 'Learn how to create better forms. Guides, comparisons, and best practices for form builders.',
};

const posts = [
  { slug: 'google-forms-alternatives-free', title: '7 Best Google Forms Alternatives in 2026 (Free & Paid)', description: 'Looking for a Google Forms alternative? Compare 7 top form builders with better design, logic, and features.', date: '2026-03-29', readTime: '10 min' },
  { slug: 'online-form-design-best-practices', title: 'Form Design Best Practices: 12 Rules for Higher Conversions', description: 'Learn 12 proven form design rules that increase completion rates.', date: '2026-03-28', readTime: '9 min' },
  { slug: 'best-free-form-builders-2026', title: 'Best Free Form Builders in 2026: Complete Comparison', description: 'Compare the top free form builders including Typeform, JotForm, Tally, and FormForge.', date: '2026-03-20', readTime: '8 min' },
  { slug: 'how-to-create-contact-form', title: 'How to Create a Contact Form for Your Website (No Coding)', description: 'Step-by-step guide to building a professional contact form without writing any code.', date: '2026-03-18', readTime: '6 min' },
  { slug: 'html-form-tutorial', title: 'HTML Form Tutorial: Build Forms from Scratch', description: 'Learn the fundamentals of HTML forms — inputs, labels, validation, and styling.', date: '2026-03-15', readTime: '10 min' },
];

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Blog</h1>
        <p className="mt-4 text-lg text-gray-600">Tips, guides, and comparisons to help you build better forms.</p>
      </div>
      <div className="space-y-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
              <time>{post.date}</time>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 hover:text-[--color-primary]">{post.title}</h2>
            <p className="mt-2 text-gray-600">{post.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
