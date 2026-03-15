---
layout: default
title: ""
description: "Portfolio of Mikail Stewart (明凯) — full-stack & NLP engineer."
---

<!-- ══ HERO ════════════════════════════════════════════ -->
<section class="hero">
  <div class="container">
    <p class="hero__eyebrow">Available for opportunities</p>
    <h1 class="hero__name">
      Mikail Stewart
      <span class="hero__name-chinese">明凯</span>
    </h1>
    <p class="hero__tagline">
      Full-stack engineer exploring NLP + product systems.<br>
      Building tools that make thinking easier.
    </p>
    <div class="hero__cta">
      <a href="{{ '/projects' | relative_url }}" class="btn btn--primary">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
        View Projects
      </a>
      <a href="{{ '/about' | relative_url }}" class="btn btn--ghost">About me</a>
    </div>
  </div>
  <div class="hero__moon-deco" aria-hidden="true">◑</div>
</section>

<div class="divider"></div>

<!-- ══ FEATURED PROJECTS ══════════════════════════════ -->
<section class="section">
  <div class="container">
    <div class="section__header">
      <h2 class="section__title">Featured</h2>
      <div class="section__line"></div>
      <a href="{{ '/projects' | relative_url }}" class="btn btn--ghost" style="padding: 6px 14px; font-size: 0.75rem;">All projects →</a>
    </div>

    <div class="cards-grid cards-grid--featured">
      {% assign featured = site.data.projects | where: "featured", true %}
      {% for project in featured %}
        <div class="fade-in" style="animation-delay: {{ forloop.index0 | times: 80 }}ms">
          {% include project-card.html project=project featured=true %}
        </div>
      {% endfor %}
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- ══ ALL PROJECTS ════════════════════════════════════ -->
<section class="section">
  <div class="container">
    <div class="section__header">
      <h2 class="section__title">All Projects</h2>
      <div class="section__line"></div>
    </div>

    <div class="cards-grid">
      {% for project in site.data.projects %}
        <div class="fade-in" style="animation-delay: {{ forloop.index0 | times: 60 }}ms">
          {% include project-card.html project=project %}
        </div>
      {% endfor %}
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- ══ ABOUT ═══════════════════════════════════════════ -->
<section class="section">
  <div class="container">
    <div class="section__header">
      <h2 class="section__title">About</h2>
      <div class="section__line"></div>
    </div>

    <div class="about-snippet">
      <div class="about-snippet__text fade-in">
        <p>
          I'm a full-stack engineer with a focus on NLP systems and product development.
          I build tools that bridge the gap between raw language models and real, usable products —
          things people actually want to open every day.
        </p>
        <p>
          My background spans backend systems (FastAPI, PostgreSQL), modern frontends (React + TypeScript),
          and NLP pipelines. I care deeply about the whole stack — from database schema to interaction design.
        </p>
        <a href="{{ '/about' | relative_url }}" class="btn btn--ghost" style="margin-top: 20px; display: inline-flex;">More about me →</a>
      </div>
      <div class="about-snippet__aside fade-in">
        <div class="stat-item">
          <div class="stat-item__label">Focus</div>
          <div class="stat-item__value">Full-Stack · NLP · Product</div>
        </div>
        <div class="stat-item">
          <div class="stat-item__label">Stack</div>
          <div class="stat-item__value">Python · FastAPI · React · TypeScript · PostgreSQL</div>
        </div>
        <div class="stat-item">
          <div class="stat-item__label">Currently building</div>
          <div class="stat-item__value">MoodOS — a daily intelligence layer for personal journaling</div>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- ══ CONTACT ═════════════════════════════════════════ -->
<section class="section" style="padding-bottom: 80px;">
  <div class="container">
    <div class="section__header">
      <h2 class="section__title">Contact</h2>
      <div class="section__line"></div>
    </div>
    <div class="fade-in">
      {% include contact-links.html %}
    </div>
  </div>
</section>