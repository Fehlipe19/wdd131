var icon = document.querySelector('#icon');
var tmp = document.createElement('span');
tmp.innerHTML = '&#9925;';
icon.setAttribute('data-icon', tmp.innerText);

function calculateWindChill(temperature, windSpeed) {
    return Math.round((13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)) * 10) / 10;
}

var windSpeed = 25; //km/h
var temperature = 5; //Celsius
var windChill = document.querySelector('#windchill');

if (temperature <=10 && windSpeed > 4.8) {
    windChill.innerHTML = calculateWindChill(temperature, windSpeed) + ' &deg;C';
} else {
    windChill.innerHTML = 'N/A';
}