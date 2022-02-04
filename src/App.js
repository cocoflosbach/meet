import React, { Component } from "react";
import "./App.css";
import "./nprogress.css";

import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import Header from "./Header";
import { InfoAlert } from "./Alert";
import { extractLocations, getEvents } from "./api";

class App extends Component {
  constructor(props) {
    super(props);
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
          events: events.slice(0, this.state.numberOfEvents),
          locations: extractLocations(events),
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, num = this.state.numberOfEvents) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      const eventsToShow = locationEvents.slice(0, num);
      if (this.mounted) {
        this.setState({
          events: eventsToShow,
          currentLocation: location,
        });
      }
    });
  };

  updateNumOfEvents = (value) => {
    this.setState(
      { numberOfEvents: value },
      this.updateEvents(this.state.currentLocation, value)
    );
  };

  render() {
    const { locations, events, numberOfEvents } = this.state;
    return (
      <div className="App">
        {!navigator.onLine ? (
          <InfoAlert text="You currently are offline!" />
        ) : (
          <InfoAlert text=" " />
        )}
        <Header />
        <CitySearch locations={locations} updateEvents={this.updateEvents} />
        <NumberOfEvents
          numberOfEvents={numberOfEvents}
          updateNumOfEvents={(number) => {
            this.updateNumOfEvents(number);
          }}
        />
        <EventList events={events} />
      </div>
    );
  }
}

export default App;
