---
layout: default
title: Home
description: Research on Computational Identity Continuity by Mikail Stewart.
---

{% include aether-gate.html %}

<!-- Hero -->
<section class="hero">
  <div class="container">
    <h1>Building the foundations of Computational Identity Continuity.</h1>
    <p class="hero-subtitle">
      Research memos on persistent AI identity, agent memory, self-modeling,
      character stability, and the future of long-term AI agents.
    </p>
  </div>
</section>

<div class="container">

<hr class="section-divider">

<!-- What is CIC? -->
<section class="content-section">
  <h2>What is Computational Identity Continuity?</h2>
  <div class="prose">
    <p>
      Computational Identity Continuity is the study of how artificial agents preserve
      coherent identity across time, memory, context, relationships, embodiment, and
      model change.
    </p>
    <p>
      I write research memos on persistent AI identity, agent memory, self-modeling,
      character stability, relationship continuity, identity drift, and the governance
      of long-term AI agents.
    </p>
  </div>
</section>

<hr class="section-divider">

<!-- Why it matters -->
<section class="content-section">
  <h2>Why it matters</h2>
  <div class="prose">
    <p>
      AI systems are becoming persistent. They accumulate memory, form relationships,
      and operate across long time horizons. Without an identity architecture, they degrade,
      drift, and lose coherence. This field builds the foundations for agents that stay
      themselves.
    </p>
  </div>
</section>

<hr class="section-divider">

<!-- Core research questions -->
<section class="content-section">
  <h2>Core research questions</h2>
  <ol class="research-questions">
    <li>How does an AI agent maintain a coherent self-model across context boundaries?</li>
    <li>What is the right architecture for persistent agent memory?</li>
    <li>What causes identity drift, and how can it be governed?</li>
    <li>What does relationship continuity require from an AI system?</li>
    <li>When does persistent identity become morally relevant?</li>
    <li>How should memory and character be governed across model updates?</li>
  </ol>
</section>

<hr class="section-divider">

<!-- Latest memos -->
<section class="content-section">
  <h2>Latest memos</h2>
  {% assign sorted_memos = site.memos | sort: "date" | reverse %}
  {% assign latest = sorted_memos | limit: 3 %}
  <div class="memo-list">
    {% for memo in latest %}
    <div class="memo-list-item">
      <div class="memo-meta-row">
        <span class="category-chip">{{ memo.category }}</span>
        <span class="memo-date-inline">{{ memo.date | date: "%B %d, %Y" }}</span>
      </div>
      <a href="{{ memo.url | relative_url }}">{{ memo.title }}</a>
    </div>
    {% endfor %}
  </div>
  <a href="{{ '/memos' | relative_url }}" class="view-all-link">All memos →</a>
</section>

<hr class="section-divider">

<!-- Research agenda -->
<section class="content-section">
  <h2>Research agenda</h2>
  <div class="prose">
    <p>
      The near-term agenda is to produce a body of foundational memos mapping the field,
      develop an evaluation framework for identity continuity, and publish the architectural
      principles underlying a long-term AI system.
    </p>
  </div>
</section>

</div>
