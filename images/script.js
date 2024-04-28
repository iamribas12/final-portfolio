///////////////////////////////typed js////////////////////////////
var typed = new Typed('#element', {
    strings: ['Fronted developer', 'and', 'IT Student'],
    typeSpeed: 50,
});


///////////////////////////////////toggle icon navbar////////////////////////////////////
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};




///////////////////////////////////scroll section active link////////////////////////////////////
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /////////////////////////sticky navbar///////////////////////////////////
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    ///////////////////////////////remove toggle icon and navbar when click navbar link scroll/////////////////////////////////////////////
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

//////////////////////////////scroll reveal//////////////////////////////
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 20
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box', { origin: 'bottom' });
ScrollReveal().reveal('.home-content, h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('form', { origin: 'right' });

////////////////////////////////google sheets////////////////////////////////



const scriptURL = 'https://script.google.com/macros/s/AKfycbx309ZQ99jeV1Zs2ClsPn-Usb1O-AcfDHGInVR1kpzEd1EQAqzo0dh_1HZ9A9PKQQqZ/exec'
const form = document.forms['google-sheet']
    // const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            alert("Thanks for Contacting us.. We Will Get back to you as soon as Possible");
            form.reset(); // Reset the form after successful submission
        })
        .catch(error => console.error('Error!', error.message))
});

var tablinks = document.getElementsByClassName("tab-zlinks");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}



///////////////////////////dark light mode//////////////////////////////
let hed = document.querySelector("header");

let darkModeIcon = document.querySelector('#darkmode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle("bx-moon");
    darkModeIcon.classList.toggle("bx-sun");
    // darkModeIcon.classList.toggle("bx-moon");
    audio.play();
    document.body.classList.toggle('dark-mode');
    hed.classList.toggle("header-2");
    console.log(document.documentElement.scrollHeight)
};