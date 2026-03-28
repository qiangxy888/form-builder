import Link from 'next/link';
import type { Metadata } from 'next';

const posts: Record<string, { title: string; description: string; date: string; readTime: string; content: string }> = {
  'best-free-form-builders-2026': {
    title: 'Best Free Form Builders in 2026: Complete Comparison',
    description: 'Compare the top free form builders including Typeform, JotForm, Tally, and FormForge.',
    date: '2026-03-20',
    readTime: '8 min',
    content: `<p>Looking for the best free form builder in 2026? Whether you need a simple contact form or a complex survey, there are excellent free options available. In this guide, we compare the top tools to help you choose.</p>
<h2>1. FormForge — Best for HTML Code Generation</h2>
<p><a href="/form-builder">FormForge</a> is a completely free, browser-based form builder that generates clean HTML code. No sign-up required, no platform lock-in — you get the code and use it anywhere.</p>
<p><strong>Best for:</strong> Developers and site owners who want full control over their form code.</p>
<h2>2. Typeform — Best for User Experience</h2>
<p><a href="/go/typeform">Typeform</a> is known for its beautiful, conversational form experience. The free plan includes basic features, while paid plans unlock advanced logic and integrations.</p>
<h2>3. JotForm — Best Template Library</h2>
<p><a href="/go/jotform">JotForm</a> offers over 10,000 templates and a powerful drag-and-drop builder. The free plan allows up to 5 forms with 100 monthly submissions.</p>
<h2>4. Tally — Best Free Plan</h2>
<p><a href="/go/tally">Tally</a> offers unlimited forms and unlimited responses on their free plan — the most generous in the industry.</p>
<h2>5. Google Forms — Best for Simplicity</h2>
<p>Google Forms is free, reliable, and integrates with Google Sheets. It lacks design customization but works great for basic surveys.</p>
<h2>Comparison Table</h2>
<p>Each tool has its strengths. FormForge is ideal when you need HTML code ownership. Typeform excels at user engagement. JotForm has the most templates. Tally has the best free plan. Google Forms is the simplest option.</p>
<h2>Our Recommendation</h2>
<p>Start with <a href="/form-builder">FormForge</a> for quick HTML forms. If you need hosted solutions with analytics, try <a href="/go/tally">Tally</a> (best free plan) or <a href="/go/typeform">Typeform</a> (best UX).</p>`,
  },
  'how-to-create-contact-form': {
    title: 'How to Create a Contact Form for Your Website (No Coding)',
    description: 'Step-by-step guide to building a professional contact form without writing any code.',
    date: '2026-03-18',
    readTime: '6 min',
    content: `<p>Every website needs a contact form. It is the primary way visitors reach out to you. In this guide, we will show you how to create a professional contact form in minutes — no coding required.</p>
<h2>Why You Need a Contact Form</h2>
<p>A contact form is better than displaying your email address because it reduces spam, provides a professional appearance, and lets you collect structured information from visitors.</p>
<h2>Step 1: Choose Your Fields</h2>
<p>A good contact form includes: Name, Email (required), Subject or Topic, and Message. Keep it simple — every extra field reduces completion rates.</p>
<h2>Step 2: Build Your Form with FormForge</h2>
<p>Open <a href="/form-builder">FormForge Form Builder</a> and add the fields listed above. Customize labels, set email as required, and choose a style theme.</p>
<h2>Step 3: Copy the Code</h2>
<p>Click "Copy Code" to get your HTML + CSS. Paste it into your website wherever you want the form to appear.</p>
<h2>Step 4: Set Up Form Submission</h2>
<p>The HTML form needs a backend to receive submissions. Options include Formspree, Netlify Forms, or your own server endpoint. Set the action URL in FormForge before generating code.</p>
<h2>Best Practices</h2>
<ul><li>Keep forms short — 3-5 fields max</li><li>Always include a clear submit button</li><li>Add placeholder text to guide users</li><li>Mark required fields clearly</li><li>Send a confirmation message after submission</li></ul>`,
  },
  'html-form-tutorial': {
    title: 'HTML Form Tutorial: Build Forms from Scratch',
    description: 'Learn the fundamentals of HTML forms — inputs, labels, validation, and styling.',
    date: '2026-03-15',
    readTime: '10 min',
    content: `<p>HTML forms are the backbone of web interactivity. Every login page, checkout flow, and contact form uses HTML form elements. In this tutorial, you will learn the fundamentals.</p>
<h2>Basic Form Structure</h2>
<p>Every HTML form starts with the <code>&lt;form&gt;</code> tag, which wraps all your input elements. The two key attributes are <code>action</code> (where the data goes) and <code>method</code> (GET or POST).</p>
<h2>Common Input Types</h2>
<p>HTML5 provides many input types: text, email, password, number, date, tel, url, file, checkbox, radio, and more. Each type provides built-in validation and mobile keyboard optimization.</p>
<h2>Labels and Accessibility</h2>
<p>Always use <code>&lt;label&gt;</code> elements with the <code>for</code> attribute matching the input <code>id</code>. This improves accessibility and usability — clicking the label focuses the input.</p>
<h2>Form Validation</h2>
<p>HTML5 validation attributes include required, minlength, maxlength, min, max, and pattern. These provide client-side validation without JavaScript.</p>
<h2>Styling Forms with CSS</h2>
<p>Forms can be styled with CSS just like any other HTML element. Focus on consistent padding, clear borders, hover/focus states, and responsive widths.</p>
<h2>Skip the Manual Work</h2>
<p>If you prefer not to write HTML by hand, use <a href="/form-builder">FormForge</a> to visually build your form and get the code automatically. It generates clean, semantic HTML with CSS styling included.</p>`,
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map(slug => ({ slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return {};
  return { title: post.title, description: post.description };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return <div className="py-20 text-center">Post not found</div>;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'FormForge' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/blog" className="text-[--color-primary] hover:underline text-sm mb-4 inline-block">← Back to Blog</Link>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">{post.title}</h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
          <time>{post.date}</time><span>·</span><span>{post.readTime}</span>
        </div>
        <div className="mt-8 prose prose-lg prose-purple max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="mt-12 bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Ready to Build Your Form?</h2>
          <p className="mt-3 text-gray-600">Use FormForge to create forms visually and get clean HTML code — free, no sign-up.</p>
          <Link href="/form-builder" className="mt-6 inline-block bg-[--color-primary] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[--color-primary-dark] shadow-lg shadow-purple-200">
            Start Building →
          </Link>
        </div>
      </article>
    </>
  );
}
