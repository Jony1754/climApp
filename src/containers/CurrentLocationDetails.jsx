import "../assets/styles/CurrentLocationDetails.scss";
import React from "react";

const CurrentLocationDetails = ({ data, loading }) => {
  if (!loading) {
    let date = new Date();
    let icon = data.weather[0].icon;
    const URL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    return (
      <div className="current__container">
        <h3>the.weather</h3>
        <div className="current">
          <h1 className="current__temperature">{data.main.temp}°</h1>
          <div className="current__details">
            <h2 className="current__city">{data.name}</h2>
            <p className="current__date">
              {date.toDateString()}, {date.getHours()}:{date.getMinutes()}
            </p>
          </div>
          <div className="current__details">
            <img src={URL} alt="time" className="current__icon" />
            <p className="current__description">{data.weather[0].main}</p>
          </div>
        </div>
      </div>
    );
  }

  return <div>LOADING</div>;
};

export default CurrentLocationDetails;
