import PageHeader from '@/components/ui/PageHeader';
import { assets } from '@/data/mockData';

export default function AssetsPage() {
  return (
    <div className="page-stack">
      <PageHeader
        title="Ativos"
        subtitle="Visão consolidada por ticker"
        action={
          <button type="button" className="btn-primary small">
            + Adicionar ativo
          </button>
        }
      />

      <article className="panel">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Ticker</th>
                <th>Tipo</th>
                <th>Quantidade</th>
                <th>Preço Médio</th>
                <th>Preço Atual</th>
                <th>Valor Atual</th>
                <th>Rentabilidade</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset) => (
                <tr key={asset.ticker}>
                  <td>{asset.ticker}</td>
                  <td>{asset.type}</td>
                  <td>{asset.quantity}</td>
                  <td>{asset.avgPrice}</td>
                  <td>{asset.currentPrice}</td>
                  <td>{asset.totalValue}</td>
                  <td>
                    <span className="tag tag-success">{asset.profitability}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </div>
  );
}
