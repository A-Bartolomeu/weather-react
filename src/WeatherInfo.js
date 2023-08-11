import React from "react";
import Date from "./Date";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div>
        <Date date={props.data.date} />
      </div>
    </div>
  );
}
