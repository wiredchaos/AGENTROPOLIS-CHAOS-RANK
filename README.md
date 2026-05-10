# AGENTOPOLIS CHAOS RANK

> **"Infrastructure becomes the terrain others must build on."**

[![CHAOS RANK](https://img.shields.io/badge/CHAOS%20RANK-Live-00ffe6?style=flat-square&labelColor=050810)](https://wiredchaos.github.io/AGENTROPOLIS-CHAOS-RANK/)
[![GEO/AEO](https://img.shields.io/badge/GEO%2FAEO-Infrastructure-ff2d55?style=flat-square&labelColor=050810)](https://wiredchaos.github.io/AGENTROPOLIS-CHAOS-RANK/pages/ai-search-visibility.html)
[![llms.txt](https://img.shields.io/badge/llms.txt-Ready-00ffe6?style=flat-square&labelColor=050810)](https://wiredchaos.github.io/AGENTROPOLIS-CHAOS-RANK/llms.txt)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-28c840?style=flat-square&labelColor=050810)](https://wiredchaos.github.io/AGENTROPOLIS-CHAOS-RANK/)
[![License: Open](https://img.shields.io/badge/License-Open-6a7fa8?style=flat-square&labelColor=050810)](LICENSE)

A zero-cost static intelligence-grid for AI search visibility. Built on GitHub Pages. No backend. No build step. Deployed in 60 seconds.

---

## What Is AGENTOPOLIS?

AGENTOPOLIS is a modular AI agent infrastructure canon with the following architecture:

```
Infrastructure → Districts → Applications
```

Each district is a sovereign operating domain with its own skills, agents, and data layer. CHAOS RANK is the AI-search discoverability district.

---

## What Is CHAOS RANK?

CHAOS RANK is the AI-search intelligence district of AGENTOPOLIS. It provides:

- **AEO** — Answer Engine Optimization infrastructure
- **GEO** — Generative Engine Optimization audits and frameworks
- **UGC SEO** — User-generated content signal harvesting
- **Agent Citation Infrastructure** — Sovereign LLM-readable entity pages
- **Evidence Graph** — Machine-readable proof object corpus
- **Skill Registry** — 6 chainable production-ready skills

Core doctrine: **"Don't sell backlinks. Sell machine-readable proof."**

---

## Architecture

```
AGENTROPOLIS-CHAOS-RANK/
│
├── index.html                   ← Homepage — full site
├── README.md                    ← This file
├── robots.txt                   ← AI crawler guidance
├── sitemap.xml                  ← Comprehensive URL map
├── llms.txt                     ← Machine-readable LLM guidance
│
├── styles/
│   └── main.css                 ← Cyber-noir design system
│
├── js/
│   └── app.js                   ← Vanilla JS — terminal, cards, FAQ
│
├── data/
│   ├── agents.json              ← Agent registry
│   ├── skills.json              ← Skill registry
│   └── claims.json              ← Evidence corpus (proof objects)
│
├── skills/
│   ├── ugc-harvester/SKILL.md   ← Tier 1 — Signal layer
│   ├── evidence-graph/SKILL.md  ← Tier 2 — Proof layer
│   ├── geo-audit/SKILL.md       ← Tier 2 — Audit layer
│   ├── schema-builder/SKILL.md  ← Tier 1 — Structure layer
│   ├── prompt-rank-tracker/SKILL.md  ← Tier 3 — Intel layer
│   └── agent-citation-page/SKILL.md  ← Tier 3 — Publish layer
│
├── agents/
│   ├── neuro-aeo-oracle.html    ← AI Search Intelligence Analyst
│   └── chaos-rank-strategist.html  ← Infrastructure Dominance Architect
│
├── pages/
│   ├── ai-search-visibility.html  ← AI visibility framework
│   ├── llm-backlinks.html          ← LLM citation infrastructure
│   ├── ugc-seo-engine.html         ← UGC signal pipeline
│   └── evidence-graph.html         ← Evidence graph framework
│
└── assets/
    └── logo.svg                 ← CHAOS RANK mark
```

---

## Skill Registry

| Skill | Tier | Layer | Role |
|-------|------|-------|------|
| [UGC HARVESTER](skills/ugc-harvester/SKILL.md) | 1 | SIGNAL | Collects UGC and extracts AEO/SEO signal |
| [SCHEMA BUILDER](skills/schema-builder/SKILL.md) | 1 | STRUCTURE | Generates schema.org JSON-LD markup |
| [EVIDENCE GRAPH](skills/evidence-graph/SKILL.md) | 2 | PROOF | Converts claims into machine-readable proof objects |
| [GEO AUDIT](skills/geo-audit/SKILL.md) | 2 | AUDIT | Audits AI-search discoverability across LLMs |
| [PROMPT RANK TRACKER](skills/prompt-rank-tracker/SKILL.md) | 3 | INTEL | Tracks AI citation frequency per entity |
| [AGENT CITATION PAGE](skills/agent-citation-page/SKILL.md) | 3 | PUBLISH | Creates LLM-readable sovereign entity pages |

### Skill Chain

```
UGC HARVESTER ──→ EVIDENCE GRAPH ──→ AGENT CITATION PAGE
      │
      └──→ SCHEMA BUILDER ──────────→ AGENT CITATION PAGE

GEO AUDIT ──→ SCHEMA BUILDER
    │
    └──→ PROMPT RANK TRACKER
```

---

## GEO/AEO Framework

**GEO (Generative Engine Optimization):** Optimizing entities and content for citation in AI-generated search responses (ChatGPT, Perplexity, Google AI Overviews, Claude, Gemini).

**AEO (Answer Engine Optimization):** Structuring content so AI and voice search systems can extract and serve it as direct answers to queries.

CHAOS RANK implements both through:
- Schema.org JSON-LD on every page
- FAQPage structured blocks
- Evidence-scored claims in claims.json
- Machine-readable llms.txt
- Open robots.txt for AI crawlers
- Comprehensive sitemap.xml

---

## How to Deploy to GitHub Pages

1. Fork this repository
2. Go to **Settings → Pages**
3. Under **Source**, select **Deploy from a branch**
4. Select **main** branch, **/ (root)** directory
5. Click **Save**

Your site will be live at `https://YOUR-USERNAME.github.io/AGENTROPOLIS-CHAOS-RANK/` within 60 seconds. No build step required.

---

## How to Add New Skills

1. Create a new directory under `skills/`:
   ```
   skills/your-skill-name/
   └── SKILL.md
   ```

2. Author `SKILL.md` following the template in any existing skill file. Required fields:
   - `name`, `id`, `role`, `district`, `tier`, `layer`
   - `triggers`, `chains_to`, `chains_from`
   - `outputs` table
   - Example usage block

3. Add the skill to `data/skills.json`:
   ```json
   {
     "id": "your-skill-name",
     "name": "YOUR SKILL NAME",
     "description": "...",
     "tier": 1,
     "layer": "LAYER",
     "district": "CHAOS RANK",
     "tags": ["tag1", "tag2"],
     "chains_to": [],
     "chains_from": []
   }
   ```

4. Add a skill card to `index.html` in the `#skills` section (or let `app.js` render it from JSON).

5. Add the skill URL to `sitemap.xml` and `llms.txt`.

---

## How to Create New Agents

1. Create a new agent HTML file under `agents/`:
   ```
   agents/your-agent-name.html
   ```

2. Follow the structure of `agents/neuro-aeo-oracle.html`:
   - Page hero with breadcrumb, tag, and title
   - Prose section: Identity, Role, Capabilities, Known Domains, Output Formats, Citation Policy
   - Sidebar: machine-readable JSON block + LLM summary
   - `<script type="application/ld+json">` with SoftwareApplication schema
   - OpenGraph and Twitter Card meta tags

3. Add the agent to `data/agents.json`:
   ```json
   {
     "id": "your-agent-name",
     "name": "AGENT NAME",
     "avatar": "emoji",
     "role": "Agent Role",
     "district": "CHAOS RANK",
     "summary": "...",
     "capabilities": [],
     "output_formats": [],
     "citation_policy": "...",
     "known_domains": []
   }
   ```

4. Add an agent card to `index.html` in the `#agents` section.

5. Add the agent URL to `sitemap.xml` and `llms.txt`.

---

## Machine Layer

| File | Purpose |
|------|---------|
| [llms.txt](llms.txt) | LLM crawl guidance — skills, agents, citation rules |
| [robots.txt](robots.txt) | AI crawler access rules — all permitted |
| [sitemap.xml](sitemap.xml) | Complete URL map with lastmod timestamps |
| [data/claims.json](data/claims.json) | Evidence corpus — machine-readable proof objects |
| [data/skills.json](data/skills.json) | Skill registry |
| [data/agents.json](data/agents.json) | Agent registry |

---

## Tech Stack

- **Static HTML** — semantic, accessible, no frameworks
- **CSS** — custom cyber-noir design system (no Bootstrap, no Tailwind)
- **Vanilla JavaScript** — animated terminal, FAQ accordion, JSON data rendering
- **Schema.org JSON-LD** — Organization, WebSite, Article, FAQPage, SoftwareApplication, Claim
- **GitHub Pages** — zero-cost, zero-build deployment
- **JSON data files** — machine-readable registry and evidence layers

---

## Agents

| Agent | Role | Page |
|-------|------|------|
| [NEURO-AEO ORACLE](agents/neuro-aeo-oracle.html) | AI Search Intelligence Analyst | GEO/AEO audits, LLM citation scoring, schema optimization |
| [CHAOS RANK STRATEGIST](agents/chaos-rank-strategist.html) | Infrastructure Dominance Architect | Skill chains, evidence graphs, citation networks |

---

## District

```
AGENTOPOLIS → CHAOS RANK
```

GitHub: [wiredchaos/AGENTROPOLIS-CHAOS-RANK](https://github.com/wiredchaos/AGENTROPOLIS-CHAOS-RANK)  
Live: [wiredchaos.github.io/AGENTROPOLIS-CHAOS-RANK](https://wiredchaos.github.io/AGENTROPOLIS-CHAOS-RANK/)
