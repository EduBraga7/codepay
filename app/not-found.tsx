import Link from 'next/link';
import { TrendingUp, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-6 text-center">
      <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold mb-4">
        <TrendingUp className="w-6 h-6" />
      </div>
      <h1 className="text-4xl font-extrabold text-slate-900 font-heading mb-2">404</h1>
      <h2 className="text-xl font-bold text-slate-800 mb-4">Página Não Encontrada</h2>
      <p className="text-sm text-slate-600 max-w-md mb-6">
        A página que você está procurando não existe ou foi movida.
      </p>
      <Link href="/" className="btn-primary text-sm px-5 py-2.5 inline-flex items-center gap-2">
        <ArrowLeft className="w-4 h-4" /> Voltar ao Início
      </Link>
    </div>
  );
}
