# PM Buddy (formerly PM Readiness Engine)

## What this is
A web app that assesses PM readiness for professionals transitioning from other roles (3+ yrs exp).
Core flow: background intake → competency diagnostic → gap map → sequenced learning path → readiness score + apply signal.

## Target user
Software engineers, consultants, marketers with 3+ years experience who want to transition into PM roles.

## Stack
- Frontend: React + Tailwind (Vite)
- Backend: Node.js / FastAPI (TBD)
- AI: Anthropic API (claude-sonnet-4-6)
- Deployed: Vercel (connected to GitHub — auto-deploys on push)

## Design direction
Claude-inspired aesthetic. Purple/indigo gradient palette. Frosted glass cards. Clean, flat UI. Honest and direct tone. No gamification fluff.

---

## Progress Log

### 2026-03-21
- Scaffolded React + Tailwind (Vite) project
- Built Gap Map dashboard (hero screen)
  - 6 competency bars: Product Sense, Execution, Data & Metrics, Technical Fluency, Communication, User Empathy
  - User score vs benchmark tick line, colour-coded green/amber/red
- Added Login page (front layer)
- Renamed product from "PM Readiness Engine" → **PM Buddy**
- Built My Path tab — 4 curated job opportunity cards with fit score, tags, salary, deadline, notes
- Built Readiness tab — 6 readiness metrics in a 2-col grid
- Built Prep tab — Mock Interviews (3 simulations) + Interview Questions (24 questions, 6 categories, filterable, with hints)
- Rebrand: logo (SVG bar chart icon, purple-indigo gradient), quote banner, frosted glass aesthetic, violet active tab
- Removed readiness score badge from top — replaced with inspiring quote
- Pushed to GitHub: github.com/doshiworks/pm-readiness-engine
- Deployed to Vercel (in progress)

---

## Screens status

| Screen | Status |
|---|---|
| Login page | Done |
| Gap Map dashboard | Done |
| Readiness metrics | Done |
| Prep (questions + mock interviews) | Done |
| My Path (job opportunities) | Done |
| Onboarding / background intake | Not started |
| Competency diagnostic (adaptive) | Not started |
| Apply signal | Not started |

---

## Key files
- `src/App.jsx` — shell, routing, tabs, header
- `src/components/LoginPage.jsx` — login screen
- `src/components/Logo.jsx` — SVG logo
- `src/components/GapMap.jsx` — competency bars
- `src/components/Readiness.jsx` — metrics grid
- `src/components/Prep.jsx` — mock interviews + questions
- `src/components/MyPath.jsx` — job opportunity cards
