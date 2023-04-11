import React from "react";
import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "./config";
import Fail from "./components/Fail";
import WeatherNow from "./components/WeatherNow";
import Search from "./components/Search";
import WeatherOnTheWeek from "./components/WeatherOnTheWeek";
import GetIcon from "./GetIcon";

// чому у useEffect стан міняється але відпрацьовує з старим станом, залежність вказана
export default function Weather() {
  const [weatherData, setWeatherDate] = useState([]);
  const [resultSearch, setResultSearch] = useState("");
  const [sortForecast, setSortForecast] = useState({});
  const [searching, setSearching] = useState(false);
  const [hour, sethour] = useState(new Date().getHours());
  const [myIcon, setMyIcon] = useState();

  useEffect(() => {
    fetch(`${API_URL}?q=${resultSearch}&appid=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => setWeatherDate(data))
      .catch((err) => console.error(err));
  }, [resultSearch]);

  useEffect(() => {
    const nonUqDateAndTemp = weatherData.list?.map((forecast) => {
      return {
        city: weatherData.city.name,
        country: weatherData.city.country,
        date: forecast.dt_txt.split(" ")[0].split("-")[2],
        max_temp: parseInt(forecast.main.temp_max - 273.15),
        min_temp: parseInt(forecast.main.temp_min - 273.15),
        description: forecast.weather[0].description,
        main: forecast.weather[0].main,
        icon: <GetIcon weatherData={forecast} date={forecast.dt_txt.split(" ")[0].split("-")[2]} />,
        dayNow: getDay(
          forecast.dt_txt.split(" ")[0].split("-")[0],
          forecast.dt_txt.split(" ")[0].split("-")[1],
          forecast.dt_txt.split(" ")[0].split("-")[2]
        ),
        humidity: forecast.main.humidity,
        wind: forecast.wind.speed,
      };
    });

    let uqDateAndTemp = [];
    for (let i = 0; i < nonUqDateAndTemp?.length; i++) {
      if (uqDateAndTemp.length === 0) {
        uqDateAndTemp.push({
          date: nonUqDateAndTemp[i].date,
          min_temp: nonUqDateAndTemp[i].min_temp,
          max_temp: nonUqDateAndTemp[i].max_temp,
          city: nonUqDateAndTemp[i].city,
          country: nonUqDateAndTemp[i].country,
          description: nonUqDateAndTemp[i].description,
          main: nonUqDateAndTemp[i].main,
          icon: nonUqDateAndTemp[i].icon,
          dayNow: nonUqDateAndTemp[i].dayNow,
          humidity: nonUqDateAndTemp[i].humidity,
          wind: nonUqDateAndTemp[i].wind,
        });
        continue;
      }
      for (let k = 0; k < uqDateAndTemp.length; k++) {
        if (uqDateAndTemp[k].date === nonUqDateAndTemp[i].date) {
          if (nonUqDateAndTemp[i].min_temp < uqDateAndTemp[k].min_temp) {
            uqDateAndTemp[k].min_temp = nonUqDateAndTemp[i].min_temp;
          }
          if (nonUqDateAndTemp[i].max_temp > uqDateAndTemp[k].max_temp) {
            uqDateAndTemp[k].max_temp = nonUqDateAndTemp[i].max_temp;
          }
        } else if (k === uqDateAndTemp.length - 1) {
          uqDateAndTemp.push({
            date: nonUqDateAndTemp[i].date,
            min_temp: nonUqDateAndTemp[i].min_temp,
            max_temp: nonUqDateAndTemp[i].max_temp,
            city: nonUqDateAndTemp[i].city,
            country: nonUqDateAndTemp[i].country,
            description: nonUqDateAndTemp[i].description,
            main: nonUqDateAndTemp[i].main,
            icon: nonUqDateAndTemp[i].icon,
            dayNow: nonUqDateAndTemp[i].dayNow,
            humidity: nonUqDateAndTemp[i].humidity,
            wind: nonUqDateAndTemp[i].wind,
          });
        }
      }
    }
    setSortForecast(uqDateAndTemp);
  }, [weatherData]);


  const getDay = (year, month = 10, day) => {
    if (month.split("")[0] === "0") {
      month = Number(month.split("")[1]) - 1;
    }
    let date = new Date(year, month, day);

    switch (date.getDay()) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";

      default:
        return "";
    }
  };
  
  const inputFocus = (item) => {
    item.current.focus();
  };

  const HendelSearching = () => {
    setSearching(true);
  };

  return (
    <div
      className={
        hour >= 5 && hour <= 22 ? "container" : "container activeNight"
      }
    >
      <Search
        setCity={setResultSearch}
        status={HendelSearching}
        inputFocus={inputFocus}
      />
      {sortForecast && sortForecast.length > 0 ? (
        <WeatherNow forecast={sortForecast[0]} />
      ) : resultSearch ? (
        <Fail />
      ) : null}
      {sortForecast && sortForecast.length > 0 ? (
        <WeatherOnTheWeek data={sortForecast} />
      ) : null}
    </div>
  );
}
