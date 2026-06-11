/* ══════════════════════════════════════════════
   Nelda Rojas Erazo | Portafolio Profesional
   Script principal
══════════════════════════════════════════════ */

/* ── Mobile menu ── */
const menuBtn   = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  menuOpen = !menuOpen;
  mobileMenu.style.maxHeight = menuOpen ? mobileMenu.scrollHeight + 'px' : '0';
  mobileMenu.style.opacity  = menuOpen ? '1' : '0';
  menuBtn.innerHTML = menuOpen
    ? '<i class="fas fa-times text-xl"></i>'
    : '<i class="fas fa-bars text-xl"></i>';
});

function closeMobileMenu() {
  menuOpen = false;
  mobileMenu.style.maxHeight = '0';
  mobileMenu.style.opacity  = '0';
  menuBtn.innerHTML = '<i class="fas fa-bars text-xl"></i>';
}

/* ── Scroll reveal ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
  .forEach(el => observer.observe(el));

/* ── Active nav link ── */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

/* ── Navbar shadow on scroll ── */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').style.boxShadow =
    window.scrollY > 20 ? '0 2px 24px rgba(0,0,0,.1)' : 'none';
});

/* ── Contact form ── */
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Enviando…';
  btn.disabled = true;
  setTimeout(() => {
    e.target.reset();
    btn.textContent = 'Enviar mensaje';
    btn.disabled = false;
    document.getElementById('form-success').classList.remove('hidden');
    setTimeout(() => {
      document.getElementById('form-success').classList.add('hidden');
    }, 5000);
  }, 1200);
}
