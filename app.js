const key = 'e7332932ae9a425fa5101458230708';

async function getData(location) {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&aqi=no&days=4`);
    const data = await response.json();
    console.log(data);

    const locationParsed = `${data.location.name}, ${data.location.country}`;
    const weatherStatusParsed = data.current.condition.text;
    const temperatureParsed = `${data.current.temp_c}°C`;

    const day1Name = data.forecast.forecastday[1].date;
    const day1NameParsed = new Date(day1Name).toLocaleString('en-us', {weekday:'long'});
    const day2Name = data.forecast.forecastday[2].date;
    const day2NameParsed = new Date(day2Name).toLocaleString('en-us', {weekday:'long'});
    const day3Name = data.forecast.forecastday[3].date;
    const day3NameParsed = new Date(day3Name).toLocaleString('en-us', {weekday:'long'});

    const day1StatusParsed = data.forecast.forecastday[1].day.condition.text;
    const day2StatusParsed = data.forecast.forecastday[2].day.condition.text;
    const day3StatusParsed = data.forecast.forecastday[3].day.condition.text;

    const day1TemperatureParsed = `${data.forecast.forecastday[1].day.maxtemp_c}°C`;
    const day2TemperatureParsed = `${data.forecast.forecastday[2].day.maxtemp_c}°C`;
    const day3TemperatureParsed = `${data.forecast.forecastday[3].day.maxtemp_c}°C`;

    const params = {
        locationParsed, 
        weatherStatusParsed, 
        temperatureParsed, 
        day1NameParsed, 
        day2NameParsed, 
        day3NameParsed, 
        day1StatusParsed, 
        day2StatusParsed, 
        day3StatusParsed, 
        day1TemperatureParsed, 
        day2TemperatureParsed, 
        day3TemperatureParsed
    };

    setData(params);
};

function setData(params) {
    const locationText = document.getElementById('locationName');
    locationText.innerText = params.locationParsed;
    const weatherStatusText = document.getElementById('weatherStatus');
    weatherStatusText.innerText = params.weatherStatusParsed;
    const temperatureText = document.getElementById('temperature');
    temperatureText.innerText = params.temperatureParsed;

    const day1Text = document.getElementById('day1Name');
    day1Text.innerText = params.day1NameParsed;
    const day2Text = document.getElementById('day2Name');
    day2Text.innerText = params.day2NameParsed;
    const day3Text = document.getElementById('day3Name');
    day3Text.innerText = params.day3NameParsed;

    const day1Status = document.getElementById('day1Status');
    day1Status.innerText = params.day1StatusParsed;
    const day2Status = document.getElementById('day2Status');
    day2Status.innerText = params.day2StatusParsed;
    const day3Status = document.getElementById('day3Status');
    day3Status.innerText = params.day3StatusParsed;

    const day1Temperature = document.getElementById('day1Temperature');
    day1Temperature.innerText = params.day1TemperatureParsed;
    const day2Temperature = document.getElementById('day2Temperature');
    day2Temperature.innerText = params.day2TemperatureParsed;
    const day3Temperature = document.getElementById('day3Temperature');
    day3Temperature.innerText = params.day3TemperatureParsed;
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