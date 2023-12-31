import React from "react";
import "./Date.css";

export default function Date(props) {
  let months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  let month = months[props.date.getMonth()];

  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let weekDay = weekDays[props.date.getDay()];

  let day = props.date.getDate();

  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div className="Date">
      <header className="Date-header">
        <p>{month}</p>
        <h1>{day}</h1>
      </header>
      <div>
        <p className="Hour">
          {hours}:{minutes}
        </p>
        <h2>{weekDay}</h2>
      </div>
    </div>
  );
}
