let menuBurger = document.querySelector('.header__menu-burger');
let menuBody = document.querySelector('.header__body');

menuBurger.addEventListener('click', function() {  
    menuBody.classList.toggle('header__body--active');
    menuBurger.classList.toggle('header__menu-burger--active');
});