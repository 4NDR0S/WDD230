
var alert = document.querySelector('.alert');
const closealert = document.querySelector('.close-alert');
const text = document.querySelector('#alert_text');
const uvi = document.querySelector('#alert_uvi');

closealert.addEventListener("click", () => {
    alert.style.display = 'none';
});


var API_key = '1207561af4bd33f3b574041404ab197e';
// 20.426935893227235, -86.92197531426388  = Cozumel lat&ton
var lat = '20.42';
var lon = '-86.92';

const alertURL = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${API_key}`;

async function apiAlert() {
    try {
        const response = await fetch(alertURL);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);  //para poder ver el archivo json en la consola
            // console.log(data.current.uvi);
            displayAlert(data, text);
            displayAlterUvi(data, uvi);

        } else {
            throw Error(await response.text());
        }
    }

    catch (error) {
        console.log(error);
    }
}

apiAlert();

function displayAlert(data, text) {
    if (data.alerts == true) {
        text.innerHTML = `${data.alerts.description}`;
    } else {
        text.innerHTML = "Apparently there is no weather alert, enjoy your trip!";
    }
}

function displayAlterUvi(data, uvi) {

    if (data.current.uvi <= 2) {
        uvi.innerHTML = `UV Index: ${Math.trunc(data.current.uvi)} | Low: Wear sunglasses and/or a hat.`;
        uvi.style.color = '#BCFFAF';
    }

    else if (data.current.uvi > 2 && data.current.uvi < 6) {
        uvi.innerHTML = `UV Index: ${Math.trunc(data.current.uvi)} | Moderate: You should stay in the shade, during the mid-day hours, when the sun is strongest.`;
        uvi.style.color = '#F2FF00';
    }

    else if (data.current.uvi > 5 && data.current.uvi < 8) {
        uvi.innerHTML = `UV Index: ${Math.trunc(data.current.uvi)} | High: Use sunscreen, wear light-colored, long-sleeved clothing.`;
        uvi.style.color = '#FFB300';
    }

    else if (data.current.uvi > 7 && data.current.uvi < 11) {
        uvi.innerHTML = `UV Index: ${Math.trunc(data.current.uvi)} | Very high: Avoid going outside.`;
        uvi.style.color = '#F39B9B';
    }

    else if (data.current.uvi >= 11) {
        uvi.innerHTML = `UV Index: ${Math.trunc(data.current.uvi)} | Extreme: Avoid going outside.`;
        uvi.style.color = '#D4A7F5';
    }
}
