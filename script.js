// ===========================
// MOBILNÍ MENU – rozbalení/skrytí
// ===========================

const menuBtn = document.getElementById('menu-btn');
const navList = document.getElementById('nav-list');

menuBtn.addEventListener('click', function () {
    navList.classList.toggle('show');
});

// Zavření menu po kliknutí na odkaz (na mobilu)
const navLinks = document.querySelectorAll('#nav-list a');
navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        navList.classList.remove('show');
    });
});

// ===========================
// ROZBALENÍ/SKRYTÍ DETAILU ARCHITEKTURY
// ===========================

const btnArchitektura = document.getElementById('btn-vice-architektura');
const detailArchitektura = document.getElementById('detail-architektura');

btnArchitektura.addEventListener('click', function () {
    // Přepínání viditelnosti
    detailArchitektura.classList.toggle('hidden');

    // Změna textu na tlačítku
    if (detailArchitektura.classList.contains('hidden')) {
        btnArchitektura.textContent = 'Zobrazit více o architektuře ▼';
    } else {
        btnArchitektura.textContent = 'Skrýt podrobnosti ▲';
    }
});

// ===========================
// KVÍZ – vyhodnocení odpovědí
// ===========================

const quizForm = document.getElementById('quiz-form');
const quizResult = document.getElementById('quiz-result');

// Správné odpovědi
const spravneOdpovedi = {
    q1: 'b', // 1248
    q2: 'b', // 157 m
    q3: 'b'  // Schrána Tří králů
};

quizForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Zamezí odeslání formuláře

    let skore = 0;
    let celkem = 3;

    // Projdeme každou otázku a zkontrolujeme odpověď
    for (let otazka in spravneOdpovedi) {
        const vybrana = document.querySelector('input[name="' + otazka + '"]:checked');
        if (vybrana && vybrana.value === spravneOdpovedi[otazka]) {
            skore++;
        }
    }

    // Zobrazení výsledku
    quizResult.classList.remove('hidden', 'correct', 'partial', 'wrong');

    if (skore === celkem) {
        quizResult.textContent = 'Výborně! Máte ' + skore + ' z ' + celkem + ' správně! 🎉';
        quizResult.classList.add('correct');
    } else if (skore > 0) {
        quizResult.textContent = 'Máte ' + skore + ' z ' + celkem + ' správně. Zkuste to znovu! 🤔';
        quizResult.classList.add('partial');
    } else {
        quizResult.textContent = 'Bohužel 0 z ' + celkem + '. Přečtěte si text a zkuste to znovu! 😕';
        quizResult.classList.add('wrong');
    }
});

// ===========================
// KONTAKTNÍ FORMULÁŘ – jednoduchá validace
// ===========================

const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Získání hodnot z formuláře
    const jmeno = document.getElementById('jmeno').value.trim();
    const email = document.getElementById('email').value.trim();
    const zprava = document.getElementById('zprava').value.trim();

    // Resetování zprávy
    formMessage.classList.remove('hidden', 'success', 'error');

    // Kontrola, zda jsou vyplněná pole
    if (jmeno === '' || email === '' || zprava === '') {
        formMessage.textContent = 'Prosím vyplňte všechna pole.';
        formMessage.classList.add('error');
        return;
    }

    // Jednoduchá kontrola e-mailu (obsahuje @ a .)
    if (!email.includes('@') || !email.includes('.')) {
        formMessage.textContent = 'Zadejte platný e-mail.';
        formMessage.classList.add('error');
        return;
    }

    // Kontrola délky zprávy
    if (zprava.length < 10) {
        formMessage.textContent = 'Zpráva musí mít alespoň 10 znaků.';
        formMessage.classList.add('error');
        return;
    }

    // Úspěšné "odeslání"
    formMessage.textContent = 'Děkujeme, ' + jmeno + '! Vaše zpráva byla odeslána. ✔️';
    formMessage.classList.add('success');

    // Vymazání formuláře
    contactForm.reset();
});
