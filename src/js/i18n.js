import $ from 'jquery';

function changeText(resources) {
    $('#languages').text(resources.languages);
    $('#en').text(resources.en);
    $('#es').text(resources.es);
    $('#home-nav').text(resources.home);
    $('#about-me-nav').text(resources.aboutMe);
    $('#services-nav').text(resources.services);
    $('#projects-nav').text(resources.projects);
    $('#contact-me-nav').text(resources.contactMe);
    $('#greeting').text(resources.greeting);
    $('#header-text').text(resources.headerText);
}

function getResources(lang) {
    $.ajax({
        url: `/locales/${lang}.json`,
        dataType: 'json',
        async: false,
        success(resources) {
            changeText(resources);
        },
    });
}

$('#en').on('click', () => {
    $('#en').addClass('active');
    $('#es').removeClass('active');
    getResources('en');
});

$('#es').on('click', () => {
    $('#es').addClass('active');
    $('#en').removeClass('active');
    getResources('es');
});
