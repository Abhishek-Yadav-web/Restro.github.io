window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');

    navbar.classList.toggle('scroll', window.scrollY > 0)
})




const about = document.getElementById('about');

about.addEventListener('click', () => {
    setTimeout(() => {

        window.scrollTo(0, 700);
    }, 800);
});

const menu = document.getElementById('menu');

menu.addEventListener('click', () => {
    setTimeout(() => {

        window.scrollTo(0, 1470);
    }, 800);
});

const expert = document.getElementById('expert');

expert.addEventListener('click', () => {
    setTimeout(() => {

        window.scrollTo(0, 2900);
    }, 800);
});

const testimonial = document.getElementById('testimonial');

testimonial.addEventListener('click', () => {
    setTimeout(() => {

        window.scrollTo(0, 3650);
    }, 800);
});

const contact = document.getElementById('contact');

contact.addEventListener('click', () => {
    setTimeout(() => {

        window.scrollTo(0, 4400);
    }, 800);
});