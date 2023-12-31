import React from "react";
import WeatherIcon from "./WeatherIcon";
import { BiWind } from "react-icons/bi";
import { FaThermometerHalf } from "react-icons/fa";
import { IoUmbrella } from "react-icons/io5";
import WeatherTemperature from "./WeatherTemperature";
import Date from "./Date";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div>
        <Date date={props.data.date} />
        <h2 className="Description">{props.data.description}</h2>
        <div>
          <WeatherIcon code={props.data.icon} />
        </div>
      </div>

      <div className="container">
        <ul>
          <li className="item">
            <FaThermometerHalf className="Thermometer" />
            <WeatherTemperature
              celsius={props.data.temperature}
              setUnit={props.setUnit}
              unit={props.unit}
            />
          </li>
          <li className="item">
            <IoUmbrella className="Umbrella" /> {props.data.humidity}%
          </li>
          <li className="item">
            <BiWind className="Wind" /> {props.data.wind} km/h
          </li>
        </ul>
      </div>
    </div>
  );
}
