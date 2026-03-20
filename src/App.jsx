import { useState } from "react";
import GapMap from "./components/GapMap";
import MyPath from "./components/MyPath";
import Readiness from "./components/Readiness";
import Prep from "./components/Prep";
import LoginPage from "./components/LoginPage";
import Logo from "./components/Logo";
import "./index.css";

const TABS = ["Gap Map", "Readiness", "Prep", "My Path"];

const QUOTE = {
  text: "The best time to start preparing was yesterday. The second best time is now.",
  author: "PM community wisdom",
};

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("Gap Map");

  if (!loggedIn) {
    return <LoginPage onLogin={() => setLoggedIn(true)} />;
  }

  return (
    <div className="min-h-screen font-sans" style={{ background: "linear-gradient(160deg, #faf5ff 0%, #eff6ff 60%, #f8fafc 100%)" }}>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur border-b border-gray-200 px-6 py-3 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-2.5">
          <Logo size={30} />
          <span className="text-lg font-bold tracking-tight text-gray-900">PM Buddy</span>
        </div>
        <button
          onClick={() => setLoggedIn(false)}
          className="text-xs text-gray-400 hover:text-gray-600 cursor-pointer transition-colors"
        >
          Sign out
        </button>
      </header>

      {/* Main content */}
      <main className="max-w-2xl mx-auto px-4 py-8">

        {/* Quote */}
        <div className="mb-8 px-5 py-4 rounded-2xl border border-violet-100 bg-white/60 backdrop-blur-sm">
          <p className="text-sm text-gray-700 leading-relaxed italic">
            "{QUOTE.text}"
          </p>
          <p className="text-xs text-gray-400 mt-2 font-medium">— {QUOTE.author}</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-6">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 text-sm font-medium border-b-2 transition-colors cursor-pointer ${
                activeTab === tab
                  ? "border-violet-500 text-violet-700"
                  : "border-transparent text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 p-6 shadow-sm">
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
