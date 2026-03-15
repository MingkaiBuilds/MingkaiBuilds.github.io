/* ── Theme toggle ─────────────────────────────────────────── */
(function () {
  const html        = document.documentElement;
  const toggleBtn   = document.getElementById('theme-toggle');
  const stored      = localStorage.getItem('theme');

  // Default: dark
  const theme = stored || 'dark';
  html.setAttribute('data-theme', theme);
  if (toggleBtn) toggleBtn.textContent = theme === 'dark' ? '◑ light' : '◐ dark';

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = html.getAttribute('data-theme');
      const next    = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      toggleBtn.textContent = next === 'dark' ? '◑ light' : '◐ dark';
    });
  }
})();

/* ── Mobile hamburger ─────────────────────────────────────── */
(function () {
  const hamburger = document.getElementById('nav-hamburger');
  const links     = document.getElementById('nav-links');
  if (!hamburger || !links) return;

  hamburger.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(open));
    hamburger.textContent = open ? '✕' : '☰';
  });

  // Close on link click
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.textContent = '☰';
    });
  });
})();

/* ── Smooth anchor scroll with nav offset ────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navH = document.querySelector('nav')?.offsetHeight || 64;
    const top  = target.getBoundingClientRect().top + window.scrollY - navH - 12;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});