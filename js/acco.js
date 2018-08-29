$(document).ready(function (){
    $('.menu-acco__trigger').click(function(e){
        e.preventDefault();
    });
    $('.team-acco__trigger').click(function(e){
        e.preventDefault();
    });
    $('.nav__link').click(function(e){
        e.preventDefault();
    });
    $('.order-link').click(function(e){
        e.preventDefault();
    });
    $('.logo').click(function(e){
        e.preventDefault();
    });
    $('.hamburger-menu__item-link').click(function(e){
        e.preventDefault();
    });

    $('.menu-acco__item').click(function(){
        $(this).toggleClass('active');
        $('.menu-acco__item').not(this).removeClass('active');
    });

    $('.team-acco__item').click(function(){
        $(this).toggleClass('active');
        $('.team-acco__item').not(this).removeClass('active');
    });

});