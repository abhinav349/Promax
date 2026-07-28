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

// Contact form
document.getElementById('quoteForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  const errorEl = document.getElementById('formError');
  btn.textContent = 'Sending...';
  btn.disabled = true;
  errorEl.style.display = 'none';

  const data = new FormData(e.target);
  data.append('access_key', 'YOUR_WEB3FORMS_KEY');

  try {
    const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
    const json = await res.json();
    if (json.success) {
      document.getElementById('formFields').style.display = 'none';
      document.getElementById('formSuccess').style.display = 'block';
      e.target.reset();
    } else {
      throw new Error(json.message || 'Failed to send');
    }
  } catch (err) {
    errorEl.textContent = err.message || 'Something went wrong. Please try again.';
    errorEl.style.display = 'block';
  } finally {
    btn.textContent = '✉ Request Free Quote';
    btn.disabled = false;
  }
});
