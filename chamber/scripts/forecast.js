const iconD1 = document.querySelector('#day1-icon');
const iconD2 = document.querySelector('#day2-icon');
const iconD3 = document.querySelector('#day3-icon');
const iconD4 = document.querySelector('#day4-icon');

const temp1 = document.querySelector('#day1-temp');
const temp2 = document.querySelector('#day2-temp');
const temp3 = document.querySelector('#day3-temp');
const temp4 = document.querySelector('#day4-temp');


//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
// https://api.openweathermap.org/data/2.5/forecast?lat=57&lon=-2.15&appid={API key}&units=imperial
const url_fore = 'https://api.openweathermap.org/data/2.5/forecast?lat=-12.19&lon=-76.99&appid=1207561af4bd33f3b574041404ab197e&units=imperial';

async function apiFetch_forecast() {
    try {
        const response = await fetch(url_fore);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    }

    catch (error) {
        console.log(error);
    }
}

apiFetch_forecast();

function displayForecast(data) {

    // para los iconos(img)
    var iconCode = data.list[1].weather[0].icon;
    const iconsrc = `https://openweathermap.org/img/w/${iconCode}.png`;

    var iconCode2 = data.list[2].weather[0].icon;
    const iconsrc2 = `https://openweathermap.org/img/w/${iconCode2}.png`;

    var iconCode3 = data.list[3].weather[0].icon;
    const iconsrc3 = `https://openweathermap.org/img/w/${iconCode3}.png`;

    var iconCode4 = data.list[4].weather[0].icon;
    const iconsrc4 = `https://openweathermap.org/img/w/${iconCode4}.png`;

    iconD1.setAttribute('src', iconsrc);
    iconD2.setAttribute('src', iconsrc2);
    iconD3.setAttribute('src', iconsrc3);
    iconD4.setAttribute('src', iconsrc4);

    // para la temperatura
    temp1.innerHTML = `${Math.trunc(data.list[1].main.temp)}&deg;F`;
    temp2.innerHTML = `${Math.trunc(data.list[2].main.temp)}&deg;F`;
    temp3.innerHTML = `${Math.trunc(data.list[3].main.temp)}&deg;F`;
    temp4.innerHTML = `${Math.trunc(data.list[4].main.temp)}&deg;F`;
}