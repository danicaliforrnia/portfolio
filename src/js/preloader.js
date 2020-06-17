import $ from 'jquery';

$(window).on('load', () => {
    const preloader = $('.spinner-wrapper');
    setTimeout(() => {
        preloader.fadeOut(500);
        $('content-wrapper').fadeIn(1000);
    }, 500);
});
