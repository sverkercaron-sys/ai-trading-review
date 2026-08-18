import Link from 'next/link';

const sonicTopics = [
  ['Performance','/reviews/sonic-ai/performance'],
  ['Myfxbook','/reviews/sonic-ai/myfxbook'],
  ['24X Explained','/reviews/sonic-ai/24x'],
  ['Fees','/reviews/sonic-ai/fees'],
  ['Risk','/reviews/sonic-ai/risk'],
  ['Withdrawals','/reviews/sonic-ai/withdrawals'],
  ['Minimum Deposit','/reviews/sonic-ai/minimum-deposit'],
  ['Safety','/reviews/sonic-ai/safe'],
  ['Legitimacy','/reviews/sonic-ai/legit'],
  ['Alternatives','/reviews/sonic-ai/alternatives'],
];

export default function Page(){return <main><div className="eyebrow">Independent analysis</div><h1 className="page-title">AI Trading Reviews</h1><p className="lead">Our reviews focus on evidence, drawdown, leverage, fees, custody and what can actually be verified — not headline ROI alone.</p>
<section className="section"><div className="eyebrow">Featured review</div><h2>Sonic AI Review 2026</h2><div className="card"><h3>Complete independent review</h3><p>Our main Sonic AI review brings the proposition, performance evidence, amplification, fees, broker structure and key risks together in one place.</p><Link className="button" href="/reviews/sonic-ai">Read the full Sonic AI Review →</Link></div></section>
<section className="section"><div className="eyebrow">Supporting research</div><h2>Explore Sonic AI</h2><p className="lead">These are focused deep dives that support the main review — not separate reviews.</p><div className="card-grid">{sonicTopics.map(([title,href])=><Link className="card" href={href} key={href}><h3>{title}</h3><p>Read the focused Sonic AI guide →</p></Link>)}</div></section>
<section className="section"><h2>More reviews</h2><div className="card-grid"><Link className="card" href="/reviews/tag-markets"><h3>TAG Markets Review 2026</h3><p>Broker structure, regulation, amplification and leveraged trading risk.</p></Link><Link className="card" href="/reviews/best-ai-gold-trading-bots"><h3>Best AI Gold Trading Bots</h3><p>Compare automated gold strategies using consistent criteria.</p></Link><Link className="card" href="/reviews/best-ai-trading-bots"><h3>Best AI Trading Bots 2026</h3><p>Our evidence-first framework for comparing automated strategies.</p></Link></div></section></main>}