const main = document.getElementById('main')
const about = document.getElementById('about')
const gallery = document.getElementById('gallery')
const contact = document.getElementById('contact')

function currentToMain() {
    window.scrollTo(0,0);
    main.style.display = 'block';
    about.style.display = 'block';
    gallery.style.display = 'none';
    contact.style.display = 'none';
}


function currentToGallery() {
    main.style.display = 'none';
    about.style.display = 'none';
    gallery.style.display = 'block';
    contact.style.display = 'none';

}

function currentToContact() {
    window.scrollTo(0,0);
    main.style.display = 'none';
    about.style.display = 'none';
    gallery.style.display = 'none';
    contact.style.display = 'block';
}

function currentToAbout() {  
    main.style.display = 'block';
    about.style.display = 'block';
    gallery.style.display = 'none';
    contact.style.display = 'none';
    setTimeout(() => {
        window.scrollTo(0,1600);
    },50);
}

// Google Maps API 

function initMap(){
    var options = {
        zoom:12,
        center:{lat:49.87664614715764,lng:19.93356045585525}
    }

    var map = new google.maps.Map(document.getElementById('map'), options);

    var marker = new google.maps.Marker({
        position:{lat:49.87668071735121,lng:19.933496082841334},
        map:map
    });
}

// Mobile Navigation

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
            }
    });
        burger.classList.toggle('toggle');
    });
}

navSlide();