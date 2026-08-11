'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Layers, Plus, ExternalLink, Search } from 'lucide-react';
import PageHeader from '@/app/_components/ui/page-header';
import AddOperationModal from '@/app/_components/modals/add-operation-modal';
import { assets as initialAssets } from '@/app/_data/mock-data';
import type { AssetOperationInput } from '@/app/_types/investments';

export default function AssetsPage() {
  const [assetList, setAssetList] = useState(initialAssets);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleAddAsset = ({ ticker, category, qty, price }: AssetOperationInput) => {
    const newAsset = {
      ticker,
      type: category,
      quantity: qty,
      avgPrice: `R$ ${price.toFixed(2)}`,
      currentPrice: `R$ ${price.toFixed(2)}`,
      totalValue: `R$ ${(qty * price).toFixed(2)}`,
      profitability: '0,0%',
    };
    setAssetList([...assetList, newAsset]);
  };

  const filteredAssets = assetList.filter(
    (a) =>
      a.ticker.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <PageHeader
        title="Ativos & Carteira"
        subtitle="Visão consolidada de posições por ticker e classe de investimento"
        action={
          <button
            onClick={() => setShowModal(true)}
            className="btn-primary text-xs py-2.5 px-4 self-start sm:self-auto shadow-sm"
          >
            <Plus className="w-4 h-4" />
            Adicionar Ativo
          </button>
        }
      />

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar por ticker ou classe..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
          />
        </div>
        <div className="text-xs text-slate-500 font-medium">
          Exibindo <strong>{filteredAssets.length}</strong> de {assetList.length} ativos
        </div>
      </div>

      {/* Assets Table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
          <h2 className="font-semibold text-slate-900 text-sm flex items-center gap-2 font-heading">
            <Layers className="w-4 h-4 text-blue-600" />
            Lista de Ativos Cadastrados
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-100 text-slate-600 border-b border-slate-200 uppercase font-semibold">
              <tr>
                <th className="py-3 px-4">Ticker</th>
                <th className="py-3 px-4">Tipo</th>
                <th className="py-3 px-4">Quantidade</th>
                <th className="py-3 px-4">Preço Médio</th>
                <th className="py-3 px-4">Preço Atual</th>
                <th className="py-3 px-4">Valor Total</th>
                <th className="py-3 px-4">Rentabilidade</th>
                <th className="py-3 px-4 text-center">Detalhes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-800">
              {filteredAssets.map((asset) => (
                <tr key={asset.ticker} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900 text-sm">
                    {asset.ticker}
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200 text-[11px] font-medium">
                      {asset.type}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-mono font-medium">{asset.quantity}</td>
                  <td className="py-3.5 px-4 font-mono text-slate-600">{asset.avgPrice}</td>
                  <td className="py-3.5 px-4 font-mono font-semibold text-slate-900">{asset.currentPrice}</td>
                  <td className="py-3.5 px-4 font-mono font-bold text-slate-900">{asset.totalValue}</td>
                  <td className="py-3.5 px-4">
                    <span className="inline-flex items-center font-semibold px-2 py-0.5 rounded text-[11px] text-emerald-700 bg-emerald-50 border border-emerald-200">
                      {asset.profitability}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <Link
                      href={`/ativos/${asset.ticker.toLowerCase()}`}
                      className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700 font-semibold hover:underline"
                    >
                      <span>Ver</span>
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <AddOperationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onAddAsset={handleAddAsset}
      />
    </div>
  );
}
