import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";

describe("<Event /> component", () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event />);
  });

  test("render event block", () => {
    expect(EventWrapper.find(".Events")).toHaveLength(1);
  });

  /* Render event block details correctly */
  test("render event summary", () => {
    expect(EventWrapper.find(".summary")).toHaveLength(1);
  });
  /* test("render event start-date and timezone", () => {
    expect(EventWrapper.find(".date-timezone")).toHaveLength(1);
  }); */
  test("render event location", () => {
    expect(EventWrapper.find(".location")).toHaveLength(1);
  });
  test("render event description", () => {
    expect(EventWrapper.find(".description")).toHaveLength(1);
  });

  test("render details button", () => {
    expect(EventWrapper.find(".details")).toHaveLength(1);
  });

  test("event block is collapsed by defualt location", () => {
    expect(EventWrapper.state("collapsed")).toBe(true);
  });

  test("details button shows extra info", () => {
    EventWrapper.setState({ collapsed: true });
    EventWrapper.find(".details").simulate("click");
    expect(EventWrapper.state("collapsed")).toBe(false);
  });

  test("details button hides extra info", () => {
    EventWrapper.setState({ collapsed: false });
    EventWrapper.find(".details").simulate("click");
    expect(EventWrapper.state("collapsed")).toBe(true);
  });
});
