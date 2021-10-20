# Meet Application

## Project Description

Meet is a progressive web app built using react that enables it's users to view upcoming events for a specific city for professional, networking or job search purposes.
The app is built using a serverless function hosted by cloud provider, AWS. The app will be built using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

## Application features and user stories

FEATURE 1: FILTER EVENTS BY CITY example

USER STORY

 As a user
I should be able to “filter events by city”
So that I can see the list of events that take place in that city

SCENARIOS

SCENARIO 1: WHEN USER HASN’T SEARCHED FOR A CITY, SHOW UPCOMING EVENTS FROM ALL CITIES.
Given user hasn’t searched for any city
When the user opens the app
Then the user should see a list of all upcoming events

SCENARIO 2: USER SHOULD SEE A LIST OF SUGGESTIONS WHEN THEY SEARCH FOR A CITY.
Given the main page is open
When user starts typing in the city textbox
Then the user should see a list of cities (suggestions) that match what they’ve typed

SCENARIO 3: USER CAN SELECT A CITY FROM THE SUGGESTED LIST.
Given the user was typing “Berlin” in the city textbox And the list of suggested cities is showing
When the user selects a city (e.g., “Berlin, Germany”) from the list
Then their city should be changed to that city (i.e., “Berlin, Germany”) And the user should receive a list of upcoming events in that city



FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS

USER STORY

 As a user
I should be able to “show and hide event’s details”
So that I can see the list of events concisely.

SCENARIOS
 SCENARIO 1: AN EVENT ELEMENT IS COLLAPSED BY DEFAULT
Given User has searched for an event by city
When A list of all events is returned
Then The user should see all event elements are collapsed


 SCENARIO 2: USER CAN EXPAND AN EVENT TO SEE ITS DETAILS 
Given The events list is rendered on the app page
When The user clicks the expand button
Then The user should see more details about selected event


 SCENARIO 3: USER CAN COLLAPSE AN EVENT TO HIDE ITS DETAILS
Given The user has expanded the details for an event
When The user clicks the collapse button
Then The selected movie details should once again be hidden



FEATURE 3: SPECIFY NUMBER OF EVENTS

USER STORY

 As a user
I should be able to “specify number of events”
So that I am not overwhelmed with a long list.

SCENARIOS

SCENARIO 1: WHEN USER HASN’T SPECIFIED A NUMBER, 32 IS THE DEFAULT NUMBER
Given The user has opened the app When The user searches events by city Then A modal to specify number of events to render should be seen with the default number set as 32.


 SCENARIO 2: USER CAN CHANGE THE NUMBER OF EVENTS THEY WANT TO SEE
Given User has filtered events by city When The user changes the number of events they want to see per time Then The user should see a list with the specified number of events. 


FEATURE 4: USE THE APP WHEN OFFLINE

USER STORY

 As a user
I should be able to “use the app when offline”
So that I can still access my list of events even when I do not have internet connection

SCENARIOS

SCENARIO 1: SHOW CACHED DATA WHEN THERE IS NO INTERNET CONNECTION
Given There is no internet connection on user device When the user opens the app Then the user should see a list of all upcoming events rendered in previous app search


 SCENARIO 2: SHOW ERROR WHEN USER CHANGES THE SETTINGS(CITY, TIME RANGE)
Given There is no internet connection on user device When The user tries to modify settings of cached data  Then The user should see an error message  


FEATURE 5: DATA VISUALIZATION

USER STORY

 As a user
I should be able to “see a clear chart of different events by city”
So that I can see how lively my city is in comparison with other cities.

SCENARIOS 

SCENARIO 1: SHOW A CHART WITH THE NUMBER OF EVENTS IN EACH CITY
Given The app contains details of events in a variety of cities When The app compares the number of events in each city Then The user should see a chart showing the number of events per city. 

## Links

```bash

- [Repo](<https://github.com/Cocoflosbach/meet> "<meet> Repo")

```

## Built With

```bash
- React
- Bootstrap
- HTML
- SCSS
- Parcel
- AWS

```

## Author

**Coco Flosbach**

- [Profile](https://github.com/Cocoflosbach "Coco Flosbach")
- [Email](mailto:cocoflosbach@theasnbrand.com?subject=Hi "Hi!")
- [Website](https://cocoflosbach.github.io/Portfolio-site/ "Welcome")

## 🤝 Support

Contributions, issues, and feature requests are welcome!

Give a ⭐️ if you like this project!
