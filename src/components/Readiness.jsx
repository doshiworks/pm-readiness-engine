const metrics = [
  {
    label: "Diagnostic Completion",
    value: 100,
    unit: "%",
    note: "All 6 competencies assessed",
    color: "bg-emerald-500",
  },
  {
    label: "Avg Score vs Benchmark",
    value: 65,
    unit: "/ 75",
    note: "10 pts below apply threshold",
    color: "bg-amber-400",
  },
  {
    label: "Urgent Gaps",
    value: 2,
    unit: " areas",
    note: "Communication · Execution",
    color: "bg-red-400",
  },
  {
    label: "Strong Areas",
    value: 3,
    unit: " areas",
    note: "Data & Metrics · Product Sense · User Empathy",
    color: "bg-emerald-500",
  },
  {
    label: "Questions Practiced",
    value: 0,
    unit: " / 24",
    note: "Start with Behavioural questions",
    color: "bg-gray-300",
  },
  {
    label: "Mock Interviews Done",
    value: 0,
    unit: " / 3",
    note: "Complete at least 1 before applying",
    color: "bg-gray-300",
  },
];

function MetricCard({ m }) {
  const barWidth =
    m.unit === "%"
      ? m.value
      : Math.min((m.value / parseInt(m.unit)) * 100, 100);

  return (
    <div className="border border-gray-200 rounded-xl p-4">
      <div className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-2">{m.label}</div>
      <div className="text-2xl font-bold text-gray-900 tracking-tight mb-1">
        {m.value}<span className="text-sm font-medium text-gray-400">{m.unit}</span>
      </div>
      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-2">
        <div className={`h-full rounded-full ${m.color}`} style={{ width: `${barWidth}%` }} />
      </div>
      <p className="text-xs text-gray-400">{m.note}</p>
    </div>
  );
}

export default function Readiness() {
  return (
    <div>
      <div className="mb-5">
        <h2 className="text-base font-semibold text-gray-900">Readiness Metrics</h2>
        <p className="text-sm text-gray-500 mt-0.5">Where you stand right now.</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {metrics.map((m) => <MetricCard key={m.label} m={m} />)}
      </div>
    </div>
  );
}
