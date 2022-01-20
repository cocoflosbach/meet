import React, { Component } from "react";

class NumberOfEvents extends Component {
  constructor() {
    super();
    this.state = {
      numberOfEvents: 32,
      eventNumberOptions: [8, 16, 32],
    };
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({
      numberOfEvents: value,
    });
    if (value >= 1 && value <= 32) {
      this.setState({ numberOfEvents: value });
    } else {
      alert("Please choose a number between 1 and 32");
    }
  };
  render() {
    const { numberOfEvents, eventNumberOptions } = this.state;
    return (
      <div className="NumberOfEvents">
        <input
          type="number"
          className="number-of-events"
          value={numberOfEvents}
          onChange={this.handleInputChanged}
        />
        <ul className="options">
          <li key={eventNumberOptions}>{eventNumberOptions}</li>
        </ul>
      </div>
    );
  }
}

export default NumberOfEvents;
