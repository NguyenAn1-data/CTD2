/**
 * AI Campus FAQ Dataset: Enterprise Data-Driven Decision Making (DDDM)
 * Curated executive-level intelligence for AI-driven business transformations.
 */

const FAQ_DATA = [
  {
    id: "faq-1",
    category: "Strategy & Foundations",
    categoryIcon: "compass",
    badge: "Core Strategy",
    question: "What is Data-Driven Decision Making (DDDM) and how does AI Campus empower enterprise leaders?",
    shortSummary: "Transition from intuitive guesswork to algorithmic precision across all corporate hierarchies.",
    keyMetrics: [
      { label: "Decision Velocity", value: "4.2x Faster" },
      { label: "Forecast Accuracy", value: "+38%" },
      { label: "Adoption Rate", value: "92% C-Suite" }
    ],
    answer: `### What is Data-Driven Decision Making (DDDM)?
**Data-Driven Decision Making (DDDM)** is the organizational discipline of basing executive strategies, resource allocations, and operational choices on verified empirical metrics, statistical modeling, and machine intelligence—rather than intuition, seniority, or anecdotal observation.

### How AI Campus Empowers Enterprise Leadership:
* **Unified Semantic Layer:** Consolidates disparate data warehouses (Snowflake, Databricks, BigQuery) into a single executive dashboard with standardized business metrics.
* **Contextual Co-Pilot:** Acts as an on-demand strategy partner that cross-examines operational indicators against macroeconomic trends and historical benchmarks.
* **Continuous Feedback Loops:** Monitors executed business decisions in real-time, benchmarking projected outcomes against actual KPI progress to continuously fine-tune enterprise models.

> **Key Takeaway:** AI Campus does not merely present retrospective BI charts; it establishes an active intelligence substrate that alerts decision-makers to systemic risks and high-conviction growth vectors before they appear in quarterly reviews.`,
    tags: ["strategy", "dddm", "fundamentals", "leadership", "c-suite", "overview", "basics", "transformation"],
    followUps: ["faq-2", "faq-9"]
  },
  {
    id: "faq-2",
    category: "Strategy & Foundations",
    categoryIcon: "cpu",
    badge: "Architecture Shift",
    question: "How does AI-driven Decision Intelligence differ from traditional Business Intelligence (BI)?",
    shortSummary: "Moving from retrospective 'What happened?' dashboards to proactive 'What should we do?' guidance.",
    keyMetrics: [
      { label: "Latency", value: "Real-time vs Monthly" },
      { label: "Intelligence Level", value: "Prescriptive vs Descriptive" },
      { label: "Action Automation", value: "Closed-loop" }
    ],
    answer: `### The Paradigm Shift: BI vs. Decision Intelligence

Traditional BI tools (like legacy Tableau or PowerBI reports) provide **descriptive summaries** of past events. AI Campus provides **Decision Intelligence (DI)** that combines machine learning, decision engineering, and automated causality mapping.

| Dimension | Traditional Business Intelligence (BI) | AI Campus Decision Intelligence (DI) |
| :--- | :--- | :--- |
| **Primary Question** | *"What happened in Q2?"* (Historical) | *"What will happen, and what is the optimal response?"* (Proactive) |
| **Analysis Type** | Descriptive & Diagnostic | Predictive, Prescriptive & Counterfactual |
| **Data Cadence** | Batch / T+1 Daily ETL syncs | Streaming event-driven telemetry (<200ms) |
| **Human Effort** | Manual slicing, dicing & hypothesis testing | Automated anomaly discovery & scenario simulation |
| **Action Linkage** | Disconnected (Static PDF / dashboard) | Direct API webhooks to ERP, CRM, and SCM systems |

### Enterprise Advantage:
Instead of requiring your business analytics team to draft 40-page slide decks, AI Campus continuously stress-tests thousands of counterfactual scenarios to rank actions by anticipated enterprise risk and return.`,
    tags: ["bi", "decision intelligence", "traditional bi", "predictive", "prescriptive", "comparison", "analytics"],
    followUps: ["faq-3", "faq-5"]
  },
  {
    id: "faq-3",
    category: "Data Architecture & Telemetry",
    categoryIcon: "zap",
    badge: "Real-Time Telemetry",
    question: "Can our enterprise ingest streaming telemetry for instant automated executive decision support?",
    shortSummary: "Sub-second event streaming using Kafka/Pulsar connectors with auto-rebalancing triggers.",
    keyMetrics: [
      { label: "Streaming Latency", value: "<180ms" },
      { label: "Event Throughput", value: "2.5M events/sec" },
      { label: "Outlier Detection", value: "Instantaneous" }
    ],
    answer: `### Streaming Data Architecture
Yes. AI Campus features a cloud-agnostic **Real-Time Telemetry Gateway** compatible with Apache Kafka, Apache Pulsar, AWS Kinesis, and Azure Event Hubs.

### Core Processing Workflow:
1. **Event Capture & Deserialization:** Ingests live operational events across logistics, retail point-of-sale, server infrastructure, and financial transactions.
2. **In-Flight Vectorization & Windowing:** Applies rolling aggregate windows (e.g., sliding 5-minute variance) directly in memory without database write bottlenecks.
3. **Automated Algorithmic Triggers:**
   * *Pricing Adjustments:* Dynamic markdown or yield optimization during unexpected inventory surges.
   * *Supply Chain Rescheduling:* Reroutes fulfillment centers automatically if weather or port congestion delays exceed threshold levels.
   * *Executive Alerting:* High-priority push notifications dispatched to leadership clients only when statistical anomalies surpass 3 sigma.

> **Architecture Note:** Cold storage continues asynchronously to your data lakehouse for long-term historical retraining, ensuring operational systems suffer zero degradation during peak traffic.`,
    tags: ["streaming", "telemetry", "real-time", "kafka", "event-driven", "latency", "architecture", "data pipeline"],
    followUps: ["faq-4", "faq-5"]
  },
  {
    id: "faq-4",
    category: "Data Architecture & Telemetry",
    categoryIcon: "database",
    badge: "Data Hygiene",
    question: "How does the AI pipeline reconcile unstructured, messy, or cross-silo enterprise datasets?",
    shortSummary: "Automated entity resolution, synthetic imputation, and LLM-powered schema synthesis.",
    keyMetrics: [
      { label: "Data Prep Reduction", value: "70% Less Manual ETL" },
      { label: "Entity Match Precision", value: "99.4%" },
      { label: "Formats Supported", value: "SQL, NoSQL, PDF, ERP, APIs" }
    ],
    answer: `### The Data Heterogeneity Challenge
Enterprises rarely possess clean, unified repositories. Crucial intelligence is frequently trapped across legacy mainframes, SAP ERP instances, Salesforce custom objects, and unstructured customer emails or contractual PDFs.

### The AI Campus Hygiene & Ingestion Engine:
* **LLM-Augmented Schema Harmonization:** Automatically identifies equivalent entities across systems (e.g., matching \`cust_id\` in Oracle with \`account_number\` in HubSpot) using semantic ontology mapping.
* **Deep Entity Resolution:** Employs fuzzy graph clustering to merge duplicate customer, supplier, or asset profiles across global subsidiaries.
* **Zero-Bias Missing Value Imputation:** Rather than dropping rows with missing values, transformer-based imputers reconstruct missing metrics based on correlated multivariate distributions.
* **Unstructured Ingestion (RAG & Multimodal):** Scans supplier invoices, PDF agreements, and engineering logs, extracting key transactional variables directly into structured feature stores.

> **Result:** Your business teams spend time making decisions rather than burning hundreds of billable hours standardizing spreadsheet columns.`,
    tags: ["data quality", "hygiene", "unstructured", "silos", "etl", "data prep", "entity resolution", "cleansing"],
    followUps: ["faq-6", "faq-7"]
  },
  {
    id: "faq-5",
    category: "Predictive & Prescriptive AI",
    categoryIcon: "trending-up",
    badge: "Actionable AI",
    question: "How do predictive forecast models transition into actionable prescriptive business recommendations?",
    shortSummary: "Combining probabilistic forecasting with reinforcement learning and constraint optimization.",
    keyMetrics: [
      { label: "Optimization Algorithms", value: "MILP & Monte Carlo" },
      { label: "Scenario Simulation", value: "10,000 runs/min" },
      { label: "Revenue Uplift", value: "+14.6% Avg" }
    ],
    answer: `### Bridging the Gap: Prediction → Prescription

Predictive models tell you **what will happen** (e.g., *"Demand for product line X will spike 45% next month"*). Prescriptive systems tell you **the exact sequence of steps to optimize business profit subject to real-world operational constraints**.

### The 3-Layer Prescriptive Engine:
1. **Probabilistic Forecasting Layer:** Generates Bayesian probability distributions over multiple variables rather than single-point estimates.
2. **Constraint Satisfaction Engine (MILP & Heuristics):** Ingests real-world business constraints:
   * Available working capital and liquidity caps
   * Warehouse cubic capacity and labor union shift limitations
   * Supplier lead times and contractual penalty clauses
3. **Multi-Objective Optimization:** Evaluates tradeoffs using Monte Carlo simulations to offer **Top-3 Strategic Pathways**:
   * *Option Alpha (Profit Maximization):* Aggressive production ramp-up with higher expedite shipping fees.
   * *Option Beta (Risk Mitigation):* Moderate inventory cushion with dual-sourced backup suppliers.
   * *Option Gamma (Cash Preservation):* Just-in-time replenishment prioritizing liquidity.

> Each suggested recommendation arrives with transparent confidence intervals, financial payback modeling, and a single-click deployment webhook.`,
    tags: ["predictive", "prescriptive", "forecasting", "optimization", "simulation", "monte carlo", "recommendations"],
    followUps: ["faq-7", "faq-8"]
  },
  {
    id: "faq-6",
    category: "Governance & Security",
    categoryIcon: "shield-check",
    badge: "Enterprise Security",
    question: "What enterprise data security, privacy (GDPR/HIPAA/SOC2), and role-based access controls (RBAC) are applied?",
    shortSummary: "Zero-trust architecture with end-to-end envelope encryption, differential privacy, and granular RBAC.",
    keyMetrics: [
      { label: "Certifications", value: "SOC2 Type II, ISO 27001" },
      { label: "Compliance", value: "GDPR, HIPAA, CCPA" },
      { label: "Encryption", value: "AES-256 & TLS 1.3" }
    ],
    answer: `### Defense-in-Depth Enterprise Security
AI Campus is engineered under a strict **Zero-Trust & Data Sovereignty** design pattern. Your confidential proprietary trade data is never used to train global public models.

### Key Governance Pillars:
* **Granular Role-Based Access Control (RBAC & ABAC):**
  * Financial controllers see transactional cost data but not personal employee IDs.
  * Regional VPs access only their geographic revenue metrics with automated geo-fencing.
* **On-Premise & Private Cloud Deployment (VPC Peering):** Fully deployable inside your own AWS, Azure, GCP VPC, or bare-metal Kubernetes cluster with air-gapped support.
* **Cryptographic Data Protection:**
  * Field-level envelope encryption with customer-managed keys (AWS KMS / Azure Key Vault).
  * Automated PII redaction and synthetic masking before any textual prompt hits reasoning models.
* **Immutable Audit Logging:** Every query, simulated scenario, and system-level decision is cryptographically logged to a tamper-proof blockchain-style ledger for internal compliance and regulatory review.`,
    tags: ["security", "governance", "compliance", "gdpr", "hipaa", "soc2", "rbac", "privacy", "zero trust"],
    followUps: ["faq-7", "faq-8"]
  },
  {
    id: "faq-7",
    category: "Predictive & Prescriptive AI",
    categoryIcon: "eye",
    badge: "Explainable AI (XAI)",
    question: "How does AI Campus provide transparent audit trails and explain the 'Why' behind algorithmic decisions?",
    shortSummary: "Full XAI transparency utilizing SHAP values, counterfactual explanations, and causal attribution.",
    keyMetrics: [
      { label: "Explainability Standard", value: "SHAP & LIME Native" },
      { label: "Audit Traceability", value: "100% Feature Origin" },
      { label: "Executive Trust Score", value: "96.4%" }
    ],
    answer: `### Demystifying the 'Black Box'
Executive leaders cannot and should not trust unexplainable AI outputs. When millions of dollars are on the line, the **rationale** is just as crucial as the recommendation itself.

### Explainable AI (XAI) Framework in AI Campus:
* **SHAP (Shapley Additive exPlanations) Attribution:** Every forecast clearly decomposes into positive and negative drivers (e.g., *"+12% due to historical holiday seasonality, -4% due to competitor pricing shift, +8% due to localized marketing campaign"*).
* **Counterfactual Scenario Explorer:** Allows executives to query *"What if?"* conditions:
  > *"What would need to change in fuel price index for this logistics route recommendation to become unprofitable?"*
* **Plain-Language Executive Rationales:** Translates high-dimensional vector calculations into natural executive summaries highlighting the primary 3 leverage factors.
* **Model Lineage & Provenance:** Visualizes the exact data snapshot, pipeline transformation version, and hyperparameter configuration that generated each specific conclusion.`,
    tags: ["xai", "explainable", "transparency", "black box", "shap", "audit", "trust", "causality"],
    followUps: ["faq-8", "faq-9"]
  },
  {
    id: "faq-8",
    category: "Governance & Security",
    categoryIcon: "users",
    badge: "Human Control",
    question: "When should decisions be fully autonomous versus requiring human executive approval (HITL)?",
    shortSummary: "Risk-tiered decision autonomy matrix ranging from automated micro-actions to C-suite sign-offs.",
    keyMetrics: [
      { label: "Autonomy Tiers", value: "4 Distinct Levels" },
      { label: "Manual Interventions", value: "Down 82%" },
      { label: "Escalation Speed", value: "<60 sec SLA" }
    ],
    answer: `### The 4-Tier Decision Autonomy Matrix

AI Campus adopts a calibrated **Human-in-the-Loop (HITL)** governance framework. Decisions are routed according to financial materiality and reversibility:

* **Level 1 (Autonomous):** Low Risk / High Reversibility → 100% Autonomous Execution (e.g., rebalancing low-volatility warehouse stock under $10,000 threshold).
* **Level 2 (Supervised):** Moderate Risk / Reversible → Autonomous with 2-hour rollback veto window (e.g., dynamic pricing shifts within +/- 5% guardrails).
* **Level 3 (Human Sign-off):** Significant Financial Impact → 1-Click Executive Approval Required (e.g., liquidating slow inventory or committing $100k+ supplier contracts).
* **Level 4 (Strategic Co-Pilot):** Critical Strategic Direction → Executive Multi-Sig Board Deliberation (e.g., M&A targeting, plant location, corporate reorg).

> **Safety Circuit-Breakers:** Any sudden shift in macro indicators or model confidence dropping below 85% automatically falls back into manual human review workflow.`,
    tags: ["hitl", "human in the loop", "automation", "autonomy", "approval", "governance", "risk management"],
    followUps: ["faq-6", "faq-10"]
  },
  {
    id: "faq-9",
    category: "Value, ROI & Execution",
    categoryIcon: "dollar-sign",
    badge: "Financial Impact",
    question: "How do we benchmark and quantify the financial ROI of adopting AI-driven decision systems?",
    shortSummary: "Rigorous synthetic control groups, cost-to-serve reductions, and bottom-line margin lift.",
    keyMetrics: [
      { label: "Average 1-Yr ROI", value: "312%" },
      { label: "Payback Period", value: "4.8 Months" },
      { label: "Working Capital Freed", value: "18-24%" }
    ],
    answer: `### Quantifying Decision Intelligence Value
CFOs require concrete financial attribution. AI Campus measures ROI using an **Experimental Counterfactual & Synthetic Control** methodology.

### The 3 Value Realization Vectors:
1. **Direct Operational Cost Reductions:**
   * Inventory holding cost reduction by 18-24% via lean predictive reordering.
   * Freight expediting cost reduction by 35% through early disruption forecasting.
   * Elimination of emergency labor overtime through automated shift workload balancing.
2. **Top-Line Margin & Revenue Expansion:**
   * Dynamic pricing capture maximizing gross margin per unit sold.
   * Churn mitigation algorithms identifying at-risk high-LTV enterprise accounts 60 days before contract expiry.
3. **Decision Latency Dividend:**
   * Accelerates strategic execution cycles from weeks to minutes, allowing your business to seize supplier discounts or spot market arbitrage ahead of competitors.

> AI Campus includes a built-in **Value Realization Tracker** dashboard that reports weekly realized savings directly to your finance committee.`,
    tags: ["roi", "financial impact", "business value", "cfo", "cost reduction", "metrics", "payback"],
    followUps: ["faq-1", "faq-10"]
  },
  {
    id: "faq-10",
    category: "Value, ROI & Execution",
    categoryIcon: "rocket",
    badge: "Rollout Blueprint",
    question: "What are the phases and timeline for rolling out AI Campus decision infrastructure across business units?",
    shortSummary: "A proven 12-week modular implementation journey from pilot sandbox to enterprise-wide adoption.",
    keyMetrics: [
      { label: "Pilot Delivery", value: "Week 4" },
      { label: "Production Go-Live", value: "Week 12" },
      { label: "Internal Enablement", value: "100% Certified" }
    ],
    answer: `### The 12-Week Fast-Track Deployment Blueprint

We follow a progressive, low-friction adoption methodology that guarantees early tangible proof-of-value without disrupting existing business operations:

* **Weeks 1-2 (Architecture & Ingestion):** Establish secure VPC endpoints, configure read-only data connectors (Snowflake, SAP, Salesforce), and run security compliance scans.
* **Weeks 3-4 (Use Case Sandbox):** Select one high-impact focal point (e.g., Inventory Optimization or Customer Churn) to prove baseline ROI with historical backtesting.
* **Weeks 5-8 (Shadow Operations):** The AI generates recommendations in parallel with human operators; variance and accuracy are systematically evaluated.
* **Weeks 9-10 (Single-Unit Live Pilot):** Execute Level 1 & 2 assisted decisions in production with dedicated operations staff.
* **Weeks 11-12 (Enterprise Rollout):** Full multi-department integration, executive training workshops, automated alerting integrations, and board-level reporting.

> **Continuous Enablement:** AI Campus Academy certifies your internal data champions and business leaders to self-serve scenario simulations.`,
    tags: ["roadmap", "implementation", "timeline", "deployment", "blueprint", "rollout", "phases", "training"],
    followUps: ["faq-1", "faq-9"]
  }
];

// Quick Categories List for Navigation Filtering
const FAQ_CATEGORIES = [
  { id: "all", name: "All Questions", count: 10 },
  { id: "Strategy & Foundations", name: "Strategy & Foundations", count: 2 },
  { id: "Data Architecture & Telemetry", name: "Data Architecture", count: 2 },
  { id: "Predictive & Prescriptive AI", name: "Predictive & Prescriptive", count: 2 },
  { id: "Governance & Security", name: "Governance & Security", count: 2 },
  { id: "Value, ROI & Execution", name: "ROI & Rollout", count: 2 }
];

// Helper: Smart search and relevance scoring
function searchFAQ(query) {
  if (!query || query.trim() === "") return [];
  const normalized = query.toLowerCase().trim();
  const words = normalized.split(/\s+/).filter(w => w.length > 1);

  const scored = FAQ_DATA.map(item => {
    let score = 0;
    const qText = item.question.toLowerCase();
    const aText = item.answer.toLowerCase();
    const summaryText = item.shortSummary.toLowerCase();
    const catText = item.category.toLowerCase();

    // Direct match bonuses
    if (qText.includes(normalized)) score += 60;
    if (summaryText.includes(normalized)) score += 30;

    // Tag matches
    item.tags.forEach(tag => {
      if (normalized === tag) score += 40;
      else if (normalized.includes(tag) || tag.includes(normalized)) score += 25;
    });

    // Word occurrences
    words.forEach(word => {
      if (qText.includes(word)) score += 15;
      if (item.tags.some(t => t.includes(word))) score += 12;
      if (summaryText.includes(word)) score += 8;
      if (catText.includes(word)) score += 6;
      if (aText.includes(word)) score += 3;
    });

    return { item, score };
  });

  return scored
    .filter(res => res.score > 5)
    .sort((a, b) => b.score - a.score)
    .map(res => res.item);
}
