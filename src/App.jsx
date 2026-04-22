import { Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import AuthLayout from './components/layout/AuthLayout';
import AssetsPage from './pages/AssetsPage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import PortfoliosPage from './pages/PortfoliosPage';
import RegisterPage from './pages/RegisterPage';
import SimulationsPage from './pages/SimulationsPage';
import TransactionsPage from './pages/TransactionsPage';

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<RegisterPage />} />
      </Route>

      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/carteiras" element={<PortfoliosPage />} />
        <Route path="/ativos" element={<AssetsPage />} />
        <Route path="/transacoes" element={<TransactionsPage />} />
        <Route path="/simulacoes" element={<SimulationsPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
