'use client';

import PageHeader from '@/components/ui/PageHeader';
import InvestmentSimulator from '@/components/InvestmentSimulator';

export default function SimulationsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Simulações de Investimento"
        subtitle="Calcule a projeção de crescimento patrimonial com o poder dos juros compostos"
      />

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-2 sm:p-4">
        <InvestmentSimulator />
      </div>
    </div>
  );
}
