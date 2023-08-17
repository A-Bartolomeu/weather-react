import React from "react";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "./img/clear-day.svg",
    "01n": "./img/clear-night.svg",
    "02d": "./img/clear-night.svg",
    "02n": "./img/clear-night.svg",
    "03d": "./img/clear-night.svg",
    "03n": "./img/clear-night.svg",
    "04d": "./img/clear-night.svg",
    "04n": "./img/clear-night.svg",
    "09d": "./img/clear-night.svg",
    "09n": "./img/clear-night.svg",
    "10d": "./img/clear-night.svg",
    "10n": "./img/clear-night.svg",
    "11d": "./img/clear-night.svg",
    "11n": "./img/clear-night.svg",
    "13d": "./img/clear-night.svg",
    "13n": "./img/clear-night.svg",
    "50d": "./img/clear-night.svg",
    "50n": "./img/clear-night.svg",
  };

  return <img src={codeMapping[props.code]} alt="clear-day" />;
}
