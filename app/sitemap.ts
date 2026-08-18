import type { MetadataRoute } from 'next';

const baseUrl = 'https://ai-trading-review.vercel.app';

const routes = [
  '/',
  '/about',
  '/editorial-policy',
  '/methodology',
  '/risk-disclosure',
  '/guides',
  '/guides/what-is-ai-trading',
  '/guides/how-to-evaluate-ai-trading-bot',
  '/guides/automated-gold-trading',
  '/guides/ai-trading-bot-vs-copy-trading',
  '/guides/backtesting-vs-live-results',
  '/guides/profit-factor-explained',
  '/guides/win-rate-explained',
  '/guides/what-is-copy-trading',
  '/guides/leverage-vs-amplification',
  '/guides/understanding-drawdown',
  '/guides/performance-fees-explained',
  '/guides/slippage-explained',
  '/guides/how-to-check-broker-regulation',
  '/guides/trading-bot-red-flags',
  '/reviews',
  '/reviews/sonic-ai',
  '/reviews/sonic-ai/performance',
  '/reviews/sonic-ai/myfxbook',
  '/reviews/sonic-ai/24x',
  '/reviews/sonic-ai/fees',
  '/reviews/sonic-ai/risk',
  '/reviews/sonic-ai/withdrawals',
  '/reviews/sonic-ai/minimum-deposit',
  '/reviews/sonic-ai/safe',
  '/reviews/sonic-ai/legit',
  '/reviews/sonic-ai/alternatives',
  '/reviews/tag-markets',
  '/reviews/best-ai-gold-trading-bots',
  '/reviews/best-ai-trading-bots',
  '/tools',
  '/tools/ai-trading-calculator',
  '/tools/24x-profit-calculator',
  '/tools/24x-risk-calculator',
  '/tools/drawdown-recovery-calculator',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : route.split('/').filter(Boolean).length === 1 ? 0.8 : 0.6,
  }));
}
