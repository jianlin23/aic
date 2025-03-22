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