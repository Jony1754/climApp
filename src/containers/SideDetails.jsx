import React, { Component } from "react";
import Nearby from "./Nearby";
import WeatherDetails from "../components/WeatherDetails";
import "../assets/styles/SideDetails.scss";

function SideDetails({ data, loading }) {
  if (!loading) {
    return (
      <div className="side">
        <hr />
        <Nearby data={data} />
        <hr />
        <WeatherDetails data={data[0].main} />
      </div>
    );
  } else {
    return <div>LOADING</div>;
  }
}

export default SideDetails;
