import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import PageHeader from '../components/ui/PageHeader';

const simulationData = [
  { month: '0', invested: 10000, projected: 10000 },
  { month: '12', invested: 22000, projected: 23800 },
  { month: '24', invested: 34000, projected: 39600 },
  { month: '36', invested: 46000, projected: 61200 },
  { month: '48', invested: 58000, projected: 89200 },
  { month: '60', invested: 70000, projected: 124800 },
];

function SimulationsPage() {
  return (
    <div className="page-stack">
      <PageHeader
        title="Simulações"
        subtitle="Projete sua evolução patrimonial"
      />

      <article className="panel simulation-grid">
        <form className="simulation-form">
          <label htmlFor="initial">Valor inicial (R$)</label>
          <input id="initial" defaultValue="10000" />

          <label htmlFor="monthly">Aporte mensal (R$)</label>
          <input id="monthly" defaultValue="1000" />

          <label htmlFor="rate">Taxa de rendimento anual (%)</label>
          <input id="rate" defaultValue="12" />

          <label htmlFor="period">Prazo (meses)</label>
          <input id="period" defaultValue="60" />

          <button type="button" className="btn-primary">
            Simular
          </button>
        </form>

        <div>
          <div className="simulation-result">
            <div>
              <span>Resultado da Simulação</span>
              <strong>R$ 124.800,00</strong>
            </div>
            <div>
              <span>Total investido</span>
              <strong>R$ 70.000,00</strong>
            </div>
            <div>
              <span>Rendimento estimado</span>
              <strong className="success">R$ 54.800,00</strong>
            </div>
          </div>

          <div className="chart-box">
            <ResponsiveContainer width="100%" height={260}>
              <AreaChart data={simulationData}>
                <XAxis dataKey="month" stroke="#95a0bf" />
                <YAxis stroke="#95a0bf" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="invested"
                  stackId="1"
                  stroke="#3abf9a"
                  fill="#d5f7ee"
                />
                <Area
                  type="monotone"
                  dataKey="projected"
                  stackId="2"
                  stroke="#5b67ff"
                  fill="#dfe2ff"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </article>
    </div>
  );
}

export default SimulationsPage;
