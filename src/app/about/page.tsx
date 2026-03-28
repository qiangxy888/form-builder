import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'About FormForge', description: 'Learn about FormForge — the free online form builder that puts you in control.' };

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">About FormForge</h1>
      <div className="prose prose-lg prose-purple max-w-none text-gray-700">
        <p>FormForge is a free, open-source online form builder designed for people who need forms without the complexity of full-featured platforms.</p>
        <h2>Our Mission</h2>
        <p>We believe creating a web form shouldn&apos;t require a subscription, an account, or a computer science degree. FormForge lets you build beautiful, functional forms in minutes and gives you the HTML code to use anywhere.</p>
        <h2>How It Works</h2>
        <p>Everything happens in your browser. You drag and drop fields, customize labels and options, choose a style theme, and get clean HTML + CSS code. No data ever leaves your computer.</p>
        <h2>Who We&apos;re For</h2>
        <ul>
          <li>Small business owners who need a contact form</li>
          <li>Freelancers collecting client information</li>
          <li>Teachers creating surveys for students</li>
          <li>Anyone who needs a form without the overhead</li>
        </ul>
        <h2>Revenue Model</h2>
        <p>FormForge is free to use. We earn a small commission when you click through to our recommended form platforms like Typeform, JotForm, or Tally. This keeps FormForge free for everyone.</p>
      </div>
    </div>
  );
}
