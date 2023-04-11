import React from "react";
import GetIcon from "../GetIcon";

function WeatherWeekItem({
  min_temp,
  max_temp,
  description,
  main,
  city,
  country,
  date,
  icon,
  dayNow,
}) {
  return (
    <div className="WeatherWeekItem">
      {dayNow}
      <div className="weatherWeekIcon">
        {icon}
        </div>
      <div className="WeekInfo">
        <div className="max">
          {max_temp}
          <span className="simvolWeek">°C</span>
        </div>
        <div className="min">
          {min_temp}
          <span className="simvolWeek">°C</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherWeekItem;
