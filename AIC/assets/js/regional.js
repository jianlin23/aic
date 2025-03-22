const galleryImages = [
    {
        src: '/assets/image/gallery/regional/1.jpg',
        alt: 'AIC Regional Champion 2024'
    },
    {
        src: '/assets/image/gallery/regional/2.jpg',
        alt: 'AIC Regional Champion 2024'
    },
    {
        src: '/assets/image/gallery/regional/3.jpg',
        alt: 'AIC Regional Champion 2024'
    },
    {
        src: '/assets/image/gallery/regional/4.jpg',
        alt: 'AIC Regional Champion 2024'
    },
    {
        src: '/assets/image/gallery/regional/5.jpg',
        alt: 'AIC Regional Champion 2024'
    },
    {
        src: '/assets/image/gallery/regional/6.jpg',
        alt: 'AIC Regional Champion 2024'
    },
    {
        src: '/assets/image/gallery/regional/7.jpg',
        alt: 'AIC Regional Champion 2024'
    },
    {
        src: '/assets/image/gallery/regional/8.jpg',
        alt: 'AIC Regional Champion 2024'
    },
    {
        src: '/assets/image/gallery/regional/9.jpg',
        alt: 'AIC Regional Champion 2024'
    },
    {
        src: '/assets/image/gallery/regional/10.jpg',
        alt: 'AIC Regional Champion 2024'
    },
    {
        src: '/assets/image/gallery/regional/11.jpg',
        alt: 'AIC Regional Champion 2024'
    }
];

function generateGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    if (!galleryGrid) return;

    galleryGrid.innerHTML = galleryImages.map((image, index) => `
        <div class="gallery-item scroll-animation" data-animation="animate__fadeInUp" style="animation-delay: ${(index * 0.1).toFixed(1)}s;">
            <img src="${image.src}" alt="${image.alt}">
            <div class="overlay">
                <span class="material-icons view-icon">visibility</span>
            </div>
        </div>
    `).join('');

    // Add lightbox to body
    if (!document.querySelector('.lightbox')) {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <span class="material-icons close-btn">close</span>
            <img src="" alt="">
        `;
        document.body.appendChild(lightbox);
    }

    // Add click events
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = lightbox.querySelector('img');
    const closeBtn = lightbox.querySelector('.close-btn');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            lightbox.classList.add('active');
            // Small delay to ensure the fade in animation works properly
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

    // Update the escape key handler
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightboxImg.src = '';
            lightbox.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', generateGallery);