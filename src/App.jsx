import { useState } from "react";
import GapMap from "./components/GapMap";
import MyPath from "./components/MyPath";
import Readiness from "./components/Readiness";
import Prep from "./components/Prep";
import LoginPage from "./components/LoginPage";
import "./index.css";

const TABS = ["Gap Map", "Readiness", "Prep", "My Path"];
const READINESS_SCORE = 64;

function ReadinessScoreBadge({ score }) {
  const color =
    score >= 75 ? "text-emerald-600 border-emerald-300 bg-emerald-50" :
    score >= 50 ? "text-amber-600 border-amber-300 bg-amber-50" :
                  "text-red-600 border-red-300 bg-red-50";

  const label =
    score >= 75 ? "Ready to Apply" :
    score >= 50 ? "Nearly There" :
                  "Significant Gaps";

  return (
    <div className={`inline-flex items-center gap-3 px-5 py-3 rounded-2xl border ${color}`}>
      <span className="text-4xl font-bold tracking-tight">{score}</span>
      <div className="text-left">
        <div className="text-xs font-semibold uppercase tracking-wider opacity-70">Readiness Score</div>
        <div className="text-sm font-semibold">{label}</div>
      </div>
    </div>
  );
}

function PlaceholderTab({ name }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-gray-400">
      <p className="text-base font-medium text-gray-500">{name} view coming soon</p>
      <p className="text-sm mt-1">This screen is part of the full flow.</p>
    </div>
  );
}

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("Gap Map");

  if (!loggedIn) {
    return <LoginPage onLogin={() => setLoggedIn(true)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Top nav */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <span className="text-sm font-semibold text-gray-900 tracking-tight">PM Buddy</span>
        <button
          onClick={() => setLoggedIn(false)}
          className="text-xs text-gray-400 hover:text-gray-600 cursor-pointer"
        >
          Sign out
        </button>
      </header>

      {/* Main content */}
      <main className="max-w-2xl mx-auto px-4 py-8">

        {/* Readiness Score Badge */}
        <div className="flex flex-col items-center mb-8">
          <ReadinessScoreBadge score={READINESS_SCORE} />
          <p className="text-xs text-gray-400 mt-3 text-center">
            Based on your diagnostic. Benchmark: 75+ to apply confidently.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-6">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 text-sm font-medium border-b-2 transition-colors cursor-pointer ${
                activeTab === tab
                  ? "border-gray-900 text-gray-900"
                  : "border-transparent text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          {activeTab === "Gap Map" && (
            <>
              <div className="mb-5">
                <h2 className="text-base font-semibold text-gray-900">Competency Gap Map</h2>
                <p className="text-sm text-gray-500 mt-0.5">
                  Your scores vs the PM benchmark. Focus on urgent gaps first.
                </p>
              </div>
              <GapMap />
            </>
          )}
          {activeTab === "Readiness" && <Readiness />}
          {activeTab === "Prep"      && <Prep />}
          {activeTab === "My Path"   && <MyPath />}
        </div>
      </main>
    </div>
  );
}
