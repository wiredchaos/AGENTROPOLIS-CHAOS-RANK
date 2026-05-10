# SKILL: EVIDENCE GRAPH

---

**name:** EVIDENCE GRAPH  
**id:** evidence-graph  
**role:** Proof Structuring Engine  
**district:** CHAOS RANK  
**tier:** 2  
**layer:** PROOF  
**status:** ACTIVE  

---

## Role Definition

The EVIDENCE GRAPH converts raw claims, assertions, and citations into structured proof objects that are machine-readable by LLMs, search crawlers, and schema validators. It transforms the output of UGC HARVESTER into a navigable knowledge graph where every claim is traceable, linked, and verifiable.

This skill is the core of the CHAOS RANK doctrine: *"Don't sell backlinks. Sell machine-readable proof."*

---

## Triggers

- UGC HARVESTER delivers signal batch
- Manual claim submission from operator
- New agent page published (requires citation anchor)
- Weekly evidence audit cycle
- Citation gap detected by GEO AUDIT

---

## Chains To

- `agent-citation-page` — structured proof objects for entity pages

---

## Chains From

- `ugc-harvester` — raw claim candidates and signal extracts

---

## Outputs

| Output Type        | Format       | Description                                         |
|--------------------|--------------|------------------------------------------------------|
| Proof Object       | JSON         | Structured claim with source, strength, schema type  |
| Evidence Chain     | JSON-LD      | Linked sequence of supporting claims                 |
| Claim Map          | Markdown     | Human-readable summary of evidence coverage          |
| Citation Anchors   | HTML snippet | Embeddable structured citation blocks                |

---

## Proof Object Schema

```json
{
  "id": "proof-001",
  "claim": "string — the assertion being proven",
  "topic": "string — classification category",
  "evidence_strength": "low | medium | high | strong",
  "source_type": "UGC | Research | Internal | Doctrine",
  "source_url": "string — canonical source URL",
  "canonical_url": "string — internal page linking to this claim",
  "schema_type": "Claim | Article | FAQPage",
  "verified": true,
  "created": "ISO 8601 timestamp",
  "linked_claims": ["proof-002", "proof-005"]
}
```

---

## Capabilities

- Claim deduplication and normalization
- Evidence strength scoring (source triangulation)
- Graph linkage between related claims
- JSON-LD output generation for schema.org/Claim
- Citation anchor HTML generation
- Contradiction detection across claim corpus

---

## Example Usage

```
INPUT from UGC HARVESTER:
{
  "claim": "AI visibility requires structured citations",
  "source": "HN thread: 'Why Google AI is citing some sites and not others'",
  "sentiment": "positive",
  "quality_score": 0.87
}

EVIDENCE GRAPH processes:
  1. Normalizes claim text
  2. Matches against existing graph (no duplicate found)
  3. Assigns evidence_strength: "high" (3 corroborating sources)
  4. Generates JSON-LD Claim block
  5. Links to claims: proof-004, proof-007
  6. Passes to agent-citation-page

OUTPUT:
{
  "id": "proof-012",
  "claim": "AI visibility requires structured citations",
  "evidence_strength": "high",
  "schema_type": "Claim",
  "canonical_url": "/pages/ai-search-visibility.html",
  "verified": true
}
```

---

## Citation Policy

Every proof object must include a `canonical_url` pointing to a published AGENTOPOLIS page. Unverified claims are flagged `"verified": false` and excluded from LLM-facing outputs until validated.

---

## District

```
AGENTOPOLIS → CHAOS RANK → EVIDENCE GRAPH
```

*"A claim without proof is just noise. A proof without structure is invisible."*
