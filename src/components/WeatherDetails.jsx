import React from "react";
import "../assets/styles/SideDetails.scss";
export default function WeatherDetails({ data }) {
  return (
    <div className="weather">
      <h4>EN TU UBICACIÓN</h4>
      <div className="weather__item">
        <h3 className="weather__item-humidity">HUMEDAD</h3>
        <p className="weather__item-value">
          {data.humidity}
          <strong>g.kg-1</strong>
        </p>
      </div>
      <div className="weather__item">
        <h3 className="weather__item-humidity">SENSACIÓN TÉRMICA</h3>
        <p className="weather__item-value">
          {data.feels_like} <strong>°</strong>
        </p>
      </div>
      <div className="weather__item">
        <h3 className="weather__item-humidity">PRESIÓN</h3>
        <p className="weather__item-value">
          {data.pressure} <strong>mm</strong>
        </p>
      </div>
    </div>
  );
}
