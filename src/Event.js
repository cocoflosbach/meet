import React, { Component } from "react";

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
      <ul>
        {collapsed ? (
          <div className="Events">
            <h1 className="summary">{event.summary}</h1>
            <p className="date-timezone">
              {event.start.dateTime}
              {event.start.timeZone}
            </p>
            <p className="location">{event.location}</p>

            <button
              className="details"
              onClick={collapsed ? this.onShowDetails : this.onHideDetails}
            >
              {collapsed ? "Show details" : "Hide details"}
            </button>
          </div>
        ) : (
          <div className="Events">
            <h1 className="summary">{event.summary}</h1>
            <p className="date-timezone">
              {event.start.dateTime}
              {event.start.timeZone}
            </p>
            <p className="location">{event.location}</p>
            <p className="description">{event.description}</p>

            <button
              className="details"
              onClick={collapsed ? this.onShowDetails : this.onHideDetails}
            >
              {collapsed ? "Show details" : "Hide details"}
            </button>
          </div>
        )}
      </ul>
    );
  }
}

export default Event;
