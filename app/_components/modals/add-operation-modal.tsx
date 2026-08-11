'use client';

import { useState, type FormEvent } from 'react';
import { X, PlusCircle } from 'lucide-react';
import type { AssetOperationInput } from '@/app/_types/investments';

type AddOperationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAddAsset: (operation: AssetOperationInput) => void;
};

export default function AddOperationModal({
  isOpen,
  onClose,
  onAddAsset,
}: AddOperationModalProps) {
  const [ticker, setTicker] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Ações');
  const [qty, setQty] = useState('');
  const [price, setPrice] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!ticker || !qty || !price) return;

    onAddAsset({
      ticker: ticker.toUpperCase(),
      name: name || ticker.toUpperCase(),
      category,
      qty: parseFloat(qty),
      price: parseFloat(price),
    });

    setTicker('');
    setName('');
    setQty('');
    setPrice('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 max-w-md w-full shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors p-1"
          title="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
            <PlusCircle className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 font-heading">
            Lançar Operação de Compra
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Código do Ativo (Ticker)
            </label>
            <input
              type="text"
              required
              placeholder="Ex: WEGE3, BBDC4, HGLG11"
              value={ticker}
              onChange={(e) => setTicker(e.target.value)}
              className="w-full p-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Nome / Descrição
            </label>
            <input
              type="text"
              placeholder="Ex: Weg S.A."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Classe de Ativo
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
            >
              <option value="Ações">Ações</option>
              <option value="FIIs">FIIs (Fundos Imobiliários)</option>
              <option value="Renda Fixa">Renda Fixa / Tesouro</option>
              <option value="Cripto">Criptomoedas</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Quantidade
              </label>
              <input
                type="number"
                step="any"
                required
                placeholder="100"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
                className="w-full p-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Preço Pago (R$)
              </label>
              <input
                type="number"
                step="any"
                required
                placeholder="35.50"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full p-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4 border-t border-slate-200">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 btn-secondary text-xs justify-center py-2.5"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 btn-primary text-xs justify-center py-2.5"
            >
              Salvar Operação
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
