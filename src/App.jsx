import React, { Component } from "react";
import "./assets/styles/App.scss";
import CurrentLocationDetails from "./containers/CurrentLocationDetails";
import SideDetails from "./containers/SideDetails";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { long: 0, lat: 0, country: "", weather: [], loading: true };
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.setCoordinates();
    // this.fetchData();
  }

  fetchData = async () => {
    // this.setCoordinates();
    const { long, lat } = this.state;

    const API_KEY = "33b8384d272838dbe8eaf6a1d7314f8d";
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/find?lat=${lat}&units=metric&lon=${long}&cnt=5&appid=${API_KEY}`
    );

    let data = await res.json();
    let values = await data;
    const nearby = values.list;
    console.log("data fetched: ", nearby, "state set");
    this.setState({ weather: nearby, loading: false });
  };

  setCoordinates() {
    navigator.geolocation.getCurrentPosition((pos) => {
      this.setState(
        { long: pos.coords.longitude, lat: pos.coords.latitude },
        this.fetchData
      );
    });
  }
  render() {
    return (
      <div className="App">
        <CurrentLocationDetails
          data={this.state.weather[0]}
          loading={this.state.loading}
        />
        <SideDetails data={this.state.weather} loading={this.state.loading} />
      </div>
    );
  }
}

export default App;
