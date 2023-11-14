const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const humidity = document.querySelector('#humidity');
const Flikes = document.querySelector('#Flikes');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=1207561af4bd33f3b574041404ab197e&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data) //para testear
            displayResults(data);

        } else {
            throw Error(await response.text());
        }
    }

    catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${Math.trunc(data.main.temp)}&deg;F`;  //usamos Math.trunc(x) x es el numero y esto redondea el numero a entero
    humidity.innerHTML = `${data.main.humidity} %`;
    Flikes.innerHTML = `${Math.trunc(data.main.feels_like)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/04n@2x.png`;  //el usar /wn/{zzz}@2x modifica su tamaño
    // const iconsrc = `https://openweathermap.org/img/w/04n.png`;

    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    // weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${CapitalizeFistLetter(desc)} `;
}

// para capitalizar la primera letra de una palabra
function CapitalizeFistLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}