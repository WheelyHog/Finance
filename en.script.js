let lang = 'en';

// ===================== render slider =====================
function render_slider() {
    const slider = [
        {
            id: 1,
            image: './images/slider/mrb-2a.png',
            name: 'MRB-2А, MRB-2G',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 2,
            image: './images/slider/skip1.png',
            name: 'Technological chips',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 3,
            image: './images/slider/urm-5a_b (1).png',
            name: 'URM-5A',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 4,
            image: './images/slider/skip2.png',
            name: 'Fuel chips',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 5,
            image: './images/slider/mrb-2ap.png',
            name: 'MRB-2AP',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 6,
            image: './images/slider/skip3.png',
            name: 'Sawdust',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 7,
            image: './images/slider/Urm-5.png',
            name: 'URM-5, URM-5М',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 8,
            image: './images/slider/skip4.png',
            name: 'Fuel chips',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 9,
            image: './images/slider/do51.png',
            name: 'DO-51',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 10,
            image: './images/slider/skip5.png',
            name: 'Fuel briquettes',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 11,
            image: './images/slider/press.png',
            name: 'Briquetting press UBT-350',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 12,
            image: './images/slider/skip3.png',
            name: 'Sawdust',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 13,
            image: './images/slider/avtomat.png',
            name: 'Automatic device for cutting briquettes',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 14,
            image: './images/slider/skip2.png',
            name: 'Fuel chips',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 15,
            image: './images/slider/chain_table_b (1).png',
            name: 'Chain table for feeding workpieces',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 16,
            image: './images/slider/skip3.png',
            name: 'Sawdust',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 17,
            image: './images/slider/vibrostol.png',
            name: 'Vibrating table for supplying blanks',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 18,
            image: './images/slider/skip2.png',
            name: 'Fuel chips',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 19,
            image: './images/slider/konveyer.png',
            name: 'Scraper conveyor',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 1,
            image: './images/slider/skip3.png',
            name: 'Fuel chips',
            bottom_img: './images/bg.slideshow.png'
        },
    ]
    const slider_container = document.querySelector('.swiper-wrapper')
    slider.map(elem => {
        const slide_div = document.createElement('div')
        slide_div.classList.add('slide', 'swiper-slide')

        const img = document.createElement('img');
        img.src = elem.image;
        img.alt = elem.name;
        img.className = 'slide_img'

        const title = document.createElement('p');
        title.className = 'device_name';
        title.innerText = elem.name;

        const img_container = document.createElement('div');
        img_container.className = 'slider_bottom'

        const bottom_img = document.createElement('img');
        bottom_img.className = 'slide_bottom';
        bottom_img.src = elem.bottom_img;
        bottom_img.alt = elem.name;

        img_container.append(bottom_img);
        slide_div.append(img, title, img_container)

        slider_container.append(slide_div);
        return slider_container
    })
}
render_slider();

// ======================= render info_menu ================
const info_menu_list = [
    {
        id: 1,
        link: '#',
        title: 'MRB-2A, MRB-2G',
    },
    {
        id: 2,
        link: '#',
        title: 'URM-5A',
    },
    {
        id: 3,
        link: '#',
        title: 'MRB-2AP',
    },
    {
        id: 4,
        link: '#',
        title: 'URM-5, URM-5M',
    },
    {
        id: 5,
        link: '#',
        title: 'DO-51',
    },
    {
        id: 6,
        link: '#',
        title: 'Briquetting press UBT-350',
    },
    {
        id: 7,
        link: '#',
        title: 'Automatic device for cutting briquettes',
    },
    {
        id: 8,
        link: '#',
        title: 'Chain tables and vibrating tables',
    },
    {
        id: 9,
        link: '#',
        title: 'Transporters and conveyors',
    },
]
const info_menu = document.querySelector('.info_menu');
function render_info_menu() {
    info_menu_list.map(elem => {
        const li = document.createElement('li');
        li.className = 'info_menu_item';

        const link = document.createElement('a');
        link.href = elem.link;
        link.innerText = elem.title;
        link.addEventListener('click', (e) => {
            e.preventDefault();
            render_product(elem.id)
        })

        li.append(link);
        info_menu.append(li);
        return info_menu;
    })
}

render_info_menu();

// =================== render contacts ===============

const contacts = [
    {
        id: 1,
        language: 'en',
        title: 'Contacts',
        address: {
            title: 'Address:',
            place: 'PJSC "Ukrainian Design and Engineering Technological Institute of Forest Industry", 76006, Ukraine, Ivano-Frankivsk, street Maksimovicha 14a.'
        },
        boss1: {
            seat: 'Chairman of the Supervisory Board:',
            fullname: 'Bozhak Bohdan Vasyliovych,',
            phones: 'mob. +380 506 611533; +380 976 407095'
        },
        boss2: {
            seat: 'Chairman of the Board:',
            fullname: 'Khandoga Vasyl Yosypovych,',
            phones: 'mob. +380 993 832736, +380 976 407189'
        },
        boss3: {
            seat: 'Deputy Chairman of the Board for project work:',
            fullname: 'Turchin Bogdan Yakovich,',
            phones: 'mob. +380 971 662601'
        },
        hr: 'HR department: tel./fax: +38 (0342) 50-05-21',
        accounting: 'Accounting: tel. +38 (0342) 50-05-21',
        mail: 'e-mail: <a href="mailto:pkti.if@ukr.net">pkti.if@ukr.net</a>',
        web: 'website: <a href="http://pkti.if.ua">www.pkti.if.ua</a>',
        local: 'Where we are: 76006, Ivano-Frankivsk, st. Maksymovycha 14а.'
    },
]

const contacts_btn = document.getElementById('contacts');
const footer_contacts_btn = document.getElementById('footer_contacts')
const main_inner = document.getElementById('info_text');

const { title, address, boss1, boss2, boss3, hr, accounting, mail, web, local } = contacts[0]

contacts_btn.addEventListener('click', contacts_click)
footer_contacts_btn.addEventListener('click', contacts_click)

function contacts_click() {
    if (lang === 'en') {
        main_inner.innerHTML = '';
        const c_title = document.createElement('h2');
        c_title.innerText = title;
        c_title.className = 'contacts_title'

        const c_address = document.createElement('p');
        c_address.innerHTML = `<span>${address.title}</span> ${address.place}`

        const c_boss1 = document.createElement('p');
        c_boss1.innerHTML = `${boss1.seat} <span>${boss1.fullname}</span> ${boss1.phones}`;

        const c_boss2 = document.createElement('p');
        c_boss2.innerHTML = `${boss2.seat} <span>${boss2.fullname}</span> ${boss2.phones}`;

        const c_boss3 = document.createElement('p');
        c_boss3.innerHTML = `${boss3.seat} <span>${boss3.fullname}</span> ${boss3.phones}`;

        const c_hr = document.createElement('p');
        c_hr.innerHTML = hr;

        const c_accounting = document.createElement('p');
        c_accounting.innerHTML = accounting;

        const c_mail = document.createElement('p');
        c_mail.innerHTML = mail;

        const c_web = document.createElement('p');
        c_web.innerHTML = web;

        const c_location = document.createElement('p');
        c_location.innerHTML = local;

        const map = document.createElement('div');
        map.innerHTML = '<iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%D0%BC.%20%D0%86%D0%B2%D0%B0%D0%BD%D0%BE-%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%96%D0%B2%D1%81%D1%8C%D0%BA,%20%D0%B2%D1%83%D0%BB.%20%D0%9C%D0%B0%D0%BA%D1%81%D0%B8%D0%BC%D0%BE%D0%B2%D0%B8%D1%87%D0%B0%2014%D0%B0+(%D0%9F%D0%A0%D0%90%D0%A2%20%22%D0%A3%D0%9A%D0%A0%D0%9F%D0%9A%D0%A2%D0%86%D0%9B%D0%86%D0%A1%D0%9F%D0%A0%D0%9E%D0%9C%22)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">distance maps</a></iframe>'

        main_inner.append(c_title, c_address, c_boss1, c_boss2, c_boss3, c_hr, c_accounting, c_mail, c_web, c_location, map);
    }
}

// ================================ render home =======================
const home = [
    {
        id: 1,
        language: 'en',
        first_p: {
            title: 'PJSC "UKRPKTILESPROM"',
            text: ' is one of the largest domestic producers:'
        },
        list_items: [
            'Stationary drum-type chipping machines (shredders) for the sawmill sector, including the processing of wood waste into technological and fuel chips, as well as accessories such as chain tables and vibrating tables for feeding workpieces, belt conveyors, conveyors for loading and transportation of various lengths and widths, adapted to individual needs of the client.',
            'Screw presses for briquetting sawdust, straw, sunflower husks.',
            'Automatic devices for cutting briquettes.'
        ],
        last_p: {
            title: 'PJSC "UKRPKTILESPROM"',
            text: 'started its activities in 1961 as a project organization. 60% of sawmills, woodworking, furniture and slab enterprises of Ukraine were built according to our projects. Our years of experience in the design and manufacture of wood chipping machines provide professional assistance in selecting a specific machine based on performance and purpose. Thanks to our well-trained staff and cooperation with customers, we are able to manufacture machines adapted to their individual needs. The high quality and reliability of our equipment makes the services provided by the companies cooperating with us much more attractive.'
        }
    }
]

const home_btn = document.getElementById('home');
const footer_home_btn = document.getElementById('footer_home');

const { first_p, list_items, last_p } = home[0]

home_btn.addEventListener('click', render_home);
footer_home_btn.addEventListener('click', render_home);

function render_home() {
    main_inner.innerHTML = '';
    if (lang === 'en') {
        const first = document.createElement('p');
        first.innerHTML = `<span>${first_p.title}</span> ${first_p.text}`

        const list = document.createElement('ul')

        for (let i = 0; i < list_items.length; i++) {
            const li = document.createElement('li')
            li.innerHTML = list_items[i]
            list.append(li)
        }

        const last = document.createElement('p');
        last.innerHTML = `<span>${last_p.title}</span> ${last_p.text}`
        main_inner.append(first, list, last)
    }
}

render_home();

// // ======================= render about ===============================

const about_btn = document.getElementById('about_firm');
const footer_about_btn = document.getElementById('footer_about');

about_btn.addEventListener('click', about_btn_click)
footer_about_btn.addEventListener('click', about_btn_click)

function about_btn_click() {
    main_inner.innerHTML = '';
    if (lang === 'en') {
        const first = document.createElement('p');
        first.innerHTML = `<span>${first_p.title}</span> ${first_p.text}`

        const list = document.createElement('ul')

        for (let i = 0; i < list_items.length; i++) {
            const li = document.createElement('li')
            li.innerHTML = list_items[i]
            list.append(li)
        }

        const last = document.createElement('p');
        last.innerHTML = `<span>${last_p.title}</span> ${last_p.text}`
        main_inner.append(first, list, last)
    }
}

// =================================== render products ===========================

const products = [
    {
        id: 1,
        title: 'CUTTING MACHINE FOR LUMIN WASTE MRB-2A, MRB-2G',
        small_img: './images/small_img/mrb-2a_s.png',
        short: 'Drum-type chopping machine designed for shredding wood waste (woodworking waste ...',
        description: "Drum-type chopping machine designed for grinding wood waste (wood waste, veneer, furniture waste, etc.) into technological or fuel chips, wood pulp for briquetting, and also on cod for smoking meat and fish.",
        button: 'Read more ...',
        data: [
            ['images', ['./images/products/mrb_2a/mrb-2a_1.png', './images/products/mrb_2a/mrb-2a_2.png', './images/products/mrb_2a/mrb-2a_3.png']],
            ['p', ['1 - bed; 2 - grid; 3, 9 - counter knife; 4 - cutting knife; 5 - rotor;']],
            ['p', ['6 - cover; 7 - curtain; 8 - loading neck; 10 - drive.']],
            ['video', '<iframe width="640" height="480" src="https://www.youtube.com/embed/zuuQX9ek_jU" title="CUTTING MACHINE MRB-2A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
            ['video', '<iframe width="640" height="480" src="https://www.youtube.com/embed/7IEMv9cvBl0" title="CUTTING MACHINE MRB-2A PJSC UKRPKTILISPROM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
            ['thead', 'SPECIFICATIONS'],
            ['tsubhead', ['', 'MRB-2A', 'МРБ-2Г']],
            ['header', ['Productivity, m3 / h:', '', '']],
            ['param', ['briquetting wood pulp', '1,5 - 2', '2 - 2,5']],
            ['param', ['technological or fuel chips', 6, 9]],
            ['param', ['Types of processed raw materials', 'waste veneer, particleboard, fiberboard and woodworking', 'waste veneer, particleboard, fiberboard and woodworking']],
            ['param', ['Rotor diameter, mm', 425, 425]],
            ['param', ['Rotor speed, min-1', 1470, 1470]],
            ['param', ['Number of knives, pcs', 8, 12]],
            ['param', ['Installed power, kW', 'from 22', 'from 30']],
            ['param', ['The size of the loading neck, mm', '230 Х 350', '230 Х 550']],
            ['header', ['Overall dimensions, mm:']],
            ['param', ['length', 1540, 1600]],
            ['param', ['width', 830, 1010]],
            ['param', ['height', 1410, 1410]],
            ['header', ['Dimensions of recyclable waste, mm:']],
            ['param', ['conditional diameter', 80, 80]],
            ['param', ['width', 350, 530]],
            ['param', ['length', 1500, 1500]],
            ['param', ['Weight, kg', 1000, 1300]],
        ]
    },
    {
        id: 2,
        title: 'CHOPPING MACHINE FOR SHREDDING OF WOOD WASTE URM-5A',
        small_img: './images/small_img/urm-5a_s.png',
        short: 'Purpose: Shredding of wood waste (woodworking waste, veneer-flaws, furniture production waste, etc.) ...',
        description: "Purpose: Shredding of wood waste (woodworking waste, veneer-flaws, furniture production waste, etc.) into technological or fuel chips, wood pulp for briquetting and grinding of technological chips into wood pulp for briquetting.",
        button: 'Read more ...',
        data: [
            ['images', ['./images/products/urm_5a/urm-5a.png']],
            ['video', '<iframe width="640" height="480" src="https://www.youtube.com/embed/CoLVGv96370" title="CUTTING MACHINE FOR LUMIN WASTE URM-5A." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
            ['thead', 'TECHNICAL CHARACTERISTICS'],
            ['header', ['Productivity, m3/hour (bulk):']],
            ['param', ['technological or fuel chips', 15]],
            ['param', ['wood pulp for briquetting', 6]],
            ['param', ['grinding of wood chips into wood pulp', 20]],
            ['param', ['Types of processed raw materials:', 'veneer, chipboard, fiberboard and woodworking waste']],
            ['param', ['Diameter of rotor, mm', 600]],
            ['param', ['Rotor speed, min-1', 1000]],
            ['param', ['Number of cutting knives, pcs', 6]],
            ['param', ['Determined power, kW', 55]],
            ['param', ['The size of the loading neck, mm', '400 х 600']],
            ['header', ['Dimensions, mm:']],
            ['param', ['length', 1795]],
            ['param', ['width', 1135]],
            ['param', ['height', 1300]],
            ['header', ['Dimensions of recycled waste, mm:']],
            ['param', ['conventional diameter', 120]],
            ['param', ['width', 600]],
            ['param', ['length', 1500]],
            ['param', ['Weight, kg', 1700]],
        ]
    },
    {
        id: 3,
        title: 'CUTTING MACHINE FOR LARGE WASTE MRB-2AP',
        small_img: './images/small_img/mrb-2ap_s.png',
        short: 'Drum-type chopping machine designed for shredding wood waste (wood processing waste ...',
        description: "Drum-type chopping machine designed for grinding wood waste (wood waste, veneer, furniture waste, etc.) into technological or fuel chips, wood pulp for briquetting, and also on cod for smoking meat and fish.",
        button: 'Read more ...',
        data: [
            ['images', ['./images/products/mrb_2ap/mrb-2ap_1.png']],
            ['p', ['1 - suction pipe; 2 - rotor; 3 - upper feed mechanism; 4 - carcass ; 5 - conveyor;']],
            ['p', ['6 - lower feed mechanism; 7 - grid.']],
            ['images', ['./images/products/mrb_2ap/mrb-2ap_2.png']],
            ['thead', 'SPECIFICATIONS'],
            ['header', ['Productivity, m3 / h:']],
            ['param', ['with a chip length of 15 - 35 mm', 10]],
            ['param', ['with a cod length of 5 - 10 mm', 5]],
            ['param', ['at a chip length of 2 - 3 mm', 1.6]],
            ['param', ['Rotor diameter, mm', 425]],
            ['param', ['Rotor speed, min-1', '550 - 1470']],
            ['param', ['Number of knives, pcs', 8]],
            ['param', ['Installed power, kW', 'from 33']],
            ['param', ['Feed mechanism', 'roll']],
            ['param', ['Feed rate, m/s', '0,25 - 0,75']],
            ['header', ['Overall dimensions, mm:']],
            ['param', ['length', 2500]],
            ['param', ['width', 1050]],
            ['param', ['height', 1600]],
            ['header', ['Dimensions of recyclable waste, mm:']],
            ['param', ['conditional diameter', 120]],
            ['param', ['width', 300]],
            ['param', ['length', 3000]],
            ['param', ['Weight, kg', 1500]],
        ]
    },
    {
        id: 4,
        title: 'THE CHOPPING MACHINE URM-5, URM-5M',
        small_img: './images/small_img/urm-5_s.png',
        short: 'The URM-5, URM-5M chopping machine is intended for processing of wood waste (fine wood, sawmill waste ...',
        description: "The URM-5, URM-5M chopping machine is intended for processing of wood waste (fine wood, sawmill waste, woodworking, furniture production, veneer-chip) on technological or fuel chips, wood mass for briquetting. Drum-type machine is with mechanical supply of raw materials to the cutting area.",
        button: 'Read more ...',
        data: [
            ['images', ['./images/products/urm_5m/urm-5m_1.png']],
            ['p', ['1 - bed; 2 - sieve; 3, 6 - counter-knives; 4 - led; 5 - rotor; 7, 8 - feed mechanism; 9 - feed conveyor.']],
            ['images', ['./images/products/urm_5m/urm-5m_2.png']],
            ['video', '<iframe width="640" height="360" src="https://www.youtube.com/embed/ZGHV5icr0E0" title="Руб. машина УРМ-5 Чортків" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
            ['video', '<iframe width="640" height="480" src="https://www.youtube.com/embed/qd5R7AolwJw" title="Руб. машина УРМ-5 Жидачів" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
            ['video', '<iframe width="640" height="480" src="https://www.youtube.com/embed/4mpGJ0bF0jw" title="Руб.машина УРМ - 5  Овруч" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
            ['video', '<iframe width="640" height="480" src="https://www.youtube.com/embed/qCxsVjBySQg" title="URM 5 1 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
            ['video', '<iframe width="640" height="480" src="https://www.youtube.com/embed/4udwfiTLG10" title="URM 5 1 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
            ['video', '<iframe width="640" height="480" src="https://www.youtube.com/embed/3Z71V9-BEyk" title="URM 5 1 3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
            ['video', '<iframe width="640" height="480" src="https://www.youtube.com/embed/88VdvBwZLRM" title="URM 5 1 4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
            ['video', '<iframe width="640" height="480" src="https://www.youtube.com/embed/qtJNoBPnSyM" title="URM 5 1 5" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
            ['video', '<iframe width="640" height="480" src="https://www.youtube.com/embed/G6iBdAjVbMM" title="УРМ-5_2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
            ['thead', 'TECHNICAL CHARACTERISTICS'],
            ['tsubhead', ['', 'URM-5', 'URM-5M']],
            ['header', ['Productivity, m3/h:']],
            ['param', ['with a chip length of 30 - 50 mm', 18, 30]],
            ['param', ['with a cod length of 5 -10 mm', 5, 15]],
            ['param', ['Drum wrap frequency, hv-1', '750 - 1500', '500 - 1000']],
            ['header', ['Drum size, mm:']],
            ['param', ['length', 600, 600]],
            ['param', ['diameter', 600, 600]],
            ['param', ['Number of cutting knives, pcs', 4, 6]],
            ['param', ['Speed ​​of input feed, m/s', '0,18 - 0,6', '0,18 - 0,6']],
            ['header', ['Dimensions of recyclable waste, mm:']],
            ['param', ['thickness (diameter), maximum', 210, 210]],
            ['param', ['width', 400, 400]],
            ['param', ['length', 'up to 6000', 'up to 6000']],
            ['param', ['Installed power, kW', 'from 52', 'from 75 - 90']],
            ['header', ['Overall dimensions, mm:']],
            ['param', ['length', 6150, 6500]],
            ['param', ['width', 2100, 3000]],
            ['param', ['height', 1350, 1500]],
            ['param', ['Weight, kg', 3600, 4200]],
        ]
    },
    {
        id: 5,
        title: 'CUTTING MACHINE DO-51',
        small_img: './images/small_img/do51_s.png',
        short: 'Chopper drum type DO-51, designed for processing wood waste, fine wood, sawmill waste ...',
        description: "Chopper drum type DO-51, designed for processing wood waste, fine wood, sawmill waste, woodworking, furniture production, veneer-rag on technological or fuel chips, wood pulp for briquetting.",
        button: 'Read more ...',
        data: [
            ['images', ['./images/products/do_51/do-51_1.png']],
            ['p', ['1 - bed; 2 - grid; 3, 6 - counter knives; 4 - cover; 5 - rotor; 7, 8 - feed mechanism; 9 - feed conveyor.']],
            ['images', ['./images/products/do_51/do-51_2.png']],
            ['video', '<iframe width="640" height="480" src="https://www.youtube.com/embed/X_pTjRJFl6M" title="Руб. машина ДО-51 Сербія" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
            ['video', '<iframe width="640" height="480" src="https://www.youtube.com/embed/moBTPJDQMNg" title="rub. mash. DO-51" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
            ['video', '<iframe width="640" height="480" src="https://www.youtube.com/embed/dSnrf5aadCs" title="ДО-51" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
            ['thead', 'SPECIFICATIONS'],
            ['header', ['Productivity, m3 / h:']],
            ['param', ['with a chip length of 30 - 50 mm', 50]],
            ['param', ['with a cod length of 5 - 15 mm', 17]],
            ['param', ['Drum speed, min-1', '700 - 1000']],
            ['param', ['Number of cutting knives, pcs', 6]],
            ['param', ['Waste feed rate, m / s', '0,2 - 0,55']],
            ['header', ['Size of recyclable waste, mm:']],
            ['param', ['thickness (diameter), maximum', 300]],
            ['param', ['width', 600]],
            ['param', ['length', 'up to 6000']],
            ['param', ['Installed power, kW', 'from 88']],
            ['header', ['Overall dimensions (without conveyor), mm:']],
            ['param', ['length', 3400]],
            ['param', ['width', 2200]],
            ['param', ['height', 1500]],
            ['param', ['Weight, kg', 5700]],
        ]
    },
    {
        id: 6,
        title: 'PRESS FOR BRIQUETTING SCREW UBT-350',
        small_img: './images/small_img/ubt-350_s.png',
        short: 'Purpose - pressing small wood waste (sawdust, shavings), straw, sunflower husks ...',
        description: "Purpose - pressing small wood waste (sawdust, shavings), straw, sunflower husks, buckwheat, flax fires into fuel briquettes.",
        button: 'Read more ...',
        data: [
            ['p', ['Прес гвинтового типу, безперервної дії, основними складовими частинами якого являються бункер і гвинтовий прес. Бункер служить для накопичення тирси і обладнаний подаючим гвинтовим конвейєром. Гвинтовий прес складається з головного валу, корпусу, робочого органу, пресуючої головки і пристрою для разділення брикетів. Головний вал приводиться в дію від електродвигуна за допомогою клинопасової передачі. На кінці головного валу виконана гвинтова нарізка, яка служить для подачі тирси в зону пресування, а також кріпиться робочий орган, який являє собою конічний шнек з хвостовиком. Пресуюча головка складається з гільзи, всередині якої вмонтовані направляючі, пресуча і формуюча втулки. Зовні гільзи встановлена обойма з електронагрівачами, котрі нагрівають зону пресування до температури 280-350°С. Пристрій для розділення брикетів виконано у вигляді підпружиненого колеса, на твірній якого встановлені ножі, відстань між якими дорівнює довжині брикетів, які потрібно отримати.']],
            ['images', ['./images/products/ubt_350/ubt-350_1.png', './images/products/ubt_350/ubt-350_2.png']],
            ['p', ['1 - bunker; 2 - raw materials; 3 - feeding auger; 4 - sealing auger; 5 - pressing head; 6 - heaters;']],
            ['p', ['7 - separator; 8 - tapered auger; 9 - main shaft; 10 - corpus.']],
            ['video', '<iframe width="640" height="480" src="https://www.youtube.com/embed/Ov6AKgcTzg8" title="Брикетирование опилок" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
            ['video', '<iframe width="640" height="480" src="https://www.youtube.com/embed/WTq44HzqeBU" title="Press briket  UBT-300" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
            ['video', '<iframe width="640" height="480" src="https://www.youtube.com/embed/nvye_jlwv1k" title="УБТ-350_1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
            ['video', '<iframe width="640" height="480" src="https://www.youtube.com/embed/ZJ7WM3pRGDM" title="УБТ-350_2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
            ['thead', 'TECHNICAL CHARACTERISTICS'],
            ['header', ['Productivity, kg / hour:', '350 - 450']],
            ['param', ['Rotation frequency of the working body, min-1', 600]],
            ['param', ['Dimensions of briquettes, section, mm', 'square - 50 x 50, hexagon - 60, camomile - Ø 55']],
            ['param', ['Length, mm', 300]],
            ['param', ['Hopper volume, m3', 1.1]],
            ['param', ['Heating temperature of the press head, degrees', '280 - 350']],
            ['param', ['Maximum sawdust moisture,%', 10]],
            ['param', ['Installed power, kW', 46.35]],
            ['param', ['Power consumption, kW', 28]],
            ['header', ['Overall dimensions, mm:']],
            ['param', ['length', 4100]],
            ['param', ['width', 1400]],
            ['param', ['height', 2285]],
            ['param', ['Weight, kg', 2200]],
        ]
    },
    {
        id: 7,
        title: 'AUTOMATIC DEVICE FOR CUTTING BRIQUETTES.',
        small_img: './images/small_img/avtomat_s.png',
        short: 'Designed for automatic cutting of briquettes of a given length. Cutting is carried out with the movement of briquettes ...',
        description: "Designed for automatic cutting of briquettes of a given length. Cutting is carried out while moving briquettes without stopping them.",
        button: 'Read more ...',
        data: [
            ['images', ['./images/products/avtomat/avtomat.png']],
            ['video', '<iframe width="640" height="480" src="https://www.youtube.com/embed/lB1VGB7xx6E" title="Автоматична різка брикетів" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
            ['thead', 'TECHNICAL CHARACTERISTICS'],
            ['param', ['Length of cut briquettes, mm', '150 - 400']],
            ['param', ['Cutting part', 'carbide circular saw']],
            ['param', ['Saw diameter, mm', 360]],
            ['param', ['Speed rotation , r/min', 3000]],
            ['param', ['Drive actuators', 'pneumatic']],
            ['param', ['Working pressure, MPa', 0.4]],
            ['param', ['Air consumption, l / min', 27]],
            ['param', ['Installed power, kW', '2.2']],
            ['header', ['Overall dimensions, mm:']],
            ['param', ['length', 630]],
            ['param', ['width', 450]],
            ['param', ['height', 1160]],
            ['param', ['Weight, kg', 70]],
        ]
    },
    {
        id: 8,
        title: 'CHAIN TABLES AND VIBRATING TABLES',
        small_img: './images/small_img/chain_table_s.png',
        short: 'Designed for feeding materials and blanks to the processing area ...',
        description: "Designed for feeding materials and blanks to the processing area.",
        button: 'Read more ...',
        data: [
            ['p', ['We manufacture chain tables and vibrating tables according to the order.']],
            ['images', ['./images/products/chain_vibro/chain_table.png', './images/products/chain_vibro/vibrostol.png']],
            ['param', ['Vibrating tables for feeding material', '']],
            ['video', '<iframe width="640" height="480" src="https://www.youtube.com/embed/SBnMVrSjp9E" title="Vibrating tables for feeding material" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
        ]
    },
    {
        id: 9,
        title: 'TRANSPORTERS AND CONVEYORS',
        small_img: './images/small_img/konveyer_s.png',
        short: 'Designed for feeding materials and blanks to the processing area ...',
        description: "Designed for feeding materials and blanks to the processing area.",
        button: 'Read more ...',
        data: [
            ['p', ['We manufacture transporters and conveyors according to the order.']],
            ['images', ['./images/products/transporters/konveyer.png']],
        ]
    },
]

const products_btn = document.getElementById('products')

products_btn.addEventListener('click', products_btn_click)

function products_btn_click() {
    main_inner.innerHTML = '';
    const product_list = document.createElement('div');
    product_list.className = 'product_list';

    if (lang === 'en') {
        products.map(elem => {
            const product_div = document.createElement('div')
            product_div.className = 'product_card';

            const product_img = document.createElement('img');
            product_img.className = 'product_img';
            product_img.src = elem.small_img;

            const product_title = document.createElement('h4');
            product_title.innerHTML = `<a href="#">${elem.title}</a>`

            const product_description = document.createElement('p');
            product_description.innerHTML = elem.short;

            const details_btn = document.createElement('button');
            details_btn.innerText = elem.button;
            details_btn.className = 'product_btn'
            details_btn.addEventListener('click', () => render_product(elem.id))

            product_div.append(product_img, product_title, product_description, details_btn);
            product_list.append(product_div);
        })
        main_inner.append(product_list)
    }
}

// ================================= render product info=================

function render_product(id) {
    if (lang === 'en') {
        main_inner.innerHTML = '';

        const { title, description, data } = products[id - 1]

        const product_title = document.createElement('h3');
        product_title.innerHTML = title;
        product_title.className = 'product_title';

        const product_description = document.createElement('p');
        product_description.innerHTML = description;

        main_inner.append(product_title, product_description);

        data.map(elem => {
            if (elem[0] === 'images') {
                const prod_image_container = document.createElement('div');
                prod_image_container.className = 'product_image_container';
                elem[1].map(el => {
                    const product_image = document.createElement('img');
                    product_image.src = el;
                    prod_image_container.append(product_image)
                })
                main_inner.append(prod_image_container)
            } else if (elem[0] === 'p') {
                const prod_p_container = document.createElement('div');
                elem[1].map(el => {
                    const paragraph = document.createElement('p');
                    paragraph.innerHTML = el;
                    prod_p_container.append(paragraph)
                })
                main_inner.append(prod_p_container);
            } else if (elem[0] === 'thead') {
                const thead = document.createElement('p');
                thead.innerHTML = elem[1];
                thead.className = 'table_head';
                main_inner.append(thead);
            } else if (elem[0] === 'tsubhead' || elem[0] === 'header' || elem[0] === 'param') {
                const thead_container = document.createElement('div');
                thead_container.className = 'table_row'
                elem[1].map(el => {
                    const thead = document.createElement('p');
                    thead.innerHTML = el;
                    thead_container.append(thead)
                })
                main_inner.append(thead_container)
            } else if (elem[0] === 'video') {
                const video = document.createElement('div');
                video.innerHTML = elem[1];
                video.className = 'video_frame';
                main_inner.append(video);
            }
        })

    }
}


let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        // when window width is >= 320px
        1024: {
            slidesPerView: 3,
        },
        640: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1,
        }
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },

});

