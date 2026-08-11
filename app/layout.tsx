import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'CodePay - Plataforma Inteligente de Investimentos',
  description: 'Organize seus ativos, acompanhe a performance e tome decisões financeiras inteligentes.',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
