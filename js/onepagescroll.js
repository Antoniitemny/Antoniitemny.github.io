$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9'],
        autoScrolling:true,
        scrollHorizontally: true,
        navigation: true,
        recordHistory: false
    });

    $.fn.fullpage.setScrollingSpeed(450);
    $(document).on('click', '#moveDown', function(){
        $.fn.fullpage.moveSectionDown();
    });

    $(document).on('click', '#moveLeft', function(){
        $.fn.fullpage.moveSlideLeft();
    });

    $(document).on('click', '#moveRight', function(){
        $.fn.fullpage.moveSlideRight();
    });
    $(document).on('click', '.moveTo1', function(){
        $.fn.fullpage.moveTo('s1');
        hambMenu.classList.remove('hamburger-menu_visible');
    });
    $(document).on('click', '.moveTo2', function(){
        $.fn.fullpage.moveTo('s2');
        hambMenu.classList.remove('hamburger-menu_visible');
    });
    $(document).on('click', '.moveTo3', function(){
        $.fn.fullpage.moveTo('s3');
        hambMenu.classList.remove('hamburger-menu_visible');
    });
    $(document).on('click', '.moveTo4', function(){
        $.fn.fullpage.moveTo('s4');
        hambMenu.classList.remove('hamburger-menu_visible');
    });
    $(document).on('click', '.moveTo5', function(){
        $.fn.fullpage.moveTo('s5');
        hambMenu.classList.remove('hamburger-menu_visible');
    });
    $(document).on('click', '.moveTo6', function(){
        $.fn.fullpage.moveTo('s6');
        hambMenu.classList.remove('hamburger-menu_visible');
    });
    $(document).on('click', '.moveTo7', function(){
        $.fn.fullpage.moveTo('s7');
        hambMenu.classList.remove('hamburger-menu_visible');
    });
    $(document).on('click', '.moveTo8', function(){
        $.fn.fullpage.moveTo('s8');
        hambMenu.classList.remove('hamburger-menu_visible');
    });
    $(document).on('click', '.moveTo9', function(){
        $.fn.fullpage.moveTo('s9');
        hambMenu.classList.remove('hamburger-menu_visible');
    });
})