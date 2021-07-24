burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navlist = document.querySelector('.nav-list');
rightlist = document.querySelector('.right-list');
burger.addEventListener('click',()=>{
    navbar.classList.toggle('nav-height');
    rightlist.classList.toggle('v-class');
    navlist.classList.toggle('v-class');
})