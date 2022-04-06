var API_TEMPLATE = {
    getRawHTML: function (data) {

        var IMG_MAP = {
            "Clouds": "/images/cloudy.png",
            "sunny": "/images/sunny.png",
            "Haze": "/images/fogg.png",
            "fog": "/images/fogg.png",
            "Smoke": "/images/smoke.png",
            "Rain": "/images/rain.jpg",
            "Drizzle": "/images/drizzle.jpg",
            "Mist": "/images/Mist.jpg",
            "Clear": "/images/clear.jpg",
            "Dust": "/images/dust.jpg",
        }

        var temp = data.main.temp - 273.15;  //Conversion from Kelvin to Celsius

        var weather = data.weather[0].main;

        var visibility = data.visibility / 1000; //Conversion of visibility from m to km

        var feels_like = data.main.feels_like - 273.15;  

        var date = new Date((data.dt)*1000).toLocaleDateString("en-IN");

        var html = `
        <div class="displaycard">
            <div class="citydetails">
                <div class="tri">
                    <img src="${IMG_MAP[weather]}" class="bgImage">
                </div>
                <div class="weather-info">
                    <div class="nameCloud">
                        <div class="cityName">
                            <h2>${data.name}</h2>
                        </div>
                        <div class="cloudsFeels">
                            <span>${weather}</span>
                            <span>FEELS LIKE ${feels_like.toFixed()}°</span>
                        </div>
                    </div>
                    <div class="weatherDetails">
                        <p>Temp<span>${temp.toFixed()}°C</span></p>
                        <p>Humidity<span>${data.main.humidity}%</span></p>
                        <p>Visibility<span>${visibility} Km</span></p>
                        <p>Wind<span>${data.wind.speed} km/h</span></p>
                    </div>
                </div>
        </div>
    </div>`;

        return html;
    },
    getHTML: function (ele) {

        var _this = API_TEMPLATE;

        return _this.getRawHTML(ele);
    }
}


