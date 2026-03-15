---
layout: default
title: Projects
description: All projects by Mikail Stewart — full-stack, NLP, and product systems.
---

<div class="page-hero">
  <div class="container">
    <h1>Projects</h1>
    <p>A complete list of work — featured systems, experiments, and shipped tools.</p>
  </div>
</div>

<div class="container">

  <!-- Filter bar — populated by JS from data-tech attributes -->
  <div class="filter-bar" id="filter-bar" role="group" aria-label="Filter by technology">
    <button class="filter-btn active" data-filter="all">all</button>
    <!-- JS appends unique tech tags here -->
  </div>

  <div class="projects-grid" id="projects-grid">
    {% for project in site.data.projects %}
      {% include project-card.html project=project index=forloop.index0 %}
    {% endfor %}
  </div>

</div>

<script>
// Build filter tags from card data-tech attributes
(function () {
  const grid   = document.getElementById('projects-grid');
  const bar    = document.getElementById('filter-bar');
  const cards  = Array.from(grid.querySelectorAll('.project-card'));

  // Collect all unique tech tags
  const allTech = new Set();
  cards.forEach(c => {
    (c.dataset.tech || '').split(',').forEach(t => { if (t.trim()) allTech.add(t.trim()); });
  });

  // Append filter buttons
  allTech.forEach(tech => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.dataset.filter = tech;
    btn.textContent = tech;
    bar.appendChild(btn);
  });

  // Filter logic
  bar.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    bar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const f = btn.dataset.filter;
    cards.forEach(card => {
      const techs = (card.dataset.tech || '').split(',');
      card.dataset.hidden = (f !== 'all' && !techs.includes(f)) ? 'true' : 'false';
    });
  });
})();
</script>