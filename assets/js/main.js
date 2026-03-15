// Dark Moon — main.js

(function () {
  'use strict';

  // ── THEME TOGGLE ─────────────────────────────────────
  const STORAGE_KEY = 'dm-theme';
  const html = document.documentElement;
  const toggleBtn = document.getElementById('themeToggle');

  function getPreferred() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    if (toggleBtn) {
      toggleBtn.querySelector('.theme-toggle__icon').textContent = theme === 'dark' ? '◑' : '◐';
      toggleBtn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    }
  }

  applyTheme(getPreferred());

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = html.getAttribute('data-theme');
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // ── SCROLL FADE-IN ───────────────────────────────────
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

  // ── PROJECT FILTER (projects page) ───────────────────
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.card[data-tags]');

  if (filterBtns.length > 0) {
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');

        filterBtns.forEach((b) => b.classList.remove('filter-btn--active'));
        btn.classList.add('filter-btn--active');

        projectCards.forEach((card) => {
          if (filter === 'all') {
            card.style.display = '';
            card.style.opacity = '1';
          } else {
            const tags = (card.getAttribute('data-tags') || '').toLowerCase();
            const show = tags.includes(filter.toLowerCase());
            card.style.display = show ? '' : 'none';
            card.style.opacity = show ? '1' : '0';
          }
        });
      });
    });
  }

  // ── NAV: add shadow on scroll ─────────────────────────
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.style.boxShadow = window.scrollY > 10
        ? '0 1px 30px rgba(0,0,0,0.25)'
        : '';
    }, { passive: true });
  }

})();