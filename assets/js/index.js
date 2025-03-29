//Render Champion Data
const champions = [
    {
        image: 'assets/image/gallery/grand_champion.jpg',
        title: 'Grand Champion',
        prize: 'SGD 20,000',
        name: 'Azre Nazerul Rahman',
        university: 'International Islamic University Malaysia',
        country: 'Malaysia'
    },
    {
        image: 'assets/image/gallery/1st_runner_up.jpg',
        title: '1st Runner-Up',
        prize: 'SGD 10,000',
        name: 'Ali Alexander',
        university: 'Universitas Gadjah Mada',
        country: 'Indonesia'
    },
    {
        image: 'assets/image/gallery/2nd_runner_up.jpg',
        title: '2nd Runner-Up',
        prize: 'SGD 5,000',
        name: 'Team Scoop',
        university: 'Republic Polytechnic',
        country: 'Singapore'
    },
    {
        image: 'assets/image/gallery/3rd_runner_up.jpg',
        title: '3rd Runner-Up',
        prize: 'SGD 1,000',
        name: 'Naradith Aparprasith',
        university: 'King Mongkut’s Institute of Technology Ladkrabang',
        country: 'Thailand'
    },
    {
        image: 'assets/image/gallery/the_winners_1.jpg',
        title: '',
        prize: '',
        name: '',
        university: '',
        country: ''
    },
    {
        image: 'assets/image/gallery/the_winners_2.jpg',
        title: '',
        prize: '',
        name: '',
        university: '',
        country: ''
    },
    // Add more champions here as needed
];

let currentChampion = 0;
let isAnimating = false; // Prevent multiple clicks during animation

function renderChampion() {
    const container = document.getElementById('championContainer');

    // Create Swiper HTML structure
    const swiperHTML = `
        <div class="swiper championSwiper">
            <div class="swiper-wrapper">
                ${champions.map(champion => `
                    <div class="swiper-slide">
                        <div class="champion-image">
                            <img src="${champion.image}" alt="Champion Photo" class="lightbox-trigger">
                        </div>
                        <div class="champion-details">
                            <h3>${champion.title}</h3>
                            <div class="prize-amount">${champion.prize}</div>
                            <p>${champion.name}</p>
                            <p>${champion.university}</p>
                            <p>${champion.country}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            <div class="autoplay-progress">
                <svg viewBox="0 0 48 48">
                    <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span></span>
            </div>
        </div>
        <div class="lightbox">
            <img src="" alt="Lightbox Image">
            <span class="close-btn material-icons">close</span>
        </div>
    `;

    container.innerHTML = swiperHTML;

    // Initialize Swiper
    const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");

    const swiper = new Swiper(".championSwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        on: {
            autoplayTimeLeft(s, time, progress) {
                progressCircle.style.setProperty("--progress", 1 - progress);
                progressContent.textContent = `${Math.ceil(time / 1000)}s`;
            }
        }
    });

    // Add lightbox functionality
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = lightbox.querySelector('img');
    const closeBtn = lightbox.querySelector('.close-btn');
    const triggers = document.querySelectorAll('.lightbox-trigger');

    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            lightboxImg.src = trigger.src;
            lightbox.classList.add('active');
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });
}

// Initial render
document.addEventListener('DOMContentLoaded', renderChampion);

////////////////////////////////////////////////////////////////////////
//Render Partners Data
////////////////////////////////////////////////////////////////////////
const partners = {
    malaysia: [
        { image: 'assets/image/home/partner/malaysia/bursa.png', name: 'Bursa Malaysia', link: 'https://www.bursamalaysia.com' }
    ],
    indonesia: [
        { image: 'assets/image/home/partner/indonesia/idx.png', name: 'IDX', link: 'https://www.idx.co.id' },
        { image: 'assets/image/home/partner/indonesia/ipb_uni.png', name: 'IPB University', link: 'https://ipb.ac.id' },
        { image: 'assets/image/home/partner/indonesia/lspr.png', name: 'LSPR', link: 'https://www.lspr.edu' },
        { image: 'assets/image/home/partner/indonesia/udinus.png', name: 'UDINUS', link: 'https://www.dinus.ac.id' },
        { image: 'assets/image/home/partner/indonesia/bogor.png', name: 'Bogor', link: 'https://www.ibik.ac.id/' },
        { image: 'assets/image/home/partner/indonesia/ul.png', name: 'UL', link: 'https://www.unila.ac.id/en/' },
        { image: 'assets/image/home/partner/indonesia/eagle.png', name: 'Eagle', link: 'https://stiebankbpdjateng.ac.id/' },
        { image: 'assets/image/home/partner/indonesia/feb.png', name: 'FEB', link: 'https://www.ui.ac.id/' },
        { image: 'assets/image/home/partner/indonesia/uii.png', name: 'UII', link: 'https://www.uii.ac.id' },
        { image: 'assets/image/home/partner/indonesia/ubl.png', name: 'UBL', link: 'https://www.budiluhur.ac.id/' },
        { image: 'assets/image/home/partner/indonesia/uik.png', name: 'UIK', link: 'https://uika-bogor.ac.id/' },
        { image: 'assets/image/home/partner/indonesia/flame.png', name: 'Flame', link: 'https://www.unpad.ac.id/' },
        { image: 'assets/image/home/partner/indonesia/upgris.png', name: 'UPGRIS', link: 'https://www.upgris.ac.id' },
        { image: 'assets/image/home/partner/indonesia/sij.png', name: 'SIJ', link: 'https://stei.ac.id/contact/' },
        { image: 'assets/image/home/partner/indonesia/up.png', name: 'UP', link: 'https://www.unpak.ac.id/' },
        { image: 'assets/image/home/partner/indonesia/petra.png', name: 'PETRA', link: 'https://www.petra.ac.id' },
        { image: 'assets/image/home/partner/indonesia/upt.png', name: 'UPT', link: 'https://universitaspertamina.ac.id/' },
        { image: 'assets/image/home/partner/indonesia/usu.png', name: 'USU', link: 'https://www.usu.ac.id' },
        { image: 'assets/image/home/partner/indonesia/ibs.png', name: 'IBS', link: 'https://www.ibs.ac.id' },
        { image: 'assets/image/home/partner/indonesia/uds.png', name: 'UDS', link: 'https://aseaninvestmentchallenge.com/Universitas%20Diponegoro' }
    ],
    singapore: [
        { image: 'assets/image/home/partner/singapore/sgx.png', name: 'SGX Group', link: 'https://www.sgx.com' },
        { image: 'assets/image/home/partner/singapore/ite.png', name: 'ITE', link: 'https://www.ite.edu.sg' },
        { image: 'assets/image/home/partner/singapore/nyp.png', name: 'NYP', link: 'https://www.nyp.edu.sg' },
        { image: 'assets/image/home/partner/singapore/na.png', name: 'NA', link: 'https://www.np.edu.sg/' },
        { image: 'assets/image/home/partner/singapore/rp.png', name: 'RP', link: 'https://www.rp.edu.sg' },
        { image: 'assets/image/home/partner/singapore/sp.png', name: 'SP', link: 'https://www.sp.edu.sg' },
        { image: 'assets/image/home/partner/singapore/tp.png', name: 'TP', link: 'https://www.tp.edu.sg' },
        { image: 'assets/image/home/partner/singapore/ntus.png', name: 'NTUS', link: 'https://www.ntu.edu.sg' },
        { image: 'assets/image/home/partner/singapore/nus.png', name: 'NUS', link: 'https://www.nus.edu.sg' },
        { image: 'assets/image/home/partner/singapore/smu.png', name: 'SMU', link: 'https://www.smu.edu.sg' },
        { image: 'assets/image/home/partner/singapore/inc.png', name: 'INC', link: 'https://www.sim.edu.sg/' },
        { image: 'assets/image/home/partner/singapore/suss.png', name: 'SUSS', link: 'https://www.suss.edu.sg' }
    ],
    thailand: [
        { image: 'assets/image/home/partner/thailand/set.png', name: 'SET', link: 'https://www.set.or.th' },
        { image: 'assets/image/home/partner/thailand/ku.png', name: 'KU', link: 'https://www.ku.ac.th' },
        { image: 'assets/image/home/partner/thailand/cbs.png', name: 'CBS', link: 'https://www.cbs.chula.ac.th' },
        { image: 'assets/image/home/partner/thailand/cmu.png', name: 'CMU', link: 'https://www.cmu.ac.th' },
        { image: 'assets/image/home/partner/thailand/kbs.png', name: 'KBS', link: 'https://www.kbs.kmitl.ac.th/home' }
    ]
};

// Then update the renderPartners function
function renderPartners() {
    const container = document.querySelector('.partners-grid .row');
    let rowIndex = 1;

    for (const [country, partnerList] of Object.entries(partners)) {
        // Change number of items per row based on screen size
        const itemsPerRow = window.innerWidth <= 768 ? 3 : 5;
        const rows = Math.ceil(partnerList.length / itemsPerRow);

        for (let i = 0; i < rows; i++) {
            const startIndex = i * itemsPerRow;
            const partnersInRow = partnerList.slice(startIndex, startIndex + itemsPerRow);

            // Adjust column width for mobile (4 for 3 items per row)
            const colWidth = window.innerWidth <= 768 ? 4 : 2;

            const isMalaysiaFirstRow = country === 'malaysia' && i === 0;
            const justifyContent = partnersInRow.length === 1 ? 'justify-content-start' :
                partnersInRow.length < itemsPerRow ? 'justify-content-center' :
                    'justify-content-between';

            const rowHtml = `
                <div class="row mb-4 scroll-animation partner-row-${rowIndex}" data-animation="animate__fadeInUp">
                    ${i === 0 ? `
                        <div class="col-12 col-md-2 mb-3 mb-md-0">
                            <h3 class="country-name">${country.charAt(0).toUpperCase() + country.slice(1)}</h3>
                        </div>
                    ` : `<div class="col-12 col-md-2"></div>`}
                    <div class="col-12 col-md-10">
                        <div class="row g-2 g-md-4 align-items-center ${justifyContent}">
                            ${partnersInRow.map((partner, index) => `
                                <div class="col-${colWidth} col-md-2 scroll-animation partner-logo-${rowIndex} ${isMalaysiaFirstRow ? 'malaysia-first-logo' : ''}" data-animation="animate__fadeIn">
                                    ${partner.link ? `
                                        <a href="${partner.link}" target="_blank" rel="noopener noreferrer">
                                            <img src="${partner.image}" alt="${partner.name}" class="partner-logo">
                                        </a>
                                    ` : `
                                        <img src="${partner.image}" alt="${partner.name}" class="partner-logo">
                                    `}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += rowHtml;
        }
        rowIndex++;
    }
}

// Update the resize event listener
let prevWidth = window.innerWidth;
window.addEventListener('resize', () => {
    if (prevWidth !== window.innerWidth) {
        prevWidth = window.innerWidth;
        const container = document.querySelector('.partners-grid .row');
        if (container) {
            container.innerHTML = '';
            renderPartners();
            
            // Reinitialize animations after rendering
            const animatedElements = document.querySelectorAll('.scroll-animation');
            animatedElements.forEach(element => {
                element.classList.add('animate__animated');
                const animation = element.dataset.animation;
                if (animation) {
                    element.classList.add(animation);
                }
            });
        }
    }
});

// Update the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
    renderPartners();
    // Initialize animations on first load
    const animatedElements = document.querySelectorAll('.scroll-animation');
    animatedElements.forEach(element => {
        element.classList.add('animate__animated');
        const animation = element.dataset.animation;
        if (animation) {
            element.classList.add(animation);
        }
    });
});