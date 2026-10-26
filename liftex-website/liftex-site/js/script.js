// Año en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Revelado suave al hacer scroll (una sola vez por elemento)
const revealTargets = document.querySelectorAll(
  '.section-title, .step, .feature, .specs-grid, .payment-grid, .contact-inner'
);

revealTargets.forEach((el) => el.classList.add('reveal'));

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealTargets.forEach((el) => observer.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add('is-visible'));
}
