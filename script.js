// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Auto-calculate years of experience (since May 2019)
const careerStart = new Date(2019, 4, 1); // May 2019 (month is 0-indexed)
const now = new Date();
const yearsExp = Math.floor((now - careerStart) / (1000 * 60 * 60 * 24 * 365.25));
document.getElementById('years-exp').textContent = yearsExp + '+';

// Auto-calculate Cazh tenure (since Oct 2023) — updates the timeline label
const cazhStart = new Date(2023, 9, 1); // Oct 2023
const cazhEl = document.querySelector('[data-tenure="cazh"]');
if (cazhEl) {
  const diffMonths = (now.getFullYear() - cazhStart.getFullYear()) * 12 + (now.getMonth() - cazhStart.getMonth());
  const years = Math.floor(diffMonths / 12);
  const months = diffMonths % 12;
  const parts = [];
  if (years > 0) parts.push(`${years} yr${years > 1 ? 's' : ''}`);
  if (months > 0) parts.push(`${months} mo${months > 1 ? 's' : ''}`);
  cazhEl.textContent = `Oct 2023 · Present · ${parts.join(' ')}`;
}

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Reveal-on-scroll using IntersectionObserver
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);
revealEls.forEach(el => io.observe(el));

// Subtle navbar shadow on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.style.boxShadow = '0 10px 30px -15px rgba(0,0,0,0.5)';
  } else {
    navbar.style.boxShadow = 'none';
  }
}, { passive: true });

// Active section indicator in navbar
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navAnchors.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
);
sections.forEach(s => sectionObserver.observe(s));
