'use client';

import { useState } from 'react';
import Link from 'next/link';
import { TrendingUp, ArrowRight, Menu, X, LayoutDashboard, Users } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="glass-nav fixed top-0 left-0 right-0 z-50 py-3 px-4 sm:px-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo - Mobile Optimized */}
        <Link href="/" className="flex items-center gap-2 group text-decoration-none min-w-0">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm group-hover:bg-blue-700 transition-colors shrink-0">
            <TrendingUp className="w-4 h-4" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-bold text-lg sm:text-xl tracking-tight text-slate-900 flex items-center gap-0.5 font-heading">
              Code<span className="text-blue-600">Pay</span>
            </span>
            <span className="text-[9px] sm:text-[10px] text-slate-500 font-semibold tracking-wider -mt-1 truncate">
              INVESTANALYTICS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          <a href="/#recursos" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
            Recursos
          </a>
          <a href="/#demonstracao" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
            Demonstração
          </a>
          <a href="/#simulador" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
            Simulador ROI
          </a>
          <Link href="/sobre" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-1">
            <Users className="w-4 h-4 text-blue-600" />
            Sobre Nós
          </Link>
          <Link href="/dashboard" className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1.5 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200">
            <LayoutDashboard className="w-4 h-4" />
            Dashboard Demo
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" className="text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors px-3 py-2">
            Entrar
          </Link>
          <Link href="/cadastro" className="btn-primary text-sm py-2 px-4">
            Começar Grátis
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-700 hover:text-slate-900 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Alternar Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-5 flex flex-col gap-3 shadow-xl animate-fadeIn">
          <a
            href="/#recursos"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-700 hover:text-blue-600 font-medium py-1.5 text-sm"
          >
            Recursos
          </a>
          <a
            href="/#demonstracao"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-700 hover:text-blue-600 font-medium py-1.5 text-sm"
          >
            Demonstração
          </a>
          <a
            href="/#simulador"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-700 hover:text-blue-600 font-medium py-1.5 text-sm"
          >
            Simulador ROI
          </a>
          <Link
            href="/sobre"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-700 hover:text-blue-600 font-medium py-1.5 text-sm flex items-center gap-2"
          >
            <Users className="w-4 h-4 text-blue-600" />
            Sobre Nós
          </Link>
          <Link
            href="/dashboard"
            onClick={() => setMobileMenuOpen(false)}
            className="text-blue-600 font-semibold py-2 text-sm flex items-center gap-2"
          >
            <LayoutDashboard className="w-4 h-4" />
            Acessar Dashboard Demo
          </Link>
          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
            <Link href="/login" className="btn-secondary justify-center text-xs py-2.5">
              Entrar na Conta
            </Link>
            <Link href="/cadastro" className="btn-primary justify-center text-xs py-2.5">
              Criar Conta Grátis
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
