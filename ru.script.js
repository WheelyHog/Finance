let lang = 'ru';

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
            name: 'Технологичная щепа',
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
            name: 'Топливная щепа',
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
            name: 'Опилки',
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
            name: 'Топливная щепа',
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
            name: 'Топливные брикеты',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 11,
            image: './images/slider/press.png',
            name: 'Пресс брикетировочный УБТ-350',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 12,
            image: './images/slider/skip3.png',
            name: 'Опилки',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 13,
            image: './images/slider/avtomat.png',
            name: 'Автоматическое устройство для резки брикетов',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 14,
            image: './images/slider/skip2.png',
            name: 'Топливная щепа',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 15,
            image: './images/slider/chain_table_b (1).png',
            name: 'Цепной стол для подачи заготовок',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 16,
            image: './images/slider/skip3.png',
            name: 'Опилки',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 17,
            image: './images/slider/vibrostol.png',
            name: 'Вибростол для подачи заготовок',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 18,
            image: './images/slider/skip2.png',
            name: 'Топливная щепа',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 19,
            image: './images/slider/konveyer.png',
            name: 'Скребковый конвейер',
            bottom_img: './images/bg.slideshow.png'
        },
        {
            id: 1,
            image: './images/slider/skip3.png',
            name: 'Топливная щепа',
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
        title: 'Пресc брикетировочный УБТ-350',
    },
    {
        id: 7,
        link: '#',
        title: 'Автомат. устройство для резки брикетов',
    },
    {
        id: 8,
        link: '#',
        title: 'Цепные столы и вибростолы',
    },
    {
        id: 9,
        link: '#',
        title: 'Транспортеры и конвейеры',
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
        language: 'ru',
        title: 'Контакты',
        address: {
            title: 'Адрес:',
            place: 'ЧАО "Украинский проектно-конструкторский технологический институт лесной промышленности", 76006, Украина, г. Ивано-Франковск, ул. Максимовича 14а.'
        },
        boss1: {
            seat: 'Председатель наблюдательного совета:',
            fullname: 'Божак Богдан Васильевич,',
            phones: 'моб. +380 506 611533; +380 976 407095'
        },
        boss2: {
            seat: 'Председатель правления:',
            fullname: 'Хандога Василь Йосипович,',
            phones: 'моб. +380 993 832736, +380 976 407189'
        },
        boss3: {
            seat: 'Заместитель председателя правления по проектной работе:',
            fullname: 'Турчин Богдан Яковлевич,',
            phones: 'моб. +380 971 662601'
        },
        hr: 'Отдел кадров: тел./факс: +38 (0342) 50-05-21',
        accounting: 'Бухгалтерия: тел. +38 (0342) 50-05-21',
        mail: 'e-mail: <a href="mailto:pkti.if@ukr.net">pkti.if@ukr.net</a>',
        web: 'веб сайт: <a href="http://pkti.if.ua">www.pkti.if.ua</a>',
        local: 'Где мы находимся: 76006, г. Ивано-Франковск, ул. Максимовича 14а.'
    }
]

const contacts_btn = document.getElementById('contacts');
const footer_contacts_btn = document.getElementById('footer_contacts')
const main_inner = document.getElementById('info_text');

const { title, address, boss1, boss2, boss3, hr, accounting, mail, web, local } = contacts[0]

contacts_btn.addEventListener('click', contacts_click)
footer_contacts_btn.addEventListener('click', contacts_click)

function contacts_click() {
    if (lang === 'ru') {
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
        language: 'ru',
        first_p: {
            title: 'ЧАО "УКРПКТИЛЕСПРОМ"',
            text: ' является одним из наибольших отечественных производителей:'
        },
        list_items: [
            'Стационарных рубильных машин барабанного типа (измельчители) для лесопильного сектора, включая переработку древесных отходов в технологичную и топливную щепу, а также аксессуаров, таких как цепные столы и вибростолы для подачи заготовок, ленточные транспортеры, конвейеры для загрузки и транспортировки разной длины и ширины, адаптированные для индивидуальных потребностей клиента.',
            'Шнековых прессов для брикетирования опилок, соломы, шелухи подсолнечника.',
            'Автоматических устройств для резки брикетов.'
        ],
        last_p: {
            title: 'ЧАО "УКРПКТИЛЕСПРОМ"',
            text: 'начала свою деятельность в 1961 году как проектная организация. 60% лесопильных, деревообрабатывающих, мебельных и плитных предприятий Украины построены по нашим проектам. Наш многолетний опыт в проектировании и производстве машин для измельчения древесных отходов оказывает профессиональную помощь в выборе конкретной машины с учетом производительности и назначения. Благодаря хорошо обученному персоналу и сотрудничеству с клиентами, ми можем изготавливать машины, адаптированные для ихних индивидуальных потребностей. Высокое качество и надежность нашей техники делает услуги, которые предоставляются компаниями, и которые сотрудничают с нами, намного более привлекательными.'
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
    if (lang === 'ru') {
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
    if (lang === 'ru') {
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
        title: 'МАШИНА РУБИЛЬНАЯ ДЛЯ КУСКОВЫХ ОТХОДОВ МРБ-2А, МРБ-2Г',
        small_img: './images/small_img/mrb-2a_s.png',
        short: 'Рубильная машина барабанного типа, предназначена для измельчения древесных отходов (отходы деревообработки ...',
        description: "Рубильная машина барабанного типа, предназначена для измельчения древесных отходов (отходы деревообработки, шпон-рванина, отходы мебельного производства и др.) на технологическую или топливную щепу, древесную массу для брикетирования, а также на щепу для копчения мяса и рыбы.",
        button: 'Подробнее ...',
        data: [
            ['images', ['./images/products/mrb_2a/mrb-2a_1.png', './images/products/mrb_2a/mrb-2a_2.png', './images/products/mrb_2a/mrb-2a_3.png']],
            ['p', ['1 - станина; 2 - сетка; 3, 9 - контрнож; 4 - режущий нож ; 5 - ротор;']],
            ['p', ['6 - крышка; 7 - шторка; 8 - загрузочная горловина ; 10 - привод.']],
            ['video', '<iframe width="640" height="480" src="https://www.youtube.com/embed/zuuQX9ek_jU" title="Руб. машина МРБ - 2А" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
            ['video', '<iframe width="640" height="480" src="https://www.youtube.com/embed/7IEMv9cvBl0" title="рубальна машина МРБ 2А ПРАТ УКРПКТІЛІСПРОМ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
            ['thead', 'ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ'],
            ['tsubhead', ['', 'МРБ-2А', 'МРБ-2Г']],
            ['header', ['Производительность, м3/час:', '', '']],
            ['param', ['древесная масса для брикетирования', '1,5 - 2', '2 - 2,5']],
            ['param', ['технологическая или топливная щепа', 6, 9]],
            ['param', ['Види перерабатываемого сырья', 'отходы шпона, ДСП, ДВП и деревообработки', 'отходы шпона, ДСП, ДВП и деревообработки']],
            ['param', ['Диаметр ротора, мм', 425, 425]],
            ['param', ['Частота вращения ротора, мин-1', 1470, 1470]],
            ['param', ['Количество ножей, шт', 8, 12]],
            ['param', ['Установленная мощность, кВт', 'от 22', 'от 30']],
            ['param', ['Розмер загрузочной горловины, мм', '230 Х 350', '230 Х 550']],
            ['header', ['Габаритные размеры, мм:']],
            ['param', ['длина', 1540, 1600]],
            ['param', ['ширина', 830, 1010]],
            ['param', ['высота', 1410, 1410]],
            ['header', ['Размеры перерабатываемых отходов, мм:']],
            ['param', ['условный диаметр', 80, 80]],
            ['param', ['ширина', 350, 530]],
            ['param', ['длина', 1500, 1500]],
            ['param', ['Масса, кг', 1000, 1300]],
        ]
    },
    {
        id: 2,
        title: 'МАШИНА РУБИЛЬНАЯ ДЛЯ ПЕРЕРАБОТКИ КУСКОВЫХ ОТХОДОВ УРМ-5А',
        small_img: './images/small_img/urm-5a_s.png',
        short: 'Назначение: Измельчение древесных отходов (отходы деревообработки, шпона-рванины, отходы мебельного ...',
        description: "Назначение: Измельчение древесных отходов (отходы деревообработки, шпона-рванины, отходы мебельного производства и др.) на технологичную или топливную щепу, древесную массу для брикетирования и измельчение технологичной щепы на древесную массу для брикетирования.",
        button: 'Подробнее ...',
        data: [
            ['images', ['./images/products/urm_5a/urm-5a.png']],
            ['video', '<iframe width="640" height="480" src="https://www.youtube.com/embed/CoLVGv96370" title="МАШИНА РУБИЛЬНАЯ ДЛЯ ПЕРЕРАБОТКИ КУСКОВЫХ ОТДХОДОВ УРМ-5А." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
            ['thead', 'ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ'],
            ['header', ['Производительность, м3/час (насыпных):']],
            ['param', ['технологическая или топливная щепа', 15]],
            ['param', ['древесная масса для брикетирования', 6]],
            ['param', ['переработка щепы на древесную массу', 20]],
            ['param', ['Виды перерабатываемого сырья:', 'отходы шпона, ДСП, ДВП и деревообработки']],
            ['param', ['Диаметр ротора, мм', 600]],
            ['param', ['Частота вращения ротора, мин-1', 1000]],
            ['param', ['Количество ножей, шт', 6]],
            ['param', ['Установленная мощность, кВт', 55]],
            ['param', ['Размер загрузочной горловины, мм', '400 х 600']],
            ['header', ['Габаритные размеры, мм:']],
            ['param', ['длина', 1795]],
            ['param', ['ширина', 1135]],
            ['param', ['высота', 1300]],
            ['header', ['Размеры перерабатываемых отходов, мм:']],
            ['param', ['условный диаметр', 120]],
            ['param', ['ширина', 600]],
            ['param', ['длина', 1500]],
            ['param', ['Масса, кг', 1700]],
        ]
    },
    {
        id: 3,
        title: 'МАШИНА РУБИЛЬНАЯ ДЛЯ КУСКОВЫХ ОТХОДОВ МРБ-2АП',
        small_img: './images/small_img/mrb-2ap_s.png',
        short: 'Рубильная машина барабанного типа, предназначена для измельчения древесных отходов (отходы деревообработки ...',
        description: "Рубильная машина барабанного типа, предназначена для измельчения древесных отходов (отходы деревообработки, шпон-рванина, отходы мебельного производства и др.) на технологическую или топливную щепу, древесную массу для брикетирования, а также на щепу для копчения мяса и рыбы.",
        button: 'Подробнее ...',
        data: [
            ['images', ['./images/products/mrb_2ap/mrb-2ap_1.png']],
            ['p', ['1 - патрубок отсасывающий; 2 - ротор; 3 - верхний механизм подачи; 4 - станина; 5 - транспортер;']],
            ['p', ['6 - нижний механизм подачи; 7 - сетка.']],
            ['images', ['./images/products/mrb_2ap/mrb-2ap_2.png']],
            ['thead', 'ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ'],
            ['header', ['Производительность, м3/час:']],
            ['param', ['при длине щепы 15 - 35 мм', 10]],
            ['param', ['при длине щепы 5 - 10 мм', 5]],
            ['param', ['при длине щепы 2 - 3 мм', 1.6]],
            ['param', ['Диаметр ротора, мм', 425]],
            ['param', ['Частота вращения ротора, мин-1', '550 - 1470']],
            ['param', ['Количество ножей, шт', 8]],
            ['param', ['Установленная мощность, кВт', 'від 33']],
            ['param', ['Механизм подачи', 'валовой']],
            ['param', ['Скорость подачи, м/с', '0,25 - 0,75']],
            ['header', ['Габаритные размеры, мм:']],
            ['param', ['длина', 2500]],
            ['param', ['ширина', 1050]],
            ['param', ['высота', 1600]],
            ['header', ['Размеры перерабатываемых отходов, мм:']],
            ['param', ['условный диаметр', 120]],
            ['param', ['ширина', 300]],
            ['param', ['длина', 3000]],
            ['param', ['Масса, кг', 1500]],
        ]
    },
    {
        id: 4,
        title: 'МАШИНА РУБИЛЬНАЯ УРМ-5, УРМ-5М',
        small_img: './images/small_img/urm-5_s.png',
        short: 'Рубильная машина УРМ-5, УРМ-5М предназначена для переработки древесных отходов (тонкомерной древесины, отходов лесопиления ...',
        description: "Рубильная машина УРМ-5, УРМ-5М предназначена для переработки древесных отходов (тонкомерной древесины, отходов лесопиления, деревообработки, мебельного производства, шпона-рванины) на технологическую или топливную щепу, древесную массу для брикетирования. Машина барабанного типа с механической подачей сырья в зону резки.",
        button: 'Подробнее ...',
        data: [
            ['images', ['./images/products/urm_5m/urm-5m_1.png']],
            ['p', ['1 - станина; 2 - сетка; 3, 6 - контрножи; 4 - крышка; 5 - ротор; 7, 8 - механизм подачи; 9 - подающий конвейер.']],
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
            ['thead', 'ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ'],
            ['tsubhead', ['', 'УРМ-5', 'УРМ-5М']],
            ['header', ['Производительность, м3/час:']],
            ['param', ['при длине щепы 30 - 50 мм', 18, 30]],
            ['param', ['при длине щепы 5 - 10 мм', 5, 15]],
            ['param', ['Частота вращения ротора, мин-1', '750 - 1500', '500 - 1000']],
            ['header', ['Размеры барабана, мм:']],
            ['param', ['длина', 400, 600]],
            ['param', ['диаметр', 600, 600]],
            ['param', ['Количество ножей, шт', 4, 6]],
            ['param', ['Скорость подачи отходов, м/с', '0,18 - 0,6', '0,18 - 0,6']],
            ['header', ['Размери перерабатываемых отходов, мм:']],
            ['param', ['толщина (диаметр), максимально', 210, 210]],
            ['param', ['ширина', 600, 600]],
            ['param', ['длина', 'до 6000', 'до 6000']],
            ['param', ['Установленная мощность, кВт', 'от 52', 'от 75 - 90']],
            ['header', ['Габаритные размеры, мм:']],
            ['param', ['длина', 6150, 6500]],
            ['param', ['ширина', 2100, 3000]],
            ['param', ['высота', 1350, 1500]],
            ['param', ['Масса, кг', 3600, 4200]],
        ]
    },
    {
        id: 5,
        title: 'МАШИНА РУБИЛЬНАЯ ДО-51',
        small_img: './images/small_img/do51_s.png',
        short: 'Рубильная машина барабанного типа ДО-51, предназначена для переработки древесных отходов, тонкомерной древесины, отходов лесопиления ...',
        description: "Рубильная машина барабанного типа ДО-51, предназначена для переработки древесных отходов, тонкомерной древесины, отходов лесопиления, деревообработки, мебельного производства, шпона-рванины на технологическую или топливную щепу, древесную массу для брикетирования.",
        button: 'Подробнее ...',
        data: [
            ['images', ['./images/products/do_51/do-51_1.png']],
            ['p', ['1 - станина; 2 - сетка; 3, 6 - контрножи; 4 - крышка; 5 - ротор; 7, 8 - механизм подачи; 9 - подающий конвейер.']],
            ['images', ['./images/products/do_51/do-51_2.png']],
            ['video', '<iframe width="640" height="480" src="https://www.youtube.com/embed/X_pTjRJFl6M" title="Руб. машина ДО-51 Сербія" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
            ['video', '<iframe width="640" height="480" src="https://www.youtube.com/embed/moBTPJDQMNg" title="rub. mash. DO-51" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
            ['video', '<iframe width="640" height="480" src="https://www.youtube.com/embed/dSnrf5aadCs" title="ДО-51" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
            ['thead', 'ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ'],
            ['header', ['Производительность, м3/час (насыпных):']],
            ['param', ['при длине щепы 30 - 50 мм', 50]],
            ['param', ['при длине щепы 5 - 15 мм', 17]],
            ['param', ['Частота вращения барабана, мин-1', '700 - 1000']],
            ['param', ['Количество ножей, шт', 6]],
            ['param', ['Скорость подачи отходов, м/с', '0,2 - 0,55']],
            ['header', ['Размеры перерабатываемых отходов, мм:']],
            ['param', ['толщина (диаметр), максимально', 300]],
            ['param', ['ширина', 600]],
            ['param', ['длина', 'до 6000']],
            ['param', ['Установленная мощность, кВт', 'від 88']],
            ['header', ['Габаритные размеры (без транспортера), мм:']],
            ['param', ['длина', 3400]],
            ['param', ['ширина', 2200]],
            ['param', ['высота', 1500]],
            ['param', ['Масса, кг', 5700]],
        ]
    },
    {
        id: 6,
        title: 'ПРЕСС ДЛЯ БРИКЕТИРОВАНИЯ ШНЕКОВЫЙ УБТ-350',
        small_img: './images/small_img/ubt-350_s.png',
        short: 'Назначение – прессование мелких древесных отходов (опилок, стружки), соломы, шелухи подсолнечника ...',
        description: "Назначение – прессование мелких древесных отходов (опилок, стружки), соломы, шелухи подсолнечника, гречихи, костры льна в топливные брикеты.",
        button: 'Подробнее ...',
        data: [
            ['p', ['Пресс винтового типа, непрерывного действия, основными составными частями которого являются бункер и винтовой пресс. Бункер служит для накопления опилок, оснащен подающим винтовым конвейером. Винтовой пресс состоит из главного вала, корпуса, рабочего органа, прессующей головки и устройства для разделения брикетов. Главный вал приводится в действие от электродвигателя с помощью клиноременной передачи. На конце главного вала выполнена винтовая нарезка, которая служит для подачи опилок в зону прессования, а также крепится рабочий орган, который представляет собой конический шнек с хвостовиком. Прессующая головка состоит из гильзы, внутри которой вмонтированы направляющие, прессующая и формирующая втулки. Снаружи гильзы установлена обойма с электронагревателями, которые нагревают зону прессования до температуры 280-350°С. Устройство для разделения брикетов выполнено в виде подпружиненного колеса, на образующей которого установлены ножи, расстояние между которыми равняется длине получаемых брикетов.']],
            ['images', ['./images/products/ubt_350/ubt-350_1.png', './images/products/ubt_350/ubt-350_2.png']],
            ['p', ['1 - бункер; 2 - сырье; 3 - подающий шнек; 4 - уплотнительный шнек; 5 - прессующая головка; 6 - нагреватели;']],
            ['p', ['7 - разделитель; 8 - конический шнек ; 9 - главный вал ; 10 - корпус.']],
            ['video', '<iframe width="640" height="480" src="https://www.youtube.com/embed/Ov6AKgcTzg8" title="Брикетирование опилок" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
            ['video', '<iframe width="640" height="480" src="https://www.youtube.com/embed/WTq44HzqeBU" title="Press briket  UBT-300" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
            ['video', '<iframe width="640" height="480" src="https://www.youtube.com/embed/nvye_jlwv1k" title="УБТ-350_1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
            ['video', '<iframe width="640" height="480" src="https://www.youtube.com/embed/ZJ7WM3pRGDM" title="УБТ-350_2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
            ['thead', 'ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ'],
            ['header', ['Производительность, кг/час:', '350 - 450']],
            ['param', ['Частота вращения рабочего органа, мин-1', 600]],
            ['param', ['Размеры брикетов, сечение, мм', 'квадрат - 50 x 50, шестигранник - 60, ромашка - Ø 55']],
            ['param', ['Длина, мм', 300]],
            ['param', ['Объем бункера, м3', 1.1]],
            ['param', ['Температура нагрева прессующей головки, град.', '280 - 350']],
            ['param', ['Максимальная влажность опилок, %', 10]],
            ['param', ['Установленная мощность, кВт', 46.35]],
            ['param', ['Потребляемая мощность, кВт', 28]],
            ['header', ['Габаритные размеры, мм:']],
            ['param', ['длина', 4100]],
            ['param', ['ширина', 1400]],
            ['param', ['высота', 2285]],
            ['param', ['Масса, кг', 2200]],
        ]
    },
    {
        id: 7,
        title: 'АВТОМАТИЧЕСКОЕ УСТРОЙСТВО ДЛЯ РЕЗКИ БРИКЕТОВ',
        small_img: './images/small_img/avtomat_s.png',
        short: 'Предназначено для автоматической резки брикетов заданной длины. Резка осуществляется при движении брикетов ...',
        description: "Предназначено для автоматической резки брикетов заданной длины. Резка осуществляется при движении брикетов без их остановки.",
        button: 'Подробнее ...',
        data: [
            ['images', ['./images/products/avtomat/avtomat.png']],
            ['video', '<iframe width="640" height="480" src="https://www.youtube.com/embed/lB1VGB7xx6E" title="Автоматическая резка брикетов" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
            ['thead', 'ТЕХНІЧЕСКИЕ ХАРАКТЕРИСТИКИ'],
            ['param', ['Длина нарезаемых брикетов, мм', '150 - 400']],
            ['param', ['Режущий орган', 'твердосплавная дисковая пила']],
            ['param', ['Диаметр пилы, мм', 360]],
            ['param', ['Частота вращения, об/мин', 3000]],
            ['param', ['Привод исполнительных механизмов', 'пневматический']],
            ['param', ['Рабочее давление, МПа', 0.4]],
            ['param', ['Расход воздуха, л/мин', 27]],
            ['param', ['Установленная мощность, кВт', '2.2']],
            ['header', ['Габаритные размеры, мм:']],
            ['param', ['длина', 630]],
            ['param', ['ширина', 450]],
            ['param', ['высота', 1160]],
            ['param', ['Масса, кг', 70]],
        ]
    },
    {
        id: 8,
        title: 'ЦЕПНЫЕ СТОЛЫ И ВИБРОСТОЛЫ',
        small_img: './images/small_img/chain_table_s.png',
        short: 'Предназначены для подачи материалов и заготовок в зону обработки ...',
        description: "Предназначены для подачи материалов и заготовок в зону обработки.",
        button: 'Подробнее ...',
        data: [
            ['p', ['Цепные столы и вибростолы изготавливаем согласно особенностям заказа.']],
            ['images', ['./images/products/chain_vibro/chain_table.png', './images/products/chain_vibro/vibrostol.png']],
            ['param', ['Вибростолы подачи заготовок.', '']],
            ['video', '<iframe width="640" height="480" src="https://www.youtube.com/embed/SBnMVrSjp9E" title="Вибростолы подачи заготовок" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
        ]
    },
    {
        id: 9,
        title: 'ТРАНСПОРТЕРы И КОНВЕЙЕРЫ.',
        small_img: './images/small_img/konveyer_s.png',
        short: 'Предназначены для подачи материалов и заготовок в зону обработки ...',
        description: "Предназначены для подачи материалов и заготовок в зону обработки.",
        button: 'Подробнее ...',
        data: [
            ['p', ['Транспортеры и конвейеры изготавливаем согласно особенностям заказа.']],
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

    if (lang === 'ru') {
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
    if (lang === 'ru') {
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
    slidesPerView: 3,
    spaceBetween: 10,
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


