import React from "react";
import "../assets/styles/SideDetails.scss";
export default function WeatherDetails() {
  return (
    <div className="weather">
      <div className="weather__item">
        <h3 className="weather__item-humidity">Humidity</h3>
        <p className="weather__item-value">
          19 <strong>mm</strong>
        </p>
      </div>
      <div className="weather__item">
        <h3 className="weather__item-humidity">Humidity</h3>
        <p className="weather__item-value">
          19 <strong>mm</strong>
        </p>
      </div>
      <div className="weather__item">
        <h3 className="weather__item-humidity">Humidity</h3>
        <p className="weather__item-value">
          19 <strong>mm</strong>
        </p>
      </div>
    </div>
  );
}
