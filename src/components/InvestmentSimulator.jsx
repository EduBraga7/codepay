'use client';

import { useState, useMemo } from 'react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid 
} from 'recharts';
import { Calculator, Sparkles } from 'lucide-react';

export default function InvestmentSimulator() {
  const [initialAmount, setInitialAmount] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(1000);
  const [years, setYears] = useState(10);
  const [annualRate, setAnnualRate] = useState(12);

  // Compound Interest Calculation
  const simulationData = useMemo(() => {
    const data = [];
    const monthlyRate = Math.pow(1 + annualRate / 100, 1 / 12) - 1;
    let currentTotal = initialAmount;
    let totalInvested = initialAmount;

    for (let year = 1; year <= years; year++) {
      for (let month = 1; month <= 12; month++) {
        currentTotal = (currentTotal + monthlyContribution) * (1 + monthlyRate);
        totalInvested += monthlyContribution;
      }
      const interestEarned = currentTotal - totalInvested;
      data.push({
        year: `Ano ${year}`,
        total: Math.round(currentTotal),
        invested: Math.round(totalInvested),
        interest: Math.round(interestEarned),
      });
    }

    return data;
  }, [initialAmount, monthlyContribution, years, annualRate]);

  const lastEntry = simulationData[simulationData.length - 1] || { total: 0, invested: 0, interest: 0 };

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="simulador" className="py-24 relative bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-glow text-xs font-semibold uppercase mb-4">
            <Calculator className="w-3.5 h-3.5 text-blue-600" />
            <span>Simulador de Juros Compostos</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-heading">
            O efeito dos <span className="text-blue-600">juros compostos</span> no seu futuro.
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Simule o crescimento do seu patrimônio com aportes constantes e veja o poder do longo prazo.
          </p>
        </div>

        {/* Simulator Container - Clean White Style */}
        <div className="glass-card p-6 md:p-10 border border-slate-200 rounded-2xl bg-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Input Controls Column */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2 font-heading mb-2">
                <Sparkles className="w-5 h-5 text-blue-600" />
                Parâmetros da Simulação
              </h3>

              {/* Initial Amount Slider */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs text-slate-700 font-semibold">Investimento Inicial</label>
                  <span className="text-sm font-bold text-blue-600 font-mono">
                    {formatCurrency(initialAmount)}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100000"
                  step="1000"
                  value={initialAmount}
                  onChange={(e) => setInitialAmount(Number(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
              </div>

              {/* Monthly Contribution Slider */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs text-slate-700 font-semibold">Aporte Mensal</label>
                  <span className="text-sm font-bold text-emerald-600 font-mono">
                    {formatCurrency(monthlyContribution)}
                  </span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="10000"
                  step="100"
                  value={monthlyContribution}
                  onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
              </div>

              {/* Years Slider */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs text-slate-700 font-semibold">Período (Anos)</label>
                  <span className="text-sm font-bold text-slate-900 font-mono">
                    {years} {years === 1 ? 'ano' : 'anos'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full accent-slate-800 cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
              </div>

              {/* Annual Rate Slider */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs text-slate-700 font-semibold">Taxa Anual Estimada</label>
                  <span className="text-sm font-bold text-amber-600 font-mono">
                    {annualRate}% ao ano
                  </span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="20"
                  step="0.5"
                  value={annualRate}
                  onChange={(e) => setAnnualRate(Number(e.target.value))}
                  className="w-full accent-amber-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
              </div>
            </div>

            {/* Results Chart Column */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              {/* Output Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                  <span className="text-[11px] text-slate-500 font-semibold uppercase block mb-1">Patrimônio Total</span>
                  <span className="text-lg md:text-xl font-bold text-blue-600 font-heading block">
                    {formatCurrency(lastEntry.total)}
                  </span>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                  <span className="text-[11px] text-slate-500 font-semibold uppercase block mb-1">Total Investido</span>
                  <span className="text-lg md:text-xl font-bold text-slate-800 font-heading block">
                    {formatCurrency(lastEntry.invested)}
                  </span>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                  <span className="text-[11px] text-slate-500 font-semibold uppercase block mb-1">Rendimento</span>
                  <span className="text-lg md:text-xl font-bold text-emerald-600 font-heading block">
                    {formatCurrency(lastEntry.interest)}
                  </span>
                </div>
              </div>

              {/* Area Chart */}
              <div className="w-full h-[280px] bg-slate-50 p-4 rounded-xl border border-slate-200">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={simulationData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2563eb" stopOpacity={0.25}/>
                        <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorInvested" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#64748b" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#64748b" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" stroke="#64748b" fontSize={11} />
                    <YAxis stroke="#64748b" fontSize={11} tickFormatter={(v) => `R$ ${(v/1000).toFixed(0)}k`} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0', borderRadius: '8px', color: '#0f172a', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
                      formatter={(val) => [formatCurrency(val), '']}
                    />
                    <Area type="monotone" dataKey="total" name="Patrimônio Total" stroke="#2563eb" fillOpacity={1} fill="url(#colorTotal)" strokeWidth={2.5} />
                    <Area type="monotone" dataKey="invested" name="Valor Investido" stroke="#64748b" fillOpacity={1} fill="url(#colorInvested)" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
