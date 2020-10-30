import $ from 'jquery';

function changeText(resources) {
    $('#languages').text(resources.languages);
    $('#en').text(resources.en);
    $('#es').text(resources.es);
    $('#home-nav').text(resources.home);
    $('#about-me-nav').text(resources.aboutMe);
    $('#services-nav').text(resources.services);
    $('#projects-nav').text(resources.projects);
    $('.contact-me-nav').text(resources.contactMe);
    $('#greeting').text(resources.greeting);
    $('#header-text').text(resources.headerText);
    $('#know-me').text(resources.knowMe);
    $('#know-me-text').text(resources.knowMeText);
    $('#check-cv').text(resources.checkCV);
    $('#requirement-engineering').text(resources.requirementEngineering);
    $('#requirement-engineering-text').text(resources.requirementEngineeringText);
    $('#app-development').text(resources.appDevelopment);
    $('#app-development-text').text(resources.appDevelopmentText);
    $('#app-deployment').text(resources.appDeployment);
    $('#app-deployment-text').text(resources.appDeploymentText);
    $('#ats-text').text(resources.atsText);
    $('#netcom-text').text(resources.netcomText);
    $('.tecnologies-title').text(resources.technologiesTitle);
    $('#clients-counter').text(resources.clientsCounter);
    $('#projects-counter').text(resources.projectsCounter);
    $('#tech-counter').text(resources.techCounter);
    $('#coffee-counter').text(resources.coffeeCounter);
    $('#contact-me-text').text(resources.contactMeText);
    $('#name-label').text(resources.nameLabel);
    $('#email-label').text(resources.emailLabel);
    $('#message-label').text(resources.messageLabel);
    $('#checkbox-label').text(resources.checkboxLabel);
    $('.privacy').text(resources.privacy);
    $('.terms').text(resources.terms);
    $('#submit').text(resources.submit);
    $('#slogan').text(resources.slogan);
    $('#links').text(resources.links);
    $('#my-cv').text(resources.myCV);
    $('#read').text(resources.read);
    $('.read-connector').text(resources.readConnector);
    $('#social-networks').text(resources.social);
    $('#title-name').text(resources.titleName);
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
