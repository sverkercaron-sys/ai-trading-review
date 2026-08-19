'use client';

import { useMemo, useState } from 'react';
import { calculateAmplification } from '@/lib/calculator';
import InfoTip from '@/components/InfoTip';

const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
const pct = (n: number) => `${n.toFixed(2)}%`;

export default function AmplificationCalculator({ compact = false }: { compact?: boolean }) {
  const [capital, setCapital] = useState(10000);
  const [amplification, setAmplification] = useState(24);
  const [strategyReturn, setStrategyReturn] = useState(1.2);
  const [performanceFee, setPerformanceFee] = useState(30);
  const [compoundMonths, setCompoundMonths] = useState(17);

  const r = useMemo(() => calculateAmplification({ capital, amplification, strategyReturn, performanceFee }), [capital, amplification, strategyReturn, performanceFee]);
  const monthlyNetRate = r.netReturnPct / 100;
  const compoundedCapital = capital > 0 && monthlyNetRate > -1 ? capital * Math.pow(1 + monthlyNetRate, compoundMonths) : 0;
  const compoundedProfit = compoundedCapital - capital;

  return (
    <section className={`calculator ${compact ? 'compact' : ''}`}>
      <p className="calculator-intro"><strong>Try an example:</strong> enter the amount you would deposit, choose the programme multiplier and enter a hypothetical percentage result for the underlying strategy. The calculator shows what that could mean for your own capital.</p>
      <div className="inputs">
        <label><span className="input-label">Your capital <InfoTip text="The amount of your own money you are considering depositing. Example: $10,000." /></span><input type="number" min="0" value={capital} onChange={e => setCapital(Number(e.target.value))} /></label>
        <label><span className="input-label">Amplification <InfoTip text="The programme multiplier applied to your contributed capital. 24X means $10,000 is modelled as $240,000 of allocated trading capital. This is not the same thing as broker leverage." /></span><select value={amplification} onChange={e => setAmplification(Number(e.target.value))}><option value="1">1X</option><option value="5">5X</option><option value="12">12X</option><option value="24">24X</option></select></label>
        <label><span className="input-label">Underlying monthly result (%) <InfoTip text="The percentage result of the underlying strategy before amplification and performance fees. The default 1.20% is a historical Sonic scenario supplied for illustration; it is not a forecast." /></span><input type="number" min="0" step="0.05" value={strategyReturn} onChange={e => setStrategyReturn(Number(e.target.value))} /></label>
        <label><span className="input-label">Performance fee (%) <InfoTip text="The share of profitable trading gains paid as a performance fee. Example: a 30% fee means the user keeps 70% of gross profit. The fee is not applied to losses in this simplified model." /></span><input type="number" min="0" max="100" value={performanceFee} onChange={e => setPerformanceFee(Number(e.target.value))} /></label>
      </div>

      <div className="result-grid result-grid-three">
        <article className="result-card upside"><span>Illustrative monthly upside</span><h2>+{money.format(r.netProfit)}</h2><p>Net return on your capital <strong>+{pct(r.netReturnPct)}</strong></p><dl><div><dt>Amplified capital</dt><dd>{money.format(r.amplifiedCapital)}</dd></div><div><dt>Gross profit</dt><dd>+{money.format(r.grossProfit)}</dd></div><div><dt>Performance fee</dt><dd>-{money.format(r.performanceFeeAmount)}</dd></div></dl></article>
        <article className="result-card downside"><span>Equivalent downside</span><h2>-{money.format(r.tradingLoss)}</h2><p>Loss on your capital <strong>-{pct(r.lossOnCapitalPct)}</strong></p><dl><div><dt>Capital remaining</dt><dd>{money.format(r.capitalRemaining)}</dd></div><div><dt>Recovery required</dt><dd>{Number.isFinite(r.recoveryRequiredPct) ? `+${pct(r.recoveryRequiredPct)}` : 'Not recoverable'}</dd></div><div><dt>Underlying result</dt><dd>-{strategyReturn.toFixed(2)}%</dd></div></dl></article>
        <article className="result-card compound"><span>What if Sonic's historical average repeated?</span><h2>{money.format(compoundedCapital)}</h2><p>Illustrative capital after <strong>{compoundMonths} months</strong> if the same calculated net monthly return repeated and every profit was reinvested.</p><label className="compound-period"><span className="input-label">Months <InfoTip text="17 months matches the historical period referenced for this Sonic scenario. Periods beyond the observed history are increasingly hypothetical." /></span><select value={compoundMonths} onChange={e=>setCompoundMonths(Number(e.target.value))}><option value="3">3 months</option><option value="6">6 months</option><option value="12">12 months</option><option value="17">17 months</option><option value="24">24 months</option></select></label><dl><div><dt>Starting capital</dt><dd>{money.format(capital)}</dd></div><div><dt>Monthly net assumption</dt><dd>+{pct(r.netReturnPct)}</dd></div><div><dt>Illustrative gain</dt><dd>+{money.format(compoundedProfit)}</dd></div></dl></article>
      </div>
      <p className="historical-note"><strong>Historical scenario, not a forecast.</strong> The default inputs use a 1.20% underlying monthly result, 24X amplification and a 30% performance fee, producing about {pct(r.netReturnPct)} net in this simplified model. The referenced Sonic history and user-reported experience do not guarantee that any future month will repeat this result.</p>
      <p className="disclaimer">Illustrative mathematics only. Real trading results vary and can include losing months, drawdowns, execution differences and programme-rule changes. Compounding assumes the same positive net result every month and full reinvestment of profits; actual results will not follow a smooth compounding curve.</p>
    </section>
  );
}
