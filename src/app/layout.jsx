import './globals.css';

export const metadata = {
  title: 'CodePay - Plataforma Inteligente de Investimentos',
  description: 'Organize seus ativos, acompanhe a performance e tome decisões financeiras inteligentes.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
