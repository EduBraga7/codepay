'use client';

import { useState } from 'react';
import { History, Plus, ArrowDownRight, ArrowUpRight } from 'lucide-react';

const initialTransactions = [
  { id: 1, date: '14/05/2026', operation: 'Compra', category: 'Ação', asset: 'PETR4', quantity: 30, unitPrice: 'R$ 33,20', total: 'R$ 996,00' },
  { id: 2, date: '12/05/2026', operation: 'Venda', category: 'Ação', asset: 'ITSA4', quantity: 80, unitPrice: 'R$ 10,90', total: 'R$ 872,00' },
  { id: 3, date: '10/05/2026', operation: 'Compra', category: 'FII', asset: 'HGLG11', quantity: 3, unitPrice: 'R$ 176,70', total: 'R$ 530,10' },
  { id: 4, date: '08/05/2026', operation: 'Compra', category: 'Renda Fixa', asset: 'TESOURO SELIC', quantity: 1, unitPrice: 'R$ 600,00', total: 'R$ 600,00' },
  { id: 5, date: '05/05/2026', operation: 'Compra', category: 'Ação', asset: 'WEGE3', quantity: 15, unitPrice: 'R$ 39,90', total: 'R$ 598,50' },
];

export default function TransacoesPage() {
  const [transactions] = useState(initialTransactions);

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-heading">
            Histórico de Operações
          </h1>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Extrato completo de compras, vendas e histórico de proventos
          </p>
        </div>
        <button className="btn-primary text-xs py-2.5 px-4 self-start sm:self-auto shadow-sm">
          <Plus className="w-4 h-4" />
          Nova Transação
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
          <h2 className="font-semibold text-slate-900 text-sm flex items-center gap-2 font-heading">
            <History className="w-4 h-4 text-blue-600" />
            Lançamentos Recentes ({transactions.length})
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-100 text-slate-600 border-b border-slate-200 uppercase font-semibold">
              <tr>
                <th className="py-3 px-4">Data</th>
                <th className="py-3 px-4">Operação</th>
                <th className="py-3 px-4">Categoria</th>
                <th className="py-3 px-4">Ativo</th>
                <th className="py-3 px-4">Quantidade</th>
                <th className="py-3 px-4">Preço Unitário</th>
                <th className="py-3 px-4 text-right">Total Operação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-800">
              {transactions.map((t) => (
                <tr key={t.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-mono text-slate-600">{t.date}</td>
                  <td className="py-3.5 px-4">
                    <span className={`inline-flex items-center gap-1 font-semibold text-[11px] px-2.5 py-0.5 rounded ${
                      t.operation === 'Compra' 
                        ? 'text-emerald-700 bg-emerald-50 border border-emerald-200' 
                        : 'text-rose-700 bg-rose-50 border border-rose-200'
                    }`}>
                      {t.operation === 'Compra' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                      {t.operation}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-600">{t.category}</td>
                  <td className="py-3.5 px-4 font-bold text-slate-900">{t.asset}</td>
                  <td className="py-3.5 px-4 font-mono font-medium">{t.quantity} un</td>
                  <td className="py-3.5 px-4 font-mono text-slate-600">{t.unitPrice}</td>
                  <td className="py-3.5 px-4 font-mono font-bold text-slate-900 text-right">{t.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
