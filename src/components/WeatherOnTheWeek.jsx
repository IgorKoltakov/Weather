import React from "react";
import WeatherWeekItem from "./WeatherWeekItem";

function WeatherOnTheWeek({ data }) {
  return (
    <div className="WeatherWeek">
      {data.length ? (
        data.map((item) => <WeatherWeekItem key={item.date} {...item} />)
      ) : (
        <h5>Nothing found</h5>
      )}
    </div>
  );
}

export default WeatherOnTheWeek;
