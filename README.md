# AI Campus FAQ — Enterprise Data-Driven Decision Making Chatbot

> An AI-powered decision intelligence co-pilot web application built for enterprise leadership, exploring 10 core strategies in Data-Driven Decision Making (DDDM).

![AI Campus Preview](https://img.shields.io/badge/AI%20Campus-Decision%20Core%20v3.2-6366f1?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Production%20Ready-10b981?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

---

## 🌟 Key Features

1. **10 Curated C-Suite FAQ Modules:**
   - **Strategy & Foundations:** DDDM leadership culture, Traditional BI vs. Decision Intelligence.
   - **Data Architecture & Telemetry:** Streaming Kafka telemetry (<180ms), reconciling ERP silos.
   - **Predictive & Prescriptive AI:** Moving from Bayesian forecasting to constraint optimization (MILP).
   - **Governance & Security:** Zero-Trust architecture, GDPR/HIPAA/SOC2, 4-tier HITL autonomy matrix.
   - **Financial Impact & Execution:** Benchmarking 1-year ROI (312%), 12-week enterprise deployment blueprint.

2. **AI-Centric Interface:**
   - **Dark Mode by Default & Light Mode Switcher:** Sleek glassmorphism with dynamic cyan/electric indigo glowing accents.
   - **Simulated Streaming Typewriter:** Progressive block streaming with an animated cursor.
   - **Smart Relevance Search:** Natural language keyword scoring engine (`searchFAQ()`) mapping freeform queries to topics.
   - **Voice Narration (Text-to-Speech):** Integrated Web Speech API to read answers aloud.
   - **Export & Reset:** 1-click Markdown transcript export (`.md`) and session reset.

---

## 📂 Project Structure

```text
CTD2/
├── index.html                  # Main application structure & semantic layout
├── style.css                   # Modern CSS design tokens, glassmorphism & responsive styles
├── faq-data.js                 # 10 enterprise FAQ Q&As, tags, key metrics & search algorithm
├── app.js                      # Chat engine, typewriter animation, speech synthesis & handlers
├── DETAILED_6_SESSION_PLAN.md  # Comprehensive 6-session Agile development plan (WBS & RACI)
├── .gitignore                  # Git ignore rules
└── README.md                   # Project documentation & setup instructions
```

---

## 🚀 Quick Start (Run Locally)

### Option 1: Direct in Browser (Zero Install)
Simply double-click `index.html` or open it with any web browser:
```text
file:///d:/CTD2/index.html
```

### Option 2: Local HTTP Server
Run with Python:
```bash
python -m http.server 3000
```
Then visit `http://localhost:3000` in your browser.

---

## 🌐 Deploy Free to GitHub Pages (Live Web URL)

To turn this repository into a live public web link for class submission:
1. Go to your repository on GitHub: `https://github.com/NguyenAn1-data/CTD2`
2. Click **Settings** > **Pages** (in the left sidebar).
3. Under **Branch**, select `main` (or `master`) and folder `/ (root)`.
4. Click **Save**.
5. After 1 minute, your website will be live at:
   ```text
   https://nguyenan1-data.github.io/CTD2/
   ```
