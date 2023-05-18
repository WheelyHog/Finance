let lang = 'ua';
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
        web: 'веб сайт: <a href="www.pkti.if.ua">www.pkti.if.ua<a></a>',
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

        main_inner.append(c_title, c_address, c_boss1, c_boss2, c_boss3, c_hr, c_accounting, c_mail, c_web, c_location);
    }
}

// ================================ render home=======================
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

home_btn.addEventListener('click', home_btn_click);
footer_home_btn.addEventListener('click', home_btn_click);

function home_btn_click() {
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
            ['video', '<iframe width="640" height="480" src="https://www.youtube.com/embed/CoLVGv96370" title="МАШИНА РУБАЛЬНА ДЛЯ ПЕРЕРОБКИ КУСКОВИХ ВІДХОДІВ УРМ-5А." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
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
            ['images', ['./images/products/mrb_2a/mrb-2a_1.png', './images/products/mrb_2a/mrb-2a_2.png', './images/products/mrb_2a/mrb-2a_3.png']],
            ['p', ['1 - станина; 2 - сітка; 3, 9 - контрніж; 4 - ріжучий ніж ; 5 - ротор;']],
            ['p', ['6 - кришка; 7 - шторка; 8 - загрузочна горловина ; 10 - привід.']],
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
        short: 'Рубальна машина УРМ-5 призначена для переробки деревинних відходів (тонкомірної деревини, відходів лісопиляння, деревообробки ...',
        description: "Рубальна машина УРМ-5, УРМ-5М призначена для переробки деревинних відходів (тонкомірної деревини, відходів лісопиляння, деревообробки, меблевого виробництва, шпону-рванини) на технологічну або паливну тріску, деревинну масу для брикетування. Машина барабанного типу з механічним подаванням сировини в зону різки.",
        button: 'Детальніше ...',
    },
    {
        id: 5,
        title: 'МАШИНА РУБАЛЬНА ДО-51',
        small_img: './images/small_img/do51_s.png',
        short: 'Рубальна машина барабанного типу ДО-51, призначена для переробки деревинних відходів, тонкомірної деревини, відходів лісопиляння ...',
        description: "Рубальна машина барабанного типу ДО-51, призначена для переробки деревинних відходів, тонкомірної деревини, відходів лісопиляння, деревообробки, меблевого виробництва, шпону-рванины на технологічну або паливну тріску, деревинну масу для брикетування.",
        button: 'Детальніше ...',
    },
    {
        id: 6,
        title: 'ПРЕС ДЛЯ БРИКЕТУВАННЯ ШНЕКОВИЙ УБТ-350',
        small_img: './images/small_img/ubt-350_s.png',
        short: 'Призначення – пресування дрібних деревинних відходів (тирси, стружки), соломи, лузги соняшника ...',
        description: "Призначення – пресування дрібних деревинних відходів (тирси, стружки), соломи, лузги соняшника, гречихи, костри льону в паливні брикети.",
        button: 'Детальніше ...',
    },
    {
        id: 7,
        title: 'АВТОМАТИЧНИЙ ПРИСТРІЙ ДЛЯ РІЗКИ БРИКЕТІВ',
        small_img: './images/small_img/avtomat_s.png',
        short: 'Призначений для автоматичної різки брикетів заданої довжини. Різка здійснюється при русі брикетів ...',
        description: "Призначений для автоматичної різки брикетів заданої довжини. Різка здійснюється при русі брикетів без їх зупинки.",
        button: 'Детальніше ...',
    },
    {
        id: 8,
        title: 'ЛАНЦЮГОВІ СТОЛИ ТА ВІБРОСТОЛИ',
        small_img: './images/small_img/chain_table_s.png',
        short: 'Призначені для подачі матеріалів та заготовок в зону обробки ...',
        description: "Призначені для подачі матеріалів та заготовок в зону обробки.",
        button: 'Детальніше ...',
    },
    {
        id: 9,
        title: 'ТРАНСПОРТЕРИ І КОНВЕЙЕРИ.',
        small_img: './images/small_img/konveyer_s.png',
        short: 'Призначені для подачі матеріалів та заготовок в зону обробки ...',
        description: "Призначені для подачі матеріалів та заготовок в зону обробки.",
        button: 'Детальніше ...',
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


