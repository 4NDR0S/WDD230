const weatherIcon = document.querySelector('#weather-icon');
const currentTemp = document.querySelector('#current-temp');
const captionDesc = document.querySelector('#captionDesc');
const Flike = document.querySelector('#Flike');
const humidity = document.querySelector('#humidity');
const maxTemp = document.querySelector('#maxTemp');
const windS = document.querySelector('#windSpeed');


// 20.426935893227235, -86.92197531426388  = Cozumel lat&ton
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.42&lon=-86.92&appid=1207561af4bd33f3b574041404ab197e&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);  //para poder ver el archivo json en la consola
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
    currentTemp.innerHTML = `${Math.trunc(data.main.temp)}&deg;F`;
    humidity.innerHTML = `${data.main.humidity}%`;
    Flike.innerHTML = `${Math.trunc(data.main.feels_like)}&deg;F`;
    maxTemp.innerHTML = `${Math.trunc(data.main.temp_max)}&deg;F`;
    windS.innerHTML = `${data.wind.speed}`;

    var iconCode = data.weather[0].icon;
    const iconsrc = `https://openweathermap.org/img/w/${iconCode}.png`;

    let desc = data.weather[0].description;

    let icon = document.createElement('img');
    icon.setAttribute('src', iconsrc);
    icon.setAttribute('alt', desc);
    weatherIcon.appendChild(icon);

    captionDesc.textContent = `${CapitalizeFistLetter(desc)} `;
}

// para capitalizar la primera letra de una palabra
function CapitalizeFistLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
