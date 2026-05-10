# SKILL: GEO AUDIT

---

**name:** GEO AUDIT  
**id:** geo-audit  
**role:** AI-Search Discoverability Auditor  
**district:** CHAOS RANK  
**tier:** 2  
**layer:** AUDIT  
**status:** ACTIVE  

---

## Role Definition

The GEO AUDIT (Generative Engine Optimization Audit) systematically evaluates how discoverable a brand, entity, or content cluster is within AI-search systems including ChatGPT, Perplexity, Google AI Overviews, Claude, and Gemini. It identifies structural gaps in schema coverage, citation density, and entity representation that prevent LLMs from surfacing an entity in generative responses.

---

## Triggers

- Monthly scheduled audit cycle
- New domain or entity added to registry
- Significant drop in citation frequency detected by PROMPT RANK TRACKER
- Pre-publication review of new agent or page
- Manual audit request from operator

---

## Chains To

- `schema-builder` — schema gap remediation list
- `prompt-rank-tracker` — baseline metrics for tracking

---

## Chains From

- None (independent audit entry point)

---

## Outputs

| Output Type          | Format     | Description                                          |
|----------------------|------------|------------------------------------------------------|
| GEO Score Report     | JSON       | Per-entity discoverability scores                    |
| Schema Gap Map       | JSON       | Missing or incomplete schema.org properties          |
| Citation Density Map | Markdown   | Coverage of entity in LLM-indexed content            |
| Remediation Plan     | Markdown   | Priority-ordered list of improvements                |
| Baseline Metrics     | JSON       | Starting prompt-rank data for tracking               |

---

## GEO Score Components

| Component              | Weight | Description                              |
|------------------------|--------|------------------------------------------|
| Schema Completeness    | 25%    | JSON-LD coverage for entity type         |
| Citation Count         | 20%    | External sources citing the entity       |
| llms.txt Compliance    | 15%    | Machine-readable crawl guidance          |
| Content Freshness      | 15%    | Recency of published indexed content     |
| Entity Disambiguation  | 15%    | Unique identifiers and cross-references  |
| FAQ Coverage           | 10%    | Question-answer format for LLM extraction|

---

## Capabilities

- Multi-LLM citation probe (query injection and response analysis)
- Schema.org completeness checker
- llms.txt validation
- Entity co-occurrence mapping
- FAQ gap detection
- Canonical URL chain validation
- robots.txt and sitemap compliance audit

---

## Example Usage

```
AUDIT TARGET: AGENTOPOLIS CHAOS RANK

GEO AUDIT runs:
  1. Probes 5 LLMs with 12 targeted prompts
  2. Evaluates schema completeness: Organization, WebSite, FAQPage
  3. Checks llms.txt validity
  4. Maps citation density across external sources
  5. Generates GEO score and remediation plan

OUTPUT:
{
  "audit_id": "geo-2024-11-001",
  "target": "AGENTOPOLIS CHAOS RANK",
  "geo_score": 74,
  "schema_coverage": "82%",
  "llm_citation_found": true,
  "top_gaps": [
    "Missing FAQ schema on homepage",
    "No SameAs links to external identity anchors",
    "llms.txt missing agent section"
  ],
  "remediation_priority": ["schema-builder", "llms.txt update"],
  "next_skill": "schema-builder"
}
```

---

## Citation Policy

GEO AUDIT reports must include:
- `audit_date` — ISO 8601
- `llms_tested` — list of AI systems probed
- `methodology` — audit approach summary
- `geo_score` — composite 0–100 integer

---

## District

```
AGENTOPOLIS → CHAOS RANK → GEO AUDIT
```

*"You can't rank what AI can't find. You can't be cited if you're invisible."*
