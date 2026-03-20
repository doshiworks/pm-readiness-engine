const competencies = [
  { name: "Product Sense",      score: 78, benchmark: 70 },
  { name: "Execution",          score: 52, benchmark: 75 },
  { name: "Data & Metrics",     score: 85, benchmark: 70 },
  { name: "Technical Fluency",  score: 61, benchmark: 65 },
  { name: "Communication",      score: 44, benchmark: 70 },
  { name: "User Empathy",       score: 70, benchmark: 70 },
];

function getColor(score, benchmark) {
  const delta = score - benchmark;
  if (delta >= 0)        return { bar: "bg-emerald-500", label: "text-emerald-700", badge: "bg-emerald-50 text-emerald-700 border-emerald-200", tag: "Strong" };
  if (delta >= -15)      return { bar: "bg-amber-400",   label: "text-amber-700",   badge: "bg-amber-50 text-amber-700 border-amber-200",     tag: "Gap"    };
  return                        { bar: "bg-red-500",     label: "text-red-700",     badge: "bg-red-50 text-red-700 border-red-200",           tag: "Urgent" };
}

export default function GapMap() {
  return (
    <div className="space-y-5">
      {competencies.map((c) => {
        const color = getColor(c.score, c.benchmark);
        const benchmarkPct = c.benchmark;

        return (
          <div key={c.name}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm font-medium text-gray-700">{c.name}</span>
              <div className="flex items-center gap-2">
                <span className={`text-xs font-semibold px-2 py-0.5 rounded border ${color.badge}`}>
                  {color.tag}
                </span>
                <span className={`text-sm font-bold ${color.label}`}>{c.score}</span>
                <span className="text-xs text-gray-400">/ 100</span>
              </div>
            </div>

            {/* Bar track */}
            <div className="relative h-3 bg-gray-100 rounded-full overflow-visible">
              {/* Score bar */}
              <div
                className={`h-full rounded-full ${color.bar} transition-all duration-500`}
                style={{ width: `${c.score}%` }}
              />
              {/* Benchmark tick */}
              <div
                className="absolute top-1/2 -translate-y-1/2 w-0.5 h-5 bg-gray-400 rounded-full"
                style={{ left: `${benchmarkPct}%` }}
              />
            </div>

            <div className="flex justify-between mt-1 text-[11px] text-gray-400">
              <span>0</span>
              <span className="ml-auto" style={{ marginRight: `${100 - benchmarkPct}%` }}>
                Benchmark {c.benchmark}
              </span>
            </div>
          </div>
        );
      })}

      {/* Legend */}
      <div className="flex items-center gap-5 pt-2 border-t border-gray-100 text-xs text-gray-500">
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500 inline-block" /> Strong (at or above benchmark)
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-sm bg-amber-400 inline-block" /> Gap (&lt;15 pts below)
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-sm bg-red-500 inline-block" /> Urgent (&gt;15 pts below)
        </span>
      </div>
    </div>
  );
}
