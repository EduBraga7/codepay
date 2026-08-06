'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push('/dashboard');
  };

  return (
    <div className="auth-card auth-card-large">
      <h2>Criar conta</h2>
      <p>Preencha os dados para começar</p>

      <form className="auth-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Nome completo</label>
        <input id="name" type="text" placeholder="Seu nome completo" required />

        <label htmlFor="cpf">CPF</label>
        <input id="cpf" type="text" placeholder="000.000.000-00" required />

        <label htmlFor="register-email">E-mail</label>
        <input id="register-email" type="email" placeholder="seu@email.com" required />

        <label htmlFor="register-password">Senha</label>
        <input id="register-password" type="password" placeholder="Mínimo 6 caracteres" required />

        <label htmlFor="confirm-password">Confirmar senha</label>
        <input id="confirm-password" type="password" placeholder="Repita sua senha" required />

        <button type="submit" className="btn-primary">
          Cadastrar
        </button>
      </form>

      <div className="auth-footer">
        <span>Já possui conta?</span>
        <Link href="/login">Fazer login</Link>
      </div>
    </div>
  );
}
