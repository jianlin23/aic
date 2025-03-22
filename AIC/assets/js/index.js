//Render Champion Data
const champions = [
    {
        image: '/assets/image/gallery/grand_champion.jpg',
        title: 'Grand Champion',
        prize: 'SGD 20,000',
        name: 'Azre Nazerul Rahman',
        university: 'International Islamic University Malaysia',
        country: 'Malaysia'
    },
    {
        image: '/assets/image/gallery/1st_runner_up.jpg',
        title: '1st Runner-Up',
        prize: 'SGD 10,000',
        name: 'Ali Alexander',
        university: 'Universitas Gadjah Mada',
        country: 'Indonesia'
    },
    {
        image: '/assets/image/gallery/2nd_runner_up.jpg',
        title: '2nd Runner-Up',
        prize: 'SGD 5,000',
        name: 'Team Scoop',
        university: 'Republic Polytechnic',
        country: 'Singapore'
    },
    {
        image: '/assets/image/gallery/3rd_runner_up.jpg',
        title: '3rd Runner-Up',
        prize: 'SGD 1,000',
        name: 'Naradith Aparprasith',
        university: 'King Mongkut’s Institute of Technology Ladkrabang',
        country: 'Thailand'
    },
    // Add more champions here as needed
];

let currentChampion = 0;
let isAnimating = false; // Prevent multiple clicks during animation

function renderChampion(index, direction = 'next') {
    if (isAnimating) return;
    isAnimating = true;

    const champion = champions[index];
    const container = document.getElementById('championContainer');
    // const animationDirection = direction === 'next' ? 'fadeOutLeft' : 'fadeOutRight';
    // const newAnimationDirection = direction === 'next' ? 'fadeInRight' : 'fadeInLeft';
    const animationDirection = 'fadeOut';
    const newAnimationDirection = 'fadeIn';

    // Create new content
    const championHTML = `
        <div class="champion-image">
            <div class="nav-arrow prev" onclick="navigateChampion(-1)">
                <span class="material-icons">chevron_left</span>
            </div>
            <img src="${champion.image}" alt="Champion Photo" class="animate__animated animate__${newAnimationDirection}">
            <div class="nav-arrow next" onclick="navigateChampion(1)">
                <span class="material-icons">chevron_right</span>
            </div>
        </div>
        <div class="champion-details animate__animated animate__${newAnimationDirection}">
            <h3>${champion.title}</h3>
            <div class="prize-amount">${champion.prize}</div>
            <p><strong>${champion.name}</strong></p>
            <p>${champion.university}</p>
            <p>${champion.country}</p>
        </div>
    `;


    // Add fade out animation to current content
    const currentImage = container.querySelector('.champion-image img');
    const currentDetails = container.querySelector('.champion-details');

    if (currentImage && currentDetails) {
        currentImage.classList.add(`animate__${animationDirection}`);
        currentDetails.classList.add(`animate__${animationDirection}`);

        setTimeout(() => {
            container.innerHTML = championHTML;
            isAnimating = false;
        }, 500); // Match this with animation duration
    } else {
        container.innerHTML = championHTML;
        isAnimating = false;
    }
}

function navigateChampion(direction) {
    const newDirection = direction > 0 ? 'next' : 'prev';
    currentChampion = (currentChampion + direction + champions.length) % champions.length;
    renderChampion(currentChampion, newDirection);
}

// Initial render
renderChampion(0);

////////////////////////////////////////////////////////////////////////
//Render Partners Data
////////////////////////////////////////////////////////////////////////
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
    let rowIndex = 1;

    for (const [country, partnerList] of Object.entries(partners)) {
        const rows = Math.ceil(partnerList.length / 5);
        
        for (let i = 0; i < rows; i++) {
            const startIndex = i * 5;
            const partnersInRow = partnerList.slice(startIndex, startIndex + 5);
            
            // Always use the same column width for consistency
            const colWidth = 2;
            
            // Determine justification based on number of items
            const justifyContent = partnersInRow.length === 1 ? 'justify-content-start' : 
                                 partnersInRow.length < 5 ? 'justify-content-center' : 
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
                                <div class="col-2 col-md-${colWidth} scroll-animation partner-logo-${rowIndex}" data-animation="animate__fadeIn">
                                    <img src="${partner.image}" alt="${partner.name}" class="partner-logo">
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

// Call the function after DOM is loaded
document.addEventListener('DOMContentLoaded', renderPartners);