import React, { Component } from "react";
import "./App.css";
import "./nprogress.css";

import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import Header from "./Header";
import { extractLocations, getEvents } from "./api";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      locations: [],
      events: [],
      numberOfEvents: 32,
    };
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events,
          locations: extractLocations(events),
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents,
      });
    });
  };

  render() {
    const { locations, events, numberOfEvents } = this.state;
    return (
      <div className="App">
        <Header />
        <CitySearch locations={locations} updateEvents={this.updateEvents} />
        <NumberOfEvents numberOfEvents={numberOfEvents} />
        <EventList events={events} />
      </div>
    );
  }
}

export default App;
