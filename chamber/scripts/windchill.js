var temp = 73;
var wSpeed = 10;
var windchill = (35.74 + (0.6215 * temp)) - (35.75 * Math.pow(wSpeed, 0.16)) + (0.4275 * temp * Math.pow(wSpeed, 0.16));

var windchill = Math.round(windchill);

document.getElementById("windchill").innerHTML = windchill;

// temp and windspeed values in html
document.getElementById("temp").innerHTML = temp;
document.getElementById("windSpeed").innerHTML = wSpeed;