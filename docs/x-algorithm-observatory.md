# X Algorithm Observatory

The **X Algorithm Observatory** is CHAOS RANK's provenance-backed monitoring layer for public changes to the X For You recommendation system.

## Mission

Convert public repository changes into structured intelligence without confusing source-code disclosure with proof of production behavior.

```text
xai-org/x-algorithm
        │
        ▼
   Commit Watch
        │
        ▼
 Preserve Evidence
        │
        ▼
 Materiality + Class
        │
        ▼
 Evidence State
        │
        ├── PUBLISHED
        ├── OBSERVED
        ├── INFERRED
        ├── TESTED
        └── VERIFIED
        │
        ▼
 CHAOS RANK Decision Package
        │
        ├── Evidence Graph
        ├── CONTRA Review
        └── Strategy Experiments
```

## Machine Layer

- `skills/x-algorithm-observatory/SKILL.md` — operating contract
- `data/x-algorithm-event.schema.json` — validation contract for change events
- `data/x-algorithm-events.json` — append-only normalized event ledger
- `data/skills.json` — skill registry entry

## Material Change Domains

The observatory tracks:

- ranking weights and penalties
- Phoenix / SimClusters retrieval behavior
- indexing and cold-start changes
- ranking and reranking model inputs
- reply-routing thresholds
- For You and Following visibility filtering
- viewer mute behavior
- label-generation systems
- model-driven safety experiments
- brand-safety versions
- jurisdiction or regulatory filters
- Under the Hood transparency changes
- production-default and experiment configuration

## Operating Doctrine

### Published code is evidence, not omniscience

A value in the public repository is `PUBLISHED`. It becomes a claim about live production behavior only when deployment, measurement, or reproducible testing supports that promotion.

### Reach diagnosis separates causes

CHAOS RANK does not collapse all missing reach into "shadowban." Diagnostics distinguish:

1. ranking effects
2. retrieval/indexing eligibility
3. viewer preferences such as muted keywords
4. visibility filtering
5. account/post labels
6. jurisdiction-specific filters
7. experiments/configuration
8. unknown causes

### No folklore without receipts

Every material event preserves the source repository, commit SHA, changed paths, evidence state, strategic interpretation, caveat, and test requirement.

## Current Seed Event Set

The initial ledger captures the August 19, 2026 public changes around:

- Following muted-keyword filtering
- Phoenix author relationship + engagement-count inputs
- explicit stale-post model configuration
- Grok 4.6 safety-model dial

Future watcher runs should append normalized events rather than overwrite prior records. Superseded interpretations remain in the ledger with updated status so CHAOS RANK retains temporal provenance.

## Boundary

This observatory supports transparency analysis, recommender-system research, and legitimate content-strategy testing. It must not be used to automate evasion of X safety or enforcement mechanisms.
