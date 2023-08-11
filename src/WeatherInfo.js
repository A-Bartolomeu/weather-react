import React from "react";
import Date from "./Date";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div>
        <Date date={props.data.date} />
      </div>
    </div>
  );
}
