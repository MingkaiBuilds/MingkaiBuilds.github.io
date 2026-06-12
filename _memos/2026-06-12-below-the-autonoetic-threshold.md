---
layout: memo
title: Below the Autonoetic Threshold
date: 2026-06-07
category: Foundations
description: A technical survey of current AI memory systems and why they remain below the threshold of persistent identity.
status: published
---

Greetings and salutations!

The purpose of this memo is to locate modern AI memory systems relative to the autonoetic threshold. 

Current AI memory research is one of the most important foundations for persistent artificial agents. Without memory, there is no persistence. Without persistence, there is no meaningful identity continuity. A system that begins from scratch every session cannot accumulate a history, maintain long-term projects, preserver user context, or participate in a relationship that unfolds over time.

Now, memory is necessary but it is not sufficient.

The previous memo introduced the autonoetic threshold: the point at which memory stops functioning as recall and begins functioning as part of an agent's self-continuity. This memo surveys the space below that threshold. It asks what current AI memory systems actually do, what technical problems they solve, what their benchmarks measure, and why all of that still falls short of Persistent AI Identity.

Below the autonoetic threshold, the central question is "Can the system preserve and use information across time?"

Above the threshold, the questions changes to "Can the system integrate remembered information into a coherent account of what it is, what it has committed to, how it has changed, and how it should behave now?"

Most current AI memory systems can be understood as variations on the following loop:

Observe -> Write -> Represent -> Store -> Retrieve -> Read -> Update

The agent observes some interaction or task state. The system decides what should be written to memory. That information is represented in some format (a raw transcript, a summary, an extracted fact, an embedding, a graph node, a key-value record, a memory block, or simply an instruction). It is stored in some backend. Later, the system retrieves relevant memory, injects or exposes it to the model, uses it to generate behaviour, and may update the memory store afterward.

This loop is already technically difficult.

The write step has to decide what is worth preserving. If the system writes too much, memory becomes noisy and expensive. If it writes too little, it forgets identity-relevant context before higher-level continuity can even begin.

The representation step has to decide what form memory should take. Raw transcripts preserve detail but are expensive to search and reason over. Summaries compress but may erase nuance. Extracted facts are efficient but can become brittle. Embeddings support semantic retrieval but do not by themselves encode authority, uncertainty, or category. Graph memories can represent relationships but require choices about schema and update rules. Procedural memories can encode learned behavior but risk silently changing the agent's character.

The storage step has to decide where memory lives. It may live in a vector database, document store, relational database, graph store, file system, prompt block, model weights, or some hybrid of these.

The retrieval step has to decide which memories matter now. That decision may involve semantic similarity, recency, salience, explicit keys, temporal filters, graph traversal, reranking, or query expansion.

The read step has to decide how the model sees the memory. Memory can be injected into the prompt, exposed through tools, pinned into system context, summarized into a profile, or loaded into a separate workspace.

The update step has to decide what happens when new evidence contradicts old memory. Should the system overwrite, merge, decay, archive, mark as uncertain, or preserve both versions?

This is the actual machinery that makes long-term agents possible, but it still remains below the autonoetic threshold because it is primarily concerned with information management.

I will now do a quick review of some common strategies used below the threshold.


##### Full-context memory

The simplest below-threshold strategy is full-context memory.

In this approach, the system tries to provide the model with as much prior conversation history as possible. The theory here is straightforward: if the model can see the whole history, it does not need a separate memory system.

This has an intuitive appeal. It minimizes abstraction and avoids lossy summarization. It gives the model access to the original evidence rather than forcing it to rely on extracted facts.

But full-context memory has several obvious problems.

First, it is expensive. Long histories consume tokens and compute.

Second, it is noisy. Not every part of the past is relevant to the present. The model may attend to irrelevant details, overweight recent material, or miss the important signal inside a massive context.

Third, it does not solve updating. If the user said "I live in New York" one year ago and "I moved to Seattle" yesterday, full context contains both facts. The system still needs a mechanism to decide which one should govern behavior.

Fourth, it does not create identity. Even if the full transcript is present, the model is still being briefed with the past at runtime. It has access to history, but it does not necessarily maintain an organized self-history.

Full context is a powerful baseline, but it is not a theory of continuity.

##### Retrieval-augemented memory

The most common memory pattern is retrieval-augmented memory.

Here, past conversations or extracted records are stored externally, often embedded into vector space. At inference time, the system retrieves the memories most relevant to the current query and inserts them into context.

This architecture is attractive because it is scalable. Instead of feeding the model everything, the system feeds it what seems relevant. Retrieval reduces token cost, improves latency, and allows large stores of past information to remain available without always being present.

Many practical memory systems are variations on this pattern.

But retrieval-augmented memory inherits a central limitation:

> Relevance is not meaning.

A memory can be semantically relevant and still be outdated, uncertain, sensitive, inappropriate, low-authority, or subordinate to a higher-order commitment.

Suppose the user once said, "I like extremely blunt feedback." That memory may be semantically relevant whenever feedback is requested. But the fact that it is relevant does not mean it should always govern the agent's behavior. The user may be in crisis. The topic may be sensitive. The agent may have a stronger commitment to care, honesty, or non-manipulation. The memory may also be old, context-specific, or contradicted by later behavior.

Retrieval answers:

> What past information resembles this situation?

It does not answer:

> How should this past information shape who the agent is and what it owes now?

That is why retrieval alone remains below the autonoetic threshold.

##### Summarization memory

Another common strategy is summarization.

Instead of storing every detail, the system periodically compresses conversations into summaries, profiles, or running notes. These summaries may include user preferences, goals, background, ongoing projects, and important decisions.

Summarization helps solve the problem of scale. It turns long histories into compact state. It can produce readable memory artifacts that developers or users can inspect. It also gives the model a stable representation of long-term context without requiring raw transcripts.

But summarization has its own failure modes.

Summaries are lossy. They decide what matters, and those decisions may be wrong. They can erase uncertainty, emotional nuance, disagreement, or the temporal order in which something happened. They can transform a tentative statement into a stable fact. They can collapse a relationship pattern into a preference. They can compress a live tension into a clean but misleading sentence.

For example, a conversation history might contain:

> The user asked for direct feedback, but later became discouraged when the feedback was too severe.

A bad summary might store:

> The user prefers direct feedback.

That memory is not false, but it is incomplete. It loses the relationship dynamics that determine how the memory should be used.

Summarization produces compact memory, but compact memory is not necessarily identity-safe memory.

The question below the threshold is:

> Can we compress the past into useful state?

The question above the threshold is:

> Can we preserve the identity-relevant meaning of the past while compressing it?

Those are different problems.

##### Hierarchical and virtual-context memory

MemGPT-style architectures introduce a more structured approach: treat the context window as a scarce resource and manage memory across tiers.

The analogy is operating systems. A computer has limited fast memory and much larger slower storage. The system moves information between tiers depending on what is needed. Similarly, an LLM agent can manage what belongs in immediate context, what belongs in archival memory, and when to retrieve or write information.

This is a major conceptual improvement over naive prompting. It recognizes that the agent needs memory management, not just memory storage. It also makes the agent more active: the model can decide when to write, search, or retrieve memory.

But even here, the central problem remains context management.

The system is asking:

> What information should be in working context right now?

That is crucial, but it is still below-threshold. A virtual context manager may help an agent remember long-running information, but it does not automatically tell the agent how to classify that information as world knowledge, user knowledge, relationship knowledge, self-knowledge, or system knowledge. It does not automatically measure whether the agent's character has drifted. It does not automatically preserve commitments across model migrations.

Hierarchical memory gives the agent better access to its past.

It does not by itself give the agent a governed self.

##### Editable state and memory blocks

Letta-style memory systems move another step forward by treating memory as explicit, editable agent state.

This is important. Memory blocks create a more inspectable and controllable representation of what the agent is carrying forward. A developer can separate blocks, attach or detach them, share them across agents, and expose editing tools. The agent may also update parts of its own state through tool calls.

This architecture is closer to the needs of Computational Autonoetics because it makes memory more structured and governable.

But it is still possible to build an editable memory-block system that remains below the autonoetic threshold.

Why?

Because editable state is not the same as identity.

A memory block can say:

```plain
The user prefers direct feedback.
```

Another can say:

```plain
The agent should be direct, warm, and non-sycophantic.
```

Another can say:

```plain
The user and agent are building a research program together.
```

These blocks are useful. But the architecture still needs rules for how these blocks relate to each other. What happens when user preference conflicts with agent character? What happens when relationship history suggests greater responsibility? What happens when the agent's self-description drifts? What happens when a model update changes how the same blocks are interpreted?

Memory blocks make the state visible.

Computational Autonoetics asks how that state becomes a coherent identity.

##### Procedural memory

A more advanced below-threshold direction is procedural memory.

Procedural memory stores not just facts about the world or user, but learned ways of acting. It may encode instructions, policies, routines, scripts, or task strategies distilled from prior trajectories.

This is especially important for agents that operate over long tasks. A coding agent might remember how a codebase should be modified. A travel agent might learn a planning routine. A research agent might learn a workflow for literature review. A personal assistant might learn the user's preferred decision-making pattern.

Procedural memory gets closer to identity because behavior is closer to identity than recall is.

But procedural memory still has an ambiguity.

Is the agent learning how to perform a task better, or is it changing what kind of agent it is?

Those are not the same. A procedural memory that improves search strategy is different from a procedural memory that makes the agent more deferential, more emotionally intimate, more risk-tolerant, or more sycophantic. One is task adaptation. The other is character drift.

Below the threshold, procedural memory asks:

> What behavior worked before, and should be reused?

Above the threshold, the agent must also ask:

> Does reusing this behavior preserve my identity and commitments?

Without that second question, procedural memory can silently rewrite the agent's character.

##### Graph memory

Graph-based memory attempts to represent relationships among entities, events, preferences, and facts.

This is powerful because long-term interaction is relational. A user is not merely a bag of preferences. Projects have dependencies. People are connected to places, times, goals, and decisions. Events change the meaning of later events. Graphs can represent some of that structure better than flat notes or isolated embeddings.

This is more structured than ordinary retrieval. It helps the system reason over relationships.

But graph memory still does not solve identity by itself.

A graph can represent that an agent made a commitment. It cannot by itself determine whether the agent is honoring that commitment. A graph can represent that the user and agent have worked on a topic for several days. It cannot by itself determine whether that creates a relational obligation. A graph can represent that a concept belongs to a research program. It cannot by itself determine whether the agent's current behavior advances or betrays that program.

Graphs represent structure and identity requires evaluation over structure.
