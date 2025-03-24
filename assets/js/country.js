//Generate Champion
const championsData = {
    malaysia: {
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
            },
            {
                position: '7th Place',
                name: 'Wong Kai Heng',
                university: 'Tunku Abdul Rahman University of Management and Technology'
            },
            {
                position: '8th Place',
                name: 'Soo Jing Yi',
                university: 'Taylor’s University'
            },
            {
                position: '9th Place',
                name: 'Chu Yan Win',
                university: 'Universiti Sains Malaysia'
            },
            {
                position: '10th Place',
                name: 'Nur Hazwani binti Badaruzaman',
                university: 'Universiti Islam Antarabangsa Malaysia'
            },
            {
                position: '11th Place',
                name: 'Asrul Raiffuddeen Bin Allaudin',
                university: 'Universiti Teknologi MARA, Segamat Campus'
            },
            {
                position: '12th Place',
                name: 'Muhammad Zarif Afiq',
                university: 'Universiti Teknologi MARA, Sungai Petani Campus'
            },
            {
                position: '13th Place',
                name: 'Muhammad Liwauddin bin Hamdi',
                university: 'Management and Science University'
            },
            {
                position: '14th Place',
                name: 'Afnan Fahmy Bin Mukrim',
                university: 'Universiti Sains Islam Malaysia'
            },
            {
                position: '15th Place',
                name: 'Muhammad Atif Daniel Bin Aziz',
                university: 'Universiti Malaysia Pahang'
            }
        ]
    },
    indonesia: {
        2024: [
            {
                position: 'Winner',
                name: 'Ali Alexander',
                university: 'Universitas Gadjah Mada'
            },
            {
                position: '1st Runner-up',
                name: 'Kevin Halim (Team)',
                university: 'Universitas Kristen Petra'
            },
            {
                position: '2nd Runner-up',
                name: 'Rhenal Marcelini',
                university: 'Universitas Gadjah Mada'
            },
        ],
        2023: [
            {
                position: 'Winner',
                name: 'Bethoven Ferry Ibrahim',
                university: 'Universitas Padjadjaran'
            },
            {
                position: '1st Runner-up',
                name: 'Reynald Hartanto Gunawan',
                university: 'Universitas Kristen Petra'
            },
            {
                position: '2nd Runner-up',
                name: 'Elena Erensia Soetandio',
                university: 'Universitas Kristen Petra'
            },
            {
                position: '4th Place',
                name: 'Andreas',
                university: 'Universitas Sumatera Utara'
            },
            {
                position: '5th Place',
                name: 'Muhammad Adrian Syaputra',
                university: 'Universitas Indonesia'
            },
            {
                position: '6th Place',
                name: 'Luis Vigo',
                university: 'Universitas Tarumanegara'
            },
            {
                position: '7th Place',
                name: 'Michael Saut Joshua',
                university: 'Universitas Padjadjaran'
            },
            {
                position: '8th Place',
                name: 'Rafi Izdihar Mumtaz',
                university: 'Universitas Islam Indonesia Yogyakarta'
            },
            {
                position: '9th Place',
                name: 'Bayu Setiyawan',
                university: 'Universitas Islam Indonesia Yogyakarta'
            },
            {
                position: '10th Place',
                name: 'Miftah Fariz Ramdani',
                university: 'Universitas Negeri Jakarta'
            },
        ]
    },
    singapore: {
        2024: [
            {
                position: 'Winner',
                name: 'Loo Su Qing (Team)',
                university: 'Republic Polytechnic'
            },
            {
                position: '1st Runner-up',
                name: 'Gabriel',
                university: 'RMIT University'
            },
            {
                position: '2nd Runner-up',
                name: 'Wu Enjia (Team)',
                university: 'Ngee Ann Polytechnic'
            }
        ],
        2023: [
            {
                position: 'Winner',
                name: 'Teo Yu Quan Dominic',
                university: 'Singapore University of Social Sciences'
            },
            {
                position: '1st Runner-up',
                name: 'Tan Wei Feng Bernard',
                university: 'Nanyang Technological University'
            },
            {
                position: '2nd Runner-up',
                name: 'Ray Tng',
                university: 'Ngee Ann Polytechnic'
            },
            {
                position: '4th Place',
                name: 'Teh Pei Xuan',
                university: 'Singapore Polytechnic'
            },
            {
                position: '5th Place',
                name: 'Kubota Masaki',
                university: 'National University of Singapore'
            },
            {
                position: '6th Place',
                name: 'Tan Xuan Cheng',
                university: 'National University of Singapore'
            },
            {
                position: '7th Place',
                name: 'Ryan Soh Wei Long',
                university: 'Singapore Polytechnic'
            },
            {
                position: '8th Place',
                name: 'Gan Zi Heng',
                university: 'Singapore Management University'
            }
        ]
    },
    thailand: {
        2024: [
            {
                position: 'Winner',
                name: 'Naradith Aparprasith',
                university: 'King Mongkut’s Institute of Technology Ladkrabang'
            },
            {
                position: '1st Runner-up',
                name: 'Benyapa Kang-onta',
                university: 'Chiang Mai University'
            },
            {
                position: '2nd Runner-up',
                name: 'Asama Netprom',
                university: 'Siam University'
            }
        ],
        2023: [
            {
                position: 'Winner',
                name: 'Kansorn Kanpinit',
                university: 'Faculty of Medicine Ramathibodi Hospital, Mahidol University'
            },
            {
                position: '1st Runner-up',
                name: 'Juthaporn Sornloy',
                university: 'Faculty of Medicine Ramathibodi Hospital, Mahidol University'
            },
            {
                position: '2nd Runner-up',
                name: 'Kamonchanok Poonpatpiboon',
                university: 'Faculty of Medicine Ramathibodi Hospital, Mahidol University'
            },
            {
                position: '4th Place',
                name: 'Ammarin Aenthaisong',
                university: 'Faculty of Economics, Chiangmai University'
            },
            {
                position: '5th Place',
                name: 'Naeem Tohnakayor',
                university: 'Faculty of Agriculture, Kasetsart University'
            },
            {
                position: '6th Place',
                name: 'Wanchai Lungngue',
                university: 'Faculty of Economics, Chiang Mai University'
            },
            {
                position: '7th Place',
                name: 'Shama Wachanachai',
                university: 'Faculty of Engineering, Chulalongkorn University'
            },
            {
                position: '8th Place',
                name: 'Naradith Aparprasith',
                university: 'Faculty of Biomedical Engineering, King Mongkut’s Institute of Technology Ladkrabang'
            },
            {
                position: '9th Place',
                name: 'Benjalak Khamphuea',
                university: 'Faculty of Economics, Chiang Mai University'
            },
            {
                position: '10th Place',
                name: 'Sorawich Sornwiseth',
                university: 'Faculty of Economics, Kasetsart University'
            },
        ]
    },
};

//Generate Gallery
const galleryData = {
    malaysia: [
        {
            src: '../assets/image/gallery/malaysia/1.jpg',
            alt: 'AIC Malaysia Champion 2024'
        },
        {
            src: '../assets/image/gallery/malaysia/2.jpg',
            alt: 'AIC Malaysia Champion 2024'
        },
        {
            src: '../assets/image/gallery/malaysia/3.jpg',
            alt: 'AIC Malaysia Champion 2024'
        },
        {
            src: '../assets/image/gallery/malaysia/4.jpg',
            alt: 'AIC Malaysia Champion 2024'
        },
    ],
    indonesia: [
        {
            src: '../assets/image/gallery/indonesia/1.jpg',
            alt: 'AIC Indonesia Champion 2024'
        },
        {
            src: '../assets/image/gallery/indonesia/2.jpg',
            alt: 'AIC Indonesia Champion 2024'
        },
        {
            src: '../assets/image/gallery/indonesia/3.jpg',
            alt: 'AIC Indonesia Champion 2024'
        },
        {
            src: '../assets/image/gallery/indonesia/4.jpg',
            alt: 'AIC Indonesia Champion 2024'
        },
        {
            src: '../assets/image/gallery/indonesia/5.jpg',
            alt: 'AIC Indonesia Champion 2024'
        },
        {
            src: '../assets/image/gallery/indonesia/6.jpg',
            alt: 'AIC Indonesia Champion 2024'
        },
        {
            src: '../assets/image/gallery/indonesia/7.jpg',
            alt: 'AIC Indonesia Champion 2024'
        },
        {
            src: '../assets/image/gallery/indonesia/8.jpg',
            alt: 'AIC Indonesia Champion 2024'
        },
        {
            src: '../assets/image/gallery/indonesia/9.jpg',
            alt: 'AIC Indonesia Champion 2024'
        },
        {
            src: '../assets/image/gallery/indonesia/10.jpg',
            alt: 'AIC Indonesia Champion 2024'
        }, ,
        {
            src: '../assets/image/gallery/indonesia/11.jpg',
            alt: 'AIC Indonesia Champion 2024'
        }, ,
        {
            src: '../assets/image/gallery/indonesia/12.jpg',
            alt: 'AIC Indonesia Champion 2024'
        }, ,
        {
            src: '../assets/image/gallery/indonesia/13.jpg',
            alt: 'AIC Indonesia Champion 2024'
        }, ,
        {
            src: '../assets/image/gallery/indonesia/14.jpg',
            alt: 'AIC Indonesia Champion 2024'
        }, ,
        {
            src: '../assets/image/gallery/indonesia/15.jpg',
            alt: 'AIC Indonesia Champion 2024'
        }, ,
        {
            src: '../assets/image/gallery/indonesia/16.jpg',
            alt: 'AIC Indonesia Champion 2024'
        }, ,
        {
            src: '../assets/image/gallery/indonesia/17.jpg',
            alt: 'AIC Indonesia Champion 2024'
        },
    ],
    singapore: [
        {
            src: '../assets/image/gallery/singapore/1.jpg',
            alt: 'AIC Singapore Champion 2024'
        },
        {
            src: '../assets/image/gallery/singapore/2.jpg',
            alt: 'AIC Singapore Champion 2024'
        },
        {
            src: '../assets/image/gallery/singapore/3.jpg',
            alt: 'AIC Singapore Champion 2024'
        },
    ],
    thailand: [
        {
            src: '../assets/image/gallery/thailand/1.jpg',
            alt: 'AIC Thailand Champion 2024'
        },
        {
            src: '../assets/image/gallery/thailand/2.jpg',
            alt: 'AIC Thailand Champion 2024'
        },
        {
            src: '../assets/image/gallery/thailand/3.jpg',
            alt: 'AIC Thailand Champion 2024'
        },
        {
            src: '../assets/image/gallery/thailand/4.jpg',
            alt: 'AIC Thailand Champion 2024'
        },
        {
            src: '../assets/image/gallery/thailand/5.jpg',
            alt: 'AIC Thailand Champion 2024'
        },
        {
            src: '../assets/image/gallery/thailand/6.jpg',
            alt: 'AIC Thailand Champion 2024'
        },
        {
            src: '../assets/image/gallery/thailand/7.jpg',
            alt: 'AIC Thailand Champion 2024'
        },
        {
            src: '../assets/image/gallery/thailand/8.jpg',
            alt: 'AIC Thailand Champion 2024'
        },
        {
            src: '../assets/image/gallery/thailand/9.jpg',
            alt: 'AIC Thailand Champion 2024'
        },
    ]
};

//Generate Partner
const partners = {
    malaysia: [
        { image: '../assets/image/home/partner/malaysia/bursa.png', name: 'Bursa Malaysia', link: 'https://www.bursamalaysia.com' }
    ],
    indonesia: [
        { image: '../assets/image/home/partner/indonesia/idx.png', name: 'IDX', link: 'https://www.idx.co.id' },
        { image: '../assets/image/home/partner/indonesia/ipb_uni.png', name: 'IPB University', link: 'https://ipb.ac.id' },
        { image: '../assets/image/home/partner/indonesia/lspr.png', name: 'LSPR', link: 'https://www.lspr.edu' },
        { image: '../assets/image/home/partner/indonesia/udinus.png', name: 'UDINUS', link: 'https://www.dinus.ac.id' },
        { image: '../assets/image/home/partner/indonesia/bogor.png', name: 'Bogor', link: 'https://kotabogor.go.id' },
        { image: '../assets/image/home/partner/indonesia/ul.png', name: 'UL', link: 'https://www.ul.ac.id' },
        { image: '../assets/image/home/partner/indonesia/eagle.png', name: 'Eagle', link: 'https://eagle.co.id' },
        { image: '../assets/image/home/partner/indonesia/feb.png', name: 'FEB', link: 'https://feb.ugm.ac.id' },
        { image: '../assets/image/home/partner/indonesia/uii.png', name: 'UII', link: 'https://www.uii.ac.id' },
        { image: '../assets/image/home/partner/indonesia/ubl.png', name: 'UBL', link: 'https://www.ubl.ac.id' },
        { image: '../assets/image/home/partner/indonesia/uik.png', name: 'UIK', link: 'https://uik.ac.id' },
        { image: '../assets/image/home/partner/indonesia/flame.png', name: 'Flame', link: 'https://www.flame.edu.in' },
        { image: '../assets/image/home/partner/indonesia/upgris.png', name: 'UPGRIS', link: 'https://www.upgris.ac.id' },
        { image: '../assets/image/home/partner/indonesia/sij.png', name: 'SIJ', link: 'https://sij.ac.id' },
        { image: '../assets/image/home/partner/indonesia/up.png', name: 'UP', link: 'https://www.up.edu.ph' },
        { image: '../assets/image/home/partner/indonesia/petra.png', name: 'PETRA', link: 'https://www.petra.ac.id' },
        { image: '../assets/image/home/partner/indonesia/upt.png', name: 'UPT', link: 'https://www.upt.ac.id' },
        { image: '../assets/image/home/partner/indonesia/usu.png', name: 'USU', link: 'https://www.usu.ac.id' },
        { image: '../assets/image/home/partner/indonesia/ibs.png', name: 'IBS', link: 'https://www.ibs.ac.id' },
        { image: '../assets/image/home/partner/indonesia/uds.png', name: 'UDS', link: 'https://www.uds.ac.id' }
    ],
    singapore: [
        { image: '../assets/image/home/partner/singapore/sgx.png', name: 'SGX Group', link: 'https://www.sgx.com' },
        { image: '../assets/image/home/partner/singapore/ite.png', name: 'ITE', link: 'https://www.ite.edu.sg' },
        { image: '../assets/image/home/partner/singapore/nyp.png', name: 'NYP', link: 'https://www.nyp.edu.sg' },
        { image: '../assets/image/home/partner/singapore/na.png', name: 'NA', link: 'https://www.na.edu.sg' },
        { image: '../assets/image/home/partner/singapore/rp.png', name: 'RP', link: 'https://www.rp.edu.sg' },
        { image: '../assets/image/home/partner/singapore/sp.png', name: 'SP', link: 'https://www.sp.edu.sg' },
        { image: '../assets/image/home/partner/singapore/tp.png', name: 'TP', link: 'https://www.tp.edu.sg' },
        { image: '../assets/image/home/partner/singapore/ntus.png', name: 'NTUS', link: 'https://www.ntu.edu.sg' },
        { image: '../assets/image/home/partner/singapore/nus.png', name: 'NUS', link: 'https://www.nus.edu.sg' },
        { image: '../assets/image/home/partner/singapore/smu.png', name: 'SMU', link: 'https://www.smu.edu.sg' },
        { image: '../assets/image/home/partner/singapore/inc.png', name: 'INC', link: 'https://www.inc.com.sg' },
        { image: '../assets/image/home/partner/singapore/suss.png', name: 'SUSS', link: 'https://www.suss.edu.sg' }
    ],
    thailand: [
        { image: '../assets/image/home/partner/thailand/set.png', name: 'SET', link: 'https://www.set.or.th' },
        { image: '../assets/image/home/partner/thailand/ku.png', name: 'KU', link: 'https://www.ku.ac.th' },
        { image: '../assets/image/home/partner/thailand/cbs.png', name: 'CBS', link: 'https://www.cbs.chula.ac.th' },
        { image: '../assets/image/home/partner/thailand/cmu.png', name: 'CMU', link: 'https://www.cmu.ac.th' },
        { image: '../assets/image/home/partner/thailand/kbs.png', name: 'KBS', link: 'https://www.kbs.ac.th' }
    ]
};

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
        { name: 'KOLEJ VOKASIONAL KAJANG' },
        { name: 'Kolej Vokasional Kota Tinggi' },
        { name: 'Kolej Vokasional Sultan Ahmad Shah' },
        { name: 'Kolej Vokasional Sultan Haji Ahmad Shah Al-Musta’in Billah' },
        { name: 'Kolej Vokasional Temerloh' },
        { name: 'Kolej Vokasional Tengku Ampuan Afzan' },
        { name: 'Kolej Yayasan UEM' },
        { name: 'MAHSA University' },
        { name: 'Malaysia Institute for Supply Chain Innovation' },
        { name: 'Management and Science University' },
        { name: 'Manipal International University' },
        { name: 'Manipal University College Malaysia' },
        { name: 'MERITUS University' },
        { name: 'Monash University Malaysia' },
        { name: 'MSU College Ipoh' },
        { name: 'MSU College Penang' },
        { name: 'Multimedia University Cyberjaya' },
        { name: 'Multimedia University Melaka' },
        { name: 'Newcastle University Medicine Malaysia' },
        { name: 'Nilai University Negeri Sembilan' },
        { name: 'Perdana University' },
        { name: 'Polikteknik Idris Shah' },
        { name: 'Politaknik Jeli Kelantan' },
        { name: 'Politeknik Abdul Halim Muadzam Shah' },
        { name: 'Politeknik Bagan Datuk Perak' },
        { name: 'Politeknik Banting Selangor' },
        { name: 'Politeknik Besut Terengganu' },
        { name: 'Politeknik Hulu Terengganu' },
        { name: 'Politeknik Ibrahim Sultan' },
        { name: 'Politeknik Kota Bharu' },
        { name: 'Politeknik Kota Kinabalu' },
        { name: 'Politeknik Kuala Terengganu' },
        { name: 'Politeknik Kuching Sarawak' },
        { name: 'Politeknik Melaka' },
        { name: 'Politeknik Merlimau' },
        { name: 'Politeknik Mersing' },
        { name: 'Politeknik METro Betong' },
        { name: 'Politeknik Muadzam Shah' },
        { name: 'Politeknik Nilai' },
        { name: 'Politeknik Port Dickson' },
        { name: 'Politeknik Seberang Prai' },
        { name: 'Politeknik Sultan Azlan Shah' },
        { name: 'Politeknik Sultan Haji Ahmad Shah' },
        { name: 'Politeknik Sultan Mizan Zainal Abidin' },
        { name: 'Politeknik Sultan Salahuddin Abdul Aziz Shah' },
        { name: 'Politeknik Tawau' },
        { name: 'Politeknik Tuanku Sultanah Bahiyah' },
        { name: 'Politeknik Tuanku Syed Sirajuddin' },
        { name: 'Politeknik Tun Syed Nasir Syed Ismail' },
        { name: 'Politeknik Ungku Omar' },
        { name: 'Putra Business School' },
        { name: 'Quest International University' },
        { name: 'Raffles University (RU)' },
        { name: 'Royal College of Surgeons in Ireland and University College Dublin Malaysia Campus' },
        { name: 'Sentral College Penang' },
        { name: 'Seri Manjung Vocational College' },
        { name: 'Sunway City Iskandar Puteri' },
        { name: 'Sunway City Kuala Lumpur' },
        { name: 'Sunway College Bandar Sunway' },
        { name: 'Sunway College Ipoh' },
        { name: 'Sunway College Johor Bahru' },
        { name: 'Sunway College Kuching' },
        { name: 'Sunway College Velocity' },
        { name: 'Sunway University Selangor' },
        { name: 'Swinburne University of Technology Sarawak Campus' },
        { name: 'TARUMT Kampar Perak' },
        { name: 'TARUMT Kota Kinabalu' },
        { name: 'TARUMT Kuala Lumpur' },
        { name: 'TARUMT Penang' },
        { name: 'TARUMT Sabah' },
        { name: "Taylor's University" },
        { name: 'Tunku Abdul Rahman University of Management and Technology Cawangan Pahang' },
        { name: 'UCSI College Taman Connaught Cheras KL' },
        { name: 'UCSI University Kuala Lumpur' },
        { name: 'UCSI University Sarawak' },
        { name: 'UCSI University Springhill' },
        { name: 'Universiti Pendidikan Sultan Idris' },
        { name: 'Universiti Pertahanan Nasional Malaysia' },
        { name: 'Universiti Putra Malaysia' },
        { name: 'Universiti Sains Islam Malaysia' },
        { name: 'Universiti Sains Malaysia' },
        { name: 'Universiti Sultan Azlan Shah' },
        { name: 'Universiti Sultan Zainal Abidin' },
        { name: 'Universiti Teknikal Malaysia Melaka' },
        { name: 'Universiti Teknologi Malaysia' },
        { name: 'Universiti Teknologi MARA' },
        { name: 'Universiti Teknologi PETRONAS' },
        { name: 'Universiti Teknologi Sarawak' },
        { name: 'Universiti Tenaga Nasional' },
        { name: 'Universiti Tunku Abdul Rahman' },
        { name: 'Universiti Utara Malaysia' },
        { name: 'University Malaysia of Computer Science and Engineering' },
        { name: 'University of Malaya' },
        { name: 'University of Nottingham Malaysia' },
        { name: 'University Tun Hussein Onn Malaysia' },
        { name: 'UOW Malaysia KDU Penang University College' },
        { name: 'UOW Malaysia KDU Penang University College (Batu Kawan)' },
        { name: 'UOW Malaysia KDU University College Shah Alam' },
        { name: 'UTAR Sungai Long Campus (Selangor)' },
        { name: 'Wawasan Open University Bandar Utama Selangor' },
        { name: 'Wawasan Open University Ipoh' },
        { name: 'Wawasan Open University Johor Bahru' },
        { name: 'Wawasan Open University Kuala Lumpur' },
        { name: 'Wawasan Open University Kuching' },
        { name: 'Wawasan Open University Penang' },
        { name: 'Yayasan Pahang' }
    ],
    indonesia: [
        { name: 'Bina Insani University' },
        { name: 'Indonesia Banking School (IBS)' },
        { name: 'Indonesia International Institute for Life Science' },
        { name: 'Institut Agama Islam Negeri Kerinci' },
        { name: 'Institut Bisnis dan Informatika Kesatuan' },
        { name: 'Institut Bisnis dan Informatika Kwik Kian Gie' },
        { name: 'Institut Bisnis Nusantara (IBN)' },
        { name: 'Institut Ilmu Sosial dan Manajemen STIAMI' },
        { name: 'Institut Pertanian Bogor' },
        { name: 'Institut Teknologi Bandung' },
        { name: 'Institut Teknologi dan Bisnis Ahmad Dahlan' },
        { name: 'Institut Teknologi dan Bisnis STIKOM Bali' },
        { name: 'Institut Teknologi Indonesia' },
        { name: 'Institut Teknologi Sepuluh Nopember' },
        { name: 'International University Liaison Indonesia' },
        { name: 'IPMI International Business School' },
        { name: 'Kalbis Institute' },
        { name: 'LSPR Institute of Communication & Business' },
        { name: 'Matana University' },
        { name: 'Perbanas Institute Jakarta' },
        { name: 'Politeknik Keuangan Negara STAN' },
        { name: 'Politeknik Negeri Bali' },
        { name: 'Politeknik Negeri Jakarta' },
        { name: 'Politeknik Negeri Malang' },
        { name: 'Politeknik Negeri Semarang' },
        { name: 'PPM School of Management' },
        { name: 'Sekolah Tinggi Ekonomi Islam SEBI (STEI SEBI)' },
        { name: 'Sekolah Tinggi Ilmu Ekonomi Bhakti Pembangunan' },
        { name: 'Sekolah Tinggi Ilmu Ekonomi Cirebon' },
        { name: 'Sekolah Tinggi Ilmu Ekonomi Indonesia (STIESIA) Surabaya' },
        { name: 'Sekolah Tinggi Ilmu Ekonomi Widya Wiwaha' },
        { name: 'Sekolah Tinggi Ilmu Ekonomi YKPN' },
        { name: 'Sekolah Tinggi Manajemen Informatika dan Teknik Komputer Jakarta' },
        { name: 'STIE Bank BPD Jateng' },
        { name: 'STIE Ekuitas' },
        { name: 'STIE Indonesia Jakarta' },
        { name: 'STIE Jakarta International College' },
        { name: 'STIE Malangkucecwara' },
        { name: 'STIE Semarang' },
        { name: 'STIE UniSadhuGuna' },
        { name: 'Swiss German University' },
        { name: 'Universitas ‘Aisyiyah (UNISA) Yogyakarta' },
        { name: 'Universitas 17 Agustus 1945 Semarang' },
        { name: 'Universitas 17 Agustus 1945 Surabaya' },
        { name: 'Universitas 45 Surabaya' },
        { name: 'Universitas Advent Indonesia' },
        { name: 'Universitas Ahmad Dahlan' },
        { name: 'Universitas Airlangga' },
        { name: 'Universitas AKI' },
        { name: 'Universitas Al-Azhar Indonesia' },
        { name: 'Universitas Alma Ata Yogyakarta' },
        { name: 'Universitas Alwashliyah' },
        { name: 'Universitas AMIKOM Yogyakarta' },
        { name: 'Universitas Andalas' },
        { name: 'Universitas Bakrie' },
        { name: 'Universitas Bengkulu' },
        { name: 'Universitas Bhayangkara Jakarta Raya' },
        { name: 'Universitas Bhayangkara Surabaya' },
        { name: 'Universitas Bina Darma' },
        { name: 'Universitas Bina Nusantara' },
        { name: 'Universitas Borneo Tarakan' },
        { name: 'Universitas Brawijaya' },
        { name: 'Universitas Buddhi Dharma' },
        { name: 'Universitas Budi Luhur' },
        { name: 'Universitas Bunda Mulia (UBM)' },
        { name: 'Universitas Bung Hatta (UBH)' },
        { name: 'Universitas Bung Karno (UBK)' },
        { name: 'Universitas Cendekia Abditama' },
        { name: 'Universitas Cendrawasih' },
        { name: 'Universitas Ciputra' },
        { name: 'Universitas Cokroaminoto Yogyakarta' },
        { name: 'Universitas Darma Agung' },
        { name: 'Universitas Dharmawangsa' },
        { name: 'Universitas Dian Nusantara' },
        { name: 'Universitas Dian Nuswantoro' },
        { name: 'Universitas Dinamika (STIKOM) Surabaya' },
        { name: 'Universitas Diponegoro' },
        { name: 'Universitas Djuanda' },
        { name: 'Universitas Dr. Soetomo' },
        { name: 'Universitas Esa Unggul' },
        { name: 'Universitas Gadjah Mada' },
        { name: 'Universitas Gajayana' },
        { name: 'Universitas Gunadarma' },
        { name: 'Universitas Halu Oleo' },
        { name: 'Universitas Hang Tuah' },
        { name: 'Universitas Hasanuddin' },
        { name: 'Universitas Hayam Wuruk Perbanas' },
        { name: 'Universitas HKBP Nommensen' },
        { name: 'Universitas Ibn Khaldun Bogor' },
        { name: 'Universitas Indonesia' },
        { name: 'Universitas Informatika dan Bisnis Indonesia' },
        { name: 'Universitas Insan Pembangunan Indonesia' },
        { name: 'Universitas Internasional Batam' },
        { name: 'Universitas Internasional Semen Indonesia' },
        { name: 'Universitas Islam Bandung' },
        { name: 'Universitas Islam Indonesia Yogyakarta' },
        { name: 'Universitas Islam International Indonesia' },
        { name: 'Universitas Islam Malang' },
        { name: 'Universitas Islam Negeri Alauddin Makassar' },
        { name: 'Universitas Islam Negeri K.H. Abdurrahman Wahid' },
        { name: 'Universitas Islam Negeri Maulana Malik Ibrahim Malang' },
        { name: 'Universitas Islam Negeri Sulthan Thaha Saifuddin Jambi' },
        { name: 'Universitas Islam Negeri Sumatera Utara' },
        { name: 'Universitas Islam Negeri Sunan Ampel Surabaya' },
        { name: 'Universitas Islam Negeri Sunan Kalijaga' },
        { name: 'Universitas Islam Negeri Syarif Hidayatullah Jakarta' },
        { name: 'Universitas Islam Negeri Walisongo' },
        { name: 'Universitas Islam Sultan Agung' },
        { name: 'Universitas Islam Sumatera Utara' },
        { name: 'Universitas Jabal Ghafur' },
        { name: 'Universitas Jambi' },
        { name: 'Universitas Janabadra' },
        { name: 'Universitas Jayabaya' },
        { name: 'Universitas Jember' },
        { name: 'Universitas Jenderal Soedirman' },
        { name: 'Universitas Kadiri' },
        { name: 'Universitas Katolik Atma Jaya Jakarta' },
        { name: 'Universitas Katolik Atma Jaya Makassar' },
        { name: 'Universitas Katolik Darma Cendika' },
        { name: 'Universitas Katolik De La Salle' },
        { name: 'Universitas Katolik Parahyangan' },
        { name: 'Universitas Katolik Santo Thomas' },
        { name: 'Universitas Katolik Soegijapranata' },
        { name: 'Universitas Katolik Widya Mandala Surabaya' },
    ],
    singapore: [
        { name: 'Institute of Technical Education College Central' },
        { name: 'Institute of Technical Education College East' },
        { name: 'Institute of Technical Education College West' },
        { name: 'Nanyang Polytechnic' },
        { name: 'Nanyang Technological University' },
        { name: 'National University of Singapore' },
        { name: 'Ngee Ann Polytechnic' },
        { name: 'Republic Polytechnic' },
        { name: 'Singapore Management University' },
        { name: 'Singapore Institute of Management' },
        { name: 'Singapore Polytechnic' },
        { name: 'Singapore University of Social Sciences' },
        { name: 'Temasek Polytechnic' }
    ],
    thailand: [
        { name: 'Arsom Silp Institute of the Arts' },
        { name: 'Asia-Pacific International University' },
        { name: 'Assumption University' },
        { name: 'Ayutthaya Rajabhat University' },
        { name: 'Ban Somdet Chaopraya Rajabhat University' },
        { name: 'Bangkok Suvarnabhumi University' },
        { name: 'Bangkok Thonburi University' },
        { name: 'Bangkok University' },
        { name: 'Bunditpatanasilpa Institute of Fine Arts' },
        { name: 'Burapha University' },
        { name: 'Buriram Rajabhat University' },
        { name: 'Chaiyaphum Rajabhat University' },
        { name: 'Chalermkarnchana University' },
        { name: 'Chandrakasem Rajabhat University' },
        { name: 'Chaopraya University' },
        { name: 'Chiang Mai University' },
        { name: 'Chiang Rai Rajabhat University' },
        { name: 'Chiangmai Rajabhat University' },
        { name: 'Chiangrai College' },
        { name: 'Chitralada Institute of Technology' },
        { name: 'Chom Bueng Rajabhat University' },
        { name: 'Christian University of Thailand' },
        { name: 'Chulabhorn Graduate Institute' },
        { name: 'Chulachomklao Royal Military Academy' },
        { name: 'Chulalongkorn University' },
        { name: 'Civil Aviation Training Center' },
        { name: 'College of Asian Scholars' },
        { name: 'Command and General Staff College' },
        { name: 'Dhonburi Rajabhat University' },
        { name: 'Dhurakij Pundit University' },
        { name: 'Dusit Thani College' },
        { name: 'Eastern Asia University' },
        { name: 'Fatoni University' },
        { name: 'Hatyai University' },
        { name: 'Huachiew Chalermprakiet University' },
        { name: 'Institute of Entrepreneurial Science Ayothaya' },
        { name: 'Institute of Social Technology (Krirk)' },
        { name: 'International Buddhist College' },
        { name: 'Irrigation College' },
        { name: 'Kalasin University' },
        { name: 'Kamphaengphet Rajabhat University' },
        { name: 'Kanchanaburi Rajabhat University' },
        { name: 'Kanlayaniwattana Institute of Music' },
        { name: 'Kantana Institute' },
        { name: 'Kasem Bundit University' },
        { name: 'Kasetsart University' },
        { name: 'Khon Kaen University' },
        { name: 'King Mongkut\'s Institute of Technology Ladkrabang' },
        { name: 'King Mongkut\'s University of Technology North Bangkok' },
        { name: 'King Mongkut\'s University of Technology Thonburi' },
        { name: 'Krirk University' },
        { name: 'Lampang Inter-Tech College' },
        { name: 'Lampang Rajabhat University' },
        { name: 'Learning Institute For Everyone' },
        { name: 'Loei Rajabhat University' },
        { name: 'Mae Fah Luang University' },
        { name: 'Maejo University' },
        { name: 'Mahachai Institute of Automotive Technology' },
        { name: 'Mahamakut Buddhist University' },
        { name: 'Mahanakorn University of Technology' },
        { name: 'Mahasarakham Rajabhat University' },
        { name: 'Mahasarakham University' },
        { name: 'Mahidol University' },
        { name: 'Merchant Marine Training Centre' },
        { name: 'Nakhon Pathom Rajabhat University' },
        { name: 'Nakhon Phanom University' },
        { name: 'Nakhon Ratchasima Rajabhat University' },
        { name: 'Nakhon Si Thammarat Rajabhat University' },
        { name: 'Nakhonratchasima College' },
        { name: 'Nakornsawan Rajabhat University' },
        { name: 'Narathiwat Rajanagarindra University' },
        { name: 'Naresuan University' },
        { name: 'Nation University' },
        { name: 'National Institute of Development Administration' },
        { name: 'Navaminda Kasatriyadhiraj Royal Air Force Academy' },
        { name: 'Navamindradhiraj University' },
        { name: 'North Bangkok University' },
        { name: 'North-Chiang Mai University' },
        { name: 'Northeastern University' },
        { name: 'Northern College' },
        { name: 'Pacific Institute of Management Science' },
        { name: 'Panyapiwat Institute of Management' },
        { name: 'Pathumwan Institute of Technology' },
        { name: 'Payap University' },
        { name: 'Phanomwan College of Technology' },
        { name: 'Phetchabun Rajabhat University' },
        { name: 'Phetchaburi Rajabhat University' },
        { name: 'Phitsanulok University' },
        { name: 'Phramongkutklao College of Medicine' },
        { name: 'Phranakhon Rajabhat University' },
        { name: 'Phuket Rajabhat University' },
        { name: 'Pibulsongkram Rajabhat University' },
        { name: 'Pitchayabundit College' },
        { name: 'Police Nursing College' },
        { name: 'Praboromarajchanok Institute' },
        { name: 'Prince of Songkla University' },
        { name: 'Raffles International College' },
        { name: 'Rajabhat Rajanagarindra University' },
        { name: 'Rajamangala University of Technology Bangkok' },
        { name: 'Rajamangala University of Technology East' },
        { name: 'Rajamangala University of Technology Isan' },
        { name: 'Rajamangala University of Technology Lanna' },
        { name: 'Rajamangala University of Technology Pranakorn' },
        { name: 'Rajamangala University of Technology Rattanakosin' },
        { name: 'Rajamangala University of Technology Srivijaya' },
        { name: 'Rajamangala University of Technology Suvarnabhumi' },
        { name: 'Rajamangala University of Technology Thanyaburi' },
        { name: 'Rajapark Institute' },
        { name: 'Rajapruk University' },
        { name: 'Ramkhamhaeng University' },
        { name: 'Rampaipani Rajabhat University' },
        { name: 'Rangsit University' },
        { name: 'Ratchathani University' },
        { name: 'Rattana Bundit University' },
        { name: 'Roi Et Rajabhat University' },
        { name: 'Royal Police Cadet Academy' },
        { name: 'Royal Thai Air Force Nursing College' },
        { name: 'Royal Thai Naval Academy' },
        { name: 'Royal Thai Navy College of Nursing' },
        { name: 'Saengtham College' },
        { name: 'Saint John\'s University' },
        { name: 'Saint Louis College' },
        { name: 'Sakon Nakhon Rajabhat University' },
        { name: 'Santapol College Udonthani' },
        { name: 'Shinawatra University' },
        { name: 'Siam Technology College' },
        { name: 'Siam University' },
        { name: 'Silpakorn University' },
        { name: 'Sisaket Rajabhat University' },
        { name: 'Songkhla Rajabhat University' },
        { name: 'Southeast Asia University' },
        { name: 'Southeast Bangkok University' },
        { name: 'Southern College of Technology' },
        { name: 'Sri Swarinthira Institute of Nursing, Thai Red Cross Society' },
        { name: 'Srinakharinwirot University' },
        { name: 'Sripatum University' },
        { name: 'St Teresa International University' },
        { name: 'Stamford International University' },
        { name: 'Suan Dusit University' },
        { name: 'Suan Sunandha Rajabhat University' },
        { name: 'Sukhothai Thammathirat University' },
        { name: 'Suranaree University of Technology' },
        { name: 'Suratthani Rajabhat University' },
        { name: 'Surindra Rajabhat University' },
        { name: 'Suvarnabhumi Institute of Technology' },
        { name: 'Tapee University' },
        { name: 'Thai-Nichi Institute of Technology' },
        { name: 'Thailand National Sports University' },
        { name: 'Thaksin University' },
        { name: 'Thammasat University' },
        { name: 'The Eastern University of Management and Technology' },
        { name: 'The Far Eastern University' },
        { name: 'The Royal Thai Army Nursing College' },
        { name: 'The University of Central Thailand' },
        { name: 'Thepsatri Rajabhat University' },
        { name: 'Thonburi University' },
        { name: 'Thong Sook College' },
        { name: 'Ubon Ratchathani Rajabhat University' },
        { name: 'Ubon Ratchathani University' },
        { name: 'Udon Thani Rajabhat University' },
        { name: 'University of Phayao' },
        { name: 'University of the Thai Chamber of Commerce' },
        { name: 'Uttaradit Rajabhat University' },
        { name: 'Valaya Alongkorn Rajabhat University under the Royal Patronage' },
        { name: 'Vidyasirimedhi Institute of Science and Technology' },
        { name: 'Vongchavalitkul University' },
        { name: 'Walailak University' },
        { name: 'Yala Rajabhat University' },
    ],
};


function generateChampionsTable(year, country) {
    const tableClass = `champions${year}`;
    const table = document.getElementById(tableClass);
    if (!table) return;

    // Get country-specific champions data
    const countryChampions = championsData[country] && championsData[country][year];
    if (!countryChampions) return;

    const rows = countryChampions.map((champion, index) => `
        <tr>
            <td>${champion.position}</td>
            <td>
                <div class="winner-name">${champion.name}</div>
                <div class="university">${champion.university}</div>
            </td>
        </tr>
    `).join('');

    table.innerHTML = rows;
}

function renderPartners(country) {
    const container = document.querySelector('.partners-grid .row');
    if (!container) return;

    const partnerList = partners[country];
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
`).join('');

    container.innerHTML = rowsHtml;
}

function renderUniversityPartners(country) {
    const container = document.querySelector('.uni-partners-grid .row');
    if (!container) return;

    const uniList = universityPartners[country];
    if (!uniList) return;

    // Split universities into groups of 3 for each row
    const rows = [];
    for (let i = 0; i < uniList.length; i += 3) {
        rows.push(uniList.slice(i, i + 3));
    }

    const rowsHtml = rows.map((rowUnis, rowIndex) => `
        <div class="row">
            ${rowUnis.map((uni, index) => `
                <div class="col-12 col-md-4 p-0">
                    <div class="uni-partner-card">
                        <div class="uni-name">${uni.name}</div>
                    </div>
                </div>
            `).join('')}
        </div>
    `).join('');

    container.innerHTML = rowsHtml;
}

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

// Update the DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;
    const countryMatch = currentPath.match(/\/country\/(\w+)\.html$/);
    if (!countryMatch) return;

    const currentCountry = countryMatch[1].toLowerCase();

    generateChampionsTable(2024, currentCountry);
    generateChampionsTable(2023, currentCountry);
    generateGallery(currentCountry);
    renderPartners(currentCountry);
    renderUniversityPartners(currentCountry);
});