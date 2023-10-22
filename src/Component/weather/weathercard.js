import React, { useEffect, useState } from "react";
import "./style.css";

const Weathercard = ({ tempInfo }) => {
  const [weatherState, setWeatherState] = useState("");
  const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,
  } = tempInfo;

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Cloud":
          setWeatherState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatherState("far fa-snowflake");
          break;
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;
        default:
          setWeatherState("fas fa-smog");
          break;
      }
    }
  });

  //   conerting seconds in to time
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <article className="visit">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}> emojiss</i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{weathermood}</div>
            <div className="place">
              {name},{country}
            </div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>
        {/* don't miss the parenthisis after ToLocalString */}
        {/* our 4 column section */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"fas fa-smog"}></i>
              </p>
              <p className="extra-info-leftside">{pressure}</p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"far fa-snowflake"}></i>
              </p>
              <p className="extra-info-leftside">{pressure}</p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"fas fa-rainbow"}></i>
              </p>
              <p className="extra-info-leftside">{speed}</p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"fas fa-sun"}>{timeStr}</i>
              </p>
              <p className="extra-info-leftside">{humidity}</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Weathercard;
