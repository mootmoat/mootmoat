# MOOT MOAT
**The Open Standard for Agentic Professional Identity**
v17.0 · MIT License · [mootmoat.com](https://mootmoat.com) · [github.com/mootmoat](https://github.com/mootmoat)

> ⚠ **Namespace status:** `mootmoat.com/vocab/v1` is defined but deployment is actively in progress. Track deployment at [github.com/mootmoat/mootmoat](https://github.com/mootmoat).

---

### Plant the Flag

You are the canonical source of truth about your entity. The hiring market has a gatekeeper built by and for software engineers, rendering the physical constraints of hardware architecture invisible. MootMoat is the sovereignty protocol for taking it back.

You control the data. You host it. You own the entity.

---

### The Problem: Round Zero

Before a human recruiter reads your resume, an AI parsing agent reads it first. It performs Entity Resolution: mapping you onto a structured knowledge graph. If it cannot resolve you into a coherent entity, it does not surface you. You do not fail a screen. You are never screened at all.

This is Round Zero. You lose it silently, before the game starts.

Hardware and mechanical engineers are disproportionately exposed. The ATS ontologies governing every major recruiting platform were built for software. They have no vocabulary for thermal resistance budgets, EMI mitigation strategy, injection molding tolerances, or DFM tradeoffs. Your actual expertise is invisible by design. MootMoat fixes this.

---

### The Two Core Mechanisms

**1. Coherence as the Signal** — Solved by the **Tri-Node Footprint.**
Maintaining synchronized, hyper-specific truth across independent surfaces (your canonical domain, GitHub, LinkedIn) using the exact same jagged Depth Signals is the unfakeable signal. Bots do not maintain multi-substrate coherence of thermal resistance budgets and DFM tradeoffs. Humans with real constraints do.

**2. Translation of Lived Experience** — Solved by **Depth Signals.**
Depth Signals are the overarching genus of twelve techniques used to translate The Source — your direct memory of constraint environments — into machine-readable and human-readable formats. The Structural Rhyme is the flagship technique, but it is one of twelve. The full taxonomy is in `MootMoat_v17_Spec.md`.

---

### The Source

The extraction pipeline begins with The Source. The Source is the primary archive of lived experience — the engineer's direct memory of constraint environments, failure events, and decisions made under real consequences. It predates every file, every log, every ECO.

The laptop goes back. The Source does not. The scars are the receipt.

You are not transcribing old failure logs. You are writing directly from the engineer who was in the room when it failed. No subpoena required. No air-gap breached.

---

### Conformance Levels

**Level 1 — Entity Resolvable**
*Prevents Entity Resolution Failure. The floor below which you are invisible.*
`sameAs` ≥3 nodes · valid JSON-LD context · `roles[]` with exact date ranges · `/llms.txt` accessible · `mootmoat.com/vocab/v1` resolves

**Level 2 — Domain Legible**
*Makes ATS-invisible hardware expertise machine-readable.*
≥3 `constraintDomain` entries · `physicalConstraintSummary` and `tooling` populated · `agentInstructions` present · ≥3 outcome-verified project entries

**Level 3 — Proof Present**
*Enrichment layer active. Differentiation begins here.*
≥1 `isomorphicProof` block with `structuralProperty`, `structuralMapping`, `sharedFailureMode` · `quantifiedOutcome` in evidence projects

**Level 4 — Vivisection Complete**
*Full metabolic layer fused with structural layer. Reference implementation standard.*
All `constraintDomains[]` with `isomorphicProof` · `careerVector` populated · Reverse Radar telemetry active · human portfolio renders as scrollable layered view

---

### Quick Start

1. **Complete the Workbook:** Open `MootMoat_v17_Workbook.md`. Pick the Depth Signal canvas that matches your strongest material. One completed canvas is your nucleus.
2. **Define your domains:** Map the core constraint domains of your career.
3. **Deploy the JSON-LD:** Translate the workbook output into the `agent_profile.json` schema and host it on your canonical domain.
4. **Close the loop:** Sync your LinkedIn and GitHub to point to the canonical source.

---

### The v17 Frontier (Active Measurement Vectors)

v17 formally names the architectural gaps as a measurement agenda, not a list of failures.

- **Reverse Radar:** We do not guess how AI agents weight the schema. We deploy and measure behavioral telemetry in the wild to generate actual market intelligence on agent evaluation patterns.
- **Authenticated Endpoints:** A future vector must define secure routing (e.g., zero-knowledge proofs) for ITAR-adjacent constraint data to reach cleared reviewers without breaking the public schema or compliance requirements.
- **Collaborative Graph Richness:** A named research direction under evaluation — not a current protocol capability. If two engineers independently reference the same constraint project with consistent metadata, it may create a multi-entity coherence signal of a different order. This is on the roadmap, not in the spec.
- **Taxonomy Governance:** Scaling the constraint domain taxonomy to photonics, MEMS, acoustics, and high-voltage requires a formal RFC process to ensure new domains are rooted in lived experience, not theoretical categorization.

---

### Repository Structure

```
mootmoat/
├── spec/
│   ├── vocab-v1.jsonld           # The resolvable mootmoat.com/vocab/v1 namespace
│   ├── SPEC.md                   # Formal specification (RFC 2119 normative language)
│   └── conformance-schema.json   # JSON Schema for validator
│
├── template/                     # Drop-in Astro deployment template
│   ├── src/content/docs/meta/
│   │   └── AGENT_PROFILE.md      # Career Master Matrix template
│   ├── public/
│   │   ├── llms.txt
│   │   └── llms-full.txt
│   └── src/content.config.ts     # Zod schema enforcement
│
├── extraction/
│   ├── MootMoat_v17_Workbook.md  # Start here — all 12 Depth Signal canvases
│   ├── MootMoat_v17_Spec.md      # Full taxonomy and frontier vectors
│   ├── EXTRACTION_GUIDE.md       # The Source → Career Master Matrix methodology
│   └── PROMPTS.md                # NLM Prompt Stack for downstream asset generation
│
├── validator/
│   └── validate.py               # Standalone conformance checker
│
└── docs/                         # mootmoat.com documentation source
```

**Law of Asset Sovereignty:** Binary assets MUST NOT be committed to the Git index. Store images, CAD models, and PDFs in Cloudflare R2 and reference via absolute URIs. The repository contains only structured text data.

**Air-Gapped Extraction:** The extraction pipeline MUST run locally. Do not upload ITAR-restricted or proprietary engineering data to any cloud service. This is a compliance requirement, not a cost optimization.

---

### WAF Configuration (Required)

Cloudflare's Bot Fight Mode blocks AI crawlers with a 403 by default. This is the single most common implementation failure. In Cloudflare WAF → Custom Rules:

```
(http.request.uri.path eq "/llms.txt") OR
(http.request.uri.path eq "/llms-full.txt") OR
(http.request.uri.path eq "/docs/meta/agent_profile.json")
```

Action: **Skip** → All Super Bot Fight Mode Rules + All Managed Rules

---

### Verification

```bash
# Both MUST return 200 with clean content
curl -A "ClaudeBot" https://yourdomain.com/llms.txt
curl -A "GPTBot" https://yourdomain.com/docs/meta/agent_profile.json

# Validate JSON-LD
curl -s https://yourdomain.com/docs/meta/agent_profile.json | python -m json.tool
```

A `403` means the WAF bypass rule is not active.

---

### Reference Implementation

[eriknorris.com](https://eriknorris.com) · [github.com/eriknorris/eriknorris](https://github.com/eriknorris/eriknorris)

A live Level 4 deployment. The Colophon at [eriknorris.com/colophon](https://eriknorris.com/colophon) demonstrates the Vivisection Portfolio model — the same career data rendered at multiple resolution layers for different consumer classes.

---

*MIT License. You own your entity. The spec is the work. Fork accordingly.*
