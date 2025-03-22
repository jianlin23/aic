// JavaScript code for navigation bar
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const body = document.body;

    navbarToggler.addEventListener('click', function() {
        body.classList.toggle('nav-expanded');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        const navbar = document.querySelector('.navbar');
        if (!navbar.contains(e.target) && body.classList.contains('nav-expanded')) {
            navbarToggler.click();
        }
    });
});