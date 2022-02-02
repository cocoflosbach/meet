import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  constructor() {
    super();
    this.state = {
      // numberOfEvents: 32,
      /* eventNumberOptions: [8, 16, 32],
      showOptions: undefined, */
      query: "",
      errorText: "",
    };
  }

  handleInputChanged = (event) => {
    const value = parseInt(event.target.value);
    if (value >= 1 && value <= 32) {
      return this.setState(
        {
          query: value,
          errorText: "",
        },
        this.props.updateNumOfEvents(value)
      );
    } else {
      return this.setState({
        query: value,
        errorText: "Please choose a number between 1 and 32",
      });
    }
  };

  /* handleItemClicked = (eventNumberOptions) => {
    this.props.updateNumOfEvents(eventNumberOptions);
    this.setState({
      showOptions: false,
    });
  }; */

  render() {
    // const { numberOfEvents } = this.props;
    return (
      <div className="NumberOfEvents">
        <p>Number of Events</p>
        <input
          type="number"
          className="number-of-events"
          value={this.state.query}
          onChange={this.handleInputChanged}
          /* onFocus={() => {
            this.setState({ showOptions: true });
          }}
          onBlur={() => {
            this.setState({ showOptions: false });
          }} */
        />
        <ErrorAlert className="error-alert" text={this.state.errorText} />

        {/* <ul
          className="options"
          style={this.state.showOptions ? {} : { display: "none" }}
        >
          {this.state.eventNumberOptions.map((NumSuggestion) => (
            <li
              key={NumSuggestion}
              onClick={() => this.handleItemClicked(NumSuggestion)}
            >
              {NumSuggestion}
            </li>
          ))}
        </ul> */}
      </div>
    );
  }
}

NumberOfEvents.defaultProps = {
  numberOfEvents: 32,
};

export default NumberOfEvents;
