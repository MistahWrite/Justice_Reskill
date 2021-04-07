function getWeather() {
    let place = document.getElementById("place").value;
    let api_key = "af5536e13e0c0958068a86dcbc789a7d";
    let weather_api = "http://api.openweathermap.org/data/2.5/weather?q=" + place + "&appid=" + api_key;
    axios.get(weather_api)
    .then(function (response){
        console.log(response.data);
        let weather = document.getElementById("weather");
        let temperature = response.data.main.temp;
        temperature = (temperature - 273.15) * 9 / 5 + 32;
    
        let clouds = response.data.clouds.all;

        weather.innerHTML = "Temp: " + temperature + "F<br>";
        weather.innerHTML += "Cloud: " + clouds + "%";

    })
    .catch(function(err){
        console.log(err);
    })
    .then(function(){
        console.log(weather_api);
    });
}