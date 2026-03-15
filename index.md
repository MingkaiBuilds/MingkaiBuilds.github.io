---
layout: default
title: Home
---

<!-- ═══════════════════════════════════════════
     HERO
═══════════════════════════════════════════ -->
<section class="hero" id="home">
  <div class="container" style="position:relative;">
    <div class="moon-bg" aria-hidden="true"></div>
    <div class="chi-watermark" aria-hidden="true">明凯</div>

    <p class="hero-eyebrow fade-up">available for roles</p>

    <h1 class="hero-name fade-up delay-1">
      <span class="hero-chi-block">
        Mikail Stewart
        <span class="hero-chi" title="míng kǎi — bright, triumphant">明凯</span>
      </span>
    </h1>

    <p class="hero-role fade-up delay-2">
      Full-stack engineer &rarr; <span class="accent-word">NLP</span> + product systems
    </p>

    <p class="hero-oneliner fade-up delay-3">
      Building ambitious full-stack + NLP systems. Shipping daily.
    </p>

    <div class="hero-cta fade-up delay-4">
      <a href="#featured" class="btn btn-primary">View Projects</a>
      <a href="{{ '/about' | relative_url }}" class="btn btn-ghost">About Me</a>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════
     FEATURED PROJECTS
═══════════════════════════════════════════ -->
<section id="featured">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Featured</span>
      <h2 class="section-title">Selected Work</h2>
      <div class="section-line"></div>
    </div>

    <div class="featured-grid">
      {% assign featured = site.data.projects | where: "featured", true | sort: "featured_order" %}
      {% for project in featured %}
        {% include project-card.html project=project index=forloop.index0 %}
      {% endfor %}
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════
     ALL PROJECTS
═══════════════════════════════════════════ -->
<section id="all-projects">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Archive</span>
      <h2 class="section-title">All Projects</h2>
      <div class="section-line"></div>
    </div>

    <div class="project-list">
      {% for project in site.data.projects %}
      <div class="project-row">
        <div class="row-left">
          <span class="row-title">{{ project.title }}</span>
          <span class="row-tagline">{{ project.tagline }}</span>
        </div>
        <div class="row-right">
          <div class="row-chips">
            {% for t in project.tech limit:3 %}
            <span class="tech-chip">{{ t }}</span>
            {% endfor %}
          </div>
          {% if project.github and project.github != "" %}
          <a href="{{ project.github }}" class="card-link" target="_blank" rel="noopener" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="16" height="16">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
          </a>
          {% endif %}
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════
     ABOUT PREVIEW
═══════════════════════════════════════════ -->
<section id="about">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Who</span>
      <h2 class="section-title">About</h2>
      <div class="section-line"></div>
    </div>

    <div class="about-grid">
      <div class="about-text">
        <h3>Background</h3>
        <p>
          I'm Mikail (明凯) — a full-stack engineer with a focus on NLP pipelines, product systems, and the craft of building things that work well. I care about clean architecture, thoughtful APIs, and interfaces that don't get in the way.
        </p>
        <h3>Currently Building</h3>
        <p>
          MoodOS — a journaling system that transforms daily entries into structured reports with mood analysis and keyword extraction. Exploring how language models can add genuine value to personal data workflows.
        </p>
        <a href="{{ '/about' | relative_url }}" class="btn btn-ghost" style="display:inline-flex; margin-top:1rem;">Full bio →</a>
      </div>
      <div class="about-right">
        <div class="about-card">
          <h4>Stack</h4>
          <div class="tech-stack">
            <span class="tech-chip">Python</span>
            <span class="tech-chip">FastAPI</span>
            <span class="tech-chip">TypeScript</span>
            <span class="tech-chip">React</span>
            <span class="tech-chip">PostgreSQL</span>
            <span class="tech-chip">NLP</span>
            <span class="tech-chip">Docker</span>
          </div>
        </div>
        <div class="about-card">
          <h4>Status</h4>
          <p style="font-family:var(--font-mono); font-size:0.82rem; color:var(--accent);">
            ◉ Open to roles
          </p>
          <p style="font-size:0.84rem; margin-top:0.4rem;">Full-stack, backend, or NLP-adjacent engineering.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════
     CONTACT
═══════════════════════════════════════════ -->
<section id="contact">
  <div class="container contact-inner">
    <p class="contact-heading">// get in touch</p>
    <div class="contact-links">
      <a href="https://github.com/<GITHUB_USERNAME>" class="contact-link" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
        GitHub
      </a>
      <a href="https://linkedin.com/in/<LINKEDIN_USERNAME>" class="contact-link" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
        LinkedIn
      </a>
      <a href="mailto:<EMAIL>" class="contact-link">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        Email
      </a>
    </div>
  </div>
</section>