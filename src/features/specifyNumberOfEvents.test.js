import React from "react";
import { loadFeature, defineFeature } from "jest-cucumber";
import { mount } from "enzyme";
import App from "../App";
import CitySearch from "../CitySearch";
import { mockData } from "../mock-data";
import NumberOfEvents from "../NumberOfEvents";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user hasn't specified a number, 32 is the default number", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given("The user has opened the app", async () => {
      AppWrapper = await mount(<App />);
    });

    when("A default number of events is displayed", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".Events")).toHaveLength(mockData.length);
    });

    then(
      "A modal to specify number of events to render should be seen with the default number set as 32",
      () => {
        expect(AppWrapper.find(".city")).toHaveLength(1);
      }
    );
  });

  test("User can change the number of events they want to see", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given("User has filtered events by city", () => {
      AppWrapper = mount(<App />);
      const CitySearchWrapper = AppWrapper.find(CitySearch);
      CitySearchWrapper.find(".city").simulate("change", {
        target: { value: "Berlin" },
      });
      expect(CitySearchWrapper.state("query")).toBe("Berlin");
    });

    when(
      "The user changes the number of events they want to see per time",
      () => {
        AppWrapper.update();
        AppWrapper.find(".number-of-events").simulate("change", {
          target: { value: "1" },
        });
      }
    );

    then(
      "The user should see a list with the specified number of events.",
      () => {
        AppWrapper.update();
        expect(AppWrapper.find(".Events")).toHaveLength(1);
      }
    );
  });
});
