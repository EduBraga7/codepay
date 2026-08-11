import PageHeader from '@/app/_components/ui/page-header';
import InvestmentSimulator from '@/app/_components/investment-simulator';

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
