'use client';

import { useState } from 'react';
import { 
  TrendingUp, 
  Wallet, 
  DollarSign, 
  Plus, 
  Layers, 
  Trash2
} from 'lucide-react';
import AddOperationModal from '@/components/modals/AddOperationModal';
import { formatCurrency, formatPercent, calculateAveragePrice } from '@/utils/formatters';

export default function DashboardPage() {
  const [assets, setAssets] = useState([
    { id: 1, ticker: 'PETR4', name: 'Petrobras PN', category: 'Ações', qty: 250, avgPrice: 31.40, currentPrice: 38.60 },
    { id: 2, ticker: 'HGLG11', name: 'CSHG Logística', category: 'FIIs', qty: 45, avgPrice: 152.00, currentPrice: 164.50 },
    { id: 3, ticker: 'VALE3', name: 'Vale ON', category: 'Ações', qty: 120, avgPrice: 64.20, currentPrice: 61.80 },
    { id: 4, ticker: 'TESOURO SELIC 2029', name: 'Tesouro Nacional', category: 'Renda Fixa', qty: 3, avgPrice: 14200.00, currentPrice: 14850.00 },
  ]);

  const [showModal, setShowModal] = useState(false);

  const handleAddAsset = ({ ticker, name, category, qty, price }) => {
    const existingIndex = assets.findIndex(a => a.ticker.toUpperCase() === ticker.toUpperCase());

    if (existingIndex >= 0) {
      const existing = assets[existingIndex];
      const totalQty = existing.qty + qty;
      const newAvg = calculateAveragePrice(existing.qty, existing.avgPrice, qty, price);

      const updated = [...assets];
      updated[existingIndex] = {
        ...existing,
        qty: totalQty,
        avgPrice: newAvg,
        currentPrice: price
      };
      setAssets(updated);
    } else {
      setAssets([
        ...assets,
        {
          id: Date.now(),
          ticker,
          name: name || ticker,
          category,
          qty,
          avgPrice: price,
          currentPrice: price
        }
      ]);
    }
  };

  const handleDeleteAsset = (id) => {
    setAssets(assets.filter(a => a.id !== id));
  };

  const totalPatrimony = assets.reduce((acc, a) => acc + (a.qty * a.currentPrice), 0);
  const totalCost = assets.reduce((acc, a) => acc + (a.qty * a.avgPrice), 0);
  const totalProfit = totalPatrimony - totalCost;
  const profitPercent = totalCost > 0 ? (totalProfit / totalCost) * 100 : 0;

  return (
    <div className="space-y-8">
      {/* Page Title & Add Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-heading">
            Painel de Investimentos
          </h1>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Consolidação de carteira e cálculo automático de Preço Médio
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="btn-primary text-xs py-2.5 px-4 self-start sm:self-auto shadow-sm"
        >
          <Plus className="w-4 h-4" />
          Lançar Nova Operação
        </button>
      </div>

      {/* Stats Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold uppercase mb-1">
            <span>Patrimônio Atual</span>
            <Wallet className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-2xl md:text-3xl font-extrabold text-slate-900 font-heading">
            {formatCurrency(totalPatrimony)}
          </div>
          <div className="text-xs text-slate-500 mt-1 font-medium">
            Custo Total Aporte: {formatCurrency(totalCost)}
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold uppercase mb-1">
            <span>Rentabilidade Real</span>
            <TrendingUp className="w-4 h-4 text-emerald-600" />
          </div>
          <div className={`text-2xl md:text-3xl font-extrabold font-heading ${totalProfit >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
            {formatPercent(profitPercent)}
          </div>
          <div className="text-xs text-slate-500 mt-1 font-medium">
            Lucro/Prejuízo: <span className={totalProfit >= 0 ? 'text-emerald-600 font-bold' : 'text-rose-600 font-bold'}>
              {formatCurrency(totalProfit)}
            </span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold uppercase mb-1">
            <span>Proventos Estimados</span>
            <DollarSign className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-2xl md:text-3xl font-extrabold text-slate-900 font-heading">
            R$ 1.240,00
          </div>
          <div className="text-xs text-slate-500 mt-1 font-medium">
            Dividend Yield Médio: <strong className="text-blue-600">8,4% a.a.</strong>
          </div>
        </div>
      </div>

      {/* Portfolio Table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
          <h2 className="font-semibold text-slate-900 text-sm flex items-center gap-2 font-heading">
            <Layers className="w-4 h-4 text-blue-600" />
            Minhas Posições ({assets.length} Ativos)
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-100 text-slate-600 border-b border-slate-200 uppercase font-semibold">
              <tr>
                <th className="py-3 px-4">Ativo</th>
                <th className="py-3 px-4">Classe</th>
                <th className="py-3 px-4">Qtd</th>
                <th className="py-3 px-4">Preço Médio (PM)</th>
                <th className="py-3 px-4">Cotação Atual</th>
                <th className="py-3 px-4">Total Aplicado</th>
                <th className="py-3 px-4 text-right">Resultado</th>
                <th className="py-3 px-4 text-center">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-800">
              {assets.map((asset) => {
                const itemTotal = asset.qty * asset.currentPrice;
                const itemCost = asset.qty * asset.avgPrice;
                const itemProfit = itemTotal - itemCost;
                const itemPercent = itemCost > 0 ? (itemProfit / itemCost) * 100 : 0;
                const isPositive = itemProfit >= 0;

                return (
                  <tr key={asset.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-slate-900 text-sm">{asset.ticker}</div>
                      <div className="text-[11px] text-slate-500">{asset.name}</div>
                    </td>
                    <td className="py-3.5 px-4 font-medium">
                      <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200 text-[11px]">
                        {asset.category}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-mono font-medium">{asset.qty}</td>
                    <td className="py-3.5 px-4 font-mono text-slate-600">{formatCurrency(asset.avgPrice)}</td>
                    <td className="py-3.5 px-4 font-mono font-semibold text-slate-900">{formatCurrency(asset.currentPrice)}</td>
                    <td className="py-3.5 px-4 font-mono font-semibold">{formatCurrency(itemTotal)}</td>
                    <td className="py-3.5 px-4 text-right">
                      <span className={`inline-flex items-center gap-1 font-semibold px-2 py-0.5 rounded text-[11px] ${
                        isPositive 
                          ? 'text-emerald-700 bg-emerald-50 border border-emerald-200' 
                          : 'text-rose-700 bg-rose-50 border border-rose-200'
                      }`}>
                        {formatPercent(itemPercent)} ({formatCurrency(itemProfit)})
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <button
                        onClick={() => handleDeleteAsset(asset.id)}
                        className="text-slate-400 hover:text-rose-600 p-1 transition-colors"
                        title="Remover Ativo"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Modularizado */}
      <AddOperationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onAddAsset={handleAddAsset}
      />
    </div>
  );
}
