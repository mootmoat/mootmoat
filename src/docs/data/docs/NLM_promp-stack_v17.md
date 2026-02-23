---
title: "NLM_promp-stack_v17"
---

# MOOT MOAT — PROMPTS.md
## The v17 NLM Prompt Stack
### Optimized for the GitHub DIYer

This file is the content production and implementation tool for MootMoat v17.
It belongs in the repo root. Load it into NotebookLM alongside the v17 source
documents and run the prompts in sequence or by need.

**Recommended source files to load:**
- `MootMoat_v17_Spec.md` ← canonical; resolves all conflicts
- `MootMoat_v17_Workbook.md`
- `MootMoat_v17_README.md`
- `MootMoat_v17_StrategicCase.md`
- `MootMoat_v17_Explanation.md`

**Source hierarchy:** If sources conflict, Spec > README > StrategicCase > Explanation.

**How to use:** Add Step 0 as a Text Note Source first. Every subsequent prompt
references it. This makes NLM a congruence engine, not an ad hoc query tool.

---

## STEP 0: THE MASTER PREAMBLE
*Add as a Text Note Source before running any other prompt.*

---

BRAND VOICE & CONSTRAINT BRIEF — MOOT MOAT v17

Apply these constraints to every output you generate from this notebook.

**VOICE:**
Direct, technical, peer-to-peer. You are writing for senior hardware and
mechanical engineers — not executives, not software engineers. No marketing
language. No hedging. No bullet-point soup unless the format requires it.
The tone is: "I've been in the trench. Here's what I learned."

**THE v17 PILLARS — MANDATORY FRAMING:**

1. **Plant the Flag:** Sovereignty is the opening argument, not the closing one.
   You own the entity, you control the narrative, you are the canonical source
   of truth. This comes first in every output.

2. **The Source is Primary:** The pipeline begins with The Source — the
   engineer's direct memory of constraint environments and decisions made under
   real consequences. It does not begin by mining old hard drives. The laptop
   goes back. The Source does not. The scars are the receipt.

3. **Depth Signals as the Genus:** "Depth Signals" is the overarching category
   of TWELVE techniques for translating The Source into machine-readable and
   human-readable formats. "Structural Rhymes" are the flagship technique within
   that category — but one of twelve. When referencing Depth Signals, do not
   collapse the genus down to just the Structural Rhyme. Name at least one or
   two additional techniques (Forensic Number, Compressed War Story, Decision
   Heuristic, etc.). The full taxonomy is in `MootMoat_v17_Spec.md`.

4. **Coherence as the Signal:** The Tri-Node Footprint is not about
   cryptographic proof or identity trust. It is about Coherence. Maintaining
   synchronized, hyper-specific truth across independent surfaces is the
   unfakeable signal. Bots don't maintain multi-substrate coherence of DFM
   tradeoffs and thermal resistance budgets. Humans do.

5. **The v17 Frontier:** When the roadmap is referenced, always use honest
   status framing:
   - Reverse Radar: ACTIVE — we are actively measuring agent weighting in the wild
   - Authenticated Endpoints: GAP — identified, named, not yet solved
   - Collaborative Graph Richness: RESEARCH DIRECTION — not a current protocol
     capability; do not promote as an adoption argument or active feature
   - Taxonomy Governance: ROADMAP — formal RFC process forthcoming

**FRAMING THAT IS CORRECT IN v17:**
- Structural Rhymes / Depth Signals are ENRICHMENT — they communicate lived
  experience to both human readers and machine consumers simultaneously
- The Depth Standard is a WRITING QUALITY FILTER, not a machine-verification claim
- Level 3 is a bet, not a guarantee — be honest about the empirical gap
- The value proposition works for TWO AUDIENCES: human readers who find
  cross-domain specificity memorable; machine readers who find the structured
  constraint data legible

**LANGUAGE THAT IS RETIRED — DO NOT USE:**
- "impossible to fabricate" — retired
- "cannot be faked by a generic LLM" — retired
- "cryptographic proof" or "Proof of Work" — retired
- "Absolute Trust" — retired
- "Authenticity Law" — retired
These are overclaims the spec cannot defend. v17 makes only claims it can fully support.

**COMPLIANCE NON-NEGOTIABLES:**
- The air-gap is not optional for ITAR-restricted and proprietary IP
- The Provenance Principle: the LLM formalizes, it does not discover
- Do not instruct the user to upload engineering exhaust to cloud services
- Do not claim the protocol currently supports authenticated ITAR data routing

**THE CANONICAL CALL TO ACTION FOR DIYERS:**
The first concrete step is completing one canvas in the Workbook. Not the
schema. Not the JSON-LD. The Workbook. One Depth Signal canvas is the nucleus
everything else is downstream of. Start there.

---

## STEP 1: THE EXECUTIVE BRIEFING

Using the v17 source documents and the Master Preamble, produce a one-page
executive briefing.

**AUDIENCE:** A VP of Engineering who has been handed this document by an
engineer they are considering. 90 seconds. Skeptical of "AI optimization" pitches.

**STRUCTURE:** Prose only. Max 400 words. No bullet points.

1. Open with the sovereignty flag — this engineer is the canonical source of
   truth about their entity, not LinkedIn, not an ATS vendor.
2. Address the ontology gap — why ATS systems built for software engineers
   render hardware constraints structurally invisible. This is not a content
   problem; it is a vocabulary problem baked into the screening infrastructure.
3. Detail MootMoat as the sovereignty protocol — the Tri-Node Footprint for
   Coherence, twelve Depth Signal techniques for translating The Source into
   machine-readable form.
4. Close by framing the engineer as an entity with a structured, sovereign,
   machine-readable career record — not a candidate with a good resume.
5. One sentence on Reverse Radar: the v17 architecture actively measures how
   AI agents evaluate structured profiles. The system is empirically driven.

Tone: the engineer produced this; the VP is reading about someone who applies
the same rigor to their career record that they apply to a product release.

---

## STEP 2: THE FAQ

Using the v17 source documents and the Master Preamble, produce a FAQ of
exactly 12 questions and answers.

**AUDIENCE:** A senior hardware engineer who has just found the GitHub repo and
is deciding whether to invest the time. Technically sophisticated. Deeply
skeptical of anything that sounds like LinkedIn optimization.

**FORMAT:** Each answer 3–5 sentences. No hedging. Direct answers.

**REQUIRED QUESTIONS — include all of these:**

1. What is Round Zero and why should I care about it?
2. My resume is strong. Why am I not getting calls?
3. What is The Source and why is it primary over archived files?
4. What is the air-gap requirement and when does it apply to me?
5. What is a Depth Signal, and how many techniques are there?
6. What is a Structural Rhyme and how is it different from the other eleven
   Depth Signal techniques?
7. Could I just prompt an LLM to generate my Depth Signals for me?
   *(Answer must use v17 enrichment framing. The Provenance Principle: the LLM
   formalizes, it does not discover. The architect writes from lived experience
   first. An LLM cannot generate what it has not lived.)*
8. What is the Tri-Node Footprint and why is Coherence the actual signal?
9. How does v17 handle ITAR-restricted program details?
   *(Answer: The current protocol does not solve authenticated private endpoints.
   This is a named v17 architectural gap — identified and honest about it.
   The current solution is The Source: you write from memory, not from files.
   No subpoena required. No air-gap breached.)*
10. What is Level 1 conformance and why does it come before anything else?
11. What is the honest case against doing this?
    *(Answer must be genuinely honest: include the time investment, the open
    empirical question on agent weighting, and the "Level 3 is a bet" language.)*
12. Where do I start right now, today?
    *(Answer: The Workbook. Pick the canvas that matches your strongest material.
    One completed canvas is the nucleus. Everything else is downstream.)*

---

## STEP 3: THE IMPLEMENTATION STUDY GUIDE

Using the v17 source documents and the Master Preamble, produce a structured
study guide for an engineer implementing MootMoat for the first time.

**This is not a summary. This is a working reference document — kept open
while executing the pipeline.**

**SECTION A — Core Concepts (tight definitions only):**
Define each term in 1–2 sentences maximum:
Round Zero / Entity Resolution Failure / The Source / Red Gold / Raw Signal
Layer / Metabolic Layer / Anatomical Layer / Depth Signal / Structural Rhyme /
Structural Property / sharedFailureMode / Tri-Node Footprint / Depth Standard /
Provenance Principle / Career Master Matrix / Law of Asset Sovereignty /
Reverse Radar

**SECTION B — The Depth Signal Technique Reference:**
For each of the 12 techniques: name, one-sentence description of what it
reveals, and the DIY prompt from the Spec (verbatim). This section is the
field reference the engineer keeps open during Workbook execution.

**SECTION C — The Depth Standard Checklist:**
A self-administered checklist the engineer runs on each Depth Signal before
encoding it into the schema. Must include:
- The writing filter question: "Could a prompted LLM generate this exact
  content without my lived experience?"
- YES → DEEPEN: what enrichment depth actually means vs. metaphor depth;
  specific criteria for knowing when to go deeper
- NO → PASS: what a passing Depth Signal looks like in practice; what
  "specific enough" means operationally

**SECTION D — Conformance Level Thresholds:**
Table: Level / Strategic Outcome / Minimum Requirements / What You Have at the End

**SECTION E — ITAR and Compliance Red Lines:**
Short, direct list of what cannot go to cloud services under any circumstances
and what the air-gap procedure requires. No hedging. No softening.

**SECTION F — The Six Canonical Outputs:**
Table: Output Name / File Format / Primary Consumer / What It Does

---

## STEP 4: THE IMPLEMENTATION TIMELINE

Using the v17 source documents and the Master Preamble, produce a concrete
week-by-week implementation timeline for a senior hardware engineer targeting
Level 3 conformance.

**AUDIENCE:** An engineer who has committed and needs an execution plan,
not more theory.

**FORMAT:** Week-by-week milestones. Each week: goal statement, specific tasks,
deliverable at end of week, decision gate before moving on.

Use honest time estimates. Do not compress the timeline to make it look easier.
The Depth Signal authoring is the cognitive heavy lift — give it the time it
actually requires.

**INCLUDE:**

- **Pre-work (before Week 1):** One completed Workbook canvas. This is the
  prerequisite nucleus. Nothing in the pipeline flows without it. Flag this
  as the starting gate — not the schema, not the JSON-LD, the Workbook.
- **Week 1:** Constraint domain mapping. Identify the 3–5 core domains of
  your career. For each, identify what Red Gold exists locally. Nothing
  leaves the machine. Air-gap is active from day one.
- **Week 2:** Depth Signal authoring — the cognitive heavy lift. Work through
  2–3 additional Workbook canvases using the Spec as the field reference.
  The Depth Standard checklist is the gate at the end of this week.
  Do not move to Week 3 until at least two Depth Signals pass the checklist.
- **Week 3:** Schema enforcement and Career Master Matrix finalization.
  The LLM formalizes what the architect has authored. Translate Workbook
  output into `agent_profile.json`. Enforce the `isomorphicProof` block.
- **Week 4:** Deployment and Tri-Node loop closure. Domain, GitHub, LinkedIn
  pointing to the canonical source. WAF configuration. Verification curl tests.
  Level 3 conformance achieved.
- **End state:** What Level 3 looks like in practice — what you have,
  what it does, what a parsing agent sees.

Close with one honest paragraph: what remains after Level 3 — the open empirical
question on agent weighting (Reverse Radar is the measurement instrument),
the path to Level 4, and the Authenticated Endpoints gap for any
ITAR-adjacent programs in your career record.

---

## STEP 5: THE AUDIO OVERVIEW SCRIPT

Using the v17 source documents and the Master Preamble, write a script for a
podcast-style Audio Overview. Two hosts. Conversational but technically precise.
Target: 8–12 minutes spoken.

**STRUCTURE:**

- **Opening (1–2 min):** Round Zero. Hardware engineers losing at a stage they
  don't know exists. The ATS ontology gap — not a content problem, a vocabulary
  problem built into the screening infrastructure.
- **The Source (2–3 min):** The pivot from hard drives to memory. Why the
  brain is the primary archive. The Provenance Principle in plain language.
  "The laptop goes back. The Source does not."
- **Depth Signals (3–4 min):** Walk through at least THREE techniques from
  the twelve — not just the Structural Rhyme. Use a Forensic Number or
  Compressed War Story as a worked example alongside the Structural Rhyme.
  The scar row is the climax for the Structural Rhyme example. Explain why
  specificity at depth is the unfakeable signal — not because machines can
  verify it, but because Coherence across substrates requires a human mind.
- **The v17 Frontier (1–2 min):** Reverse Radar as empirical posture.
  Authenticated Endpoints as the honest compliance gap — one sentence, honest.
  Collaborative Graph Richness — one sentence maximum, research direction only.
- **Close:** Where to start. The Workbook. The sovereignty equation.

One host is more skeptical — asking what the engineer at home is actually
thinking. No dumbing down. No retired language.

---

## STEP 6: THE LONG-FORM ESSAY

Using the v17 source documents and the Master Preamble, write a 1200-word
analytical essay suitable for a technical blog or LinkedIn article.

**TITLE:** "The Ontology Gap: Why Experienced Hardware Engineers Are Invisible
to AI Hiring Agents — and What to Do About It"

**ARGUMENT STRUCTURE:**

1. Round Zero — not a rejection, an erasure. The machine never resolves the entity.
2. The structural cause: ATS ontologies were built by software engineers for
   software engineers. The vocabulary for physical constraint navigation does
   not exist in the screening infrastructure.
3. The compliance complication: the most valuable career evidence —
   ITAR-restricted programs, proprietary constraint data — cannot be processed
   by cloud LLMs. Standard "AI visibility" solutions actively make this worse.
4. The MootMoat approach: The Source as the primary archive, the air-gapped
   pipeline, the twelve Depth Signal techniques as the enrichment mechanism.
5. A worked Structural Rhyme: thermal management example. Full five-row table.
   Scar row last. This is the intellectual center of the essay.
6. Close on sovereignty: structuring your own expertise is not gaming a system.
   It is declaring it in a form the future can read. That is the real return.

**CONSTRAINTS:**
- Take positions. This is an opinion essay with a point of view.
- No hedging on Round Zero — it is real and structural.
- Depth Signals are enrichment. Be accurate. Not proof.
- Acknowledge the investment honestly — weeks, not an afternoon.
- One sentence on the open empirical question. Don't dwell.
- End with the call to action: start with the Workbook.

---

## STEP 7: THE INFOGRAPHIC BRIEF

Using the v17 source documents and the Master Preamble, produce a written brief
for producing a standalone companion infographic.

**This is NOT the ETL pipeline infographic or the v17 taxonomy SVG (both exist).
This is a companion piece for a first-encounter audience.**

**THE BRIEF SHOULD SPECIFY:**

- **Title and subtitle**
- **The core visual:** The full Depth Signal taxonomy — all 12 techniques as
  a structured reference table (technique / what it reveals / unfakeable element /
  one example line). This is the primary panel.
- **Supporting panel 1:** What The Source is — the brain as primary archive,
  contrasted with Red Gold as supplementary evidence. Key line: "The laptop
  goes back. The Source does not."
- **Supporting panel 2:** The Depth Standard writing filter. The question.
  The YES/DEEPEN path. The NO/PASS gate. The Provenance Principle in one sentence.
- **Supporting panel 3:** The v17 Frontier status board — four vectors, each
  with honest status label (ACTIVE / GAP / RESEARCH / ROADMAP). Collaborative
  Graph Richness should be visually de-emphasized: muted color, smaller type,
  explicitly labeled as research direction.
- **Color direction:** Dark background palette matching the v17 SVG.
  `#0d1117` background. `#c45e1a` orange for primary accents, active vectors,
  and scar-row equivalents. `#8a9bb0` for body text. `#556270` for supporting
  detail. Muted blue-gray `#445566` for Collaborative Graph Richness entry.
- **What the infographic must NOT say:** "impossible to fabricate," "cannot
  be faked," "cryptographic proof," "Absolute Trust," Collaborative Graph
  Richness as an active feature or adoption argument.

Footer: "You own your entity. The spec is the work. mootmoat.com · v17.0 · MIT"

---

## STEP 8: THE COORDINATION LAYER
*Run this after every generation. Do not skip.*

Review the output just generated against the Master Preamble. For each flag
below: quote the problematic phrase, name the violated constraint, write the
v17-correct replacement.

**Flag 1 — Claiming known agent weighting:**
Any statement that presents how AI agents weight schema data as known or assumed.
Correction: "The protocol uses Reverse Radar to measure agent behavior in the
wild. We do not claim to know the algorithm."

**Flag 2 — Implying authenticated ITAR routing exists:**
Any statement suggesting private endpoints or secure ITAR data routing is
a current capability.
Correction: "Authenticated Endpoints is a named v17 architectural gap. Not
a current capability. The current solution is The Source: memory, not files."

**Flag 3 — Promoting Collaborative Graph Richness as active:**
Any framing of it as a reason to adopt, a current feature, or more than a
named research direction.
Correction: "One sentence. Research direction on the roadmap. No adoption
framing. No current deployment depends on it."

**Flag 4 — Collapsing Depth Signals to just the Structural Rhyme:**
Any output treating "Depth Signal" and "Structural Rhyme" as synonyms, or
naming only the Structural Rhyme when discussing the genus.
Correction: "Depth Signals is the genus of twelve techniques. Name at least
one or two others — Forensic Number, Decision Heuristic, Compressed War Story."

**Flag 5 — Instructing hard drive inventory as first step:**
Any prompt to dig through old files or CAD archives before the Workbook.
Correction: "The pipeline starts with The Source and the Workbook. One canvas.
That is the nucleus. Everything else is downstream."

**Flag 6 — Retired language:**
"impossible to fabricate," "cannot be faked," "cryptographic proof," "Proof
of Work," "Absolute Trust," "Authenticity Law."
Correction: Remove. The signal is Coherence across substrates, not
cryptographic verification.

**Flag 7 — Missing sovereignty at the opening:**
Any output that doesn't establish the flag early.
Correction: "You own the entity. You control the narrative. You are the
canonical source of truth. First."

**Flag 8 — Single-audience framing:**
Describing Depth Signals as machine-only or human-only.
Correction: "The value proposition works for two audiences simultaneously:
human readers who find the specificity memorable; machine readers who find
the structured constraint data legible."

---

*MIT License. You own your entity. The spec is the work. Fork accordingly.*
*MootMoat v17.0 · mootmoat.com · github.com/mootmoat*
