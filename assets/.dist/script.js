// Smoothly mark active nav link based on scroll
const links = document.querySelectorAll('.nav__link');
const sections = [...links].map(a => document.querySelector(a.getAttribute('href')));
const yearSpan = document.getElementById('year');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

const setActive = () => {
  const scrollY = window.scrollY + 120; // offset for sticky header
  let current = sections[0];
  sections.forEach(sec => {
    if (sec && sec.offsetTop <= scrollY) current = sec;
  });
  links.forEach(link => link.classList.toggle('active', '#' + current.id === link.getAttribute('href')));
};
window.addEventListener('scroll', setActive);
window.addEventListener('load', setActive);

// Reveal on scroll
const revealEls = document.querySelectorAll('.card, .hero__image img, .title, .subtitle, .muted');
const onScrollReveal = () => {
  const vh = window.innerHeight;
  revealEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < vh - 60) {
      el.classList.add('visible');
    }
  });
};
revealEls.forEach(el => el.classList.add('reveal'));
window.addEventListener('scroll', onScrollReveal);
window.addEventListener('load', onScrollReveal);
