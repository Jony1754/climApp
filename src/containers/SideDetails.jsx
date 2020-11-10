import React, { Component } from "react";
import Nearby from "./Nearby";
import WeatherDetails from "../components/WeatherDetails";
import "../assets/styles/SideDetails.scss";
export class SideDetails extends Component {
  render() {
    return (
      <div className="side">
        <hr />
        <Nearby />
        <hr />
        <WeatherDetails />
        <hr />
      </div>
    );
  }
}

export default SideDetails;
