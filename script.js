let lang = 'ua';

// ===================== render slider =====================
function render_slider() {
    const slider = [
        {
            id: 1,
            image: './images/slider/mrb-2a.png',
            name: 'МРБ-2А, МРБ-2Г',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 2,
            image: './images/slider/skip1.png',
            name: 'Технологічна тріска',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 3,
            image: './images/slider/urm-5a_b (1).png',
            name: 'УРМ-5А',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 4,
            image: './images/slider/skip2.png',
            name: 'Паливна тріска',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 5,
            image: './images/slider/mrb-2ap.png',
            name: 'МРБ-2АП',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 6,
            image: './images/slider/skip3.png',
            name: 'Тирса',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 7,
            image: './images/slider/Urm-5.png',
            name: 'УРМ-5, УРМ-5М',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 8,
            image: './images/slider/skip4.png',
            name: 'Паливна тріска',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 9,
            image: './images/slider/do51.png',
            name: 'ДО-51',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 10,
            image: './images/slider/skip5.png',
            name: 'Паливні брикети',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 11,
            image: './images/slider/press.png',
            name: 'Прес брикетувальний УБТ-350',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 12,
            image: './images/slider/skip3.png',
            name: 'Тирса',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 13,
            image: './images/slider/avtomat.png',
            name: 'Автоматичний пристрій для різки брикетів',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 14,
            image: './images/slider/skip2.png',
            name: 'Паливна тріска',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 15,
            image: './images/slider/chain_table_b (1).png',
            name: 'Ланцюговий стіл для подачі заготовок',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 16,
            image: './images/slider/skip3.png',
            name: 'Тирса',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 17,
            image: './images/slider/vibrostol.png',
            name: 'Вібростіл для подачі заготовок',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 18,
            image: './images/slider/skip2.png',
            name: 'Паливна тріска',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 19,
            image: './images/slider/konveyer.png',
            name: 'Скребковий конвейер',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 1,
            image: './images/slider/skip3.png',
            name: 'Паливна тріска',
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
        title: 'МРБ-2А, МРБ-2Г',
    },
    {
        id: 2,
        link: '#',
        title: 'УРМ-5А',
    },
    {
        id: 3,
        link: '#',
        title: 'МРБ-2АП',
    },
    {
        id: 4,
        link: '#',
        title: 'УРМ-5, УРМ-5М',
    },
    {
        id: 5,
        link: '#',
        title: 'ДО-51',
    },
    {
        id: 6,
        link: '#',
        title: 'Прес брикетувальний УБТ-350',
    },
    {
        id: 7,
        link: '#',
        title: 'Автоматичний пристрій для різки брикетів',
    },
    {
        id: 8,
        link: '#',
        title: 'Ланцюгові столи та вібростоли',
    },
    {
        id: 9,
        link: '#',
        title: 'Транспортери і конвейери',
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
        language: 'ua',
        title: 'Контакти',
        address: {
            title: 'Адреса:',
            place: 'ПРАТ "Український проектно-конструкторський технологічний інститут лісової промисловості", 76006, Україна, м. Івано-Франківськ, вул. Максимовича 14а.'
        },
        boss1: {
            seat: 'Голова спостережної ради:',
            fullname: 'Божак Богдан Васильович,',
            phones: 'моб. +380 506 611533; +380 976 407095'
        },
        boss2: {
            seat: 'Голова правління:',
            fullname: 'Хандога Василь Йосипович,',
            phones: 'моб. +380 993 832736, +380 976 407189'
        },
        boss3: {
            seat: 'Заступник голови правління з проектної роботи:',
            fullname: 'Турчин Богдан Якович,',
            phones: 'моб. +380 971 662601'
        },
        hr: 'Відділ кадрів: тел./факс: +38 (0342) 50-05-21',
        accounting: 'Бухгалтерія: тел. +38 (0342) 50-05-21',
        mail: 'e-mail: <a href="mailto:pkti.if@ukr.net">pkti.if@ukr.net</a>',
        web: 'веб сайт: <a href="http://pkti.if.ua">www.pkti.if.ua</a>',
        local: 'Де ми знаходимось: 76006, м. Івано-Франківськ, вул. Максимовича 14а.'
    }
]

const contacts_btn = document.getElementById('contacts');
const footer_contacts_btn = document.getElementById('footer_contacts')
const main_inner = document.getElementById('info_text');

const { title, address, boss1, boss2, boss3, hr, accounting, mail, web, local } = contacts[0]

contacts_btn.addEventListener('click', contacts_click)
footer_contacts_btn.addEventListener('click', contacts_click)

function contacts_click() {
    if (lang === 'ua') {
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
        language: 'ua',
        first_p: {
            title: 'ПРАТ "УКРПКТІЛІСПРОМ"',
            text: ' є одним із найбільших вітчизняних виробників:'
        },
        list_items: [
            'Стаціонарних рубальних машин барабанного типу (подрібнювачі) для лісопильного сектору, включаючи переробку деревних відходів в технологічну та паливну тріску, а також аксесуари, такі як ланцюгові столи та вібростоли подачі заготовок, стрічкові транспортери, конвейєри для завантаження та транспортування різної довжини та ширини, адаптовані до індивідуальних потреб клієнта.',
            'Шнекових пресів для брикетування тирси, соломи, лузги соняшника.',
            'Автоматичних пристроїв для різки брикетів.'
        ],
        last_p: {
            title: 'ПРАТ "УКРПКТІЛІСПРОМ"',
            text: 'розпочала свою діяльність у 1961 році як проектна організація. 60% лісопильних, деревообробних, меблевих і плитних підприємств України збудовані за нашими проектами. Наш багаторічний досвід у проектуванні та виробництві машин для подрібнення деревних відходів надає професійну допомогу у виборі конкретної машини з урахуванням продуктивності та призначення. Завдяки добре навченому персоналу та співпраці з клієнтами ми можемо виготовляти машини, адаптовані до їхніх індивідуальних потреб. Висока якість і надійність нашої техніки робить послуги, що надаються компаніями, які співпрацюють з нами, набагато привабливішими.'
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
    if (lang === 'ua') {
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
    if (lang === 'ua') {
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
        title: 'МАШИНА РУБАЛЬНА ДЛЯ КУСКОВИХ ВІДХОДІВ МРБ-2А, МРБ-2Г',
        small_img: './images/small_img/mrb-2a_s.png',
        short: 'Рубальна машина барабанного типу, призначена для подрібнення деревинних відходів (відходи деревообробки ...',
        description: "Рубальна машина барабанного типу, призначена для подрібнення деревинних відходів (відходи деревообробки, шпону-рванини, відходи меблевого виробництва та ін.) на технологічну або паливну тріску, деревинну масу для брикетування, а також на тріску для копчення м'яса та риби.",
        button: 'Детальніше ...',
        data: [
            ['images', ['./images/products/mrb_2a/mrb-2a_1.png', './images/products/mrb_2a/mrb-2a_2.png', './images/products/mrb_2a/mrb-2a_3.png']],
            ['p', ['1 - станина; 2 - сітка; 3, 9 - контрніж; 4 - ріжучий ніж ; 5 - ротор;']],
            ['p', ['6 - кришка; 7 - шторка; 8 - загрузочна горловина ; 10 - привід.']],
            ['video', '<iframe width="640" height="480" src="https://www.youtube.com/embed/zuuQX9ek_jU" title="Руб. машина МРБ - 2А" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
            ['video', '<iframe width="640" height="480" src="https://www.youtube.com/embed/7IEMv9cvBl0" title="рубальна машина МРБ 2А ПРАТ УКРПКТІЛІСПРОМ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
            ['thead', 'ТЕХНІЧНІ ХАРАКТЕРИСТИКИ'],
            ['tsubhead', ['', 'МРБ-2А', 'МРБ-2Г']],
            ['header', ['Продуктивність, м3/год:', '', '']],
            ['param', ['деревинна маса для брикетування', '1,5 - 2', '2 - 2,5']],
            ['param', ['технологічна або паливна тріска', 6, 9]],
            ['param', ['Види перероблюваної сировини', 'відходи шпону, ДСП, ДВП і деревообробки', 'відходи шпону, ДСП, ДВП і деревообробки']],
            ['param', ['Діаметр ротора, мм', 425, 425]],
            ['param', ['Частота обертання ротора, хв-1', 1470, 1470]],
            ['param', ['Кількість ножів, шт', 8, 12]],
            ['param', ['Установлена потужність, кВт', 'від 22', 'від 30']],
            ['param', ['Розмір завантажувальної горловини, мм', '230 Х 350', '230 Х 550']],
            ['header', ['Габаритні розміри, мм:']],
            ['param', ['довжина', 1540, 1600]],
            ['param', ['ширина', 830, 1010]],
            ['param', ['висота', 1410, 1410]],
            ['header', ['Розміри перероблюваних відходів, мм:']],
            ['param', ['умовний діаметр', 80, 80]],
            ['param', ['ширина', 350, 530]],
            ['param', ['довжина', 1500, 1500]],
            ['param', ['Маса, кг', 1000, 1300]],
        ]
    },
    {
        id: 2,
        title: 'МАШИНА РУБАЛЬНА ДЛЯ ПЕРЕРОБКИ КУСКОВИХ ВІДХОДІВ УРМ-5А',
        small_img: './images/small_img/urm-5a_s.png',
        short: 'Призначення: Подрібнення деревинних відходів (відходи деревообробки, шпону-рванини, відходи меблевого ...',
        description: "Призначення: Подрібнення деревинних відходів (відходи деревообробки, шпону-рванини, відходи меблевого виробництва та ін.) на технологічну або паливну тріску, деревинну масу для брикетування та подрібнення технологічної тріски на деревинну масу для брикетування.",
        button: 'Детальніше ...',
        data: [
            ['images', ['./images/products/urm_5a/urm-5a.png']],
            ['video', '<iframe width="640" height="480" src="https://www.youtube.com/embed/CoLVGv96370" title="МАШИНА РУБАЛЬНА ДЛЯ ПЕРЕРОБКИ КУСКОВИХ ВІДХОДІВ УРМ-5А." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
            ['thead', 'ТЕХНІЧНІ ХАРАКТЕРИСТИКИ'],
            ['header', ['Продуктивність, м3/год (насипних):']],
            ['param', ['технологічна або паливна тріска', 15]],
            ['param', ['деревинна маса для брикетування', 6]],
            ['param', ['переробка тріски на деревинну масу', 20]],
            ['param', ['Види перероблюваної сировини:', 'відходи шпону, ДСП, ДВП та деревообробки']],
            ['param', ['Діаметр ротора, мм', 600]],
            ['param', ['Частота обертання ротора, хв-1', 1000]],
            ['param', ['Кількість ножів, шт', 6]],
            ['param', ['Установлена потужність, кВт', 55]],
            ['param', ['Розмір завантажувальної горловини, мм', '400 х 600']],
            ['header', ['Габаритні розміри, мм:']],
            ['param', ['довжина', 1795]],
            ['param', ['ширина', 1135]],
            ['param', ['висота', 1300]],
            ['header', ['Розміри перероблюваних відходів, мм:']],
            ['param', ['умовний діаметр', 120]],
            ['param', ['ширина', 600]],
            ['param', ['довжина', 1500]],
            ['param', ['Маса, кг', 1700]],
        ]
    },
    {
        id: 3,
        title: 'МАШИНА РУБАЛЬНА ДЛЯ КУСКОВИХ ВІДХОДІВ МРБ-2АП',
        small_img: './images/small_img/mrb-2ap_s.png',
        short: 'Рубальна машина барабанного типу, призначена для подрібнення деревинних відходів (відходи деревообробки ...',
        description: "Рубальна машина барабанного типу, призначена для подрібнення деревинних відходів (відходи деревообробки, шпону-рванини, відходи меблевого виробництва та ін.) на технологічну або паливну тріску, деревинну масу для брикетування, а також на тріску для копчення м'яса та риби.",
        button: 'Детальніше ...',
        data: [
            ['images', ['./images/products/mrb_2ap/mrb-2ap_1.png']],
            ['p', ['1 - патрубок відсмоктувальний; 2 - ротор; 3 - верхній механізм подачі; 4 - станина; 5 - транспортер;']],
            ['p', ['6 - нижній механізм подачі; 7 - сітка.']],
            ['images', ['./images/products/mrb_2ap/mrb-2ap_2.png']],
            ['thead', 'ТЕХНІЧНІ ХАРАКТЕРИСТИКИ'],
            ['header', ['Продуктивність, м3/год:']],
            ['param', ['при довжині тріски 15 - 35 мм', 10]],
            ['param', ['при довжині тріски 5 - 10 мм', 5]],
            ['param', ['при довжині тріски 2 - 3 мм', 1.6]],
            ['param', ['Діаметр ротора, мм', 425]],
            ['param', ['Частота обертання ротора, хв-1', '550 - 1470']],
            ['param', ['Кількість ножів, шт', 8]],
            ['param', ['Установлена потужність, кВт', 'від 33']],
            ['param', ['Механізм подавання', 'валковий']],
            ['param', ['Швидкість подачі, м/с', '0,25 - 0,75']],
            ['header', ['Габаритні розміри, мм:']],
            ['param', ['довжина', 2500]],
            ['param', ['ширина', 1050]],
            ['param', ['висота', 1600]],
            ['header', ['Розміри перероблюваних відходів, мм:']],
            ['param', ['умовний діаметр', 120]],
            ['param', ['ширина', 300]],
            ['param', ['довжина', 3000]],
            ['param', ['Маса, кг', 1500]],
        ]
    },
    {
        id: 4,
        title: 'МАШИНА РУБАЛЬНА УРМ-5, УРМ-5М',
        small_img: './images/small_img/urm-5_s.png',
        short: 'Рубальна машина УРМ-5, УРМ-5М призначена для переробки деревинних відходів (тонкомірної деревини, відходів лісопиляння, деревообробки ...',
        description: "Рубальна машина УРМ-5, УРМ-5М призначена для переробки деревинних відходів (тонкомірної деревини, відходів лісопиляння, деревообробки, меблевого виробництва, шпону-рванини) на технологічну або паливну тріску, деревинну масу для брикетування. Машина барабанного типу з механічним подаванням сировини в зону різки.",
        button: 'Детальніше ...',
        data: [
            ['images', ['./images/products/urm_5m/urm-5m_1.png']],
            ['p', ['1 - станина; 2 - сітка; 3, 6 - контрножі; 4 - кришка; 5 - ротор; 7, 8 - механізм подачі; 9 - подаючий конвейєр.']],
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
            ['thead', 'ТЕХНІЧНІ ХАРАКТЕРИСТИКИ'],
            ['tsubhead', ['', 'УРМ-5', 'УРМ-5М']],
            ['header', ['Продуктивність, м3/год:']],
            ['param', ['при довжині тріски 30 - 50 мм', 18, 30]],
            ['param', ['при довжині тріски 5 - 10 мм', 5, 15]], ,
            ['param', ['Частота обертання ротора, хв-1', '750 - 1500', '500 - 1000']],
            ['header', ['Розміри барабану, мм:']],
            ['param', ['довжина', 400, 600]],
            ['param', ['діаметр', 600, 600]],
            ['param', ['Кількість ножів, шт', 4, 6]],
            ['param', ['Швидкість подачі відходів, м/с', '0,18 - 0,6', '0,18 - 0,6']],
            ['header', ['Розміри перероблюваних відходів, мм:']],
            ['param', ['товщина (діаметр), максимально', 210, 210]],
            ['param', ['ширина', 600, 600]],
            ['param', ['довжина', 'до 6000', 'до 6000']],
            ['param', ['Установлена потужність, кВт', 'від 52', 'від 75 - 90']],
            ['header', ['Габаритні розміри, мм:']],
            ['param', ['довжина', 6150, 6500]],
            ['param', ['ширина', 2100, 3000]],
            ['param', ['висота', 1350, 1500]],
            ['param', ['Маса, кг', 3600, 4200]],
        ]
    },
    {
        id: 5,
        title: 'МАШИНА РУБАЛЬНА ДО-51',
        small_img: './images/small_img/do51_s.png',
        short: 'Рубальна машина барабанного типу ДО-51, призначена для переробки деревинних відходів, тонкомірної деревини, відходів лісопиляння ...',
        description: "Рубальна машина барабанного типу ДО-51, призначена для переробки деревинних відходів, тонкомірної деревини, відходів лісопиляння, деревообробки, меблевого виробництва, шпону-рванины на технологічну або паливну тріску, деревинну масу для брикетування.",
        button: 'Детальніше ...',
        data: [
            ['images', ['./images/products/do_51/do-51_1.png']],
            ['p', ['1 - станина; 2 - сітка; 3, 6 - контрножі; 4 - кришка; 5 - ротор; 7, 8 - механізм подачі; 9 - подаючий конвейєр.']],
            ['images', ['./images/products/do_51/do-51_2.png']],
            ['video', '<iframe width="640" height="480" src="https://www.youtube.com/embed/X_pTjRJFl6M" title="Руб. машина ДО-51 Сербія" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
            ['video', '<iframe width="640" height="480" src="https://www.youtube.com/embed/moBTPJDQMNg" title="rub. mash. DO-51" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
            ['video', '<iframe width="640" height="480" src="https://www.youtube.com/embed/dSnrf5aadCs" title="ДО-51" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
            ['thead', 'ТЕХНІЧНІ ХАРАКТЕРИСТИКИ'],
            ['header', ['Продуктивність, м3/год (насипних):']],
            ['param', ['при довжині тріски 30 - 50 мм', 50]],
            ['param', ['при довжині тріски 5 - 15 мм', 17]],
            ['param', ['Частота обертання барабану, хв-1', '700 - 1000']],
            ['param', ['Кількість ножів, шт', 6]],
            ['param', ['Швидкість подавання відходів, м/с', '0,2 - 0,55']],
            ['header', ['Розміри перероблюваних відходів, мм:']],
            ['param', ['товщина (діаметр), максимально', 300]],
            ['param', ['ширина', 600]],
            ['param', ['довжина', 'до 6000']],
            ['param', ['Встановлена потужність, кВт', 'від 88']],
            ['header', ['Габаритні розміри (без транспортера), мм:']],
            ['param', ['довжина', 3400]],
            ['param', ['ширина', 2200]],
            ['param', ['висота', 1500]],
            ['param', ['Маса, кг', 5700]],
        ]
    },
    {
        id: 6,
        title: 'ПРЕС ДЛЯ БРИКЕТУВАННЯ ШНЕКОВИЙ УБТ-350',
        small_img: './images/small_img/ubt-350_s.png',
        short: 'Призначення – пресування дрібних деревинних відходів (тирси, стружки), соломи, лузги соняшника ...',
        description: "Призначення – пресування дрібних деревинних відходів (тирси, стружки), соломи, лузги соняшника, гречихи, костри льону в паливні брикети.",
        button: 'Детальніше ...',
        data: [
            ['p', ['Прес гвинтового типу, безперервної дії, основними складовими частинами якого являються бункер і гвинтовий прес. Бункер служить для накопичення тирси і обладнаний подаючим гвинтовим конвейєром. Гвинтовий прес складається з головного валу, корпусу, робочого органу, пресуючої головки і пристрою для разділення брикетів. Головний вал приводиться в дію від електродвигуна за допомогою клинопасової передачі. На кінці головного валу виконана гвинтова нарізка, яка служить для подачі тирси в зону пресування, а також кріпиться робочий орган, який являє собою конічний шнек з хвостовиком. Пресуюча головка складається з гільзи, всередині якої вмонтовані направляючі, пресуча і формуюча втулки. Зовні гільзи встановлена обойма з електронагрівачами, котрі нагрівають зону пресування до температури 280-350°С. Пристрій для розділення брикетів виконано у вигляді підпружиненого колеса, на твірній якого встановлені ножі, відстань між якими дорівнює довжині брикетів, які потрібно отримати.']],
            ['images', ['./images/products/ubt_350/ubt-350_1.png', './images/products/ubt_350/ubt-350_2.png']],
            ['p', ['1 - бункер; 2 - сировина; 3 - подаючий шнек; 4 - ущільнюючий шнек; 5 - пресуюча головка; 6 - нагрівачі;']],
            ['p', ['7 - розділювач; 8 - конічний шнек ; 9 - головний вал ; 10 - корпус.']],
            ['video', '<iframe width="640" height="480" src="https://www.youtube.com/embed/Ov6AKgcTzg8" title="Брикетирование опилок" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
            ['video', '<iframe width="640" height="480" src="https://www.youtube.com/embed/WTq44HzqeBU" title="Press briket  UBT-300" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
            ['video', '<iframe width="640" height="480" src="https://www.youtube.com/embed/nvye_jlwv1k" title="УБТ-350_1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
            ['video', '<iframe width="640" height="480" src="https://www.youtube.com/embed/ZJ7WM3pRGDM" title="УБТ-350_2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
            ['thead', 'ТЕХНІЧНІ ХАРАКТЕРИСТИКИ'],
            ['header', ['Продуктивність, кг/год:', '350 - 450']],
            ['param', ['Частота обертання робочого органу, хв-1', 600]],
            ['param', ['Розміри брикетів, січення, мм', 'квадрат - 50 x 50, шестигранник - 60, ромашка - Ø 55']],
            ['param', ['Довжина, мм', 300]],
            ['param', ['Об\'єм бункера, м3', 1.1]],
            ['param', ['Температура нагріву пресуючої головки, град.', '280 - 350']],
            ['param', ['Максимальна вологість тирси, %', 10]],
            ['param', ['Встановлена потужність, кВт', 46.35]],
            ['param', ['Споживана потужність, кВт', 28]],
            ['header', ['Габаритні розміри, мм:']],
            ['param', ['довжина', 4100]],
            ['param', ['ширина', 1400]],
            ['param', ['висота', 2285]],
            ['param', ['Маса, кг', 2200]],
        ]
    },
    {
        id: 7,
        title: 'АВТОМАТИЧНИЙ ПРИСТРІЙ ДЛЯ РІЗКИ БРИКЕТІВ',
        small_img: './images/small_img/avtomat_s.png',
        short: 'Призначений для автоматичної різки брикетів заданої довжини. Різка здійснюється при русі брикетів ...',
        description: "Призначений для автоматичної різки брикетів заданої довжини. Різка здійснюється при русі брикетів без їх зупинки.",
        button: 'Детальніше ...',
        data: [
            ['images', ['./images/products/avtomat/avtomat.png']],
            ['video', '<iframe width="640" height="480" src="https://www.youtube.com/embed/lB1VGB7xx6E" title="Автоматична різка брикетів" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
            ['thead', 'ТЕХНІЧНІ ХАРАКТЕРИСТИКИ'],
            ['param', ['Довжина нарізаних брикетів, мм', '150 - 400']],
            ['param', ['Ріжучий орган', 'твердосплавна дискова пила']],
            ['param', ['Діаметр пили, мм', 360]],
            ['param', ['Частота обертання, об/хв', 3000]],
            ['param', ['Привід робочих механизмів', 'пневматичний']],
            ['param', ['Робочий тиск, МПа', 0.4]],
            ['param', ['Розхід повітря, л/хв', 27]],
            ['param', ['Встановлена потужність, кВт', '2.2']],
            ['header', ['Габаритні розміри, мм:']],
            ['param', ['довжина', 630]],
            ['param', ['ширина', 450]],
            ['param', ['висота', 1160]],
            ['param', ['Маса, кг', 70]],
        ]
    },
    {
        id: 8,
        title: 'ЛАНЦЮГОВІ СТОЛИ ТА ВІБРОСТОЛИ',
        small_img: './images/small_img/chain_table_s.png',
        short: 'Призначені для подачі матеріалів та заготовок в зону обробки ...',
        description: "Призначені для подачі матеріалів та заготовок в зону обробки.",
        button: 'Детальніше ...',
        data: [
            ['p', ['Ланцюгові столи та вібростоли виготовляємо згідно замовлення.']],
            ['images', ['./images/products/chain_vibro/chain_table.png', './images/products/chain_vibro/vibrostol.png']],
            ['param', ['Вібростоли подачі заготовок.', '']],
            ['video', '<iframe width="640" height="480" src="https://www.youtube.com/embed/SBnMVrSjp9E" title="Вібростоли подачі заготовок" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
        ]
    },
    {
        id: 9,
        title: 'ТРАНСПОРТЕРИ І КОНВЕЙЕРИ',
        small_img: './images/small_img/konveyer_s.png',
        short: 'Призначені для подачі матеріалів та заготовок в зону обробки ...',
        description: "Призначені для подачі матеріалів та заготовок в зону обробки.",
        button: 'Детальніше ...',
        data: [
            ['p', ['Транспортери і конвейери виготовляємо згідно замовлення.']],
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

    if (lang === 'ua') {
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
    if (lang === 'ua') {
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
