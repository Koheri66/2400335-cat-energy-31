// Menu

const nav = document.querySelector('.nav');
const navBtn = nav.querySelector('.nav__btn');

// Menu no JS
nav.classList.remove('nav--no-js');

// Menu tooggle
navBtn.onclick = function () {
  nav.classList.toggle('nav--close');
  nav.classList.toggle('nav--open');
};
