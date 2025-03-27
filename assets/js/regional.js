const galleryData = [
    {
        src: '../assets/image/gallery/regional/1.jpg',
        alt: 'AIC Regional Champion 2024'
    },
    {
        src: '../assets/image/gallery/regional/2.jpg',
        alt: 'AIC Regional Champion 2024'
    },
    {
        src: '../assets/image/gallery/regional/3.jpg',
        alt: 'AIC Regional Champion 2024'
    },
    {
        src: '../assets/image/gallery/regional/4.jpg',
        alt: 'AIC Regional Champion 2024'
    },
    {
        src: '../assets/image/gallery/regional/5.jpg',
        alt: 'AIC Regional Champion 2024'
    },
    {
        src: '../assets/image/gallery/regional/6.jpg',
        alt: 'AIC Regional Champion 2024'
    },
    {
        src: '../assets/image/gallery/regional/7.jpg',
        alt: 'AIC Regional Champion 2024'
    },
    {
        src: '../assets/image/gallery/regional/8.jpg',
        alt: 'AIC Regional Champion 2024'
    },
    {
        src: '../assets/image/gallery/regional/9.jpg',
        alt: 'AIC Regional Champion 2024'
    },
    {
        src: '../assets/image/gallery/regional/10.jpg',
        alt: 'AIC Regional Champion 2024'
    },
    {
        src: '../assets/image/gallery/regional/11.jpg',
        alt: 'AIC Regional Champion 2024'
    }
];

function generateGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    if (!galleryGrid) return;

    const images = galleryData;
    if (!images) return;

    // Create Swiper structure
    galleryGrid.innerHTML = `
        <div style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="swiper mySwiper2">
            <div class="swiper-wrapper">
                ${images.map(image => `
                    <div class="swiper-slide">
                        <img src="${image.src}" alt="${image.alt}">
                    </div>
                `).join('')}
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
        <div thumbsSlider="" class="swiper mySwiper">
            <div class="swiper-wrapper">
                ${images.map(image => `
                    <div class="swiper-slide">
                        <img src="${image.src}" alt="${image.alt}">
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // Initialize Swiper
    var thumbsSwiper = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });

    var mainSwiper = new Swiper(".mySwiper2", {
        loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: thumbsSwiper,
        },
    });

    // Add lightbox to body if it doesn't exist
    if (!document.querySelector('.lightbox')) {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <span class="material-icons close-btn">close</span>
            <img src="" alt="">
        `;
        document.body.appendChild(lightbox);
    }

    // Add click events for lightbox
    const slides = document.querySelectorAll('.mySwiper2 .swiper-slide');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = lightbox.querySelector('img');
    const closeBtn = lightbox.querySelector('.close-btn');

    slides.forEach(slide => {
        slide.addEventListener('click', () => {
            const imgSrc = slide.querySelector('img').src;
            lightbox.classList.add('active');
            setTimeout(() => {
                lightboxImg.src = imgSrc;
            }, 50);
        });
    });

    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        lightboxImg.src = '';
        lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightboxImg.src = '';
            lightbox.classList.remove('active');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightboxImg.src = '';
            lightbox.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', generateGallery);