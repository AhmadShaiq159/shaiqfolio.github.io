
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


// ==================================active navbar==========================================
// let list = document.querySelectorAll('.nav li');

// function activeLink() {
//     list.forEach((item) =>
//         item.classList.remove('active'));
//     this.classList.add('active')
// };

// list.forEach((item) =>
//     item.addEventListener('click', activeLink));

var navContainer = document.getElementsByClassName("nav");

// Get all buttons with class="btn" inside the container
var items = navContainer.getElementsByClassName("item");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}





