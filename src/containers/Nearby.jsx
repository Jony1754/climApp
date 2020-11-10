import React from "react";
import NearbyItem from "../components/NearbyItem";

export default function Nearby({ data }) {
  return (
    <div className="nearby">
      <h3>CERCA DE TI</h3>
      {data.map((item) => {
        return (
          <NearbyItem
            name={item.name}
            temperature={item.main.temp}
            key={item.id}
            icon={item.weather[0].icon}
          />
        );
      })}
    </div>
  );
}
