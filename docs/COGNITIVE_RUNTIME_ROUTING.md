# Cognitive Runtime Routing

CHAOS RANK may select a cognitive-runtime profile only after AEGIS has qualified the exact model/task-class pair.

## Authority boundary

CHAOS RANK owns routing. It does not certify profile claims, mutate AGENTROPOLIS JSpace, redefine ATG/Atralith, or promote external benchmark results into canon.

## Routing inputs

- task class;
- model/provider;
- expected horizon;
- tool count and seam density;
- repository/file breadth;
- recovery requirement;
- verification risk;
- token/latency budget;
- AEGIS qualification state;
- OPS health and recent regression state.

## Initial policy

External cognitive-control profiles are `default-deny`.

Candidate profile: `external.tiger.jspace-v3.6`.

Until AEGIS returns `qualified` or `production` for a specific model/task class, CHAOS RANK routes to the base runtime.

## Adaptive mode mapping

Where a profile exposes `fast/full/loop`, CHAOS RANK may map task shape as follows after qualification:

- `fast`: bounded single-step or easily verifiable task;
- `full`: finite multi-step task with limited tools/files;
- `loop`: long-horizon, multi-tool, multi-file, stateful or resumable task.

This mapping is a routing hypothesis, not a guarantee. AEGIS benchmark receipts determine whether the mapping remains enabled.

## Required fallback

Every external profile route must include:

```yaml
fallback: base-runtime
on_profile_error: fallback
on_qualification_miss: deny-profile
on_ops_regression: deny-profile
on_policy_mismatch: deny-profile
```

## Receipt fields

CHAOS RANK records:

- selected base model;
- selected cognitive profile or `none`;
- AEGIS qualification receipt id;
- task classification;
- routing reason code;
- budget profile;
- fallback reason if used;
- OPS runtime receipt id.

No hidden reasoning trace is required or retained.
