const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated');
            entry.target.classList.add(entry.target.dataset.animation);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.scroll-animation');
    animatedElements.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', initScrollAnimations);

document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggle = document.querySelector('.nav-item.dropdown .nav-link');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownIcon = document.querySelector('.dropdown-icon');

    dropdownToggle.addEventListener('click', function (e) {
        dropdownIcon.textContent = dropdownMenu.classList.contains('show') ? 'expand_less' : 'expand_more';

    });
});