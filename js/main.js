$('.best__slider').slick({
    dots: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        },
        {
            breakpoint: 525,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        }
    ]
});



$('.news__slider').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 525,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});



$('.auction__slider').slick({
    dots: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        },
        {
            breakpoint: 525,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        }
    ]
});



$('.locations__slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 525,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});