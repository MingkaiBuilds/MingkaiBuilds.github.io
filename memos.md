---
layout: default
title: Memos
description: Research memos on Computational Autonoetics, organized by category.
---

<div class="container">

  <div class="page-header">
    <h1>Memos</h1>
    <p class="page-subtitle">Long-form research, organized by thread.</p>
  </div>

  {% assign sorted_memos = site.memos | where: "status", "published" | sort: "date" | reverse %}
  {% assign categories = sorted_memos | map: "category" | uniq | sort %}

  {% for category in categories %}
    {% assign cat_memos = sorted_memos | where: "category", category %}

    <section class="memo-category-group">
      <h2 class="category-heading">
        <span class="category-chip">{{ category }}</span>
      </h2>

      <div class="memo-list">
        {% for memo in cat_memos %}
        <div class="memo-list-item">
          <a href="{{ memo.url | relative_url }}">{{ memo.title }}</a>
          <div class="memo-meta-row">
            <time class="memo-date-inline" datetime="{{ memo.date | date: '%Y-%m-%d' }}">
              {{ memo.date | date: "%Y.%m.%d" }}
            </time>
          </div>
        </div>
        {% endfor %}
      </div>
    </section>

    <hr class="section-divider">

  {% endfor %}

</div>
