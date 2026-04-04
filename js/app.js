window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
});

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            entry.target.style.transitionDelay = (i % 4) * 0.08 + 's';
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));

const burguer = document.getElementById('burger')
const nav = document.querySelector('.nav-links')
const fundo = document.querySelector('.fundo')

burguer.addEventListener('click', () => {
    nav.classList.toggle('ativar')
    fundo.classList.toggle('ativar')
});

fundo.addEventListener('click', () => {
    nav.classList.remove('ativar')
    fundo.classList.remove('ativar')
})