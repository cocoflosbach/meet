import React, { Component } from "react";
import "./App.css";
import "./nprogress.css";

import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import Header from "./Header";
import { InfoAlert } from "./Alert";
import { extractLocations, getEvents, checkToken, getAccessToken } from "./api";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import EventGenres from "./EventGenres";
import WelcomeScreen from "./WelcomeScreen";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      events: [],
      numberOfEvents: 32,
      currentLocation: "all",
      showWelcomeScreen: undefined,
    };
  }

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem("access_token");
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const SearchParams = new URLSearchParams(window.location.search);
    const code = SearchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({
            events: events.slice(0, this.state.numberOfEvents),
            locations: extractLocations(events),
          });
        }
      });
    }
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
    if (this.state.showWelcomeScreen === undefined)
      return <div className="App" />;

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

        <div className="data-vis-wrapper ">
          <div>
            <h4 className="font-semibold"> Events in each city </h4>
          </div>

          <ResponsiveContainer>
            <EventGenres events={events} />
          </ResponsiveContainer>

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
        </div>

        <EventList events={events} />
        <WelcomeScreen
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => {
            getAccessToken();
          }}
        />
      </div>
    );
  }
}

export default App;
