# SKILL: SCHEMA BUILDER

---

**name:** SCHEMA BUILDER  
**id:** schema-builder  
**role:** Structured Data Generation Engine  
**district:** CHAOS RANK  
**tier:** 1  
**layer:** STRUCTURE  
**status:** ACTIVE  

---

## Role Definition

The SCHEMA BUILDER generates schema.org JSON-LD markup for all AGENTROPOLIS entities, pages, claims, agents, and skill definitions. It ensures every published resource carries machine-readable structured data that enables LLMs, search crawlers, and knowledge graph indexers to extract, cite, and understand the entity without ambiguity.

Schema is not decoration — it is the structural layer that makes AI citation possible.



---

## Triggers

- New agent page created
- New skill published
- GEO AUDIT identifies schema gaps
- UGC HARVESTER extracts new entity references
- Quarterly schema audit cycle

---

## Chains To

- `agent-citation-page` — embedded JSON-LD in entity pages

---

## Chains From

- `ugc-harvester` — entity references requiring structuring
- `geo-audit` — schema gap remediation list

---

## Outputs

| Output Type           | Format     | Description                                          |
|-----------------------|------------|------------------------------------------------------|
| Organization Schema   | JSON-LD    | schema.org/Organization for AGENTOPOLIS entity        |
| WebPage Schema        | JSON-LD    | Per-page schema including Article, FAQPage, AboutPage |
| Claim Schema          | JSON-LD    | schema.org/Claim for evidence graph objects           |
| SoftwareApp Schema    | JSON-LD    | For agent and skill definitions                      |
| FAQ Schema            | JSON-LD    | Question/Answer pairs for LLM extraction             |

---

## Schema Templates

### Organization
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AGENTOPOLIS",
  "description": "Sovereign AI-search intelligence infrastructure",
  "url": "https://wiredchaos.github.io/AGENTROPOLIS-CHAOS-RANK/",
  "sameAs": [],
  "knowsAbout": ["AEO", "GEO", "LLM citation", "Agent infrastructure"]
}
```

### FAQPage
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is GEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Generative Engine Optimization — the practice of optimizing content for AI-search citation."
      }
    }
  ]
}
```

---

## Capabilities

- Template-based JSON-LD generation for 12+ schema types
- FAQPage extraction from prose content
- Entity relationship graph (sameAs, mentions, isPartOf)
- Schema validation against schema.org spec
- HTML injection snippet generation
- Breadcrumb schema generation

---

## Example Usage

```
INPUT from GEO AUDIT:
{
  "gap": "Missing FAQPage schema",
  "target_page": "/pages/ai-search-visibility.html",
  "priority": "high"
}

SCHEMA BUILDER runs:
  1. Parses existing FAQ content on target page
  2. Extracts 5 Question/Answer pairs
  3. Generates FAQPage JSON-LD block
  4. Validates against schema.org/FAQPage spec
  5. Returns injection snippet

OUTPUT: Valid FAQPage JSON-LD ready for <script type="application/ld+json"> tag
```

---

## Citation Policy

All generated schemas must include:
- `url` — canonical page URL
- `dateModified` — ISO 8601 timestamp
- `publisher` — AGENTOPOLIS Organization reference

---

## District

```
AGENTOPOLIS → CHAOS RANK → SCHEMA BUILDER
```

*"Structured data is not metadata. It is the language AI speaks."*
