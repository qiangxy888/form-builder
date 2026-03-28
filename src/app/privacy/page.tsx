import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Privacy Policy', description: 'FormForge privacy policy — how we handle your data.' };

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Privacy Policy</h1>
      <div className="prose prose-lg prose-purple max-w-none text-gray-700">
        <p><strong>Last updated:</strong> March 2026</p>
        <h2>Data We Collect</h2>
        <p>FormForge does not collect, store, or transmit any personal data or form content. All form building happens entirely in your browser using localStorage.</p>
        <h2>Analytics</h2>
        <p>We use Google Analytics 4 to understand how visitors use our website (page views, traffic sources, general demographics). Google Analytics uses cookies. You can opt out by using a browser extension or disabling cookies.</p>
        <h2>Cookies</h2>
        <p>We use minimal cookies for analytics purposes only. No advertising cookies or tracking pixels are used.</p>
        <h2>Third-Party Links</h2>
        <p>Our website contains links to third-party websites (affiliate partners). We are not responsible for their privacy practices. Please review their privacy policies before providing any personal information.</p>
        <h2>localStorage</h2>
        <p>We use your browser&apos;s localStorage to save your form configuration for convenience. This data never leaves your browser and can be cleared at any time through your browser settings.</p>
        <h2>Contact</h2>
        <p>For privacy-related questions, please reach out through our About page.</p>
      </div>
    </div>
  );
}
