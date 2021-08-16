const weatherKey = '1976d34e0044125d8389060ac548f992'; 
const degrees = '\xB0F';
const speed = 'MPH';
const percent = '%';

const getData = function(currentCity) {
    console.log(currentCity);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&units=imperial&appid=${weatherKey}`)
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(responseJSON => {
            console.log(responseJSON);
            //grab lat and lon for city
            const lat = responseJSON.coord.lat;
            const lon = responseJSON.coord.lon;
            const nameCity = responseJSON.name;
            console.log(lon);
            console.log(lat);
            console.log(nameCity);
            

            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${weatherKey}`)
                .then(response => {
                    return response.json();
                })
                .then(responseJSON => {
                
                    //get current temp, wind speed, humidity, uv index
                    const currentTemp = responseJSON.current.temp;
                    const currentWindSpeed = responseJSON.current.wind_speed;
                    const currentHumidity= responseJSON.current.humidity;
                    const uvIndex = responseJSON.current.uvi;

                        document.getElementById("city").innerHTML = `${nameCity}`
                        document.getElementById("currentTemp").innerHTML = "Temp: " + `${currentTemp} ${degrees}`;
                        document.getElementById("currentHumidity").innerHTML = "Wind: " + `${currentWindSpeed} ${speed}`;
                        document.getElementById("currentWindSpeed").innerHTML = "Humidity: " + `${currentHumidity} ${percent}`;
                        document.getElementById("uvIndex").innerHTML = "UV Index: " + `${uvIndex}`;

                })
                fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${currentCity}&units=imperial&appid=${weatherKey}`)
                .then(response => {
                    return response.json();
                })
                .then(responseJSON => {
                    console.log(responseJSON);
                    
                        for (let i = 1; i <= 5; i++ ) {
                            const Temp = responseJSON.list[i].main.temp;
                            const WindSpeed = responseJSON.list[i].wind.speed;
                            const Humidity = responseJSON.list[i].main.humidity;
                           
                            const card = document.createElement("div");
                            $("card").append(Temp);
                        }

                })
        })
}
function citysearch() {
    let currentCity = document.getElementById('cityInput').value;
    getData(currentCity)
}