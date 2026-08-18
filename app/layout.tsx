import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

const siteUrl = 'https://ai-trading-review.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'AI Trading Review', template: '%s | AI Trading Review' },
  description: 'Independent analysis of AI trading, automated strategies, copy trading, gold trading and amplified trading risk.',
  applicationName: 'AI Trading Review',
  openGraph: {
    type: 'website',
    siteName: 'AI Trading Review',
    title: 'AI Trading Review',
    description: 'Research the return. Understand the risk.',
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Trading Review',
    description: 'Independent research, reviews and calculators for AI and automated trading.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AI Trading Review',
  url: siteUrl,
  description: 'Independent research and educational analysis of AI trading, automated strategies and trading risk.',
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'AI Trading Review',
  url: siteUrl,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <header>
          <Link className="brand" href="/">AI<span>TRADING</span>REVIEW</Link>
          <nav>
            <Link href="/tools">Tools</Link>
            <Link href="/guides">Guides</Link>
            <Link href="/reviews">Reviews</Link>
          </nav>
        </header>
        {children}
        <footer>
          <strong>AI Trading Review</strong>
          <p>Research the return. Understand the risk.</p>
          <p><Link href="/about">About</Link> · <Link href="/methodology">Methodology</Link> · <Link href="/editorial-policy">Editorial Policy</Link> · <Link href="/risk-disclosure">Risk Disclosure</Link></p>
          <small>Trading and leveraged products involve substantial risk. Historical results do not guarantee future performance. Nothing on this site is personalised financial advice.</small>
        </footer>
      </body>
    </html>
  );
}
