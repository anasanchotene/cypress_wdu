Feature: Button clicking
  As a tester learning cypress
  I want to click the buttons

Scenario: Page Confirmation
  Given the Click Button page is being displayed
  Then the header "Let's Get Clicking" appear   

Scenario Outline: Modal appears when the <button> button is clicked
  Given the Click Button page is being displayed
  When the user clicks the "<button>" button 
  Then the "<modal>" modal appears
  Examples: 
  | button      | modal             |
  | WebElement  | Congratulations!  |

