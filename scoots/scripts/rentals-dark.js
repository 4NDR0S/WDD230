const themeSwitch = document.querySelector('.switch');
const themeValue = document.querySelector('#dark-mode');

themeSwitch.addEventListener('click', () => {
    const main = document.querySelector('body');
    const h2 = document.querySelectorAll('h2');
    const h3 = document.querySelectorAll('h3');
    const p = document.querySelectorAll('p');
    const section = document.querySelectorAll('section');
    const tr = document.querySelectorAll('tbody > tr');
    // const tr1 = document.querySelectorAll('.rentals-main tbody > tr:nth-child(odd)');
    const tr1 = document.querySelectorAll('tbody > tr:nth-child(odd)');

    const footerp = document.querySelector('#footer_p');

    if (themeValue.checked) {
        main.style.backgroundColor = 'var(--dark-bg)';

        // card.forEach((i) => (i.style.setProperty('background-color', '#090040')));
        h2.forEach((i) => (i.style.setProperty('color', 'white')));
        h3.forEach((i) => (i.style.setProperty('color', 'white')));
        p.forEach((i) => (i.style.setProperty('color', 'white')));

        section.forEach((i) => (i.style.setProperty('background-color', 'var(--dark-cards)')));

        tr1.forEach((i) => (i.style.setProperty('background-color', 'var(--dark-cards)')));
        tr.forEach((i) => (i.style.setProperty('color', 'white')));
        footerp.style.color = 'black';
    }
    else {
        main.style.backgroundColor = "white";
        // card.forEach((i) => (i.style.setProperty('background-color', 'var(--sand)')));
        h2.forEach((i) => (i.style.setProperty('color', 'black')));
        h3.forEach((i) => (i.style.setProperty('color', 'black')));
        p.forEach((i) => (i.style.setProperty('color', 'black')));

        section.forEach((i) => (i.style.setProperty('background-color', 'var(--sand)')));

        tr1.forEach((i) => (i.style.setProperty('background-color', 'var(--sand)')));
        tr.forEach((i) => (i.style.setProperty('color', 'black')));
        footerp.style.color = 'black';
    }
});