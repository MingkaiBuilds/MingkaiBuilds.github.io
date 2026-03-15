---
layout: default
title: "About"
description: "About Mikail Stewart (明凯) — full-stack engineer focused on NLP and product systems."
permalink: /about/
---

<div class="about-page">
  <div class="container">

    <!-- Name + role -->
    <div class="about-page__hero fade-in">
      <h1 class="about-page__name">
        Mikail Stewart
        <span class="about-page__name-chinese">明凯</span>
      </h1>
      <p class="about-page__role">Full-Stack Engineer · NLP Systems · Product</p>
    </div>

    <!-- Three sections -->
    <div class="about-sections">

      <div class="about-block fade-in">
        <p class="about-block__label">Background</p>
        <p>
          I'm a software engineer with a foundation in full-stack development and a growing
          obsession with how language models can be embedded into real products — not as features,
          but as structural layers that make the whole thing smarter.
        </p>
        <p>
          I've worked across the stack: designing PostgreSQL schemas, building FastAPI services,
          and crafting React + TypeScript interfaces that feel fast and intentional.
        </p>
      </div>

      <div class="about-block fade-in">
        <p class="about-block__label">What I'm Building</p>
        <p>
          Right now I'm shipping <strong style="color: var(--text-primary); font-weight: 400;">MoodOS</strong> —
          a journaling system that transforms daily entries into structured personal reports.
          Summary, mood score, keyword extraction, pattern insights. Think of it as a personal
          intelligence layer on top of your own words.
        </p>
        <p>
          I'm particularly interested in the intersection of NLP, personal productivity tools,
          and the design challenge of making AI output feel <em>useful rather than impressive</em>.
        </p>
      </div>

      <div class="about-block fade-in">
        <p class="about-block__label">Interests</p>
        <p>
          Language and its structure. The design of information. How great products earn daily habits.
          The philosophy of tools — why some things feel like extensions of thought and others don't.
        </p>
        <p>
          Outside of code: reading (philosophy, linguistics, system design), building small hardware
          experiments, and long walks where most of the actual problems get solved.
        </p>
      </div>

      <div class="about-block fade-in">
        <p class="about-block__label">Stack & Tools</p>
        <p>
          <strong style="color: var(--accent); font-family: 'DM Mono', monospace; font-size: 0.85rem;">Python · FastAPI · PostgreSQL</strong><br>
          Backend services, data modeling, REST + async APIs.
        </p>
        <p style="margin-top: 12px;">
          <strong style="color: var(--accent); font-family: 'DM Mono', monospace; font-size: 0.85rem;">React · TypeScript · CSS</strong><br>
          Component-first frontends with a strong sense of interface design.
        </p>
        <p style="margin-top: 12px;">
          <strong style="color: var(--accent); font-family: 'DM Mono', monospace; font-size: 0.85rem;">OpenAI API · NLP pipelines</strong><br>
          LLM integration, prompt engineering, text analysis.
        </p>
      </div>

    </div>

    <!-- Contact -->
    <div class="section__header fade-in" style="margin-bottom: 32px;">
      <h2 class="section__title">Contact</h2>
      <div class="section__line"></div>
    </div>
    <div class="fade-in">
      <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 24px; max-width: 460px; font-weight: 300; line-height: 1.7;">
        I'm open to full-time roles, contract work, and interesting collaborations.
        If you're building something ambitious, reach out.
      </p>
      {% include contact-links.html %}
    </div>

  </div>
</div>