
//=====================================typed=======================================================

src = "https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"

var typed = new Typed('.typed', {
    strings: ['Frontend Developer', 'Worked In IT'],
    typeSpeed: 150,
    backSpeed: 50,
    loop: true
});


// ===================================hamburger===================================================

const burger = document.querySelector('.hamburger');
const navi = document.querySelector('.nav');
const navigation = document.querySelector('.navigation');
const href = document.querySelector("ul");


burger.addEventListener('click', () => {
    navi.classList.toggle('v-class');
    navigation.classList.toggle('h-class');
})

href.addEventListener('click', () => {
    navi.classList.toggle('v-class');
    navigation.classList.toggle('h-class');
})








