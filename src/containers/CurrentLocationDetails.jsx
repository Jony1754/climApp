import React, { Component } from "react";
import "../assets/styles/CurrentLocationDetails.scss";
export class CurrentLocationDetails extends Component {
  render() {
    return (
      <div className="current__container">
        <h3>the.weather</h3>

        <div className="current">
          <h1 className="current__temperature">20</h1>
          <div className="current__details">
            <h2 className="current__city">London</h2>
            <p className="current__date">10:36-Thuesday, 22 Oct '19</p>
          </div>
          <div className="current__details">
            <img src="" alt="time" className="current__icon" />
            <p className="current__description">Sunny</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CurrentLocationDetails;
