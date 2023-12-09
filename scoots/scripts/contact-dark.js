const themeSwitch = document.querySelector('.switch');
const themeValue = document.querySelector('#dark-mode');

themeSwitch.addEventListener('click', () => {
    const main = document.querySelector('body');
    const card = document.querySelectorAll('.card');
    const h2 = document.querySelectorAll('h2');
    const h3 = document.querySelectorAll('h3');
    const p = document.querySelectorAll('p');
    const li = document.querySelectorAll('li');


    const legend = document.querySelectorAll('legend');
    const label = document.querySelectorAll('label');

    if (themeValue.checked) {
        main.style.backgroundColor = "black";

        card.forEach((i) => (i.style.setProperty('background-color', '#090040')));
        h2.forEach((i) => (i.style.setProperty('color', 'white')));
        h3.forEach((i) => (i.style.setProperty('color', 'white')));
        p.forEach((i) => (i.style.setProperty('color', 'white')));
        li.forEach((i) => (i.style.setProperty('color', 'white')));

        legend.forEach((i) => (i.style.setProperty('color', 'white')));
        label.forEach((i) => (i.style.setProperty('color', 'white')));
    }
    else {
        main.style.backgroundColor = "white";
        card.forEach((i) => (i.style.setProperty('background-color', 'var(--sand)')));
        h2.forEach((i) => (i.style.setProperty('color', 'black')));
        h3.forEach((i) => (i.style.setProperty('color', 'black')));
        p.forEach((i) => (i.style.setProperty('color', 'black')));
        li.forEach((i) => (i.style.setProperty('color', 'black')));

        legend.forEach((i) => (i.style.setProperty('color', 'black')));
        label.forEach((i) => (i.style.setProperty('color', 'black')));
    }
});