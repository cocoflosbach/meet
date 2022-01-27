import React from "react";
import { loadFeature, defineFeature } from "jest-cucumber";
import { mount } from "enzyme";
import App from "../App";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("An event element is collapsed by default", ({ given, when, then }) => {
    let AppWrapper;
    given("The main page is opened", () => {
      AppWrapper = mount(<App />);
    });

    when("The user has not clicked on an event", () => {});

    then("The user should see all event elements are collapsed", () => {
      expect(AppWrapper.find(".Events .extra")).toHaveLength(0);
    });
  });

  test("User can expand an event to see Its details", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given("An event element is collapsed", async () => {
      AppWrapper = await mount(<App />);
    });

    when("The user clicks the expand button", () => {
      AppWrapper.update();
      // expect(AppWrapper.find(".details")).toHaveLength(2);
      AppWrapper.find(".details").at(0).simulate("click");
    });

    then("The user should see more details about selected event", () => {
      expect(AppWrapper.find(".extra")).toHaveLength(1);
    });
  });

  test("User can collapse an event to hide its details", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given("The user has expanded the details for an event", async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      AppWrapper.find(".details").at(0).simulate("click");
    });

    when("The user clicks the collapse button", () => {
      AppWrapper.update();
      AppWrapper.find(".details").at(0).simulate("click");
    });

    then("The selected movie details should once again be hidden", () => {
      expect(AppWrapper.find(".extra")).toHaveLength(0);
    });
  });
});
