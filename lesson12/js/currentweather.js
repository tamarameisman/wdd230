//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/weather?APPID=22d56379f0c24d5ffba468dd90c28101&id=4726206&units=Imperial";


//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    
    document.getElementById('condition').innerHTML=weatherInfo.weather[0].main;
    document.getElementById('temp').innerHTML=weatherInfo.main.temp;
    document.getElementById('windSpeed').innerHTML=weatherInfo.wind.speed;
    document.getElementById('humidity').innerHTML=weatherInfo.main.humidity;
    const iconcode = weatherInfo.weather[0].icon;
    const icon_path ="//openweathermap.org/img/wn/" + iconcode + "@2x.png";
    //document.getElementById('weather_icon').src=icon_path;
 }); //end of "then" fat arrow function
 //const apiURL = "//api.openweathermap.org/data/2.5/weather?APPID=22d56379f0c24d5ffba468dd90c28101&id=5604473&units=Imperial";

 



