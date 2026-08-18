import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'AI Trading Tools & Calculators',
  description: 'Free calculators for amplified trading returns, downside risk and drawdown recovery.',
  alternates: { canonical: '/tools' },
};

export default function Page() {
  return (
    <main>
      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Tools', href: '/tools' }]} />
      <div className="eyebrow">Interactive tools</div>
      <h1 className="page-title">AI Trading Tools</h1>
      <p className="lead">Use the numbers instead of relying on marketing claims. Our calculators show amplified upside, downside and recovery requirements using your own assumptions.</p>
      <section className="section">
        <div className="card-grid">
          <Link className="card" href="/tools/ai-trading-calculator"><h3>AI Trading Amplification Calculator</h3><p>Compare potential net profit and equivalent downside side by side.</p></Link>
          <Link className="card" href="/tools/24x-profit-calculator"><h3>24X Profit Calculator</h3><p>Model hypothetical net returns at 24X amplification after performance fees.</p></Link>
          <Link className="card" href="/tools/24x-risk-calculator"><h3>24X Risk Calculator</h3><p>See how a small adverse strategy move could affect contributed capital.</p></Link>
          <Link className="card" href="/tools/drawdown-recovery-calculator"><h3>Drawdown Recovery Calculator</h3><p>Calculate the percentage gain needed to recover from a loss.</p></Link>
        </div>
      </section>
      <section className="section content">
        <h2>Why we build tools</h2>
        <p>Trading products are often described using headline return percentages. Calculators make the assumptions explicit and let readers test the same structure with more conservative or more adverse inputs.</p>
        <p><Link href="/methodology">See how we review trading systems →</Link></p>
      </section>
    </main>
  );
}
