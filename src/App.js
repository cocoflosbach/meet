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
      currentLocation: "all",
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

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      const num = eventCount ? eventCount : this.state.numberOfEvents;
      const eventsToShow = locationEvents.slice(0, num);
      if (this.mounted) {
        this.setState({
          events: eventsToShow,
        });
      }
    });
  };

  updateNumOfEvents = (value) => {
    this.setState({
      numberOfEvents: value,
    });
    if (value >= 1 && value <= 32) {
      this.setState({ numberOfEvents: value });
      this.updateEvents(this.state.currentLocation, value);
    } else {
      alert("Please choose a number between 1 and 32");
    }
  };

  render() {
    const { locations, events, numberOfEvents } = this.state;
    return (
      <div className="App">
        <Header />
        <CitySearch locations={locations} updateEvents={this.updateEvents} />
        <NumberOfEvents
          numberOfEvents={numberOfEvents}
          updateNumOfEvents={this.updateNumOfEvents}
        />
        <EventList events={events} />
      </div>
    );
  }
}

export default App;
