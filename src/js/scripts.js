import $ from 'jquery';
import Swiper from 'swiper';

$(window).on('scroll load', () => {
    if ($('.navbar').offset().top > 20) {
        $('.fixed-top').addClass('top-nav-collapse');
    } else {
        $('.fixed-top').removeClass('top-nav-collapse');
    }
});

$('.navbar-nav li a').on('click', () => {
    if (!$(this).parent().hasClass('dropdown')) {
        $('.navbar-collapse').collapse('hide');
    }
});


new Swiper('.image-slider', {
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    loop: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
    slidesPerView: 5,
    breakpoints: {
        380: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        516: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },
});

let a = 0;
$(window).scroll(() => {
    if ($('#counter').length) {
        const oTop = $('#counter').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.counter-value').each(function () {
                const $this = $(this);
                const countTo = $this.attr('data-count');
                $({
                    countNum: $this.text(),
                }).animate({
                        countNum: countTo,
                    },
                    {
                        duration: 2000,
                        easing: 'swing',
                        step() {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete() {
                            $this.text(this.countNum);
                        },
                    });
            });
            a = 1;
        }
    }
});

$('body').prepend('<a href="#header" class="back-to-top page-scroll">Back to Top</a>');

const amountScrolled = 700;

$(window).scroll(() => {
    if ($(window).scrollTop() > amountScrolled) {
        $('a.back-to-top').fadeIn('500');
    } else {
        $('a.back-to-top').fadeOut('500');
    }
});

$('.button, a, button').mouseup(() => {
    $(this).blur();
});

$('.nav-link').on('click', function (event) {
    if (this.hash !== '') {
        event.preventDefault();
        var {hash} = this;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, () => {
            window.location.hash = hash;
        })
    }
});
