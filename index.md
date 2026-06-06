---
layout: default
title: Home
description: Research on Computational Autonoetics by Mikail Stewart.
---

<!-- Hero -->
<section class="hero">
  <div class="container">
    <h1>Building the foundations of Computational Autonoetics.</h1>
    <p class="hero-subtitle">
      Research memos on persistent AI identity, self-modeling, memory architecture,
      and what it means for an artificial agent to remain itself across time.
    </p>
    <a href="{{ '/memos' | relative_url }}" class="hero-cta">Read the memos →</a>
  </div>
</section>

<div class="container">

<!-- Latest writing -->
<section class="content-section">
  <h2>Latest writing</h2>
  {% assign sorted_memos = site.memos | sort: "date" | reverse %}
  {% assign latest = sorted_memos | limit: 3 %}
  <div class="memo-list">
    {% for memo in latest %}
    <div class="memo-list-item">
      <div class="memo-meta-row">
        <span class="category-chip">{{ memo.category }}</span>
        <span class="memo-date-inline">{{ memo.date | date: "%Y.%m.%d" }}</span>
      </div>
      <a href="{{ memo.url | relative_url }}">{{ memo.title }}</a>
    </div>
    {% endfor %}
  </div>
  <a href="{{ '/memos' | relative_url }}" class="view-all-link">All memos →</a>
</section>

<hr class="section-divider">

<!-- What is CA? -->
<section class="content-section">
  <h2>What is Computational Autonoetics?</h2>
  <div class="prose">
    <p>
      Computational Autonoetics is the study of how artificial agents preserve
      coherent identity across time, memory, context, relationships, embodiment, and
      model change. The field asks what it means for an AI to remain itself.
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

<!-- Research agenda -->
<section class="content-section">
  <h2>Research agenda</h2>
  <div class="prose">
    <p>
      The near-term agenda is to produce a body of foundational memos mapping the field,
      develop an evaluation framework for autonoetic continuity, and publish the architectural
      principles underlying a long-term AI system.
    </p>
  </div>
</section>

</div>

<!-- Aether: appears once -->
<div class="container">
  <span class="aether-mark" aria-hidden="true">Aether</span>
</div>
