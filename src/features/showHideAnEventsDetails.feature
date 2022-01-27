Feature: Show/Hide an Event's details

Scenario: An event element is collapsed by default
Given The main page is opened 
When The user has not clicked on an event
Then The user should see all event elements are collapsed

Scenario: User can expand an event to see Its details
Given An event element is collapsed 
When The user clicks the expand button 
Then The user should see more details about selected event

Scenario: User can collapse an event to hide its details
Given The user has expanded the details for an event 
When The user clicks the collapse button 
Then The selected movie details should once again be hidden
