# CHAOS RANK Simulation Routing Contract

CHAOS RANK may route AGENTROPOLIS Simulation Grid workloads across heterogeneous models, surrogates, statistical engines, and cached transition systems. Routing optimizes cost and scale without erasing fidelity, provenance, or epistemic boundaries.

## Routing tiers

1. full frontier or specialist model;
2. smaller language or domain model;
3. distilled surrogate;
4. statistical or rule-based transition engine;
5. cached or precomputed transition table.

## Required routing inputs

- scenario purpose and domain;
- requested fidelity;
- population scale;
- interaction count;
- time horizon;
- latency target;
- budget ceiling;
- privacy and data locality constraints;
- approved providers and hardware;
- calibration requirements;
- reproducibility requirements.

## Routing rules

- Use the least expensive tier that satisfies the scenario's approved fidelity profile.
- Never silently substitute a lower-fidelity tier when the scenario forbids degradation.
- Record every tier transition, fallback, provider, model version, surrogate version, and cache version.
- A surrogate does not inherit the confidence or approval state of its teacher model.
- An unvalidated surrogate is `UNVERIFIED` and cannot be used for a production-approved simulation profile.
- BYOK/BYOH routing must preserve the same policy and receipt requirements as hosted execution.

## Mixture-of-models execution

A single scenario may use multiple tiers. Example:

```text
rare / ambiguous transition -> full model
common transition           -> distilled surrogate
stable deterministic step   -> rule engine
repeated known transition   -> cached table
```

The result receipt must expose the fraction of transitions handled by each tier.

## Degradation states

CHAOS RANK must emit one of:

- `FULL_FIDELITY`
- `APPROVED_SURROGATE`
- `DEGRADED_APPROVED`
- `DEGRADED_UNVERIFIED`
- `ROUTING_BLOCKED`

`DEGRADED_UNVERIFIED` must not feed high-impact production decisions.

## Core invariant

Routing is a compute decision, not a truth decision. Cost optimization must never upgrade synthetic evidence, hide uncertainty, or grant execution authority.
