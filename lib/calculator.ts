export type CalculatorInput = {
  capital: number;
  amplification: number;
  strategyReturn: number;
  performanceFee: number;
};

export function calculateAmplification({ capital, amplification, strategyReturn, performanceFee }: CalculatorInput) {
  const amplifiedCapital = Math.max(0, capital) * Math.max(1, amplification);
  const move = Math.abs(strategyReturn) / 100;
  const fee = Math.min(100, Math.max(0, performanceFee)) / 100;

  const grossProfit = amplifiedCapital * move;
  const performanceFeeAmount = grossProfit * fee;
  const netProfit = grossProfit - performanceFeeAmount;
  const netReturnPct = capital > 0 ? (netProfit / capital) * 100 : 0;

  const tradingLoss = amplifiedCapital * move;
  const lossOnCapitalPct = capital > 0 ? (tradingLoss / capital) * 100 : 0;
  const capitalRemaining = Math.max(0, capital - tradingLoss);
  const lossFraction = Math.min(lossOnCapitalPct / 100, 1);
  const recoveryRequiredPct = lossFraction >= 1 ? Infinity : (lossFraction / (1 - lossFraction)) * 100;

  return {
    amplifiedCapital,
    grossProfit,
    performanceFeeAmount,
    netProfit,
    netReturnPct,
    capitalAfterProfit: capital + netProfit,
    tradingLoss,
    lossOnCapitalPct,
    capitalRemaining,
    recoveryRequiredPct,
  };
}

export function recoveryFromDrawdown(drawdownPct: number) {
  const d = Math.min(100, Math.max(0, drawdownPct)) / 100;
  return d >= 1 ? Infinity : (d / (1 - d)) * 100;
}
