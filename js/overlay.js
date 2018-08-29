
const hambBtn = document.querySelector('.hamburger-menu-link');
const hambMenu = document.querySelector('.hamburger-menu');
const hambClose = document.querySelector('.hamburger__close')

hambBtn.addEventListener('click', function() {
    hambMenu.classList.add('hamburger-menu_visible');
});

hambClose.addEventListener('click', function() {
    hambMenu.classList.remove('hamburger-menu_visible');
});

var reviewBtn = document.querySelectorAll('.review__button-wrap');
const reviewPopup = document.querySelector('.review-popup');
const reviewClose = document.querySelector('.full-review__close');


for (var i = 0; i < reviewBtn.length; i++) {
    reviewBtn[i].addEventListener('click', function() {   
        reviewPopup.classList.add('review-popup_visible');
    });
};
reviewClose.addEventListener('click', function(){
    reviewPopup.classList.remove('review-popup_visible');
});