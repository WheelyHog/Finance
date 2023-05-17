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
    },
    {
        id: 2,
        title: 'МАШИНА РУБАЛЬНА ДЛЯ ПЕРЕРОБКИ КУСКОВИХ ВІДХОДІВ УРМ-5А',
        small_img: './images/small_img/urm-5a_s.png',
        short: 'Призначення: Подрібнення деревинних відходів (відходи деревообробки, шпону-рванини, відходи меблевого ...',
        description: "Призначення: Подрібнення деревинних відходів (відходи деревообробки, шпону-рванини, відходи меблевого виробництва та ін.) на технологічну або паливну тріску, деревинну масу для брикетування та подрібнення технологічної тріски на деревинну масу для брикетування.",
        button: 'Детальніше ...',
    },
    {
        id: 3,
        title: 'МАШИНА РУБАЛЬНА ДЛЯ КУСКОВИХ ВІДХОДІВ МРБ-2АП',
        small_img: './images/small_img/mrb-2ap_s.png',
        short: 'Рубальна машина барабанного типу, призначена для подрібнення деревинних відходів (відходи деревообробки ...',
        description: "Рубальна машина барабанного типу, призначена для подрібнення деревинних відходів (відходи деревообробки, шпону-рванини, відходи меблевого виробництва та ін.) на технологічну або паливну тріску, деревинну масу для брикетування, а також на тріску для копчення м'яса та риби.",
        button: 'Детальніше ...',
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

products_btn.onclick = () => {
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

            product_div.append(product_img, product_title, product_description, details_btn);
            product_list.append(product_div);
        })
        main_inner.append(product_list)
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

