const iconD1 = document.querySelector('#day1-icon');
const iconD2 = document.querySelector('#day2-icon');
const iconD3 = document.querySelector('#day3-icon');
const iconD4 = document.querySelector('#day4-icon');

const temp1 = document.querySelector('#day1-temp');
const temp2 = document.querySelector('#day2-temp');
const temp3 = document.querySelector('#day3-temp');
const temp4 = document.querySelector('#day4-temp');

// 20.426935893227235, -86.92197531426388  = Cozumel lat&ton

//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
// https://api.openweathermap.org/data/2.5/forecast?lat=57&lon=-2.15&appid={API key}&units=imperial
const url_fore = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.42&lon=-86.92&appid=1207561af4bd33f3b574041404ab197e&units=imperial';

async function apiFetch_forecast() {
    try {
        const response = await fetch(url_fore);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);  //para poder ver el archivo json en la consola
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
    const desc = data.list[1].weather[0].description;

    var iconCode2 = data.list[2].weather[0].icon;
    const iconsrc2 = `https://openweathermap.org/img/w/${iconCode2}.png`;
    const desc2 = data.list[2].weather[0].description;

    var iconCode3 = data.list[3].weather[0].icon;
    const iconsrc3 = `https://openweathermap.org/img/w/${iconCode3}.png`;
    const desc3 = data.list[3].weather[0].description;

    var iconCode4 = data.list[4].weather[0].icon;
    const iconsrc4 = `https://openweathermap.org/img/w/${iconCode4}.png`;
    const desc4 = data.list[4].weather[0].description;

    //codigo inicial:
    // iconD1.setAttribute('src', iconsrc);
    // iconD2.setAttribute('src', iconsrc2);
    // iconD3.setAttribute('src', iconsrc3);
    // iconD4.setAttribute('src', iconsrc4);
    //codigo inicial _

    //creacion de elementos para que no se considere como error en el html
    //icon 1
    let icon1 = document.createElement('img');
    icon1.setAttribute('src', iconsrc);
    icon1.setAttribute('alt', desc);
    iconD1.appendChild(icon1);

    //icon 2
    let icon2 = document.createElement('img');
    icon2.setAttribute('src', iconsrc2);
    icon2.setAttribute('alt', desc2);
    iconD2.appendChild(icon2);

    //icon 3
    let icon3 = document.createElement('img');
    icon3.setAttribute('src', iconsrc3);
    icon3.setAttribute('alt', desc3);
    iconD3.appendChild(icon3);

    //icon 4
    let icon4 = document.createElement('img');
    icon4.setAttribute('src', iconsrc4);
    icon4.setAttribute('alt', desc4);
    iconD4.appendChild(icon4);

    // para la temperatura
    temp1.innerHTML = `${Math.trunc(data.list[1].main.temp)}&deg;F`;
    temp2.innerHTML = `${Math.trunc(data.list[2].main.temp)}&deg;F`;
    temp3.innerHTML = `${Math.trunc(data.list[3].main.temp)}&deg;F`;
    temp4.innerHTML = `${Math.trunc(data.list[4].main.temp)}&deg;F`;
}