const navMenu = document.getElementsByClassName('nav-menu')[0];
const goBtn = document.getElementById('go');
const backBtn = document.getElementById('back');
const slider = document.getElementsByClassName('slider')[0];

const openNavMenu= () => {
    navMenu.style.left = "0";
}

const closeNavMenu= () => {
    navMenu.style.left = "-300px";
}

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});


