Feature: Actions Page

Background:
  Given the Actions page is being displayed

Scenario Outline: Hovers
  When the user hovers the <element> element
  Then the <link> link appears
  Examples:
  | element | link |
  | first   ||
  | second  ||
  | third   ||

Scenario: Drag and Drop 
  When the user performs the drag-and-drop
  Then the text becomes Dropped!

Scenario: Double Click
  When the user double clicks the box
  Then the Double Click box becomes green

  
Scenario: Click and Hold - Text while holding
  Then the text becomes Well done! keep holding that click now..... while the user clicks

Scenario: Click and Hold - Text after clicking
  When the user has clicked on the click and hold element
  Then the text becomes Dont release me!!!