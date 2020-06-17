import $ from 'jquery';
import Swiper from 'swiper';

/* Preloader */
$(window).on('load', () => {
    const preloaderFadeOutTime = 500;

    function hidePreloader() {
        const preloader = $('.spinner-wrapper');
        setTimeout(() => {
            preloader.fadeOut(preloaderFadeOutTime);
        }, 500);
    }

    hidePreloader();
});


/* Navbar Scripts */
// jQuery to collapse the navbar on scroll
$(window).on('scroll load', () => {
    if ($('.navbar').offset().top > 20) {
        $('.fixed-top').addClass('top-nav-collapse');
    } else {
        $('.fixed-top').removeClass('top-nav-collapse');
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(() => {
    $(document).on('click', 'a.page-scroll', function (event) {
        const $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top,
        }, 600, 'easeInOutExpo');
        event.preventDefault();
    });
});

// closes the responsive menu on menu item click
$('.navbar-nav li a').on('click', function (event) {
    if (!$(this).parent().hasClass('dropdown')) {
        $('.navbar-collapse').collapse('hide');
    }
});

/* Card Slider - Swiper */
const cardSlider = new Swiper('.card-slider', {
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
        // when window is <= 992px
        992: {
            slidesPerView: 2,
        },
        // when window is <= 768px
        768: {
            slidesPerView: 1,
        },
    },
});

/* Image Slider - Swiper */
const imageSlider = new Swiper('.image-slider', {
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
        // when window is <= 380px
        380: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        // when window is <= 516px
        516: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        // when window is <= 768px
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        // when window is <= 992px
        992: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        // when window is <= 1200px
        1200: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },
});


/* Counter - CountTo */
let a = 0;
$(window).scroll(() => {
    if ($('#counter').length) { // checking if CountTo section exists in the page, if not it will not run the script and avoid errors
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
                            // alert('finished');
                        },
                    });
            });
            a = 1;
        }
    }
});

/* Back To Top Button */
// create the back to top button
$('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
const amountScrolled = 700;
$(window).scroll(() => {
    if ($(window).scrollTop() > amountScrolled) {
        $('a.back-to-top').fadeIn('500');
    } else {
        $('a.back-to-top').fadeOut('500');
    }
});


/* Removes Long Focus On Buttons */
$('.button, a, button').mouseup(function () {
    $(this).blur();
});
