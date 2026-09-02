const menu = document.querySelector('.menu-button');
const nav = document.querySelector('nav');
menu?.addEventListener('click', () => menu.setAttribute('aria-expanded', String(menu.getAttribute('aria-expanded') !== 'true')));
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => menu?.setAttribute('aria-expanded', 'false')));
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); }), { threshold: .14 });
document.querySelectorAll('.reveal').forEach(item => observer.observe(item));
const sections = [...document.querySelectorAll('main section[id]')];
const links = [...document.querySelectorAll('nav a')];
window.addEventListener('scroll', () => { const current = sections.findLast(section => scrollY >= section.offsetTop - 150)?.id; links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${current}`)); });
