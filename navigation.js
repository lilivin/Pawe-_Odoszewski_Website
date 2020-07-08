const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.mobileNavigation');
const body = document.querySelector('.aboutclass');
const sectionMain = document.getElementById('mainPageNavigation');
const sectionAboutMe = document.getElementById('aboutMeNavigation');
const sectionConcerts =  document.getElementById('concertsNavigation');
const sectionProjects =  document.getElementById('recordsNavigation');
const sectionContact =  document.getElementById('contactNavigation');

const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('mobileNavigation--active');
    body.classList.toggle('disable');
}

hamburger.addEventListener('click', handleClick);

$('nav p').on('click', function(){
    const goToSection= "#" + $(this).attr('class');
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top - 60
    })
})

$('nav ul li').on('click', function(){
    const goToSection= "#" + $(this).attr('class');
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top - 60
    })
})

$('div ul li').on('click', function(){
    const goToSection= "#" + $(this).attr('class');
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    })
})

function closeNavigation(){
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('mobileNavigation--active');
    console.log('chuj');
}

sectionMain.addEventListener('click', closeNavigation);
sectionAboutMe.addEventListener('click', closeNavigation);
sectionConcerts.addEventListener('click', closeNavigation);
sectionProjects.addEventListener('click', closeNavigation);
sectionContact.addEventListener('click', closeNavigation);