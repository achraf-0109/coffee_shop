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

const sendMail = () => {
  let parms = {
          name : document.getElementById("name").value,
          email : document.getElementById("email").value,
          subject : document.getElementById("subject").value,
          message : document.getElementById("message").value,
      }
      console.log(message);
      emailjs.send("service_g5o2tut","template_62947pd",parms) 
}

const swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});