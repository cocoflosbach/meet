import React, { Component } from "react";
import "./App.css";
import "./nprogress.css";

import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import Header from "./Header";
import { InfoAlert } from "./Alert";
import { extractLocations, getEvents } from "./api";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

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

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter(
        (event) => event.location === location
      ).length;
      const city = location.split(", ").shift();
      return { city, number };
    });
    return data;
  };

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

        <h4> Events in each city </h4>

        <ResponsiveContainer height={400}>
          <ScatterChart
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid />
            <XAxis type="category" dataKey="city" name="city" />
            <YAxis
              type="number"
              dataKey="number"
              name="number of events"
              allowDecimals={false}
            />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter data={this.getData()} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>

        <EventList events={events} />
      </div>
    );
  }
}

export default App;
