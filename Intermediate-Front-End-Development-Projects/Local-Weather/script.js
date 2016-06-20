  $(document).ready(function() {

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {

          var latitude = position.coords.latitude;
          var longitude = position.coords.longitude;

          var url = "http://api.openweathermap.org/data/2.5/weather?lat="+latitude
          +"&lon="+longitude+"&units=metric&appid=20896c45cf7d770952984955da36dc3b";

          $.getJSON(url, function(data) {
            var json = JSON.stringify(data);

            var weatherData = JSON.parse(json);
            var tempCelsius = Math.floor(weatherData.main.temp);
            var tempFahrenheit = Math.ceil(tempCelsius * 1.8 + 32);

            var weatherDescription = weatherData.weather[0].description;
            weatherDescription =  weatherDescription.replace(/\w\S*/g, function(txt){
              return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });


            var weatherIcon = weatherData.weather[0].icon;
            var weatherIconLink = "http://openweathermap.org/img/w/"+weatherIcon+".png"

            var country = weatherData.sys.country;
            var city = weatherData.name;

            $("#city-country").html(city+","+country);
            $("#temperature").html(tempCelsius + "°C");
            $("#weather-icon").html("<img src = '" + weatherIconLink + "'>");
            $("#weather-description").html(weatherDescription);

          });
        });
}
else {
  $(".message").html("The browser does not support geolocation");
}
});
