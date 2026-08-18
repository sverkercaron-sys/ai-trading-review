import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'AI Trading Review', template: '%s | AI Trading Review' },
  description: 'Independent analysis of AI trading, automated strategies, copy trading, gold trading and amplified trading risk.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><header><Link className="brand" href="/">AI<span>TRADING</span>REVIEW</Link><nav><Link href="/tools/ai-trading-calculator">Tools</Link><Link href="/guides">Guides</Link><Link href="/reviews">Reviews</Link></nav></header>{children}<footer><strong>AI Trading Review</strong><p>Research the return. Understand the risk.</p><p><Link href="/about">About</Link> · <Link href="/methodology">Methodology</Link> · <Link href="/editorial-policy">Editorial Policy</Link> · <Link href="/risk-disclosure">Risk Disclosure</Link></p><small>Trading and leveraged products involve substantial risk. Historical results do not guarantee future performance. Nothing on this site is personalised financial advice.</small></footer></body></html>;
}
