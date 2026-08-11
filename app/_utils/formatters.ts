/**
 * Utility functions for currency and numeric formatting in CodePay.
 */

export const formatCurrency = (val: number | string): string => {
  const numericVal = typeof val === 'number' ? val : parseFloat(val) || 0;
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(numericVal);
};

export const formatPercent = (val: number | string, includePlus = true): string => {
  const numericVal = typeof val === 'number' ? val : parseFloat(val) || 0;
  const prefix = includePlus && numericVal > 0 ? '+' : '';
  return `${prefix}${numericVal.toFixed(2)}%`;
};

export const calculateAveragePrice = (
  existingQty: number,
  existingAvg: number,
  newQty: number,
  newPrice: number,
): number => {
  const totalQty = existingQty + newQty;
  if (totalQty <= 0) return 0;
  const totalCost = (existingQty * existingAvg) + (newQty * newPrice);
  return parseFloat((totalCost / totalQty).toFixed(2));
};
