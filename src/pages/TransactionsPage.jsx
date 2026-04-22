import PageHeader from '../components/ui/PageHeader';
import { transactions } from '../data/mockData';

function TransactionsPage() {
  return (
    <div className="page-stack">
      <PageHeader
        title="Transações"
        subtitle="Histórico de compras e vendas"
        action={
          <button type="button" className="btn-primary small">
            + Nova transação
          </button>
        }
      />

      <article className="panel">
        <div className="filters-row">
          <select defaultValue="Todos">
            <option>Todos</option>
            <option>Compra</option>
            <option>Venda</option>
          </select>
          <select defaultValue="Todas as classes">
            <option>Todas as classes</option>
            <option>Ação</option>
            <option>FII</option>
            <option>Renda Fixa</option>
          </select>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Data</th>
                <th>Operação</th>
                <th>Classe</th>
                <th>Ativo</th>
                <th>Qtd.</th>
                <th>Preço Unit.</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={`${transaction.date}-${transaction.asset}-${transaction.operation}`}>
                  <td>{transaction.date}</td>
                  <td>
                    <span
                      className={`tag ${
                        transaction.operation === 'Compra' ? 'tag-success' : 'tag-danger'
                      }`}
                    >
                      {transaction.operation}
                    </span>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.asset}</td>
                  <td>{transaction.quantity}</td>
                  <td>{transaction.unitPrice}</td>
                  <td>{transaction.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </div>
  );
}

export default TransactionsPage;
