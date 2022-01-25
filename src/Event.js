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
  render() {
    const { event } = this.props;
    const { collapsed } = this.state;
    return (
      <div className="container bg-white shadow-2xl max-w-2xl mx-auto px-4 sm:py-8 sm:px-6  lg:px-8">
        {collapsed ? (
          <div className="Events shadow-lg w-full min-h-80 bg-white-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75">
            <div className="text-left px-2 py-4">
              <h1 className="summary text-2xl">{event.summary}</h1>
              <p className="date-timezone">
                {event.start.dateTime}
                {event.start.timeZone}
              </p>
              <p className="location">{event.location}</p>
            </div>

            <div className=" px-4 py-4 w-40 text-right">
              <button
                type="button"
                className="details shadow-md text-purple-800 "
                onClick={collapsed ? this.onShowDetails : this.onHideDetails}
              >
                {collapsed ? "Show details" : "Hide details"}
              </button>
            </div>
          </div>
        ) : (
          <div className="Events shadow-lg w-full min-h-80 bg-white-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-screen lg:aspect-none">
            <div className="text-left px-2 py-4">
              <h1 className="summary text-2xl">{event.summary}</h1>
              <p className="date-timezone">
                {event.start.dateTime}
                {event.start.timeZone}
              </p>
              <p className="location">{event.location}</p>
              <p className="description">{event.description}</p>
            </div>

            <div className=" px-4 py-4 w-40 text-right">
              <button
                className="details shadow-md text-purple-800 "
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
