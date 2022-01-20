import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test("render text input", () => {
    expect(NumberOfEventsWrapper.find(".number-of-events")).toHaveLength(1);
  });

  test("render suggestions for number of events to display", () => {
    expect(NumberOfEventsWrapper.find(".options")).toHaveLength(1);
  });

  test("renders number input correctly", () => {
    const numberOfEvents = NumberOfEventsWrapper.state("numberOfEvents");
    expect(NumberOfEventsWrapper.find(".number-of-events").prop("value")).toBe(
      numberOfEvents
    );
  });

  test("change state when number input changes", () => {
    NumberOfEventsWrapper.setState({
      numberOfEvents: 16,
    });
    const eventNumber = { target: { value: 32 } };
    NumberOfEventsWrapper.find(".number-of-events").simulate(
      "change",
      eventNumber
    );
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(32);
  });
});
