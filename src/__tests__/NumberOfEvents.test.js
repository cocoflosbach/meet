import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  const defaultNumberOfEvents = 32;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(
      <NumberOfEvents
        numberOfEvents={defaultNumberOfEvents}
        updateNumOfEvents={() => {}}
      />
    );
  });

  test("render text input", () => {
    expect(NumberOfEventsWrapper.find(".number-of-events")).toHaveLength(1);
  });
});
