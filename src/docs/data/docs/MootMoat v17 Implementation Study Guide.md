---
title: "MootMoat v17 Implementation Study Guide"
---

### MootMoat v17 Implementation Study Guide

This document serves as a working reference and field guide for engineers implementing the MootMoat v17 open standard for agentic professional identity. It is designed to be utilized during the execution of the extraction and deployment pipeline.

#### SECTION A — Core Concepts

**Round Zero**  The initial AI screening phase where parsing agents evaluate an applicant's machine-readable data before a human recruiter is involved. It is a silent gatekeeper where candidates are either mapped to a knowledge graph or discarded.**Entity Resolution Failure**  A failure at Round Zero occurring when an AI agent cannot map a candidate onto a coherent, structured knowledge graph. This results in the candidate being rendered invisible to the hiring infrastructure.**The Source**  The primary archive of an engineer’s lived experience, consisting of direct memories of constraint environments, failure events, and decisions made under pressure. It is the raw material that predates all files, logs, and external records.**Red Gold**  Supplementary physical evidence used to support The Source, such as old CAD logs, project emails, and archived failure data. While valuable, it is secondary to the engineer’s direct memory in the extraction process.**Raw Signal Layer**  The foundational layer of the career record containing unstructured data directly from The Source and Red Gold. It represents the unfiltered evidence of engineering activity before processing.**Metabolic Layer**  An intermediate layer where raw engineering data is processed and enriched through Depth Signals. It translates lived experience into a format that demonstrates cognitive architecture and judgment.**Anatomical Layer**  The structural layer of the professional identity, focusing on the roles, dates, and organizational frameworks that provide the skeletal structure for the career record.**Depth Signal**  The overarching genus of twelve techniques used to translate The Source into machine-readable and human-readable formats. They communicate cognitive architecture through extreme specificity at depth.**Structural Rhyme**  A flagship Depth Signal technique that maps a physical constraint domain isomorphically onto a digital or computational analogue. It makes ATS-invisible expertise legible through the isomorphicProof block in the JSON-LD schema.**Structural Property**  The fundamental invariant or mechanism that binds two disparate constraint environments together at a low level. It is the core logic that makes a Structural Rhyme valid.**sharedFailureMode**  The proof of a Structural Rhyme, representing the specific way two different domains collapse or fail due to the same underlying structural property.**Tri-Node Footprint**  A coherence mechanism achieved by maintaining synchronized, hyper-specific truth across three independent substrates: a canonical personal domain, GitHub, and LinkedIn.**Depth Standard**  A writing quality filter and verification process used to ensure that encoded content reflects genuine lived experience rather than generic, LLM-generated text.**Provenance Principle**  The rule stating that an LLM may only be used to formalize and structure content; it must not be used to discover or generate the underlying engineering expertise.**Career Master Matrix**  The central, structured repository of an engineer's validated career data, used as the definitive source for generating all other protocol-compliant outputs.**Law of Asset Sovereignty**  A protocol requirement that binary assets (images, CAD models, PDFs) must not be committed to a Git index; they must be stored in sovereign locations and referenced via absolute URIs.**Reverse Radar**  A v17 architectural gap currently being addressed as an active measurement vector to capture behavioral telemetry on how AI agents weight structured data versus keyword density.

#### SECTION B — The Depth Signal Technique Reference

\#,Technique,What It Reveals,DIY Prompt (Verbatim)  
01,Provenance Chain,Accumulated failure depth through the lineage of a design decision.,Pick a design feature you consider battle-hardened. How many failures is it thick? Can you trace the full lineage?  
02,Structural Rhyme,Cross-domain cognitive architecture via shared invariants.,What physical constraint domain have you lived in longest? What computational or organizational domain has the same failure signature? Write until a prompted LLM couldn't have produced what you wrote.  
03,Forensic Number,Measurement precision from instruments rather than estimates.,What's the most specific number you still remember from a failure event? Where did it come from? What would have happened if it had been 5% different?  
04,Compressed War Story,Mastery of narrative compression and load-bearing essentiality.,"What failure in your career do you tell in one sentence? What does that sentence leave out, and why is that the right thing to leave out?"  
05,Constraint Personality,The relationship and character formed through domain encounters.,"If your primary constraint domain were a person, what would their most dangerous personality trait be? What event taught you that?"  
06,Decision Heuristic,Failure-derived rule making and contextual exception clauses.,What's a rule you follow that you couldn't have gotten from a course? What's the event that produced it? Can you state it in one sentence?  
07,Counterfactual,Failure prevention depth and consequence magnitude.,What's the worst thing that didn't happen in your career because of something you caught? How specifically can you describe what would have happened?  
08,Threshold Vocabulary,Private language for near-failure coined under pressure.,What terms do you use for engineering phenomena that you've never seen in a textbook? Where did that language come from?  
09,Tool as Character,Epistemic style and calibrated trust under crisis.,What's the tool you reach for when the stakes are highest and time is shortest? Why that one and not the more sophisticated option?  
10,Negative Space Expertise,Prohibition-encoded failure history and contextual conditions.,What are three things you will never do again in your primary constraint domain? What's the origin event for each?  
11,Temporal Signature,Mental models of failure development and intervention timing.,What problem do you engage earlier in the project than most of your peers? What taught you that earlier was better?  
12,Mentor Echo,Transmitted cognitive architecture and voices of influence.,What's something a specific person taught you that you still hear in your head before a decision? Can you name the moment you understood it was true?

#### SECTION C — The Depth Standard Checklist

This checklist must be applied to every Depth Signal before it is encoded into the agent\_profile.json schema.

##### The Primary Filter Question

**"Could a prompted LLM generate this exact content without my lived experience?"**

##### YES → DEEPEN

If an LLM could have generated the content, it fails the Depth Standard and must be enriched.

* **Enrichment vs. Metaphor:**  Enrichment depth is about adding specific, jagged technical realities; metaphor depth is merely aesthetic and does not satisfy the standard.  
* **Criteria for Deepening:**  
* Replace round numbers with jagged forensic numbers (e.g., 75°C to 22.6°C).  
* Add a contextual exception clause to a heuristic (the specific condition where the rule applies).  
* Trace the lineage back one more failure link in the Provenance Chain.  
* Identify the specific instrument or tool that provided the data point.

##### NO → PASS

If the content is unique to your history and technical encounters, it passes.

* **Operational Specificity:**  A passing signal contains "jagged" data—measurements, specific component failures, or private vocabulary that exists outside of textbooks.  
* **Practical Indicators:**  The content names a specific consequence magnitude (e.g., an eight-figure recall) or a specific stage in a project lifecycle where a failure was intercepted.

#### SECTION D — Conformance Level Thresholds

Level,Strategic Outcome,Minimum Requirements,What You Have at the End  
1,Entity Resolvable,sameAs ≥3 nodes; valid JSON-LD context; /llms.txt accessible.,Immunity to silent Round Zero Entity Resolution Failure.  
2,Domain Legible,≥3 constraintDomain entries; physicalConstraintSummary populated; agentInstructions present.,ATS-invisible hardware expertise becomes machine-readable.  
3,Proof Present,≥1 isomorphicProof block; quantified outcomes in evidence projects.,Active differentiation; genuine expertise is legible to agents and humans.  
4,Vivisection Complete,All domains with isomorphicProof; careerVector populated; Reverse Radar active.,"Full protocol implementation; a sovereign, layered career record."

#### SECTION E — ITAR and Compliance Red Lines

Adherence to these red lines is a non-negotiable compliance requirement for MootMoat v17:

1. **Zero Cloud Uploads:**  No ITAR-restricted or proprietary CAD logs, crisis emails, or technical specifications may be uploaded to cloud services or LLM providers.  
2. **Local Extraction Only:**  The extraction pipeline MUST run locally. The Source and the Workbook are the only acceptable starting points for public-facing data.  
3. **No Authenticated Routing:**  The current v17 protocol does NOT support secure routing of ITAR data to cleared reviewers. This is a known architectural gap.  
4. **Sovereign Asset Storage:**  All proprietary binary assets must remain on local, air-gapped storage. Only non-sensitive, structured text data may be deployed to the public schema.

#### SECTION F — The Six Canonical Outputs

Output Name,File Format,Primary Consumer,What It Does  
The Workbook,Markdown (.md),The Engineer,Acts as the nucleus for all career extractions and initial Depth Signal drafting.  
Agent Profile,JSON-LD (.json),AI Parsing Agents,Provides the machine-readable endpoint for entity resolution and domain legibility.  
LLM Instructions,Text (.txt),AI Crawlers,Located at /llms.txt; provides direct parsing guidance to LLMs visiting the domain.  
Human Portfolio,HTML / Web,Human Recruiters,"Renders career data as a scrollable, layered view (Raw/Metabolic/Anatomical)."  
Career Master Matrix,Structured Text,The Engineer,Serves as the sovereign internal record for all validated career evidence and metadata.  
Tri-Node Footprint,Web Profiles,Screening Agents,"Synchronizes hyper-specific signals across the personal domain, GitHub, and LinkedIn."  
