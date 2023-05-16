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
const main_inner = document.getElementById('info_text');

const { title, address, boss1, boss2, boss3, hr, accounting, mail, web, local } = contacts[0]

contacts_btn.onclick = () => {
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

const { first_p, list_items, last_p } = home[0]

home_btn.onclick = () => {
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

about_btn.onclick = () => {
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

