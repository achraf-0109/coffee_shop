const navMenu = document.getElementsByClassName('nav-menu')[0];

const openNavMenu= () => {
    navMenu.style.left = "0";
}

const closeNavMenu= () => {
    navMenu.style.left = "-300px";
}