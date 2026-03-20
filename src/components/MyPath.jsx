const jobs = [
  {
    id: 1,
    title: "Associate Product Manager",
    company: "Stripe",
    location: "San Francisco, CA · Hybrid",
    type: "Full-time",
    salary: "$130k – $160k",
    fit: 88,
    fitLabel: "Strong fit",
    fitColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    tags: ["Fintech", "APM Program", "Technical PM"],
    note: "APM program — structured onboarding for career switchers. Strong technical fluency requirement.",
    deadline: "Rolling",
    url: "#",
  },
  {
    id: 2,
    title: "Product Manager – Growth",
    company: "Linear",
    location: "Remote",
    type: "Full-time",
    salary: "$120k – $150k",
    fit: 74,
    fitLabel: "Good fit",
    fitColor: "bg-amber-50 text-amber-700 border-amber-200",
    tags: ["SaaS", "B2B", "Analytics"],
    note: "Small team. High ownership. Expects strong data fluency — your top skill.",
    deadline: "Apr 15, 2026",
    url: "#",
  },
  {
    id: 3,
    title: "Product Manager – Platform",
    company: "Notion",
    location: "New York, NY · Hybrid",
    type: "Full-time",
    salary: "$140k – $170k",
    fit: 69,
    fitLabel: "Possible fit",
    fitColor: "bg-amber-50 text-amber-700 border-amber-200",
    tags: ["Productivity", "Platform", "API"],
    note: "Requires cross-functional leadership experience. Communication gap may be a factor — close it first.",
    deadline: "May 1, 2026",
    url: "#",
  },
  {
    id: 4,
    title: "Technical Product Manager",
    company: "Vercel",
    location: "Remote",
    type: "Full-time",
    salary: "$150k – $180k",
    fit: 61,
    fitLabel: "Stretch role",
    fitColor: "bg-red-50 text-red-700 border-red-200",
    tags: ["Developer Tools", "Infrastructure", "Technical"],
    note: "Strong eng background valued. Execution and communication scores need to improve before applying.",
    deadline: "Rolling",
    url: "#",
  },
];

function FitBar({ score }) {
  const color =
    score >= 80 ? "bg-emerald-500" :
    score >= 65 ? "bg-amber-400" :
                  "bg-red-400";
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${score}%` }} />
      </div>
      <span className="text-xs font-semibold text-gray-500 w-8 text-right">{score}%</span>
    </div>
  );
}

export default function MyPath() {
  return (
    <div className="space-y-4">
      <div className="mb-1">
        <h2 className="text-base font-semibold text-gray-900">Saved Opportunities</h2>
        <p className="text-sm text-gray-500 mt-0.5">
          {jobs.length} roles selected · sorted by fit score
        </p>
      </div>

      {jobs.map((job) => (
        <div
          key={job.id}
          className="border border-gray-200 rounded-xl p-5 hover:border-gray-300 transition-colors"
        >
          {/* Top row */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div>
              <div className="text-sm font-semibold text-gray-900">{job.title}</div>
              <div className="text-sm text-gray-500">{job.company} · {job.location}</div>
            </div>
            <span className={`shrink-0 text-xs font-semibold px-2 py-0.5 rounded border ${job.fitColor}`}>
              {job.fitLabel}
            </span>
          </div>

          {/* Fit bar */}
          <div className="mb-3">
            <div className="text-[11px] text-gray-400 mb-1 uppercase tracking-wide font-medium">Profile fit</div>
            <FitBar score={job.fit} />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {job.tags.map((tag) => (
              <span key={tag} className="text-[11px] font-medium bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
            <span className="text-[11px] font-medium bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
              {job.type}
            </span>
          </div>

          {/* Note */}
          <p className="text-xs text-gray-500 leading-relaxed mb-3 border-l-2 border-gray-200 pl-3">
            {job.note}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between text-xs text-gray-400">
            <div className="flex items-center gap-3">
              <span>{job.salary}</span>
              <span>·</span>
              <span>Deadline: {job.deadline}</span>
            </div>
            <a
              href={job.url}
              className="text-gray-700 font-medium underline underline-offset-2 hover:text-gray-900"
            >
              View role →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
