const d = new Date();
const todayDayNumber = d.getDay();

const myweekday = new Array(7);
    myweekday[0] = "Sunday";
    myweekday[1] = "Monday";
    myweekday[2] = "Tuesday";
    myweekday[3] = "Wednesday";
    myweekday[4] = "Thursday";
    myweekday[5] = "Friday";
    myweekday[6] = "Saturday";

    const apiForecastURLPreston = "//api.openweathermap.org/data/2.5/forecast?APPID=22d56379f0c24d5ffba468dd90c28101&id=5604473&units=Imperial";
    const apiForecastURLSoda = "//api.openweathermap.org/data/2.5/forecast?APPID=22d56379f0c24d5ffba468dd90c28101&id=5607916&units=Imperial";
    const apiForecastURLFish = "//api.openweathermap.org/data/2.5/forecast?APPID=22d56379f0c24d5ffba468dd90c28101&id=5585000&units=Imperial";
getAndShowWeatherForCity(apiForecastURLPreston, 'forecast')
getAndShowWeatherForCity = Function(cityUrl, divId)
{    
    fetch(cityUrl)
        .then((response) => response.json())
        .then((weatherInfo) => {
        console.log(weatherInfo);

        //document.getElementById('townName').textContent=weatherInfo.city.name;

        let mylist = weatherInfo.list;
        
        let forecastDayNumber=todayDayNumber;
        for (i=0;i<mylist.length;i++){
            let time = mylist[i].dt_txt;
            if (time.includes("18:00:00")){
                forecastDayNumber += 1;
                if (forecastDayNumber===7){
                    forecastDayNumber=0;
                }
                let theTemp = document.createElement("p");
                theTemp.textContent = Math.round( weatherInfo.list[i].main.temp) + "°";

                let iconcode = weatherInfo.list[i].weather[0].icon;
                let iconPath = "//openweathermap.org/img/wn/" + iconcode +"@2x.png";
                let theIcon = document.createElement("img");
                theIcon.src=iconPath;
                let theDayName = document.createElement("h4")
                theDayName.textContent = myweekday[forecastDayNumber]
                let theDay = document.createElement("div");
                theDay.appendChild(theDayName);
                theDay.appendChild(theTemp);
                theDay.appendChild(theIcon);

                document.getElementById(divId).appendChild(theDay);


            }//end if

        }//end for


    });
}