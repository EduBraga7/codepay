'use client';

import { useState } from 'react';
import { Wallet, Plus, TrendingUp, Layers } from 'lucide-react';

const initialPortfolios = [
  { id: 1, name: 'Carteira Principal', patrimony: 50000, profitability: 8.45, allocation: '100%', count: 8, updatedAt: 'Hoje' },
  { id: 2, name: 'Carteira Dividendos', patrimony: 18300, profitability: 5.10, allocation: '36,6%', count: 4, updatedAt: 'Hoje' },
  { id: 3, name: 'Carteira Crescimento', patrimony: 21700, profitability: 11.20, allocation: '43,4%', count: 3, updatedAt: 'Ontem' },
  { id: 4, name: 'Reserva Estratégica', patrimony: 10000, profitability: 2.40, allocation: '20%', count: 2, updatedAt: '2 dias' },
];

export default function CarteirasPage() {
  const [portfolios, setPortfolios] = useState(initialPortfolios);

  const formatCurrency = (val) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-heading">
            Minhas Carteiras
          </h1>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Organize seus investimentos por estratégia e objetivos de longo prazo
          </p>
        </div>
        <button className="btn-primary text-xs py-2.5 px-4 self-start sm:self-auto shadow-sm">
          <Plus className="w-4 h-4" />
          Criar Nova Carteira
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolios.map((p) => (
          <div key={p.id} className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:border-slate-300 transition-all space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">{p.name}</h3>
                <span className="text-xs text-slate-500 font-medium">{p.count} Ativos cadastrados</span>
              </div>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded">
                +{p.profitability}%
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-4">
              <div>
                <span className="text-[11px] text-slate-500 font-semibold uppercase block">Patrimônio</span>
                <span className="text-xl font-bold text-slate-900 font-heading">{formatCurrency(p.patrimony)}</span>
              </div>
              <div>
                <span className="text-[11px] text-slate-500 font-semibold uppercase block">Alocação</span>
                <span className="text-xl font-bold text-blue-600 font-heading">{p.allocation}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
