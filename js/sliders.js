$('.hero__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    vertical: true,
    swipe: true,
    verticalSwiping: true,
});
$('#web-development').mouseover(function() {
    $('.hero__slider').slick('slickGoTo', 0)
})
$('#marketing').mouseover(function() {
    $('.hero__slider').slick('slickGoTo', 1)
})
$('#video').mouseover(function() {
    $('.hero__slider').slick('slickGoTo', 2)
})
$('#blockchain').mouseover(function() {
    $('.hero__slider').slick('slickGoTo', 3)
})
$('.hero__slider').on('afterChange', function() {
    switch ($('.slick-dots > .slick-active  > button').attr('aria-label')) {
        case '1 of 4':
            $('#marketing').removeClass('hero__anchor_general');
            $('#video').removeClass('hero__anchor_general');
            $('#blockchain').removeClass('hero__anchor_general');
            $('#web-development').addClass('hero__anchor_general');
            break;
        case '2 of 4':
            $('#web-development').removeClass('hero__anchor_general');
            $('#video').removeClass('hero__anchor_general');
            $('#blockchain').removeClass('hero__anchor_general');
            $('#marketing').addClass('hero__anchor_general');
            break;
        case '3 of 4':
                $('#web-development').removeClass('hero__anchor_general');
                $('#marketing').removeClass('hero__anchor_general');
                $('#blockchain').removeClass('hero__anchor_general');
                $('#video').addClass('hero__anchor_general');
                break;    
            case '4 of 4':
                $('#web-development').removeClass('hero__anchor_general');
                $('#marketing').removeClass('hero__anchor_general');
                $('#video').removeClass('hero__anchor_general');
                $('#blockchain').addClass('hero__anchor_general');
                break; 
    }
})

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
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 1250,
            settings: {
                slidesToShow: 3,
                centerPadding: '50px',
            }
        },
        {
            breakpoint: 968,
            settings: {
                slidesToShow: 1,
                centerPadding: '200px',
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
});