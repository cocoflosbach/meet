import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents numberOfEvents={32} updateNumOfEvents={() => {}}/>);
  });

  test("render text input", () => {
    expect(NumberOfEventsWrapper.find(".number-of-events")).toHaveLength(1);
  });

  test("render suggestions for number of events to display", () => {
    expect(NumberOfEventsWrapper.find(".options")).toHaveLength(1);
  });

  // REPLACED BY INTEGRATION TEST IN APP.TEST.JS
  /* test("renders number input correctly", () => {
    const numberOfEvents = NumberOfEventsWrapper.state("numberOfEvents");
    expect(NumberOfEventsWrapper.find(".number-of-events").prop("value")).toBe(
      numberOfEvents
    );
  }); */

  // REPLACED BY INTEGRATION TEST IN APP.TEST.JS
  /* test("change state when number input changes", () => {
    NumberOfEventsWrapper.setState({
      numberOfEvents: 16,
    });
    const eventNumber = { target: { value: 32 } };
    NumberOfEventsWrapper.find(".number-of-events").simulate(
      "change",
      eventNumber
    );
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(32);
  }); */

  test("selecting NumberOfEvents input reveals the options list", () => {
    NumberOfEventsWrapper.find(".number-of-events").simulate("focus");
    expect(NumberOfEventsWrapper.state("showOptions")).toBe(true);
    expect(NumberOfEventsWrapper.find(".options").prop("style")).not.toEqual({
      display: "none",
    });
  });

  test("Selecting a suggestion should hide the options list", () => {
    NumberOfEventsWrapper.setState({
      numberOfEvents: 32,
      showOptions: undefined,
    });
    NumberOfEventsWrapper.find(".options li").at(0).simulate("click");
    expect(NumberOfEventsWrapper.state("showOptions")).toBe(false);
    expect(NumberOfEventsWrapper.find(".options").prop("style")).toEqual({
      display: "none",
    });
  });
});
