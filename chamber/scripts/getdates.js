// Obtner el elemento del año actual y establece su valor
var year = document.getElementById("year");
year.textContent = new Date().getFullYear();

// Obtener el elemento de última modificación y establece su valor
var lastModified = document.getElementById("lastModified");
lastModified.textContent = document.lastModified;


//  obetener el nombre del dia para los pronosticos de clima
const dias = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
];
const numeroDia = new Date().getDay();
const nombreDia = dias[numeroDia];

const Today = document.querySelector('#today');
Today.innerHTML = dias[numeroDia];

const Day1 = document.querySelector('#day1');
Day1.innerHTML = dias[numeroDia + 1];
const Day2 = document.querySelector('#day2');
Day2.innerHTML = dias[numeroDia + 2];
const Day3 = document.querySelector('#day3');
Day3.innerHTML = dias[numeroDia + 3];
const Day4 = document.querySelector('#day4');
Day4.innerHTML = dias[numeroDia + 4];


