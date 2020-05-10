Feature: Button clicking
  As a tester learning cypress
  I want to click the buttons

Background:
  Given the Click Button page is being displayed

Scenario: Page Confirmation
  Then the header "Let's Get Clicking" appear   

Scenario Outline: Modal appears when the <button> button is clicked
  When the user clicks the "<button>" button 
  Then the "<modal>" modal appears
  Examples: 
  | button      | modal             |
  | WebElement  | Congratulations!  |

