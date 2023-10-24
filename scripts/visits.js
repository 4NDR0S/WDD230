const displayVisits = document.querySelector('.visits');  //variable en el html

// obtiene el valor almacenado (la clave es 'key=numberVisits-ls' para el localStore)
// en caso faltase la clave ( || 0 ) asigna el valor de 0 a la variable numberVisits
let numberVisits = Number(window.localStorage.getItem('numberVisits-ls')) || 0;


if (numberVisits != 0) {
    displayVisits.textContent = numberVisits;
}
else {
    displayVisits.textContent = 'Welcome! 🫡';
}

numberVisits++;  //contador para el numero de visitas

// guardar el nuevo numero de visitas en el localStore
// key=numberVisits-ls
localStorage.setItem('numberVisits-ls', numberVisits);