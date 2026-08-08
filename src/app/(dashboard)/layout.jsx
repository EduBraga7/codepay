'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  TrendingUp, 
  LayoutDashboard, 
  Wallet, 
  History, 
  Layers,
  Calculator,
  LogOut
} from 'lucide-react';

export default function DashboardLayout({ children }) {
  const pathname = usePathname();

  const navLinks = [
    { href: '/dashboard', label: 'Painel Geral', icon: LayoutDashboard },
    { href: '/ativos', label: 'Ativos', icon: Layers },
    { href: '/carteiras', label: 'Carteiras', icon: Wallet },
    { href: '/transacoes', label: 'Extrato & Operações', icon: History },
    { href: '/simulacoes', label: 'Simulação', icon: Calculator },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col font-sans">
      {/* Clean Top Navigation Bar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold shadow-md shadow-blue-500/20">
                <TrendingUp size={20} />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900 font-heading">
                Code<span className="text-blue-600">Pay</span>
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
                      isActive
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <Icon size={15} />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Eduardo Braga</span>
            </div>

            <Link
              href="/login"
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300 px-3 py-2 rounded-lg bg-white transition-all flex items-center gap-1.5"
            >
              <LogOut size={14} />
              <span>Sair</span>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Bar */}
        <div className="md:hidden flex items-center gap-1 px-4 py-2 border-t border-slate-100 overflow-x-auto bg-slate-50">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 hover:bg-slate-200'
                }`}
              >
                <Icon size={14} />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </div>
      </header>

      {/* Main Content View */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {children}
      </main>
    </div>
  );
}
