export const summaryCards = [
  {
    label: 'Patrimônio Total',
    value: 'R$ 50.000,00',
    change: '+ 8,45%',
    trend: 'up',
  },
  {
    label: 'Rentabilidade (12m)',
    value: '+8,45%',
    change: '+2,30%',
    trend: 'up',
  },
  {
    label: 'Lucro / Prejuízo',
    value: 'R$ 3.890,00',
    change: '+ 8,45%',
    trend: 'up',
  },
  {
    label: 'Aportes no mês',
    value: 'R$ 2.000,00',
    change: '4 aportes',
    trend: 'neutral',
  },
];

export const patrimonioHistory = [
  { month: 'Mai', value: 10000 },
  { month: 'Jun', value: 14000 },
  { month: 'Jul', value: 13000 },
  { month: 'Ago', value: 20000 },
  { month: 'Set', value: 28000 },
  { month: 'Out', value: 26000 },
  { month: 'Nov', value: 34000 },
];

export const allocationData = [
  { name: 'Ações', value: 60, color: '#6b5cff' },
  { name: 'FIIs', value: 25, color: '#22c55e' },
  { name: 'Renda Fixa', value: 10, color: '#0ea5e9' },
  { name: 'Outros', value: 5, color: '#f97316' },
];

export const recentMovements = [
  { date: '14/05/2026', type: 'Compra', asset: 'PETR4', amount: 'R$ 1.200,00' },
  { date: '12/05/2026', type: 'Venda', asset: 'ITSA4', amount: 'R$ 870,00' },
  { date: '10/05/2026', type: 'Compra', asset: 'HGLG11', amount: 'R$ 530,00' },
  { date: '08/05/2026', type: 'Compra', asset: 'TESOURO SELIC', amount: 'R$ 600,00' },
];

export const portfolios = [
  {
    name: 'Carteira Principal',
    patrimony: 'R$ 50.000,00',
    profitability: '+8,45%',
    allocation: '100%',
    updatedAt: 'Hoje',
  },
  {
    name: 'Carteira Dividendos',
    patrimony: 'R$ 18.300,00',
    profitability: '+5,10%',
    allocation: '36,6%',
    updatedAt: 'Hoje',
  },
  {
    name: 'Carteira Crescimento',
    patrimony: 'R$ 21.700,00',
    profitability: '+11,20%',
    allocation: '43,4%',
    updatedAt: 'Ontem',
  },
  {
    name: 'Reserva Estratégica',
    patrimony: 'R$ 10.000,00',
    profitability: '+2,40%',
    allocation: '20%',
    updatedAt: '2 dias',
  },
];

export const assets = [
  {
    ticker: 'PETR4',
    type: 'Ação',
    quantity: 100,
    avgPrice: 'R$ 31,00',
    currentPrice: 'R$ 34,20',
    totalValue: 'R$ 3.420,00',
    profitability: '+10,3%',
  },
  {
    ticker: 'VALE3',
    type: 'Ação',
    quantity: 50,
    avgPrice: 'R$ 67,40',
    currentPrice: 'R$ 70,00',
    totalValue: 'R$ 3.500,00',
    profitability: '+3,9%',
  },
  {
    ticker: 'ITSA4',
    type: 'Ação',
    quantity: 140,
    avgPrice: 'R$ 10,70',
    currentPrice: 'R$ 10,90',
    totalValue: 'R$ 1.526,00',
    profitability: '+1,9%',
  },
  {
    ticker: 'HGLG11',
    type: 'FII',
    quantity: 35,
    avgPrice: 'R$ 165,00',
    currentPrice: 'R$ 170,00',
    totalValue: 'R$ 5.950,00',
    profitability: '+3,0%',
  },
];

export const transactions = [
  {
    date: '14/05/2026',
    operation: 'Compra',
    category: 'Ação',
    asset: 'PETR4',
    quantity: 30,
    unitPrice: 'R$ 33,20',
    total: 'R$ 996,00',
  },
  {
    date: '12/05/2026',
    operation: 'Venda',
    category: 'Ação',
    asset: 'ITSA4',
    quantity: 80,
    unitPrice: 'R$ 10,90',
    total: 'R$ 872,00',
  },
  {
    date: '10/05/2026',
    operation: 'Compra',
    category: 'FII',
    asset: 'HGLG11',
    quantity: 3,
    unitPrice: 'R$ 176,70',
    total: 'R$ 530,10',
  },
  {
    date: '08/05/2026',
    operation: 'Compra',
    category: 'Renda Fixa',
    asset: 'TESOURO SELIC',
    quantity: 1,
    unitPrice: 'R$ 600,00',
    total: 'R$ 600,00',
  },
  {
    date: '05/05/2026',
    operation: 'Compra',
    category: 'Ação',
    asset: 'WEGE3',
    quantity: 15,
    unitPrice: 'R$ 39,90',
    total: 'R$ 598,50',
  },
];
