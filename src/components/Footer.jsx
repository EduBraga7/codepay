'use client';

import Link from 'next/link';
import { TrendingUp, GraduationCap, Heart, Users } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600 py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <TrendingUp className="w-4 h-4" />
              </div>
              <span className="font-bold text-lg text-slate-900 font-heading">
                Code<span className="text-blue-600">Pay</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Plataforma inteligente para gestão de carteiras de investimentos, cálculo automático de preço médio e consolidação de patrimônio.
            </p>
          </div>

          {/* Links Quick Nav */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wider font-heading">
              Navegação
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-slate-600">
              <li><Link href="/" className="hover:text-blue-600 transition-colors">Início</Link></li>
              <li><Link href="/sobre" className="hover:text-blue-600 transition-colors">Sobre Nós & Equipe</Link></li>
              <li><Link href="/dashboard" className="hover:text-blue-600 transition-colors">Dashboard Demo</Link></li>
              <li><a href="/#simulador" className="hover:text-blue-600 transition-colors">Simulador ROI</a></li>
            </ul>
          </div>

          {/* Stack & Platform */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wider font-heading">
              Tecnologias
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-slate-500">
              <li>Next.js 14 (App Router)</li>
              <li>Tailwind CSS & Design System</li>
              <li>Prisma ORM & PostgreSQL</li>
              <li>Clerk Authentication</li>
            </ul>
          </div>

          {/* Academic Context */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wider font-heading flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-blue-600" />
              Projeto Acadêmico
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed mb-3">
              Desenvolvido para a disciplina de <strong>Análise e Projeto de Sistemas II</strong> — Centro Universitário Módulo.
            </p>
            <p className="text-[11px] text-slate-500 font-mono font-semibold">
              Orientador: Prof. Cristiano S. Negrão
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} CodePay. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Desenvolvido com <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> pela equipe de ADS Módulo
          </p>
        </div>
      </div>
    </footer>
  );
}
