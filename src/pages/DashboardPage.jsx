import {
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import SummaryCard from '../components/ui/SummaryCard';
import {
  allocationData,
  patrimonioHistory,
  recentMovements,
  summaryCards,
} from '../data/mockData';

const formatCurrency = (value) =>
  `R$ ${Number(value).toLocaleString('pt-BR', { minimumFractionDigits: 0 })}`;

function DashboardPage() {
  return (
    <div className="dashboard-grid">
      <section className="summary-grid">
        {summaryCards.map((card) => (
          <SummaryCard key={card.label} {...card} />
        ))}
      </section>

      <article className="panel panel-large">
        <div className="panel-header">
          <h3>Evolução do Patrimônio</h3>
        </div>
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={patrimonioHistory} margin={{ top: 10, right: 8, left: -20, bottom: 0 }}>
            <CartesianGrid stroke="#ecf0fa" vertical={false} strokeDasharray="4 4" />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#95a0bf', fontSize: 11 }}
              dy={8}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#95a0bf', fontSize: 11 }}
              tickFormatter={(value) => `${Math.round(value / 1000)}k`}
            />
            <Tooltip
              formatter={(value) => formatCurrency(value)}
              labelStyle={{ color: '#4f5d7d', fontWeight: 600 }}
              contentStyle={{
                borderRadius: '10px',
                border: '1px solid #e4e9f6',
                boxShadow: '0 8px 24px rgba(18, 30, 69, 0.12)',
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#5b67ff"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 4, fill: '#5b67ff', stroke: '#fff', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </article>

      <article className="panel">
        <div className="panel-header">
          <h3>Distribuição da Carteira</h3>
        </div>
        <div className="allocation-wrap">
          <div className="allocation-chart">
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={allocationData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={84}
                  innerRadius={58}
                  startAngle={90}
                  endAngle={-270}
                  stroke="none"
                >
                  {allocationData.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
              </PieChart>
            </ResponsiveContainer>

            <div className="donut-center">
              <strong>R$ 50.000,00</strong>
              <span>Total</span>
            </div>
          </div>

          <ul className="allocation-legend">
            {allocationData.map((entry) => (
              <li key={entry.name}>
                <span style={{ backgroundColor: entry.color }} />
                <p>{entry.name}</p>
                <strong>{entry.value}%</strong>
              </li>
            ))}
          </ul>
        </div>
      </article>

      <article className="panel panel-wide">
        <div className="panel-header">
          <h3>Últimas movimentações</h3>
          <button type="button" className="link-btn">
            Ver tudo
          </button>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Data</th>
                <th>Tipo</th>
                <th>Ativo</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {recentMovements.map((movement) => (
                <tr key={`${movement.date}-${movement.asset}`}>
                  <td>{movement.date}</td>
                  <td>
                    <span
                      className={`tag ${
                        movement.type === 'Compra' ? 'tag-success' : 'tag-danger'
                      }`}
                    >
                      {movement.type}
                    </span>
                  </td>
                  <td>{movement.asset}</td>
                  <td>{movement.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </div>
  );
}

export default DashboardPage;
