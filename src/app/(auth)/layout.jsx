import { BarChart3 } from 'lucide-react';

export default function AuthLayout({ children }) {
  return (
    <div className="auth-shell">
      <aside className="auth-highlight">
        <div className="auth-brand">
          <BarChart3 size={22} />
          <span>CodePay</span>
        </div>

        <div className="auth-text">
          <h1>A plataforma para acompanhar seu patrimônio.</h1>
          <p>
            Organize ativos, acompanhe performance e tome decisões com visão clara da
            sua carteira.
          </p>
        </div>

        <div className="auth-graphic" aria-hidden="true" />
      </aside>

      <section className="auth-content">{children}</section>
    </div>
  );
}
