import { Link, useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="auth-card">
      <h2>Bem-vindo de volta!</h2>
      <p>Faça login para acessar sua conta</p>

      <form className="auth-form" onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail</label>
        <input id="email" type="email" placeholder="seu@email.com" required />

        <label htmlFor="password">Senha</label>
        <input id="password" type="password" placeholder="********" required />

        <button type="submit" className="btn-primary">
          Entrar
        </button>
      </form>

      <button type="button" className="btn-demo" onClick={() => navigate('/dashboard')}>
        Acessar demonstração
      </button>

      <div className="auth-footer">
        <span>Não possui conta?</span>
        <Link to="/cadastro">Criar conta</Link>
      </div>
    </div>
  );
}

export default LoginPage;
