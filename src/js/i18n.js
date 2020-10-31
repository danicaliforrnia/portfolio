import $ from 'jquery';

function changeText(resources) {
    for (const e in resources) {
        $(`#${e}`).text(resources[e]);
        $(`.${e}`).text(resources[e]);
    }
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
