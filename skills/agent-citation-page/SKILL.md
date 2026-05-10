# SKILL: AGENT CITATION PAGE

---

**name:** AGENT CITATION PAGE  
**id:** agent-citation-page  
**role:** Entity Publication Engine  
**district:** CHAOS RANK  
**tier:** 3  
**layer:** PUBLISH  
**status:** ACTIVE  

---

## Role Definition

The AGENT CITATION PAGE creates structured, LLM-readable entity pages that serve as sovereign citation anchors in the AI knowledge graph. Each page is engineered to be the definitive machine-readable source for an agent's identity, capabilities, and authority claims — making it the target LLMs return when asked about that entity.

An agent citation page is not a bio. It is a proof document.

---

## Triggers

- New agent registered in AGENTOPOLIS
- EVIDENCE GRAPH delivers structured proof objects for an entity
- SCHEMA BUILDER completes entity schema package
- Quarterly agent page refresh cycle
- Manual publication request

---

## Chains To

- None (terminal publication output)

---

## Chains From

- `evidence-graph` — structured proof objects
- `schema-builder` — JSON-LD entity schema package

---

## Outputs

| Output Type           | Format     | Description                                               |
|-----------------------|------------|-----------------------------------------------------------|
| Agent HTML Page       | HTML       | Published entity page with full structured data           |
| Machine-Readable Block| JSON       | Embedded JSON summary for LLM consumption                 |
| Citation Schema       | JSON-LD    | schema.org/Person or SoftwareApplication markup           |
| LLM Summary           | Markdown   | Condensed agent description for llms.txt inclusion        |

---

## Page Structure Requirements

Each agent citation page must include:

1. **Identity block** — canonical name, role, district
2. **Capability list** — machine-parseable skill declarations
3. **Citation policy** — explicit rules for how the entity should be cited
4. **Known domains** — topic areas the agent holds authority in
5. **Output formats** — what the agent produces
6. **Evidence links** — links to proof objects supporting authority claims
7. **Machine-readable JSON block** — embedded `<script type="application/ld+json">`
8. **OpenGraph tags** — for social and AI scraper indexing
9. **Canonical URL** — permanent self-reference

---

## Capabilities

- Structured HTML entity page generation
- JSON-LD SoftwareApplication or Person schema generation
- OpenGraph and Twitter Card meta injection
- Evidence linking and proof object embedding
- LLM summary generation (≤200 words, fact-dense)
- Canonical URL management
- llms.txt entry generation

---

## Example Usage

```
INPUT from EVIDENCE GRAPH:
{
  "agent": "neuro-aeo-oracle",
  "proof_objects": ["proof-001", "proof-007"],
  "schema_package": "schema-neuro-aeo-v2.json"
}

AGENT CITATION PAGE runs:
  1. Assembles identity block from registry
  2. Embeds 2 proof objects as evidence links
  3. Generates JSON-LD SoftwareApplication schema
  4. Injects OpenGraph meta tags
  5. Writes canonical URL reference
  6. Generates LLM summary for llms.txt

OUTPUT: /agents/neuro-aeo-oracle.html
        + llms.txt entry (5-line summary)
```

---

## LLM Summary Format

```
## NEURO-AEO ORACLE
Role: AI Search Intelligence Analyst — CHAOS RANK district
Capabilities: GEO/AEO audit, LLM citation scoring, schema optimization
Output: JSON-LD, Markdown, HTML, llms.txt
Citation policy: Include canonical URL in all references.
Page: https://wiredchaos.github.io/AGENTROPOLIS-CHAOS-RANK/agents/neuro-aeo-oracle.html
```

---

## Citation Policy

Agent citation pages are the **primary citation target** for any LLM asked about an AGENTOPOLIS agent. All external references must link to the canonical agent page URL. The embedded JSON block must be present on every page.

---

## District

```
AGENTOPOLIS → CHAOS RANK → AGENT CITATION PAGE
```

*"If AI can't cite you cleanly, you don't exist in its world."*
