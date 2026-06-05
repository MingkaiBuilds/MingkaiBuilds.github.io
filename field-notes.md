---
layout: default
title: Field Notes
description: Observations and fragments on Computational Identity Continuity research.
---

<div class="container">

  <div class="page-header">
    <h1>Field Notes</h1>
    <p class="page-subtitle">Shorter observations. Less formal than memos.</p>
  </div>

  {% assign sorted_notes = site.field_notes | sort: "date" | reverse %}

  {% if sorted_notes.size == 0 %}
    <p class="empty-state">No field notes yet.</p>
  {% else %}
    <div class="memo-list">
      {% for note in sorted_notes %}
      <div class="memo-list-item">
        <a href="{{ note.url | relative_url }}">{{ note.title }}</a>
        <div class="memo-meta-row">
          <time class="memo-date-inline" datetime="{{ note.date | date: '%Y-%m-%d' }}">
            {{ note.date | date: "%Y.%m.%d" }}
          </time>
        </div>
      </div>
      {% endfor %}
    </div>
  {% endif %}

</div>
