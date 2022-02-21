import React, { Component } from "react";
import "tailwindcss/tailwind.css";

class Event extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: true,
    };
  }

  onShowDetails = () => {
    this.setState({
      collapsed: false,
    });
  };

  onHideDetails = () => {
    this.setState({
      collapsed: true,
    });
  };

  /* changedateFormat = () => {
    const event = this.props.events;
    const timeZone = events.start.timeZone;
    const date = new Date(timeZone);
  }; */
  render() {
    const { event } = this.props;
    const { collapsed } = this.state;
    const dateTime = event.start.dateTime;
    const date = new Date(dateTime);

    return (
      <div className="container bg-white max-w-2xl mx-auto px-4 sm:py-8 sm:px-6  lg:px-8">
        {collapsed ? (
          <div className="Events shadow-lg w-full min-h-80 bg-white-200  rounded-md overflow-hidden group-hover:opacity-75">
            <div className="text-left px-2 py-4">
              <h1 className="summary text-2xl">{event.summary}</h1>
              <p className="date-timezone text-sm">
                {date.toLocaleDateString()} {""} {event.start.timeZone}
              </p>
              <p className="location font-bold text-yellow-600">
                {event.location}
              </p>
            </div>

            <div className=" text-left px-2 py-4 button">
              <button
                type="button"
                className="details relative shadow-md text-white px-2 py-2 bg-purple-700 rounded-md  mb-4"
                onClick={collapsed ? this.onShowDetails : this.onHideDetails}
              >
                {collapsed ? "Show details" : "Hide details"}
              </button>
            </div>
          </div>
        ) : (
          <div className="Events extra shadow-lg w-full min-h-80 bg-white-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75">
            <div className="text-left px-2 py-4">
              <h1 className="summary text-2xl">{event.summary}</h1>
              <p className="date-timezone text-sm">
                {date.toLocaleDateString()}
                {event.start.timeZone}
              </p>
              <p className="location font-bold text-yellow-600">
                {event.location}
              </p>
              <p className="description">{event.description}</p>
            </div>

            <div className=" text-left px-2 py-4 button">
              <button
                className="details shadow-md text-white px-2 py-2 bg-purple-700 rounded-md mb-4"
                onClick={collapsed ? this.onShowDetails : this.onHideDetails}
              >
                {collapsed ? "Show details" : "Hide details"}
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Event;
