'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  History,
  TrendingUp,
  Plus,
} from 'lucide-react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import PageHeader from '@/app/_components/ui/page-header';
import AddOperationModal from '@/app/_components/modals/add-operation-modal';
import { assets, transactions } from '@/app/_data/mock-data';

const priceHistoryData = [
  { date: '01/05', price: 31.2 },
  { date: '04/05', price: 32.0 },
  { date: '07/05', price: 31.8 },
  { date: '10/05', price: 33.1 },
  { date: '12/05', price: 32.9 },
  { date: '14/05', price: 34.2 },
];

type AssetDetailPageProps = {
  params: {
    ticker: string;
  };
};

export default function AssetDetailPage({ params }: AssetDetailPageProps) {
  const [showModal, setShowModal] = useState(false);
  const ticker = params?.ticker?.toUpperCase() || 'PETR4';
  
  const asset = assets.find((a) => a.ticker.toUpperCase() === ticker) || {
    ticker: ticker,
    type: 'Ação',
    quantity: 100,
    avgPrice: 'R$ 31,00',
    currentPrice: 'R$ 34,20',
    totalValue: 'R$ 3.420,00',
    profitability: '+10,3%',
  };

  const assetTransactions = transactions.filter(
    (t) => t.asset.toUpperCase() === ticker
  );

  return (
    <div className="space-y-8">
      {/* Back Button */}
      <div>
        <Link
          href="/ativos"
          className="text-slate-600 hover:text-slate-900 inline-flex items-center gap-1.5 text-xs font-semibold hover:underline"
        >
          <ArrowLeft size={16} />
          <span>Voltar para Ativos</span>
        </Link>
      </div>

      <PageHeader
        title={`Detalhes de ${asset.ticker}`}
        subtitle={`Visão geral e histórico de cotações e movimentações de ${asset.ticker}`}
        action={
          <button
            onClick={() => setShowModal(true)}
            className="btn-primary text-xs py-2.5 px-4 self-start sm:self-auto shadow-sm"
          >
            <Plus className="w-4 h-4" />
            Nova Operação
          </button>
        }
      />

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-1">
          <span className="text-xs text-slate-500 font-medium">Quantidade</span>
          <strong className="block text-xl font-bold text-slate-900">{asset.quantity} un.</strong>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-1">
          <span className="text-xs text-slate-500 font-medium">Preço Médio</span>
          <strong className="block text-xl font-bold text-slate-900">{asset.avgPrice}</strong>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-1">
          <span className="text-xs text-slate-500 font-medium">Preço Atual</span>
          <strong className="block text-xl font-bold text-slate-900">{asset.currentPrice}</strong>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-1">
          <span className="text-xs text-slate-500 font-medium">Rentabilidade Acumulada</span>
          <strong className="block text-xl font-bold text-emerald-600">{asset.profitability}</strong>
        </div>
      </div>

      {/* Price History Chart */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold text-slate-900 text-sm flex items-center gap-2 font-heading">
            <TrendingUp className="w-4 h-4 text-blue-600" />
            Histórico Recente de Cotações ({asset.ticker})
          </h3>
        </div>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={priceHistoryData}>
            <CartesianGrid stroke="#f1f5f9" vertical={false} strokeDasharray="4 4" />
            <XAxis dataKey="date" stroke="#94a3b8" fontSize={12} />
            <YAxis stroke="#94a3b8" fontSize={12} domain={['dataMin - 1', 'dataMax + 1']} />
            <Tooltip formatter={(value) => `R$ ${Number(value).toFixed(2)}`} />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{ r: 4, fill: '#2563eb' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Asset Transactions */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
          <h3 className="font-semibold text-slate-900 text-sm flex items-center gap-2 font-heading">
            <History className="w-4 h-4 text-blue-600" />
            Histórico de Transações do Ativo ({asset.ticker})
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-100 text-slate-600 border-b border-slate-200 uppercase font-semibold">
              <tr>
                <th className="py-3 px-4">Data</th>
                <th className="py-3 px-4">Operação</th>
                <th className="py-3 px-4">Qtd.</th>
                <th className="py-3 px-4">Preço Unitário</th>
                <th className="py-3 px-4 text-right">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-800">
              {assetTransactions.length > 0 ? (
                assetTransactions.map((t, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-4 font-mono text-slate-600">{t.date}</td>
                    <td className="py-3.5 px-4">
                      <span className={`inline-flex items-center font-semibold px-2 py-0.5 rounded text-[11px] ${
                        t.operation === 'Compra'
                          ? 'text-emerald-700 bg-emerald-50 border border-emerald-200'
                          : 'text-rose-700 bg-rose-50 border border-rose-200'
                      }`}>
                        {t.operation}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-mono font-medium">{t.quantity} un</td>
                    <td className="py-3.5 px-4 font-mono text-slate-600">{t.unitPrice}</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-slate-900 text-right">{t.total}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-center py-6 text-slate-500 font-medium">
                    Nenhuma movimentação registrada para {asset.ticker}.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <AddOperationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onAddAsset={() => {}}
      />
    </div>
  );
}
