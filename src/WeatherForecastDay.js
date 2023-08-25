import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature;
    if (props.unit === "celsius") {
      temperature = Math.round(props.data.temp.max);
    } else {
      temperature = Math.round((props.data.temp.max * 9) / 5 + 32);
    }
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature;
    if (props.unit === "celsius") {
      temperature = Math.round(props.data.temp.min);
    } else {
      temperature = Math.round((props.data.temp.min * 9) / 5 + 32);
    }
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon
        code={props.data.weather[0].icon}
        className="size-forecast"
      />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}
        </span>
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
