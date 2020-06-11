Feature: Data table page from WebDriver University
  
Background: The user is in the Data Table page
  Given that the user is on the data table page

Scenario: The user writes first name
  Then the user is able to write the first name on the text field

Scenario Outline: The user writes <name> name on the page
  Then the user is able to write <name> name on the field
  Examples:
  | name  |
  | first |
  | last  |
