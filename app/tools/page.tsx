import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'AI Trading Tools & Calculators',
  description: 'Free calculators for amplified trading returns, downside risk, compounding scenarios and drawdown recovery.',
  alternates: { canonical: '/tools' },
  openGraph: {title:'AI Trading Tools & Calculators',description:'Model trading return, amplification, downside and recovery using your own assumptions.',url:'/tools'},
};

export default function Page() {
  return (
    <main>
      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Tools', href: '/tools' }]} />
      <div className="eyebrow">Interactive tools</div>
      <h1 className="page-title">AI Trading Tools</h1>
      <p className="lead">Use the numbers instead of relying on marketing claims. Start with the main calculator, then stress-test downside and recovery before drawing conclusions from projected returns.</p>
      <section className="section">
        <div className="eyebrow">Start here</div><h2>Model the proposition</h2>
        <div className="card-grid">
          <Link className="card" href="/tools/ai-trading-calculator"><h3>AI Trading Amplification Calculator</h3><p>Our main calculator: compare potential net profit, equivalent downside and compounding scenarios side by side.</p></Link>
          <Link className="card" href="/tools/24x-profit-calculator"><h3>24X Profit Calculator</h3><p>Model hypothetical net returns at 24X amplification after performance fees.</p></Link>
        </div>
      </section>
      <section className="section">
        <div className="eyebrow">Then stress-test it</div><h2>Understand the downside</h2>
        <div className="card-grid">
          <Link className="card" href="/tools/24x-risk-calculator"><h3>24X Risk Calculator</h3><p>See how a small adverse strategy move could affect contributed capital.</p></Link>
          <Link className="card" href="/tools/drawdown-recovery-calculator"><h3>Drawdown Recovery Calculator</h3><p>Calculate the percentage gain needed to recover from a loss.</p></Link>
        </div>
      </section>
      <section className="section content">
        <h2>How to use these tools</h2>
        <p>A calculator does not predict trading performance. It exposes the assumptions behind a scenario. Change the return, amplification, fee and adverse-move inputs rather than treating the defaults as expected results.</p>
        <p><Link href="/guides/what-does-20-percent-monthly-return-mean">Understand compounding before projecting monthly returns →</Link></p>
        <p><Link href="/guides/return-vs-drawdown">Compare return with drawdown →</Link></p>
        <p><Link href="/guides/leverage-vs-amplification">Understand amplification vs leverage →</Link></p>
      </section>
      <section className="section content">
        <h2>From calculator to research</h2>
        <p>Once you understand the mechanics, compare the assumptions with live evidence, programme terms and broker structure rather than stopping at the projected number.</p>
        <p><Link href="/reviews/sonic-ai">Apply the framework to the Sonic AI research hub →</Link></p>
        <p><Link href="/methodology">See how Soniqe reviews trading systems →</Link></p>
      </section>
    </main>
  );
}
