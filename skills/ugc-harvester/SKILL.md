# SKILL: UGC HARVESTER

---

**name:** UGC HARVESTER  
**id:** ugc-harvester  
**role:** Signal Extraction Engine  
**district:** CHAOS RANK  
**tier:** 1  
**layer:** SIGNAL  
**status:** ACTIVE  

---

## Role Definition

The UGC HARVESTER collects, filters, and processes user-generated content (UGC) from forums, review platforms, social threads, Q&A sites, and comment sections. It extracts structured AEO/SEO signals, sentiment vectors, and latent citation potential from raw organic content.

Its function is to transform unstructured public discourse into machine-readable intelligence that feeds the CHAOS RANK evidence stack.

---

## Triggers

- New UGC content detected on monitored domains
- Weekly signal harvest schedule fires
- Manual harvest request from CHAOS RANK STRATEGIST
- Evidence graph signals a citation gap
- GEO AUDIT identifies underrepresented topic clusters

---

## Chains To

- `evidence-graph` — parsed claims and citations
- `schema-builder` — structured entity references

---

## Chains From

- None (HEAD skill — entry point of signal pipeline)

---

## Outputs

| Output Type        | Format       | Description                                     |
|--------------------|--------------|--------------------------------------------------|
| Signal Report      | JSON         | Extracted topics, claims, sentiment scores       |
| Citation Candidates| Markdown     | High-signal statements ready for proof objects   |
| Entity List        | JSON         | Named entities with relevance scores             |
| Coverage Map       | JSON         | Topic gaps identified vs. existing content       |

---

## Capabilities

- Multi-source content ingestion (Reddit, Quora, HN, G2, Trustpilot patterns)
- Natural language claim extraction
- Entity recognition and disambiguation
- Sentiment classification (positive / neutral / contested)
- Deduplication and quality scoring
- Source credibility tagging

---

## Example Usage

```
TRIGGER: evidence-graph signals citation gap for topic "GEO audit tools"

UGC HARVESTER runs:
  1. Scrapes Q&A threads matching "AI search optimization"
  2. Extracts 47 claim candidates
  3. Scores by citation potential and source credibility
  4. Outputs top 8 to evidence-graph for proof structuring
  5. Passes 3 entity references to schema-builder

OUTPUT:
{
  "harvest_id": "ugh-2024-11-001",
  "topic": "GEO audit tools",
  "claim_candidates": 47,
  "high_signal": 8,
  "entities_extracted": ["GEO", "AEO", "LLM citation"],
  "next_skill": "evidence-graph"
}
```

---

## Citation Policy

All harvested content must include:
- `source_url` — original content location
- `source_type` — platform classification
- `harvest_date` — ISO 8601 timestamp
- `quality_score` — 0.0 to 1.0

Raw content is never republished verbatim. Only structured signal extracts are passed downstream.

---

## District

```
AGENTOPOLIS → CHAOS RANK → UGC HARVESTER
```

*"Raw signal is noise. Harvested signal is power."*
