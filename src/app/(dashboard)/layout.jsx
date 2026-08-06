'use client';

import {
  ArrowRightLeft,
  BarChart3,
  Bell,
  Calculator,
  LayoutDashboard,
  LogOut,
  TrendingUp,
  Wallet,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const navItems = [
  { label: 'Dashboard', to: '/dashboard', icon: LayoutDashboard },
  { label: 'Carteiras', to: '/carteiras', icon: Wallet },
  { label: 'Ativos', to: '/ativos', icon: TrendingUp },
  { label: 'Transações', to: '/transacoes', icon: ArrowRightLeft },
  { label: 'Simulações', to: '/simulacoes', icon: Calculator },
];

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-block">
          <div className="brand-mark">
            <BarChart3 size={20} />
          </div>
          <div>
            <strong>CodePay</strong>
            <p>A plataforma inteligente para seus investimentos</p>
          </div>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.to;
            return (
              <Link
                key={item.to}
                href={item.to}
                className={`nav-item ${isActive ? 'nav-item-active' : ''}`}
              >
                <Icon size={16} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="logout-btn"
          onClick={() => router.push('/login')}
        >
          <LogOut size={16} />
          Sair
        </button>
      </aside>

      <section className="content-shell">
        <header className="topbar">
          <div>
            <h1>Painel do Investidor</h1>
            <p>Resumo geral dos seus investimentos</p>
          </div>

          <div className="topbar-right">
            <button className="icon-btn" type="button" aria-label="Notificações">
              <Bell size={18} />
            </button>
            <div className="user-chip">
              <span className="avatar">EA</span>
              <span>Usuário</span>
            </div>
          </div>
        </header>

        <main className="page-content">{children}</main>
      </section>
    </div>
  );
}
