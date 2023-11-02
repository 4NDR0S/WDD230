var temp = 70;
var windS = 10;

// var windchill = (35.74 + (0.6215 * temp)) - (35.75 * Math.pow(windS, 0.16)) + (0.4275 * temp * Math.pow(windS, 0.16));

// var windchill = Math.round(windchill);
var windchill = 0
if (temp > 50 || windS < 3) {
    // document.getElementById("windchill").innerHTML = "N/A";
    windchill = "N/A"
} else {
    windchill = (35.74 + (0.6215 * temp)) - (35.75 * Math.pow(windS, 0.16)) + (0.4275 * temp * Math.pow(windS, 0.16));

    windchill = Math.round(windchill);
}

document.getElementById("windchill").innerHTML = windchill;

// temp and windspeed values in html
document.getElementById("temp").innerHTML = temp;
document.getElementById("windSpeed").innerHTML = windS;
