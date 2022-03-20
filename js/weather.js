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
        weatherEl.alt = data.weather[0].main;
        weatherEl.src = getWeatherIcon(data.weather[0].icon);
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
    const iconUrl = `http://openweathermap.org/img/wn/${weather}@2x.png`;
    
    return iconUrl;
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);