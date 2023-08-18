import React from "react";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "/img/clear-day.svg",
    "01n": "/img/clear-night.svg",
    "02d": "/img/partly-cloudy-day.svg",
    "02n": "/img/partly-cloudy-night.svg",
    "03d": "/img/overcast-day.svg",
    "03n": "/img/overcast-night.svg",
    "04d": "/img/overcast.svg",
    "04n": "/img/overcast.svg",
    "09d": "/img/partly-cloudy-day-drizzle.svg",
    "09n": "/img/partly-cloudy-night-drizzle.svg",
    "10d": "/img/rain.svg",
    "10n": "/img/rain.svg",
    "11d": "/img/thunderstorms-day.svg",
    "11n": "/img/thunderstorms-night.svg",
    "13d": "/img/partly-cloudy-day-snow.svg",
    "13n": "/img/partly-cloudy-night-snow.svg",
    "50d": "/img/fog-day.svg",
    "50n": "/img/fog-night.svg",
  };

  return <img src={codeMapping[props.code]} alt="clear-day" />;
}
