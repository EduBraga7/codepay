type SummaryCardProps = {
  label: string;
  value: string;
  change?: string;
  trend: 'up' | 'neutral' | 'down';
};

export default function SummaryCard({ label, value, change, trend }: SummaryCardProps) {
  const isUp = trend === 'up';
  return (
    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-1">
      <span className="text-xs font-semibold text-slate-500 uppercase">{label}</span>
      <strong className="block text-2xl font-extrabold text-slate-900">{value}</strong>
      {change ? (
        <span className={`inline-block text-xs font-bold ${isUp ? 'text-emerald-600' : 'text-slate-500'}`}>
          {change}
        </span>
      ) : null}
    </div>
  );
}
