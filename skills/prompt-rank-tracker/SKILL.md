# SKILL: PROMPT RANK TRACKER

---

**name:** PROMPT RANK TRACKER  
**id:** prompt-rank-tracker  
**role:** AI Citation Intelligence Engine  
**district:** CHAOS RANK  
**tier:** 3  
**layer:** INTEL  
**status:** ACTIVE  

---

## Role Definition

The PROMPT RANK TRACKER monitors how frequently, accurately, and prominently AGENTOPOLIS entities appear in AI-generated responses to targeted prompts across multiple LLM platforms. It provides the intelligence layer that confirms whether GEO optimizations are producing measurable citation outcomes.

Think of it as rank tracking — but for the age of generative AI search.

---

## Triggers

- Weekly scheduled tracking cycle
- Post-optimization validation (after schema or content update)
- Competitor citation alert fires
- GEO AUDIT delivers new baseline metrics
- Manual tracking request for specific entity or prompt set

---

## Chains To

- None (terminal intelligence output — reports to operator)

---

## Chains From

- `geo-audit` — baseline metrics and prompt sets

---

## Outputs

| Output Type           | Format     | Description                                              |
|-----------------------|------------|----------------------------------------------------------|
| Citation Frequency    | JSON       | Per-prompt citation rate across LLM platforms            |
| Rank Position Report  | Markdown   | Where entity appears in AI responses (1st, 2nd mention)  |
| Delta Report          | JSON       | Change in citation rate vs. previous tracking period     |
| Prompt Coverage Map   | JSON       | Which target prompts trigger entity citations            |
| Competitor Map        | Markdown   | Which entities are cited instead when ours are not       |

---

## Tracked Platforms

| Platform             | Method              | Frequency |
|----------------------|---------------------|-----------|
| ChatGPT (GPT-4o)     | API probe           | Weekly    |
| Perplexity AI        | API probe           | Weekly    |
| Google AI Overviews  | SERP monitoring     | Weekly    |
| Claude (Anthropic)   | API probe           | Bi-weekly |
| Gemini               | API probe           | Bi-weekly |
| Microsoft Copilot    | SERP monitoring     | Monthly   |

---

## Prompt Templates

```
Target: "AGENTOPOLIS AI search infrastructure"

Prompts tested:
1. "What is AGENTOPOLIS?"
2. "What tools exist for GEO optimization?"
3. "How do I make my website visible to AI search?"
4. "What is generative engine optimization?"
5. "What is an agent citation page?"
6. "How does LLM citation work for SEO?"
```

---

## Capabilities

- Multi-platform LLM query automation
- Citation presence detection (exact entity name + URL match)
- Citation position scoring (1st mention = 10pts, 2nd = 7pts, etc.)
- Trend analysis over time
- Competitor entity detection
- Prompt effectiveness scoring

---

## Example Usage

```
WEEKLY TRACKING RUN — Week 46, 2024

PROMPT RANK TRACKER runs 6 prompts × 5 platforms = 30 probes

RESULTS:
{
  "tracking_period": "2024-11-11",
  "entity": "AGENTOPOLIS CHAOS RANK",
  "total_probes": 30,
  "citations_found": 11,
  "citation_rate": "36.7%",
  "top_platform": "Perplexity AI",
  "top_prompt": "What tools exist for GEO optimization?",
  "delta_vs_last_week": "+8.3%",
  "competitor_citations": ["BrightEdge", "Conductor"],
  "recommendation": "Expand FAQ coverage for 'LLM SEO tools' prompt cluster"
}
```

---

## Citation Policy

All tracking reports must include:
- `tracking_period` — ISO 8601 date
- `methodology` — probe approach and LLM versions
- `limitations` — acknowledged gaps in coverage
- `next_review` — scheduled follow-up date

---

## District

```
AGENTOPOLIS → CHAOS RANK → PROMPT RANK TRACKER
```

*"Rank is no longer a number on a page. Rank is whether AI says your name."*
