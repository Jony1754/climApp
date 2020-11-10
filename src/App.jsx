import React from "react";
import "./assets/styles/App.scss";
import CurrentLocationDetails from "./containers/CurrentLocationDetails";
import SideDetails from "./containers/SideDetails";
function App() {
  return (
    <div className="App">
      <CurrentLocationDetails />
      <SideDetails />
    </div>
  );
}

export default App;
