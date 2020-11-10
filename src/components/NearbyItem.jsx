import React from "react";

function NearbyItem({ name, temperature, icon }) {
  const URL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="nearby__item">
      <h4 className="nearby__item-place">{name}</h4>
      <div className="nearby__item--details">
        <img src={URL} alt="time" className="nearby__icon" />
        <p className="nearby__item-temp">{temperature}°</p>
      </div>
    </div>
  );
}

export default NearbyItem;
