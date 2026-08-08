'use client';

import { ArrowRight, PieChart, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-36 pb-20 overflow-hidden bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-glow text-xs font-semibold uppercase tracking-wider mb-8">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span>Gestão & Análise Fundamentalista de Carteiras</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.15] max-w-5xl mx-auto mb-6 font-heading">
          Sua carteira de investimentos no <span className="text-blue-600">piloto automático</span>.
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
          Chega de planilhas manuais e erros no Imposto de Renda. O <strong className="text-slate-900 font-semibold">CodePay</strong> calcula seu Preço Médio automaticamente, consolida todas as suas corretoras e mostra sua evolução patrimonial em tempo real.
        </p>

        {/* Primary & Secondary Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="/cadastro" className="btn-primary text-base py-3.5 px-8 w-full sm:w-auto justify-center">
            Começar Grátis Agora
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="/dashboard" className="btn-secondary text-base py-3.5 px-8 w-full sm:w-auto justify-center">
            <PieChart className="w-5 h-5 text-blue-600" />
            Acessar Dashboard Demo
          </a>
        </div>

        {/* Key Selling Features Bullet Points */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-600 mb-16">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-600" />
            <span>Sem necessidade de cartão</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-600" />
            <span>Cálculo de Preço Médio (PM) instantâneo</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-600" />
            <span>Suporte a Ações, FIIs e Renda Fixa</span>
          </div>
        </div>

        {/* Quick Highlights Grid - Clean Investidor10 Style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="glass-card p-5 text-left bg-white border border-slate-200">
            <span className="block text-2xl md:text-3xl font-bold text-blue-600 font-heading">100%</span>
            <span className="text-xs md:text-sm text-slate-500 font-medium">Automático em Operações</span>
          </div>
          <div className="glass-card p-5 text-left bg-white border border-slate-200">
            <span className="block text-2xl md:text-3xl font-bold text-emerald-600 font-heading">R$ 0,00</span>
            <span className="text-xs md:text-sm text-slate-500 font-medium">Para Começar Hoje</span>
          </div>
          <div className="glass-card p-5 text-left bg-white border border-slate-200">
            <span className="block text-2xl md:text-3xl font-bold text-slate-900 font-heading">4+</span>
            <span className="text-xs md:text-sm text-slate-500 font-medium">Classes de Ativos</span>
          </div>
          <div className="glass-card p-5 text-left bg-white border border-slate-200">
            <span className="block text-2xl md:text-3xl font-bold text-blue-600 font-heading">Zero</span>
            <span className="text-xs md:text-sm text-slate-500 font-medium">Erros em Planilhas</span>
          </div>
        </div>
      </div>
    </section>
  );
}
