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

        <h2>{props.data.description}</h2>
        <div>
          <WeatherIcon code={props.data.icon} />
        </div>
      </div>

      <div className="container">
        <ul>
          <li className="item">
            <FaThermometerHalf />
            <WeatherTemperature celsius={props.data.temperature} />
          </li>
          <li className="item">
            <IoUmbrella /> {props.data.humidity}%
          </li>
          <li className="item">
            <BiWind /> {props.data.wind} km/h
          </li>
        </ul>
      </div>
    </div>
  );
}
