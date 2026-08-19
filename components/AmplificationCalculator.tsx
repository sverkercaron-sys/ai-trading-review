'use client';

import { useMemo, useState } from 'react';
import { calculateAmplification } from '@/lib/calculator';
import InfoTip from '@/components/InfoTip';

const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
const pct = (n: number) => `${n.toFixed(2)}%`;

export default function AmplificationCalculator({ compact = false }: { compact?: boolean }) {
  const [capital, setCapital] = useState(10000);
  const [amplification, setAmplification] = useState(24);
  const [strategyReturn, setStrategyReturn] = useState(0.7);
  const [performanceFee, setPerformanceFee] = useState(30);

  const r = useMemo(() => calculateAmplification({ capital, amplification, strategyReturn, performanceFee }), [capital, amplification, strategyReturn, performanceFee]);

  return (
    <section className={`calculator ${compact ? 'compact' : ''}`}>
      <p className="calculator-intro"><strong>Try an example:</strong> enter the amount you would deposit, choose the programme multiplier and enter a hypothetical percentage gain or loss for the underlying strategy. The calculator shows what that could mean for your own capital.</p>
      <div className="inputs">
        <label><span className="input-label">Your capital <InfoTip text="The amount of your own money you are considering depositing. Example: $10,000." /></span><input type="number" min="0" value={capital} onChange={e => setCapital(Number(e.target.value))} /></label>
        <label><span className="input-label">Amplification <InfoTip text="The programme multiplier applied to your contributed capital. 24X means $10,000 is modelled as $240,000 of allocated trading capital. This is not the same thing as broker leverage." /></span><select value={amplification} onChange={e => setAmplification(Number(e.target.value))}><option value="1">1X</option><option value="5">5X</option><option value="12">12X</option><option value="24">24X</option></select></label>
        <label><span className="input-label">Underlying strategy change (%) <InfoTip text="A hypothetical percentage move in the underlying trading strategy before amplification. Example: 0.70 means the strategy gains 0.70% in the upside example and loses 0.70% in the downside example." /></span><input type="number" min="0" step="0.05" value={strategyReturn} onChange={e => setStrategyReturn(Number(e.target.value))} /></label>
        <label><span className="input-label">Performance fee (%) <InfoTip text="The share of profitable trading gains paid as a performance fee. Example: a 30% fee means the user keeps 70% of gross profit. The fee is not applied to losses in this simplified model." /></span><input type="number" min="0" max="100" value={performanceFee} onChange={e => setPerformanceFee(Number(e.target.value))} /></label>
      </div>

      <div className="result-grid">
        <article className="result-card upside"><span>Potential upside</span><h2>+{money.format(r.netProfit)}</h2><p>Net return on your capital <strong>+{pct(r.netReturnPct)}</strong></p><dl><div><dt>Amplified capital</dt><dd>{money.format(r.amplifiedCapital)}</dd></div><div><dt>Gross profit</dt><dd>+{money.format(r.grossProfit)}</dd></div><div><dt>Performance fee</dt><dd>-{money.format(r.performanceFeeAmount)}</dd></div></dl></article>
        <article className="result-card downside"><span>Equivalent downside</span><h2>-{money.format(r.tradingLoss)}</h2><p>Loss on your capital <strong>-{pct(r.lossOnCapitalPct)}</strong></p><dl><div><dt>Capital remaining</dt><dd>{money.format(r.capitalRemaining)}</dd></div><div><dt>Recovery required</dt><dd>{Number.isFinite(r.recoveryRequiredPct) ? `+${pct(r.recoveryRequiredPct)}` : 'Not recoverable'}</dd></div><div><dt>Underlying strategy change</dt><dd>-{strategyReturn.toFixed(2)}%</dd></div></dl></article>
      </div>
      <p className="disclaimer">Illustrative mathematics only. The upside and downside examples use the same assumed underlying strategy change. Actual trading results depend on execution, position sizing, programme rules, drawdown limits, fees and market conditions.</p>
    </section>
  );
}
