'use client';

import { 
  Calculator, 
  Layers, 
  History, 
  Sparkles, 
  Lock,
  Zap,
  BarChart3
} from 'lucide-react';

const features = [
  {
    icon: Calculator,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50 border-blue-200',
    title: 'Preço Médio Automático',
    description: 'Esqueça as fórmulas complexas de Excel. O CodePay atualiza o seu Preço Médio (PM) em cada operação de compra ou venda instantaneamente.'
  },
  {
    icon: Layers,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50 border-blue-200',
    title: 'Consolidação Multiativos',
    description: 'Centralize Ações (B3), Fundos Imobiliários (FIIs), Tesouro Direto, CDBs e Criptomoedas em uma única tela integrada.'
  },
  {
    icon: BarChart3,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50 border-blue-200',
    title: 'Evolução Patrimonial Real',
    description: 'Acompanhe a curva de crescimento do seu dinheiro ao longo dos meses e compare o desempenho da sua carteira contra o CDI e o IBOV.'
  },
  {
    icon: History,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50 border-blue-200',
    title: 'Histórico & Extrato Completo',
    description: 'Mantenha o registro cronológico de todas as compras, vendas e proventos recebidos com busca rápida e filtros inteligentes.'
  },
  {
    icon: Sparkles,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50 border-blue-200',
    title: 'Simulador de Juros Compostos',
    description: 'Projete seu patrimônio futuro ajustando aportes mensais, prazo e rentabilidade estimada para planejar sua independência financeira.'
  },
  {
    icon: Lock,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50 border-blue-200',
    title: 'Segurança & Autenticação Clerk',
    description: 'Dados protegidos com criptografia de ponta a ponta e controle de acesso seguro por e-mail ou login social.'
  }
];

export default function Features() {
  return (
    <section id="recursos" className="py-24 relative bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-glow text-xs font-semibold uppercase mb-4">
            <Zap className="w-3.5 h-3.5 text-blue-600" />
            <span>Recursos Principais</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-heading">
            Tudo o que você precisa para <span className="text-blue-600">investir melhor</span>.
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Desenvolvido para eliminar o trabalho braçal e dar a você clareza total sobre seus investimentos.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index}
                className="glass-card p-8 bg-white border border-slate-200 rounded-xl group hover:border-slate-300 hover:shadow-md transition-all duration-200"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-6 ${item.iconBg}`}>
                  <IconComponent className={`w-6 h-6 ${item.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors font-heading">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
