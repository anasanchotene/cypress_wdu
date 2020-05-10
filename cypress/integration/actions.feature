Feature: Actions Page

Background:
  Given the Actions page is being displayed

Scenario: Drag and Drop 
  When the user performs the drag-and-drop
  Then the text becomes Dropped!

Scenario: Double Click
  When the user double clicks the box
  Then the Double Click box becomes green
