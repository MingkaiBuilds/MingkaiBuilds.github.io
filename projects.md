---
layout: default
title: "Projects"
description: "Full project list — full-stack and NLP work by Mikail Stewart (明凯)."
permalink: /projects/
---

<div class="projects-page">
  <div class="container">

    <!-- Header -->
    <div class="projects-page__header fade-in">
      <p class="hero__eyebrow" style="opacity:1; animation:none; margin-bottom: 16px;">◑ Work</p>
      <h1 class="projects-page__title">Projects</h1>
      <p class="projects-page__sub">
        A collection of things I've built — from NLP pipelines to full-stack products.
        Each one is an experiment in doing something useful and doing it well.
      </p>
    </div>

    <!-- Filter bar -->
    {% assign all_tags = "" %}
    {% for project in site.data.projects %}
      {% for tag in project.tags %}
        {% assign all_tags = all_tags | append: tag | append: "," %}
      {% endfor %}
    {% endfor %}
    {% assign tag_list = all_tags | split: "," | uniq | sort %}

    <div class="filter-bar fade-in" role="group" aria-label="Filter projects by tag">
      <button class="filter-btn filter-btn--active" data-filter="all">All</button>
      {% for tag in tag_list %}
        {% unless tag == "" %}
          <button class="filter-btn" data-filter="{{ tag | downcase }}">{{ tag }}</button>
        {% endunless %}
      {% endfor %}
    </div>

    <!-- Project cards -->
    <div class="cards-grid">
      {% for project in site.data.projects %}
        <div class="fade-in" style="transition-delay: {{ forloop.index0 | times: 50 }}ms">
          {% include project-card.html project=project %}
        </div>
      {% endfor %}
    </div>

  </div>
</div>