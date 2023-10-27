const displayVisits = document.querySelector('#visits');  //variable en el html
const mesage = document.querySelector('#mensageVisits');
// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const mstoDays = 84600000;
const theDateToday = new Date();  //dia de hoy

// obtiene el valor almacenado (la clave es 'key=numberVisits-ls' para el localStore)
// en caso faltase la clave ( || 0 ) asigna el valor de 0 a la variable numberVisits
let numberVisits = Number(window.localStorage.getItem('numberVisits-ls')) || 0;

// hacer lo mismo creando una key, para almacenar el registro de ultimas visitas
let lastVisit = new Date(window.localStorage.getItem('lastVisit')) || theDateToday;

// calcular el tiempo entre visitas
let timeBetweenVisits = (theDateToday - lastVisit) / mstoDays;

numberVisits++;  //contador para el numero de visitas


if (numberVisits == 1) {
    mesage.textContent = "Welcome! Let us know if you have any questions.";
}
else {
    if (timeBetweenVisits < 1) {
        mesage.textContent = "Back so soon! Awesome!";
    }
    else {
        if (timeBetweenVisits < 2) {
            mesage.textContent = `You last visited ${timeBetweenVisits.toFixed(0)} day ago.`;
        }
        else {
            mesage.textContent = `You last visited ${timeBetweenVisits.toFixed(0)} days ago.`;
        }
    }
}

displayVisits.textContent = numberVisits;

// guardar el nuevo numero de visitas en el localStore
// key=numberVisits-ls  |   key=lastVisit
localStorage.setItem('numberVisits-ls', numberVisits);
localStorage.setItem('lastVisit', theDateToday);