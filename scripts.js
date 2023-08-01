// ======typed========
var typed = new Typed('.typed', {
  strings: ['Frontend Developer', 'Worked In IT'],
  typeSpeed: 150,
  backSpeed: 50,
  loop: true
});



// ======hamburger========
const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('hamnav');
});

