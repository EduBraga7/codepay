function SummaryCard({ label, value, change, trend }) {
  return (
    <article className="summary-card">
      <span>{label}</span>
      <strong>{value}</strong>
      <small className={`trend trend-${trend}`}>{change}</small>
    </article>
  );
}

export default SummaryCard;
