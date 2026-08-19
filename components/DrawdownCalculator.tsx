'use client';
import {useMemo,useState} from 'react';
import {recoveryFromDrawdown} from '@/lib/calculator';
import InfoTip from '@/components/InfoTip';

export default function DrawdownCalculator(){
  const [capital,setCapital]=useState(10000);
  const [drawdown,setDrawdown]=useState(20);
  const r=useMemo(()=>{const loss=capital*drawdown/100;return{loss,remaining:capital-loss,recovery:recoveryFromDrawdown(drawdown)}},[capital,drawdown]);
  return <section className="calculator">
    <p className="calculator-intro"><strong>What this shows:</strong> enter an account value and a possible drawdown. The calculator shows the monetary loss and the larger percentage gain needed to recover.</p>
    <div className="inputs">
      <label><span className="input-label">Starting capital <InfoTip text="The account value before the drawdown begins. Example: $10,000." /></span><input type="number" min="0" value={capital} onChange={e=>setCapital(Number(e.target.value))}/></label>
      <label><span className="input-label">Drawdown (%) <InfoTip text="The percentage decline from an account peak to a later low. A 20% drawdown means a $10,000 account falls to $8,000." /></span><input type="number" min="0" max="99.99" step="1" value={drawdown} onChange={e=>setDrawdown(Number(e.target.value))}/></label>
    </div>
    <div className="result-grid"><article className="result-card downside"><span>Loss</span><h2>-${r.loss.toLocaleString()}</h2><p>Capital remaining <strong>${r.remaining.toLocaleString()}</strong></p></article><article className="result-card upside"><span>Recovery required</span><h2>+{Number.isFinite(r.recovery)?r.recovery.toFixed(2):'∞'}%</h2><p>Gain needed on the smaller remaining capital base.</p></article></div>
  </section>
}
