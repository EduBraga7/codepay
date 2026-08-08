'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  GraduationCap, 
  Users, 
  Target, 
  Code2, 
  Database, 
  FileCheck, 
  Terminal, 
  UserCheck,
  Github,
  Linkedin,
  Mail
} from 'lucide-react';

const professor = {
  name: 'Prof. Cristiano S. Negrão',
  role: 'Orientador & Professor da Disciplina',
  institution: 'Centro Universitário Módulo',
  discipline: 'Análise e Projeto de Sistemas II',
  description: 'Orientação metodológica, validação da arquitetura de sistemas e acompanhamento do ciclo de vida de desenvolvimento do projeto acadêmico CodePay.',
  imagePlaceholder: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400'
};

const teamMembers = [
  {
    id: 1,
    name: 'Eduardo Braga do Prado',
    role: 'Dev Front-end & UX Designer',
    responsibilities: 'Construção da interface do usuário, Design System, componentes reativos e experiência de uso.',
    icon: Code2,
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 2,
    name: 'Marcos',
    role: 'Dev Back-end & Banco de Dados',
    responsibilities: 'Modelagem do esquema relacional (PostgreSQL + Prisma ORM), regras de negócio e rotas de API.',
    icon: Database,
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 3,
    name: 'Paulo Henrique Bispo Alves',
    role: 'Product Owner & Engenheiro de Requisitos',
    responsibilities: 'Mapeamento de requisitos funcionais e não funcionais, especificação do MVP e backlog do produto.',
    icon: Target,
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 4,
    name: 'Raquel Medeiros Cavalcanti',
    role: 'QA, Testes & Documentação',
    responsibilities: 'Garantia de qualidade de software, elaboração de casos de teste e documentação técnica do sistema.',
    icon: FileCheck,
    badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 5,
    name: 'Tiago de Souza Santana',
    role: 'Arquitetura de Software & DevOps',
    responsibilities: 'Definição da arquitetura Next.js App Router, pipeline de integração e segurança de implantação.',
    icon: Terminal,
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 6,
    name: 'Vitor',
    role: 'Dev Full-stack & Validação',
    responsibilities: 'Desenvolvimento de componentes full-stack, integração de regras financeiras e testes de homologação.',
    icon: UserCheck,
    badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300'
  }
];

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col">
      <Navbar />

      <section className="pt-36 pb-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-glow text-xs font-semibold uppercase tracking-wider mb-6">
            <Users className="w-4 h-4 text-blue-600" />
            <span>Equipe & Contexto Acadêmico</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight font-heading mb-6">
            Sobre o <span className="text-blue-600">CodePay</span>
          </h1>

          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Plataforma centralizada desenvolvida por alunos de **Análise e Desenvolvimento de Sistemas (ADS)** do **Centro Universitário Módulo**, criada para automatizar o cálculo de Preço Médio e simplificar a gestão patrimonial de investidores pessoa física.
          </p>
        </div>
      </section>

      <section className="py-12 max-w-7xl mx-auto px-6 w-full">
        <div className="bg-blue-600 text-white rounded-2xl p-8 md:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white shrink-0">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-blue-200">Projeto Integrador</span>
              <h2 className="text-2xl md:text-3xl font-extrabold font-heading">Análise e Projeto de Sistemas II</h2>
              <p className="text-sm text-blue-100 mt-1">Centro Universitário Módulo • Curso de Análise e Desenvolvimento de Sistemas (ADS)</p>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl text-center md:text-right border border-white/20">
            <span className="text-xs text-blue-200 font-medium block">Orientador Responsável</span>
            <span className="text-lg font-bold text-white font-heading">Prof. Cristiano S. Negrão</span>
          </div>
        </div>
      </section>

      <section className="py-12 max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 font-heading mb-3">
            Orientador do Projeto
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Supervisão acadêmica e direcionamento metodológico do sistema
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row items-center gap-6">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-blue-50 shrink-0 bg-slate-100 shadow-md">
            <img
              src={professor.imagePlaceholder}
              alt={professor.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center sm:text-left">
            <span className="text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full inline-block mb-2">
              {professor.role}
            </span>
            <h3 className="text-xl font-bold text-slate-900 font-heading">{professor.name}</h3>
            <p className="text-xs text-slate-500 font-medium mb-3">{professor.institution} • {professor.discipline}</p>
            <p className="text-xs text-slate-600 leading-relaxed">
              {professor.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-slate-200 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-glow text-xs font-semibold uppercase mb-3">
              <Users className="w-3.5 h-3.5 text-blue-600" />
              <span>Desenvolvedores & Responsáveis</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-heading mb-4">
              Equipe de Desenvolvimento (6 Membros)
            </h2>
            <p className="text-slate-600 text-base max-w-2xl mx-auto">
              Conheça os alunos responsáveis pela idealização, design, arquitetura e codificação do CodePay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => {
              const IconComponent = member.icon;
              return (
                <div 
                  key={member.id} 
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col items-center text-center group"
                >
                  <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md mb-5 bg-slate-200 group-hover:scale-105 transition-transform">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <span className={`text-[11px] font-semibold px-3 py-1 rounded-full border mb-3 flex items-center gap-1.5 ${member.badgeColor}`}>
                    <IconComponent className="w-3.5 h-3.5" />
                    {member.role}
                  </span>

                  <h3 className="text-lg font-bold text-slate-900 font-heading mb-2">
                    {member.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6 flex-1">
                    {member.responsibilities}
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-slate-200 w-full justify-center text-slate-400">
                    <a href="#" className="hover:text-blue-600 transition-colors p-1.5 bg-white rounded-full border border-slate-200" title="GitHub">
                      <Github className="w-4 h-4" />
                    </a>
                    <a href="#" className="hover:text-blue-600 transition-colors p-1.5 bg-white rounded-full border border-slate-200" title="LinkedIn">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="#" className="hover:text-blue-600 transition-colors p-1.5 bg-white rounded-full border border-slate-200" title="E-mail">
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
