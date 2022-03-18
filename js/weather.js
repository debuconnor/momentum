function getWeatherData(url, lat, lng){
    fetch(url)
    .then(res => res.json())
    .then((data) => {
        const locationEl = document.getElementById("userLocation");
        const weatherEl = document.getElementById("weather");
        locationEl.innerHTML = `<iframe
                                    width="550"
                                    height="170"
                                    frameborder="0" style="border:0"
                                    src="https://www.google.com/maps/embed/v1/place?key=${config.GOOGLE_MAPS_API_KEY}&q=${lat},${lng}&zoom=7" allowfullscreen>
                                </iframe>`;
        const weatherText = String(data.weather[0].main).toLowerCase().replace(/ +/g, "");
        weatherEl.src = getWeatherIcon(weatherText);
    });
}

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${config.WEATHER_API_KEY}&units=metric`;
    getWeatherData(url, lat, lng);
}

function onGeoError(){
    console.log("Can't find the location.");
}

function getWeatherIcon(weather){
    const iconMap = {
        "clearsky": `01d@2x.png`,
        "fewclouds": `02d@2x.png`,
        "scatteredclouds": `03d@2x.png`,
        "brokenclouds": `04d@2x.png`,
        "showerrain": `09d@2x.png`,
        "rain": `10d@2x.png`,
        "thunderstorm": `11d@2x.png`,
        "snow": `13d@2x.png`,
        "mist": `50d@2x.png`,
    }
    const iconUrl = `http://openweathermap.org/img/wn/${iconMap[weather]}`;
    
    return iconUrl;
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);