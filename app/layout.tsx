import type { Metadata } from 'next';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.soniqe.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Soniqe – AI Trading Reviews, Tools & Research', template: '%s | Soniqe' },
  description: 'Independent AI trading reviews, automated trading research, comparisons and risk tools.',
  applicationName: 'Soniqe',
  openGraph: {type:'website',siteName:'Soniqe',title:'Soniqe – AI Trading Reviews, Tools & Research',description:'Research the return. Understand the risk.',url:siteUrl},
  twitter: {card:'summary_large_image',title:'Soniqe',description:'Independent reviews, research and calculators for AI and automated trading.'},
  robots: {index:true,follow:true,googleBot:{index:true,follow:true,'max-image-preview':'large','max-snippet':-1}},
};
const organizationJsonLd={'@context':'https://schema.org','@type':'Organization',name:'Soniqe',url:siteUrl,description:'Independent research, reviews and educational analysis of AI trading, automated strategies and trading risk.'};
const websiteJsonLd={'@context':'https://schema.org','@type':'WebSite',name:'Soniqe',url:siteUrl,description:'AI trading reviews, research, comparisons and interactive risk and return tools.'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organizationJsonLd)}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(websiteJsonLd)}}/><header><Link className="brand" href="/">SONI<span>QE</span></Link><nav><Link href="/tools">Tools</Link><Link href="/guides">Guides</Link><Link href="/reviews">Reviews</Link></nav></header>{children}<footer><strong>Soniqe</strong><p>AI Trading Reviews, Tools & Research</p><p><Link href="/about">About</Link> · <Link href="/methodology">Methodology</Link> · <Link href="/editorial-policy">Editorial Policy</Link> · <Link href="/affiliate-disclosure">Affiliate Disclosure</Link> · <Link href="/risk-disclosure">Risk Disclosure</Link></p><small>Trading and leveraged products involve substantial risk. Historical results do not guarantee future performance. Nothing on this site is personalised financial advice.</small></footer><Analytics /></body></html>}
