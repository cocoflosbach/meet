import React, { Component } from "react";
import "./App.css";

import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { mockData } from "./mock-data";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      locations: ["", ""],
    };
  }

  render() {
    const locations = this.state;
    return (
      <div className="App">
        <CitySearch locations={locations} />
        <EventList events={mockData} />
        <NumberOfEvents />
      </div>
    );
  }
}

export default App;
