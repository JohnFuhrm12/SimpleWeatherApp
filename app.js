const key = 'e7332932ae9a425fa5101458230708';

async function getData(location) {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&aqi=no&days=3`);
    const data = await response.json();
    console.log(data);

    const locationParsed = `${data.location.name}, ${data.location.country}`;
    const weatherStatusParsed = data.current.condition.text;
    const temperatureParsed = `${data.current.temp_c}°C`;
    setData(locationParsed, weatherStatusParsed, temperatureParsed);
};

function setData(locationParsed, weatherStatusParsed, temperatureParsed) {
    const locationText = document.getElementById('locationName');
    locationText.innerText = locationParsed;

    const weatherStatusText = document.getElementById('weatherStatus');
    weatherStatusText.innerText = weatherStatusParsed;

    const temperatureText = document.getElementById('temperature');
    temperatureText.innerText = temperatureParsed;
};

window.onload = () => {
    getData('New York');
    const input = document.getElementById('locationInput');

    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            getData(input.value);
            input.value = '';
          };
    });
};