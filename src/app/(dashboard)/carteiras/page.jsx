import PageHeader from '@/components/ui/PageHeader';
import { portfolios } from '@/data/mockData';

export default function PortfoliosPage() {
  return (
    <div className="page-stack">
      <PageHeader
        title="Carteiras"
        subtitle="Acompanhe desempenho e distribuição"
        action={
          <button type="button" className="btn-primary small">
            + Nova carteira
          </button>
        }
      />

      <article className="panel">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Carteira</th>
                <th>Patrimônio</th>
                <th>Rentabilidade</th>
                <th>Alocação</th>
                <th>Atualizado</th>
              </tr>
            </thead>
            <tbody>
              {portfolios.map((portfolio) => (
                <tr key={portfolio.name}>
                  <td>{portfolio.name}</td>
                  <td>{portfolio.patrimony}</td>
                  <td>
                    <span className="tag tag-success">{portfolio.profitability}</span>
                  </td>
                  <td>{portfolio.allocation}</td>
                  <td>{portfolio.updatedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </div>
  );
}
