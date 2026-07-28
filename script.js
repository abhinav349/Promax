// Sticky navbar
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
reveals.forEach(el => observer.observe(el));

// Auto-slide testimonials on mobile
(function () {
  const grid = document.querySelector('.reviews-grid');
  if (!grid) return;
  let idx = 0;
  let interval;

  function startSlide() {
    if (window.innerWidth > 700) return;
    const cards = grid.querySelectorAll('.review-card');
    interval = setInterval(() => {
      idx = (idx + 1) % cards.length;
      cards[idx].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }, 3500);
  }

  function stopSlide() { clearInterval(interval); }

  // Pause on touch so user can swipe freely
  grid.addEventListener('touchstart', stopSlide);
  grid.addEventListener('touchend', () => { stopSlide(); startSlide(); });

  // Restart on resize
  window.addEventListener('resize', () => { stopSlide(); startSlide(); });
  startSlide();
})();

// Contact form (Formsubmit.co)
document.getElementById('quoteForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const btn = document.getElementById('submitBtn');
  const errorEl = document.getElementById('formError');
  btn.textContent = 'Sending...';
  btn.disabled = true;
  errorEl.style.display = 'none';

  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' },
    });
    const data = await res.json();
    if (data.success) {
      document.getElementById('formFields').style.display = 'none';
      document.getElementById('formSuccess').style.display = 'block';
      form.reset();
    } else {
      throw new Error(data.message || 'Failed to send');
    }
  } catch (err) {
    errorEl.textContent = err.message || 'Something went wrong. Please try again.';
    errorEl.style.display = 'block';
  } finally {
    btn.textContent = '✉ Request Free Quote';
    btn.disabled = false;
  }
});
