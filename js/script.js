// js/script.js
// Efecto fade-in al hacer scroll
const faders = document.querySelectorAll('.card, .hero, #recursos li');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

faders.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(40px)';
  observer.observe(el);
});
