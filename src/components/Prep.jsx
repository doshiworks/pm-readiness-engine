import { useState } from "react";

// ─── Questions ───────────────────────────────────────────────────────────────

const CATEGORIES = ["All", "Behavioural", "Product Design", "Estimation", "Strategy", "Analytical", "Leadership"];

const questions = [
  { id: 1,  category: "Behavioural",    q: "Tell me about a time you influenced a decision without direct authority." },
  { id: 2,  category: "Behavioural",    q: "Describe a project that failed. What did you learn?" },
  { id: 3,  category: "Behavioural",    q: "How do you handle disagreement with an engineer or designer?" },
  { id: 4,  category: "Behavioural",    q: "Give an example of a time you had to prioritise ruthlessly under pressure." },
  { id: 5,  category: "Behavioural",    q: "Tell me about a time you used data to change someone's mind." },
  { id: 6,  category: "Product Design", q: "Design a product for elderly users to manage their medications." },
  { id: 7,  category: "Product Design", q: "How would you improve Spotify's onboarding experience?" },
  { id: 8,  category: "Product Design", q: "Design a feature to reduce churn for a SaaS product." },
  { id: 9,  category: "Product Design", q: "How would you redesign Google Maps for blind users?" },
  { id: 10, category: "Product Design", q: "Walk me through how you'd design an alarm clock app from scratch." },
  { id: 11, category: "Estimation",     q: "How many Uber rides happen in London on a typical weekday?" },
  { id: 12, category: "Estimation",     q: "Estimate the number of WhatsApp messages sent globally per day." },
  { id: 13, category: "Estimation",     q: "How would you estimate the market size for a pet insurance app?" },
  { id: 14, category: "Estimation",     q: "How many piano tuners are there in New York City?" },
  { id: 15, category: "Strategy",       q: "If you were the PM of Twitter, what would your top priority be for the next 6 months?" },
  { id: 16, category: "Strategy",       q: "How would you decide whether to build vs buy a feature?" },
  { id: 17, category: "Strategy",       q: "A competitor just launched a feature your team planned. What do you do?" },
  { id: 18, category: "Strategy",       q: "How do you define success for a product at different lifecycle stages?" },
  { id: 19, category: "Analytical",     q: "DAU dropped 15% overnight. Walk me through how you'd diagnose it." },
  { id: 20, category: "Analytical",     q: "What metrics would you track for a new user onboarding flow?" },
  { id: 21, category: "Analytical",     q: "How do you decide when an A/B test result is significant enough to ship?" },
  { id: 22, category: "Analytical",     q: "You have two features with the same projected impact. How do you prioritise?" },
  { id: 23, category: "Leadership",     q: "How do you align engineering, design, and business stakeholders on a roadmap?" },
  { id: 24, category: "Leadership",     q: "How do you onboard onto a new product and team quickly?" },
];

const CATEGORY_COLORS = {
  Behavioural:      "bg-blue-50 text-blue-700 border-blue-200",
  "Product Design": "bg-purple-50 text-purple-700 border-purple-200",
  Estimation:       "bg-amber-50 text-amber-700 border-amber-200",
  Strategy:         "bg-emerald-50 text-emerald-700 border-emerald-200",
  Analytical:       "bg-rose-50 text-rose-700 border-rose-200",
  Leadership:       "bg-orange-50 text-orange-700 border-orange-200",
};

const HINTS = {
  Behavioural:      "Use the STAR method: Situation, Task, Action, Result. Be specific and quantify impact where possible.",
  "Product Design": "Start with users — who are they, what are their goals? Define the problem before jumping to solutions. Prioritise and trade off.",
  Estimation:       "Think out loud. Break the problem into components, state your assumptions clearly, and sanity-check your answer at the end.",
  Strategy:         "Frame the business context first. Consider users, competitors, and constraints. Show you can zoom out before zooming in.",
  Analytical:       "Segment the data — by platform, cohort, region. Rule out instrumentation errors first. Hypothesise before digging.",
  Leadership:       "Show how you create alignment through clarity, not authority. Reference a specific process or communication pattern you use.",
};

function QuestionCard({ q, globalIndex }) {
  const [expanded, setExpanded] = useState(false);
  const [practiced, setPracticed] = useState(false);

  return (
    <div className={`border rounded-xl p-4 transition-colors ${practiced ? "border-emerald-200 bg-emerald-50/40" : "border-gray-200"}`}>
      <div className="flex items-start gap-3">
        <button
          onClick={() => setPracticed(!practiced)}
          className={`mt-0.5 shrink-0 w-4 h-4 rounded border flex items-center justify-center transition-colors cursor-pointer ${
            practiced ? "bg-emerald-500 border-emerald-500 text-white" : "border-gray-300"
          }`}
        >
          {practiced && (
            <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
              <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <span className={`text-[11px] font-semibold px-2 py-0.5 rounded border ${CATEGORY_COLORS[q.category]}`}>
              {q.category}
            </span>
            <span className="text-[11px] text-gray-300">Q{globalIndex + 1}</span>
          </div>
          <p className="text-sm text-gray-800 leading-snug">{q.q}</p>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="shrink-0 text-xs text-gray-400 hover:text-gray-600 cursor-pointer mt-0.5"
        >
          {expanded ? "Hide" : "Hint"}
        </button>
      </div>

      {expanded && (
        <div className="mt-3 ml-7 text-xs text-gray-500 border-l-2 border-gray-200 pl-3 leading-relaxed">
          {HINTS[q.category]}
        </div>
      )}
    </div>
  );
}

// ─── Mock Interviews ─────────────────────────────────────────────────────────

const mockInterviews = [
  {
    id: 1,
    title: "APM Screen — 30 min",
    type: "Behavioural + Culture Fit",
    questions: 4,
    duration: "30 min",
    difficulty: "Starter",
    diffColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    description: "Covers the most common opening questions. Best first mock to build confidence.",
  },
  {
    id: 2,
    title: "Product Design Round",
    type: "Product Design",
    questions: 2,
    duration: "45 min",
    difficulty: "Intermediate",
    diffColor: "bg-amber-50 text-amber-700 border-amber-200",
    description: "One design prompt with structured follow-ups. Tests user empathy and prioritisation.",
  },
  {
    id: 3,
    title: "Full Loop Simulation",
    type: "Mixed — Design · Analytical · Behavioural",
    questions: 8,
    duration: "90 min",
    difficulty: "Advanced",
    diffColor: "bg-red-50 text-red-700 border-red-200",
    description: "Simulates a full interview loop. Complete this when your readiness score reaches 75+.",
  },
];

function MockInterviewCard({ mock }) {
  return (
    <div className="border border-gray-200 rounded-xl p-5">
      <div className="flex items-start justify-between gap-3 mb-2">
        <div>
          <div className="text-sm font-semibold text-gray-900">{mock.title}</div>
          <div className="text-xs text-gray-400 mt-0.5">{mock.type}</div>
        </div>
        <span className={`shrink-0 text-xs font-semibold px-2 py-0.5 rounded border ${mock.diffColor}`}>
          {mock.difficulty}
        </span>
      </div>
      <p className="text-xs text-gray-500 leading-relaxed mb-4">{mock.description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 text-xs text-gray-400">
          <span>{mock.questions} questions</span>
          <span>·</span>
          <span>{mock.duration}</span>
        </div>
        <button className="text-xs font-medium text-gray-900 border border-gray-300 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-colors cursor-pointer">
          Start →
        </button>
      </div>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function Prep() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? questions
    : questions.filter((q) => q.category === activeCategory);

  return (
    <div className="space-y-10">

      {/* Mock Interviews */}
      <section>
        <div className="mb-4">
          <h2 className="text-base font-semibold text-gray-900">Mock Interviews</h2>
          <p className="text-sm text-gray-500 mt-0.5">Structured simulations. Do at least one before applying.</p>
        </div>
        <div className="space-y-3">
          {mockInterviews.map((m) => <MockInterviewCard key={m.id} mock={m} />)}
        </div>
      </section>

      {/* Interview Questions */}
      <section>
        <div className="mb-4">
          <h2 className="text-base font-semibold text-gray-900">Interview Questions</h2>
          <p className="text-sm text-gray-500 mt-0.5">
            24 common PM questions. Check off as you practice. Click Hint for guidance.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors cursor-pointer ${
                activeCategory === cat
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-500 border-gray-200 hover:border-gray-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-2.5">
          {filtered.map((q) => (
            <QuestionCard key={q.id} q={q} globalIndex={questions.indexOf(q)} />
          ))}
        </div>
      </section>

    </div>
  );
}
