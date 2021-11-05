$('.hero__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 10000, 
    arrows: false,
    vertical: true,
    // dotsClass: 'hero-slider__dots',
});

$('.expertise-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
     adaptiveHeight: true
});