'use client';

import { useState } from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  PieChart as PieIcon, 
  ArrowUpRight, 
  Wallet, 
  Layers 
} from 'lucide-react';

const mockAssets = [
  { ticker: 'PETR4', name: 'Petrobras PN', category: 'Ações', qty: 250, avgPrice: 31.40, currentPrice: 38.60, profit: '+22.9%', profitValue: '+R$ 1.800,00', isPositive: true },
  { ticker: 'HGLG11', name: 'CSHG Logística', category: 'FIIs', qty: 45, avgPrice: 152.00, currentPrice: 164.50, profit: '+8.2%', profitValue: '+R$ 562,50', isPositive: true },
  { ticker: 'VALE3', name: 'Vale ON', category: 'Ações', qty: 120, avgPrice: 64.20, currentPrice: 61.80, profit: '-3.7%', profitValue: '-R$ 288,00', isPositive: false },
  { ticker: 'TESOURO SELIC 2029', name: 'Tesouro Nacional', category: 'Renda Fixa', qty: 3, avgPrice: 14200.00, currentPrice: 14850.00, profit: '+4.5%', profitValue: '+R$ 1.950,00', isPositive: true },
];

export default function PortfolioMockup() {
  const [selectedFilter, setSelectedFilter] = useState('Todos');

  const filteredAssets = selectedFilter === 'Todos' 
    ? mockAssets 
    : mockAssets.filter(a => a.category === selectedFilter);

  return (
    <section id="demonstracao" className="py-16 md:py-20 relative bg-white border-y border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-glow text-xs font-semibold uppercase mb-3">
            <PieIcon className="w-3.5 h-3.5 text-blue-600" />
            <span>Interface Limpa & Funcional</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900 mb-3 md:mb-4 font-heading leading-tight">
            Visualize sua carteira com <span className="text-blue-600">clareza total</span>.
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed">
            Dashboard em tempo real projetado no padrão Investidor10 para acompanhamento patrimonial rápido e seguro.
          </p>
        </div>

        {/* Dashboard Frame Mockup - Optimized for Mobile */}
        <div className="glass-card border border-slate-200 p-3 sm:p-6 md:p-8 rounded-2xl shadow-xl bg-white relative overflow-hidden">
          {/* Top Window Bar - Responsive Flex */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3 mb-6 bg-slate-50 -mx-3 sm:-mx-6 md:-mx-8 -mt-3 sm:-mt-6 md:-mt-8 p-3 sm:p-4">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="text-[11px] sm:text-xs font-mono text-slate-500 font-medium truncate max-w-[140px] sm:max-w-none ml-1">
                codepay.com.br/carteira
              </span>
            </div>
            <div className="flex items-center">
              <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                Mercado Aberto
              </span>
            </div>
          </div>

          {/* Main Dashboard Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="bg-slate-50 border border-slate-200 p-4 sm:p-5 rounded-xl">
              <div className="flex items-center justify-between text-slate-500 text-xs font-semibold mb-1.5">
                <span>PATRIMÔNIO TOTAL</span>
                <Wallet className="w-4 h-4 text-blue-600" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1.5 font-heading">
                R$ 148.520,40
              </div>
              <div className="flex items-center gap-1 text-xs">
                <span className="text-emerald-600 font-semibold flex items-center gap-0.5 text-[11px] sm:text-xs">
                  <ArrowUpRight className="w-3.5 h-3.5" /> +R$ 3.824,50 (este mês)
                </span>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-4 sm:p-5 rounded-xl">
              <div className="flex items-center justify-between text-slate-500 text-xs font-semibold mb-1.5">
                <span>RENTABILIDADE ACUMULADA</span>
                <TrendingUp className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 mb-1.5 font-heading">
                +18,4% <span className="text-xs sm:text-sm font-normal text-slate-500">vs CDI (11,2%)</span>
              </div>
              <div className="text-[11px] sm:text-xs text-slate-600">
                Superando o benchmark em <strong className="text-slate-900">+7,2%</strong>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-4 sm:p-5 rounded-xl">
              <div className="flex items-center justify-between text-slate-500 text-xs font-semibold mb-1.5">
                <span>PROVENTOS ESTIMADOS (MÊS)</span>
                <DollarSign className="w-4 h-4 text-blue-600" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1.5 font-heading">
                R$ 1.240,00
              </div>
              <div className="text-[11px] sm:text-xs text-slate-600">
                Próximos pagamentos em <strong className="text-blue-600">15 de Agosto</strong>
              </div>
            </div>
          </div>

          {/* Category Distribution Bar - Responsive */}
          <div className="mb-6 md:mb-8 bg-slate-50 p-3.5 sm:p-4 rounded-xl border border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-700 mb-2.5 font-semibold gap-1">
              <span>Alocação por Classe de Ativo</span>
              <span className="text-blue-600 text-[11px] sm:text-xs">Carteira Diversificada</span>
            </div>
            <div className="w-full h-3 rounded-full bg-slate-200 flex overflow-hidden p-0.5 gap-0.5">
              <div className="h-full bg-blue-600 rounded-l-full" style={{ width: '45%' }} title="Ações (45%)" />
              <div className="h-full bg-emerald-500" style={{ width: '30%' }} title="FIIs (30%)" />
              <div className="h-full bg-cyan-500" style={{ width: '20%' }} title="Renda Fixa (20%)" />
              <div className="h-full bg-amber-500 rounded-r-full" style={{ width: '5%' }} title="Cripto (5%)" />
            </div>
            <div className="flex flex-wrap gap-2.5 sm:gap-4 mt-3 text-[11px] sm:text-xs text-slate-600 font-medium">
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-600" /> Ações (45%)</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500" /> FIIs (30%)</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-cyan-500" /> Renda Fixa (20%)</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-500" /> Cripto (5%)</span>
            </div>
          </div>

          {/* Assets Table Mockup */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <div className="p-3.5 sm:p-4 border-b border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <h3 className="font-semibold text-slate-900 text-xs sm:text-sm flex items-center gap-2 font-heading">
                <Layers className="w-4 h-4 text-blue-600" />
                Seus Ativos em Destaque
              </h3>
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 text-xs">
                {['Todos', 'Ações', 'FIIs', 'Renda Fixa'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedFilter(cat)}
                    className={`px-2.5 py-1 rounded-md text-[11px] whitespace-nowrap transition-all ${
                      selectedFilter === cat 
                        ? 'bg-blue-600 text-white font-semibold' 
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs min-w-[550px]">
                <thead className="bg-slate-100 text-slate-600 border-b border-slate-200 uppercase tracking-wider font-semibold">
                  <tr>
                    <th className="py-2.5 px-3 sm:px-4">Ativo</th>
                    <th className="py-2.5 px-3 sm:px-4">Qtd</th>
                    <th className="py-2.5 px-3 sm:px-4">PM</th>
                    <th className="py-2.5 px-3 sm:px-4">Atual</th>
                    <th className="py-2.5 px-3 sm:px-4 text-right">Resultado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  {filteredAssets.map((asset, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-3 sm:px-4">
                        <div className="font-bold text-slate-900 text-xs sm:text-sm">{asset.ticker}</div>
                        <div className="text-[10px] sm:text-[11px] text-slate-500">{asset.name}</div>
                      </td>
                      <td className="py-3 px-3 sm:px-4 font-mono font-medium text-xs">{asset.qty} un</td>
                      <td className="py-3 px-3 sm:px-4 font-mono text-slate-600 text-xs">R$ {asset.avgPrice.toFixed(2)}</td>
                      <td className="py-3 px-3 sm:px-4 font-mono text-slate-900 font-semibold text-xs">R$ {asset.currentPrice.toFixed(2)}</td>
                      <td className="py-3 px-3 sm:px-4 text-right">
                        <span className={`inline-flex items-center gap-1 font-semibold text-[10px] sm:text-xs px-2 py-0.5 rounded ${
                          asset.isPositive 
                            ? 'text-emerald-700 bg-emerald-50 border border-emerald-200' 
                            : 'text-rose-700 bg-rose-50 border border-rose-200'
                        }`}>
                          {asset.profit} ({asset.profitValue})
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
