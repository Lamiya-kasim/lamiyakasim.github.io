// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 800,
    once: true
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Typed.js Animation for Hero
// Update this part in your script.js
const typed = new Typed('#typed', {
    strings: [
        "full-stack web applications",
         "e-commerce platforms",
        "backend APIs & databases",
        'optimized Database Systems.',
            "scalable software systems",
        "real-world business solutions"
    ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

// Smooth scroll using jQuery (Classic & Reliable)
$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800);
        }
    });
});