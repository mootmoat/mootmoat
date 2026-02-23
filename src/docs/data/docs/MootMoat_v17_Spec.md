MOOT MOAT  
v17.0 — Project Specification & Open Standard  
The Open Standard for Agentic Professional Identity

Status: Open-Source Alpha · Active Infrastructure Build  
Owner: Erik Norris, Principal Mechanical Architect  
License: MIT  
Org: github.com/mootmoat  
Spec Namespace: mootmoat.com/vocab/v1 (defined; deployment in progress)  
Revision: February 2026

"I built this because I had no other choice. Thirty years of engineering exhaust — real constraints, real failures, real scars — was invisible to the machines now running the hiring market. This document is both the autopsy of that problem and the architecture of its solution." — Erik Norris

---

PART I — PROJECT RATIONALE & SPECIFICATION CONTEXT

1. Plant the Flag: The Sovereign Entity  
You own the entity, you control the narrative, you are the canonical source of truth. MootMoat is the architecture for expressing that truth across independent substrates. For decades, the ATS ontologies gatekeeping the hiring market were built by and for software engineers. They rendered the physical constraint navigation of hardware architecture entirely invisible. This framework is how you take it back.

2. The Problem: Round Zero  
The 2026 hiring market has a gatekeeper most engineers don't know exists. Before a human recruiter reads your resume, an AI parsing agent reads it first. It performs Entity Resolution: mapping you — your roles, skills, projects, constraint domains, career arc — onto a structured knowledge graph. If it cannot resolve you into a coherent entity, it does not surface you. You do not fail a screen. You are never screened at all.  
This is Round Zero. You lose it silently, before the game starts.

3. The Source: The Primary Archive  
The extraction pipeline does not begin with an air-gapped hard drive. It begins with The Source. The Source is the primary archive of lived experience — the engineer's direct memory of constraint environments, failure events, and decisions made under real consequences. It predates every file, every log, every ECO. The laptop goes back. The Source does not. The scars are the receipt. The physical "Red Gold" (CAD files, crisis emails) is supplementary evidence, not the mandatory starting line.

4. Coherence as the Signal  
The Tri-Node Footprint is not about cryptographic proof; it is about Coherence. Maintaining synchronized, hyper-specific truth across independent surfaces (your domain, GitHub, LinkedIn) using the exact same jagged Depth Signals is the unfakeable signal. Bots do not maintain multi-substrate coherence of thermal resistance budgets and DFM tradeoffs. Humans with real constraints do.

---

PART II — DEPTH SIGNALS: THE FULL TAXONOMY

"Depth Signals" is the overarching genus of techniques used to translate The Source into machine-readable and human-readable formats. The Structural Rhyme is the flagship technique — documented in greatest depth because it is the primary schema mechanism — but it is one of twelve. The bet underlying all twelve is the same: specificity at depth communicates cognitive architecture that generic content cannot replicate.

The Workbook contains one canvas (Provenance Chain) as the entry point. The full taxonomy lives here.

---

DEPTH SIGNAL 01: THE PROVENANCE CHAIN

What It Reveals: Accumulated failure depth — the full lineage of a design decision, not just the current solution.

A Provenance Chain traces a current design feature back through its lineage of failures and corrections. The chain is proof that expertise accumulates — each link is an event, a correction, a lesson carried forward. The current solution is load-bearing in ways the spec doesn't document.

Example:  
"The clip geometry on the current thermal interface came from a failure in 2019, which came from a compliance miss in 2016, which came from a misread of a materials data sheet in 2012. The clip is three mistakes thick. That's why it works."

The Unfakeable Element: Provenance chains require knowing all the intermediate failures, not just the current solution.

DIY Prompt: Pick a design feature you consider battle-hardened. How many failures is it thick? Can you trace the full lineage?

---

DEPTH SIGNAL 02: THE STRUCTURAL RHYME

What It Reveals: Cross-domain cognitive architecture — the shared invariant binding two constraint environments at the lowest level of mechanism.

A Structural Rhyme maps a physical constraint domain isomorphically onto a digital or computational analogue. The shared failure mode is the proof. The rhyme works for human readers because it is specific and memorable. It works for machine readers because it is structured, attached to a schema, and makes ATS-invisible expertise legible via the isomorphicProof block in the JSON-LD.

Example:  
Thermal runaway in a battery pack maps to context window collapse in an LLM. Both accumulate a debt silently. Both collapse abruptly. ΔT monitoring cadence corresponds to perplexity scoring. The failure mode in both cases is the same: the system looks fine until it doesn't.

The Provenance Principle: The LLM formalizes the Structural Rhyme; it does not generate it. The architect writes from lived experience first. Schema enforcement is the LLM's role, not discovery.

The Unfakeable Element: The shared failure mode at depth — specific enough that only someone who has operated in both domains could have written it.

DIY Prompt: What physical constraint domain have you lived in longest? What computational or organizational domain has the same failure signature? Write until a prompted LLM couldn't have produced what you wrote.

---

DEPTH SIGNAL 03: THE FORENSIC NUMBER

What It Reveals: Measurement precision — the jagged specificity of instruments, not the round numbers of estimates.

A Forensic Number is a specific measurement that could not exist without the event. Not "reduced operating temperature" — 75°C → 22.6°C. The delta is the fingerprint. Round numbers come from specs. Jagged numbers come from instruments.

Example:  
"75°C → 22.6°C." An AI generating this content produces 70°C → 25°C. You produced 75°C → 22.6°C because that's what the thermocouple read.

The Unfakeable Element: The jagged specificity is the fingerprint. Estimates are round. Measurements are not.

DIY Prompt: What's the most specific number you still remember from a failure event? Where did it come from? What would have happened if it had been 5% different?

---

DEPTH SIGNAL 04: THE COMPRESSED WAR STORY

What It Reveals: Mastery of narrative compression — the essential sentence that survives after years of iteration.

A Compressed War Story is a single sentence that encodes an entire failure event and expands on contact. The compression is the signal — it means you've told this story enough times to find the essential load-bearing sentence.

Example structure: "The [component] that [unexpected behavior] during [constraint condition] because [root cause no one saw coming]."

Example: "The headphone jack fire drill — 120m MTTR to 10m." Five words that contain a full forensic investigation, a manufacturing crisis, a redesign, and a quantified outcome.

The Unfakeable Element: Compression requires mastery. You cannot compress a story you only half-understand. The essential sentence reveals what you consider load-bearing.

DIY Prompt: What failure in your career do you tell in one sentence? What does that sentence leave out, and why is that the right thing to leave out?

---

DEPTH SIGNAL 05: THE CONSTRAINT PERSONALITY

What It Reveals: The relationship you developed with a physical domain — the character it formed through your specific encounters.

Anthropomorphize a constraint domain based on how it has surprised you. Every constraint domain has characteristic behavior — the way it deceives, the way it announces failure, the way it rewards or punishes specific approaches. Two engineers with thirty years of thermal experience will anthropomorphize it differently based on what it specifically taught them.

Examples:  
"EMI is a liar. It behaves perfectly in isolation and only reveals itself in the presence of everything else. You cannot test for it — you can only create the conditions where it has nowhere to hide."  
"Thermal is patient. It will let you build the whole product before it tells you what you got wrong. By then the decision is three revisions old."

The Unfakeable Element: Generic descriptions of constraint domains are neutral. Personality descriptions are personal. The character was formed by specific encounters.

DIY Prompt: If your primary constraint domain were a person, what would their most dangerous personality trait be? What event taught you that?

---

DEPTH SIGNAL 06: THE DECISION HEURISTIC

What It Reveals: Failure-derived rule making — the specific heuristic that crystallized from a specific class of event.

A Decision Heuristic is a rule of thumb derived from failure, not a best practice from a textbook. It encodes the failure mode you were most afraid of, which reveals your constraint model. The specificity of the exception clause is the fingerprint.

Examples:  
"I never trust a thermal model that hasn't been validated at the asymptote. Room temperature agreement means nothing. The model that matches at 75°C is the only model I believe."  
"Any compliance document that fits on two pages wasn't written by someone who's been audited."

The Unfakeable Element: Heuristics from textbooks are general. Heuristics from failure are specific and often contain an implicit "because I watched someone not do this."

DIY Prompt: What's a rule you follow that you couldn't have gotten from a course? What's the event that produced it? Can you state it in one sentence?

---

DEPTH SIGNAL 07: THE COUNTERFACTUAL

What It Reveals: Failure prevention depth — what you understood well enough to prevent, and the named consequence magnitude.

Name the specific catastrophe that didn't happen because of a decision you made. Generic counterfactuals are vague. Specific counterfactuals name the failure mode, the threshold, and the consequence magnitude.

Example:  
"If we hadn't caught the sensor lag masking the temperature spike in pre-production, that product would have shipped with a thermal runaway that manifested silently at ambient temperatures above 35°C. The recall would have been in the eight figures."

The Unfakeable Element: The specificity proves you understood the system well enough to know exactly what you were preventing.

DIY Prompt: What's the worst thing that didn't happen in your career because of something you caught? How specifically can you describe what would have happened?

---

DEPTH SIGNAL 08: THE THRESHOLD VOCABULARY

What It Reveals: Private language for near-failure — vocabulary coined under pressure that has no textbook equivalent.

Every engineer who has operated in constraint environments develops vocabulary for the territory between "working fine" and "about to fail." That vocabulary is a cognitive fingerprint. You cannot generate it from a prompt — it came from watching a specific failure pattern enough times to need a name for it.

Examples:  
"I call it the 'comfortable lie' — the operating region where every metric is green but the system is accumulating a debt it hasn't declared yet. Thermal runaway lives in the comfortable lie."  
"We called it 'the last good measurement' — the data point right before the cascade. The one that made everyone feel safe."

The Unfakeable Element: Vocabulary invented under pressure is distinctive. It has a specific origin and a specific use case that pre-dates any formal definition.

DIY Prompt: What terms do you use for engineering phenomena that you've never seen in a textbook? Where did that language come from?

---

DEPTH SIGNAL 09: THE TOOL AS CHARACTER

What It Reveals: Epistemic style under crisis — what you trust when the stakes are real, and what that trust is based on.

The specific tool you reached for in a crisis reveals your constraint model more clearly than any skill list. Not "proficient in SolidWorks" — the tool you trusted when everything was on the line, and why.

Example:  
"When a thermal crisis hits, the first thing I open is the resistance calculator I built in Excel in 2003. Not FEA. Not the simulation suite. The calculator — because under time pressure I need a model I can interrogate. One where I can see every assumption and change any of them in real time. FEA models are black boxes at 3am."

The Unfakeable Element: Tool preference under crisis reveals epistemic style. What you trust when everything is on the line is a statement about how you think, not just what you know.

DIY Prompt: What's the tool you reach for when the stakes are highest and time is shortest? Why that one and not the more sophisticated option?

---

DEPTH SIGNAL 10: THE NEGATIVE SPACE EXPERTISE

What It Reveals: Prohibition-encoded failure history — what you know not to do, and the specific event that taught each prohibition.

A curated list of prohibitions is a portrait of a career. Every "never" encodes a failure. Prohibitions from textbooks are categorical. Prohibitions from failure are contextual — they contain the specific conditions under which the rule applies.

Example format:  
"Never spec a thermal interface material without testing at production clamping force. I learned this at [program], when lab values didn't survive assembly."  
"Never accept 'within spec' as an answer for a measurement that's trending. Where it's going matters more than where it is."

The Unfakeable Element: The specific conditions on each prohibition. The contextual exception clause is unfakeable.

DIY Prompt: What are three things you will never do again in your primary constraint domain? What's the origin event for each?

---

DEPTH SIGNAL 11: THE TEMPORAL SIGNATURE

What It Reveals: Mental model of failure development — the specific stage in the project lifecycle where you intervene, and why that timing.

When you engage on a given problem — and why that specific timing — reveals your model of how failures develop. Engineers who intervene early in certain domains do so because they've watched late intervention fail.

Example:  
"I start worrying about thermal at the napkin sketch stage. By the time you have a PCB layout, the thermal decision has already been made — you just don't know it yet. Every mechanical packaging decision is a thermal decision in disguise."

The Unfakeable Element: The specific stage you name reveals the specific failure mode that taught you to move earlier.

DIY Prompt: What problem do you engage earlier in the project than most of your peers? What taught you that earlier was better?

---

DEPTH SIGNAL 12: THE MENTOR ECHO

What It Reveals: Transmitted cognitive architecture — the specific thing someone taught you that you still hear before a decision.

A Mentor Echo is a living transmission. It encodes the cognitive architecture of someone who shaped yours, filtered through the specific moments where you heard it matter. Generic wisdom sounds like a poster. Mentor Echos sound like a voice — they have the rhythm of the person who said it and the context where you first understood what they meant.

Example:  
"My first engineering manager told me 'if you can't draw the heat path, you don't understand the problem.' I still draw the heat path before I touch any model. Every time."

The Unfakeable Element: The specific voice and the specific moment of understanding. You cannot fabricate a transmission.

DIY Prompt: What's something a specific person taught you that you still hear in your head before a decision? Can you name the moment you understood it was true?

---

DEPTH SIGNAL TAXONOMY REFERENCE

| # | Technique | What It Reveals | The Unfakeable Element |
|---|-----------|-----------------|----------------------|
| 01 | Provenance Chain | Accumulated failure depth | The full lineage, not just the solution |
| 02 | Structural Rhyme | Cross-domain cognitive architecture | The shared failure mode at depth |
| 03 | Forensic Number | Measurement precision | The jagged specificity of instruments |
| 04 | Compressed War Story | Mastery of narrative compression | The essential sentence after iteration |
| 05 | Constraint Personality | Relationship with a physical domain | The character formed by specific encounters |
| 06 | Decision Heuristic | Failure-derived rule making | The specific exception clause |
| 07 | Counterfactual | Failure prevention depth | The named consequence magnitude |
| 08 | Threshold Vocabulary | Private language for near-failure | Vocabulary coined under pressure |
| 09 | Tool as Character | Epistemic style under crisis | Trust calibrated by real-stakes experience |
| 10 | Negative Space | Prohibition-encoded failure history | Contextual conditions on each rule |
| 11 | Temporal Signature | Mental model of failure development | The stage-specific intervention timing |
| 12 | Mentor Echo | Transmitted cognitive architecture | The voice and the moment of understanding |

Call to Action: Pick the technique that matches your natural voice and your strongest material. The bet is the same for all twelve — specificity at depth communicates cognitive architecture that generic content cannot replicate. Find your strongest material. Find the technique that fits it. Write until a prompted LLM couldn't have written what you wrote.

---

PART III — THE v17 FRONTIER: ARCHITECTURAL GAPS & ACTIVE VECTORS

v17 formally identifies the empirical and structural gaps that define the roadmap. This is not a list of failures — it is the measurement agenda.

4. The Agent Weighting Black Box & Reverse Radar  
Passing Entity Resolution is table stakes. The exact relative weight AI screening agents assign to structured constraint domain data versus keyword density remains an open empirical question. The protocol does not guess; it measures. Reverse Radar telemetry captures behavioral signals over time, generating market intelligence on how agents evaluate the schema in the wild.

5. Authentication for Private Endpoints  
The air-gap is not optional. The current protocol solves public extraction via The Source. A critical gap remains: authenticated access to detailed, ITAR-adjacent profile data. A future vector must define secure routing (e.g., encrypted JSON-LD payloads or zero-knowledge proofs) for sensitive constraint descriptions to cleared reviewers without breaking compliance.

6. Collaborative Graph Richness (Future Vector — Not Yet Implemented)  
The Tri-Node footprint secures single-player coherence. A future vector under active evaluation: if two engineers independently reference the same constraint project with consistent metadata, it could create a multi-entity coherence signal of an entirely different order. This is a named research direction, not a current protocol capability.

7. Multi-Implementor Governance  
As the taxonomy scales to include external disciplines (photonics, MEMS, high-voltage), the project requires a formal RFC process to resolve schema disputes. The governance model must aggressively defend the Provenance Principle: the LLM formalizes, it does not discover.

---

MIT License. You own your entity. The spec is the work. Fork accordingly.
