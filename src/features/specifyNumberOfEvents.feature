Feature: Specify number of events

Scenario: When user hasn't specified a number, 32 is the default number
 Given The user has opened the app
 When A default number of events is displayed
 Then A modal to specify number of events to render should be seen with the default number set as 32

 Scenario: User can change the number of events they want to see
 Given User has filtered events by city
 When The user changes the number of events they want to see per time
 Then The user should see a list with the specified number of events.