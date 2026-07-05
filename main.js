// ===== Nav sticky =====
const nav = document.getElementById('nav');
if (nav) addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 10), { passive: true });

// ===== Menu burger mobile =====
const burger = document.querySelector('.burger');
const menu = document.getElementById('menu');
if (burger && menu) {
  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }));
}

// ===== Révélations au scroll =====
const io = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in-view'); io.unobserve(e.target); }
}), { threshold: .15 });
document.querySelectorAll('.reveal, .sec-head').forEach(el => io.observe(el));

// ===== Carrousel témoignages (accueil) =====
const track = document.getElementById('track');
if (track) {
  const dots = [...document.querySelectorAll('.dots button')];
  let i = 0, timer;
  const go = n => {
    i = (n + dots.length) % dots.length;
    track.style.transform = `translateX(-${i * 100}%)`;
    dots.forEach((d, k) => d.toggleAttribute('aria-current', k === i));
  };
  dots.forEach((d, k) => d.addEventListener('click', () => { go(k); restart(); }));
  const restart = () => {
    clearInterval(timer);
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) timer = setInterval(() => go(i + 1), 6000);
  };
  restart();
}

// ===== Formulaire de devis dynamique =====
const devisForm = document.getElementById('devis-form');
if (devisForm) {
  // FormSubmit exige une URL absolue pour la redirection après envoi
  const next = devisForm.querySelector('input[name="_next"]');
  if (next) next.value = new URL('merci.html', location.href).href;
  const radios = devisForm.querySelectorAll('input[name="prestation"]');
  const groups = devisForm.querySelectorAll('.dyn');
  const update = () => {
    const val = devisForm.querySelector('input[name="prestation"]:checked')?.value;
    groups.forEach(g => {
      const match = g.dataset.for.split(' ').includes(val);
      g.classList.toggle('show', match);
      g.querySelectorAll('input, select, textarea').forEach(f => f.disabled = !match);
    });
  };
  radios.forEach(r => r.addEventListener('change', update));
  update();
}
