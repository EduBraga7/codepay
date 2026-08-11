import { ArrowRight, ShieldCheck, TrendingUp, Sparkles, LayoutDashboard } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="diferenciais" className="py-24 relative overflow-hidden bg-slate-50/50">
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <div className="glass-card p-10 md:p-16 border border-slate-200 rounded-3xl bg-white shadow-xl relative overflow-hidden">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full badge-glow text-xs font-semibold uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Comece Hoje Mesmo</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight font-heading">
            Pronto para colocar sua carteira no <span className="text-blue-600">piloto automático</span>?
          </h2>

          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Elimine planilhas confusas e tenha total clareza do seu Preço Médio e rentabilidade real em poucos cliques.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/cadastro" className="btn-primary py-4 px-9 text-base w-full sm:w-auto justify-center">
              Criar Minha Conta Grátis
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="/dashboard" className="btn-secondary py-4 px-8 text-base w-full sm:w-auto justify-center">
              <LayoutDashboard className="w-5 h-5 text-blue-600" />
              Testar Dashboard Demo
            </a>
          </div>

          {/* Security & Guarantee Notes */}
          <div className="mt-10 pt-8 border-t border-slate-200 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-600" /> Autenticação Segura via Clerk
            </span>
            <span className="flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-emerald-600" /> Atualização em Tempo Real
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
