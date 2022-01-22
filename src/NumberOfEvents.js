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

  handleItemClicked = (eventNumberOptions) => {
    this.setState({
      numberOfEvents: eventNumberOptions,
    });
  };

  render() {
    const { numberOfEvents } = this.state;
    return (
      <div className="NumberOfEvents">
        <p>Number of Events</p>
        <input
          type="number"
          className="number-of-events"
          value={numberOfEvents}
          onChange={this.handleInputChanged}
        />
        <ul className="options">
          {this.state.eventNumberOptions.map((NumSuggestion) => (
            <li
              key={NumSuggestion}
              onClick={() => this.handleItemClicked(NumSuggestion)}
            >
              {NumSuggestion}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default NumberOfEvents;
