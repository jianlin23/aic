//Generate Champion
const championsData = {
    2024: [
        {
            position: 'Winner',
            name: 'Muhammad Suhaimi Bin Mohamad Shahudi',
            university: 'Universiti Sains Malaysia'
        },
        {
            position: '1st Runner-up',
            name: 'Lai Siow Mei',
            university: 'Monash University Malaysia'
        },
        {
            position: '2nd Runner-up',
            name: 'Azre Nazerul Rahman',
            university: 'Universiti Islam Antarabangsa Malaysia'
        }
    ],
    2023: [
        {
            position: 'Winner',
            name: 'Muhammad Zulfakar Aiman Bin Zulkarnain',
            university: 'Universiti Teknologi MARA, Segamat Campus'
        },
        {
            position: '1st Runner-up',
            name: 'Yam Guo Wei',
            university: 'Universiti Sains Malaysia'
        },
        {
            position: '2nd Runner-up',
            name: 'Kow Yun Shen',
            university: 'Tunku Abdul Rahman University of Management and Technology'
        },
        {
            position: '4th Place',
            name: 'Muhammad Suhaimi bin Mohamad Shahudi',
            university: 'Universiti Sains Malaysia'
        },
        {
            position: '5th Place',
            name: 'Soo Rong Qian',
            university: 'Sunway University'
        },
        {
            position: '6th Place',
            name: 'Fatinah Binti Mohamad Salleh',
            university: 'Universiti Teknologi MARA, Segamat Campus'
        }
    ]
};

function generateChampionsTable(year) {
    // Fix: Remove the dot before tableClass in getElementById
    const tableClass = `champions${year}`;
    const table = document.getElementById(tableClass);
    if (!table) return;

    const champions = championsData[year];
    if (!champions) return;

    const rows = champions.map((champion, index) => `
        <tr class="scroll-animation" data-animation="animate__fadeInLeft" style="animation-delay: ${(index * 0.1).toFixed(1)}s;">
            <td>${champion.position}</td>
            <td>
                <div class="winner-name">${champion.name}</div>
                <div class="university">${champion.university}</div>
            </td>
        </tr>
    `).join('');

    table.innerHTML = rows;
}

// Generate Gallery
const galleryData = {
    malaysia: [
        {
            src: '/assets/image/gallery/malaysia/1.jpg',
            alt: 'AIC Malaysia Champion 2024'
        },
        {
            src: '/assets/image/gallery/malaysia/2.jpg',
            alt: 'AIC Malaysia Champion 2024'
        },
        {
            src: '/assets/image/gallery/malaysia/3.jpg',
            alt: 'AIC Malaysia Champion 2024'
        },
        {
            src: '/assets/image/gallery/malaysia/4.jpg',
            alt: 'AIC Malaysia Champion 2024'
        },
        // Add more images as needed
    ]
};

function generateGallery(country) {
    const galleryGrid = document.querySelector('.gallery-grid');
    if (!galleryGrid) return;

    const images = galleryData[country];
    if (!images) return;

    galleryGrid.innerHTML = images.map((image, index) => `
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

//Generate Partner
const partners = {
    malaysia: [
        { image: '/assets/image/home/partner/malaysia/bursa.png', name: 'Bursa Malaysia' }
    ],
    indonesia: [
        { image: '/assets/image/home/partner/indonesia/idx.png', name: 'IDX' },
        { image: '/assets/image/home/partner/indonesia/ipb_uni.png', name: 'IPB University' },
        { image: '/assets/image/home/partner/indonesia/lspr.png', name: 'LSPR' },
        { image: '/assets/image/home/partner/indonesia/udinus.png', name: 'UDINUS' },
        { image: '/assets/image/home/partner/indonesia/bogor.png', name: 'Bogor' },
        { image: '/assets/image/home/partner/indonesia/ul.png', name: 'UL' },
        { image: '/assets/image/home/partner/indonesia/eagle.png', name: 'Eagle' },
        { image: '/assets/image/home/partner/indonesia/feb.png', name: 'FEB' },
        { image: '/assets/image/home/partner/indonesia/uii.png', name: 'UII' },
        { image: '/assets/image/home/partner/indonesia/ubl.png', name: 'UBL' },
        { image: '/assets/image/home/partner/indonesia/uik.png', name: 'UIK' },
        { image: '/assets/image/home/partner/indonesia/flame.png', name: 'Flame' },
        { image: '/assets/image/home/partner/indonesia/upgris.png', name: 'UPGRIS' },
        { image: '/assets/image/home/partner/indonesia/sij.png', name: 'SIJ' },
        { image: '/assets/image/home/partner/indonesia/up.png', name: 'UP' },
        { image: '/assets/image/home/partner/indonesia/petra.png', name: 'PETRA' },
        { image: '/assets/image/home/partner/indonesia/upt.png', name: 'UPT' },
        { image: '/assets/image/home/partner/indonesia/usu.png', name: 'USU' },
        { image: '/assets/image/home/partner/indonesia/ibs.png', name: 'IBS' },
        { image: '/assets/image/home/partner/indonesia/uds.png', name: 'UDS' },
    ],
    singapore: [
        { image: '/assets/image/home/partner/singapore/sgx.png', name: 'SGX Group' },
        { image: '/assets/image/home/partner/singapore/ite.png', name: 'ITE' },
        { image: '/assets/image/home/partner/singapore/nyp.png', name: 'NYP' },
        { image: '/assets/image/home/partner/singapore/na.png', name: 'NA' },
        { image: '/assets/image/home/partner/singapore/rp.png', name: 'RP' },
        { image: '/assets/image/home/partner/singapore/sp.png', name: 'SP' },
        { image: '/assets/image/home/partner/singapore/tp.png', name: 'TP' },
        { image: '/assets/image/home/partner/singapore/ntus.png', name: 'NTUS' },
        { image: '/assets/image/home/partner/singapore/nus.png', name: 'NUS' },
        { image: '/assets/image/home/partner/singapore/smu.png', name: 'SMU' },
        { image: '/assets/image/home/partner/singapore/inc.png', name: 'INC' },
        { image: '/assets/image/home/partner/singapore/suss.png', name: 'SUSS' },
    ],
    thailand: [
        { image: '/assets/image/home/partner/thailand/set.png', name: 'SET' },
        { image: '/assets/image/home/partner/thailand/ku.png', name: 'KU' },
        { image: '/assets/image/home/partner/thailand/cbs.png', name: 'CBS' },
        { image: '/assets/image/home/partner/thailand/cmu.png', name: 'CMU' },
        { image: '/assets/image/home/partner/thailand/kbs.png', name: 'KBS' }
    ]
};

function renderPartners() {
    const container = document.querySelector('.partners-grid .row');
    if (!container) return;

    const currentPath = window.location.pathname;
    const countryMatch = currentPath.match(/\/country\/(\w+)\.html$/);
    if (!countryMatch) return;

    const currentCountry = countryMatch[1].toLowerCase();
    const partnerList = partners[currentCountry];
    if (!partnerList) return;

    // Split partners into groups of 5
    const rows = [];
    for (let i = 0; i < partnerList.length; i += 5) {
        rows.push(partnerList.slice(i, i + 5));
    }

    const rowsHtml = rows.map((rowPartners, rowIndex) => `
        <div class="row mb-4 scroll-animation" data-animation="animate__fadeInUp">
            <div class="col-12">
                <div class="d-flex justify-content-center align-items-center">
                    ${rowPartners.map((partner, index) => `
                        <div class="mx-4 scroll-animation" data-animation="animate__fadeIn" style="animation-delay: ${((rowIndex * 5 + index) * 0.1).toFixed(1)}s;">
                            <img src="${partner.image}" alt="${partner.name}" class="partner-logo">
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');

    container.innerHTML = rowsHtml;
}

//Generate Uni Partners
const universityPartners = {
    malaysia: [
        { name: 'AKADEMI SENI BUDAYA DAN WARISAN KEBANGSAAN' },
        { name: 'ASIA E UNIVERSITY' },
        { name: 'ASIA METROPOLITAN UNIVERSITY' },
        { name: 'ASIA PACIFIC UNIVERSITY OF TECHNOLOGY AND INNOVATION' },
        { name: 'ASIA SCHOOL OF BUSINESS' },
        { name: 'BINARY UNIVERSITY OF MANAGEMENT & ENTREPRENEURSHIP' },
        { name: 'CITY UNIVERSITY' },
        { name: 'CURTIN UNIVERSITY MALAYSIA' },
        { name: 'DISTED COLLEGE (MAIN CAMPUS) PENANG' },
        { name: 'DRB-HICOM UNIVERSITY OF AUTOMOTIVE MALAYSIA' },
        { name: 'HAN CHIANG UNIVERSITY COLLEGE OF COMMUNICATION' },
        { name: 'HELP UNIVERSITY' },
        { name: 'HERIOT-WATT UNIVERSITY MALAYSIA' },
        { name: 'INSTITUT PENDIDIKAN GURU MALAYSIA' },
        { name: 'INTERNATIONAL CENTRE FOR EDUCATION IN ISLAMIC FINANCE' },
        { name: 'INTERNATIONAL MEDICAL UNIVERSITY' },
        { name: 'INTERNATIONAL UNIVERSITY OF MALAYA-WALES' },
        { name: 'KOLEJ VOKASIONAL KAJANG' }
    ]
};

function renderUniversityPartners() {
    const container = document.querySelector('.uni-partners-grid .row');
    if (!container) return;

    const currentPath = window.location.pathname;
    const countryMatch = currentPath.match(/\/country\/(\w+)\.html$/);
    if (!countryMatch) return;

    const currentCountry = countryMatch[1].toLowerCase();
    const uniList = universityPartners[currentCountry];
    if (!uniList) return;

    // Split universities into groups of 3 for each row
    const rows = [];
    for (let i = 0; i < uniList.length; i += 3) {
        rows.push(uniList.slice(i, i + 3));
    }

    const rowsHtml = rows.map((rowUnis, rowIndex) => `
        <div class="row mb-4">
            ${rowUnis.map((uni, index) => `
                <div class="col-12 col-md-4 scroll-animation" data-animation="animate__fadeInUp" 
                     style="animation-delay: ${((rowIndex * 3 + index) * 0.1).toFixed(1)}s;">
                    <div class="uni-partner-card">
                        <div>
                            <div class="uni-name">${uni.name}</div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `).join('');

    container.innerHTML = rowsHtml;
}


document.addEventListener('DOMContentLoaded', () => {
    renderPartners();
    generateChampionsTable(2024);
    generateChampionsTable(2023);
    generateGallery('malaysia'); // Add this line
    renderUniversityPartners(); // Add this line
});
