$('#burger-button').click(function() {
    $('.header__burger').toggleClass('header__burger_active');
    if($('.header__burger').hasClass('header__burger_active')) {
        $('.header__burger_img').attr('src', 'img/header/close.svg');
    } else {
        $('.header__burger_img').attr('src', 'img/header/burger-menu.svg');
    }
})
