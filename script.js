const weatherKey = '1976d34e0044125d8389060ac548f992'; 

const getData = function(currentCity) {
    console.log(currentCity);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&units=imperial&appid=${weatherKey}`)
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(responseJSON => {
            const lat = responseJSON.coord.lat;
            const lon = responseJSON.coord.lon;
            console.log(lon);
            console.log(lat);

            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${weatherKey}`)
                .then(response => {
                    console.log(response);
                    return response.json();
                })
                .then(responseJSON => {
                    console.log(responseJSON);
                })


        })
}
function citysearch() {
    let currentCity = document.getElementById('cityInput').value;
    getData(currentCity)
}