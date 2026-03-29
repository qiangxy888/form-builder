import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'FormForge — Free Online Form Builder | No Coding Required',
    template: '%s | FormForge',
  },
  description: 'Create beautiful forms for free. Drag and drop form builder — no sign-up, no coding. Generate clean HTML code and embed anywhere.',
  keywords: ['free form builder', 'online form generator', 'html form generator', 'form builder no sign up', 'drag and drop form builder'],
  openGraph: {
    title: 'FormForge — Free Online Form Builder',
    description: 'Create beautiful forms for free. No sign-up, no coding required.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}');`,
              }}
            />
          </>
        )}
      </head>
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <GoogleAnalytics />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
