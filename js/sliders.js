$('.hero__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000, 
    arrows: false,
    vertical: true,
    swipe: true,
    verticalSwiping: true,
});

$('.expertise-slider').slick({
    arrows: false,
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 1250,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 968,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
        }
    ]

});
$('.partnership-slider').slick({
    arrows: false,
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 1250,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 968,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
            }
        }
    ]

});

$('.slider-section').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});
$('.portfolio-slider').slick({
    centerMode: true,
    centerPadding: '230px',
    focusOnSelect: true,
    dots: true,
    slidesToShow: 3,
    arrows: false,
    responsive: [
        {
            breakpoint: 1250,
            settings: {
                slidesToShow: 3,
                centerPadding: '130px',
            }
        },
        {
            breakpoint: 968,
            settings: {
                slidesToShow: 1,
                centerPadding: '250px',
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                centerPadding: '0px',
            }
        }
    ]
})

$('.reviews-slider').slick({
    centerMode: true,
    centerPadding: '180px',
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    adaptiveHeight: true
});