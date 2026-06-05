/* Mobile navigation */
(function () {
  const hamburger = document.getElementById('nav-hamburger');
  const links     = document.getElementById('nav-links');
  if (!hamburger || !links) return;

  hamburger.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(open));
    hamburger.textContent = open ? '✕' : '☰';
  });

  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.textContent = '☰';
    });
  });
})();
