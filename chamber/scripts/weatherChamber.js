const weatherIcon = document.querySelector('#weather-icon');
const currentTemp = document.querySelector('#current-temp');
const captionDesc = document.querySelector('#captionDesc');
const Flike = document.querySelector('#Flike');
const humidity = document.querySelector('#humidity');
const windS = document.querySelector('#windSpeed');
const windChill = document.querySelector('#windchill');

// lima = -12.111889296905858, -76.99128417860081
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-12.19&lon=-76.99&appid=1207561af4bd33f3b574041404ab197e&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
            displayWindChill(data);
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
    currentTemp.innerHTML = `${Math.trunc(data.main.temp)}&deg;F`;
    humidity.innerHTML = `${data.main.humidity}%`;
    Flike.innerHTML = `${Math.trunc(data.main.feels_like)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/03n.png`;

    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    captionDesc.textContent = `${CapitalizeFistLetter(desc)} `;
}

// para capitalizar la primera letra de una palabra
function CapitalizeFistLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

//cree una funcion para calcular el windchill
function displayWindChill(data) {
    var temp = Math.trunc(data.main.temp);
    var windspeed = data.wind.speed;
    windS.innerHTML = `${data.wind.speed}`;

    var windchill = 0
    if (temp > 50 || windspeed < 3) {
        windchill = "N/A"
    } else {
        windchill = (35.74 + (0.6215 * temp)) - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temp * Math.pow(windspeed, 0.16));

        windchill = Math.round(windchill);
    }

    windChill.innerHTML = windchill;
}