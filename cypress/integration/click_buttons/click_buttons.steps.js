import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import click_buttonsPo from "../../page_objects/click_buttons.po";

Given(/^the Click Button page is being displayed$/, () => {
  cy.server();
  
  cy.visit('/Click-Buttons');
  

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
})

When(/^the user clicks the "(.*)" button$/, (button) => {
  click_buttonsPo.clickButton(button);
})

Then(/^the "(.*)" modal appears$/, (modal) => {
  click_buttonsPo.checkModal(modal);
})

Then (/^the header "Let's Get Clicking" appear$/, () => {
  cy.get(click_buttonsPo.header).contains("Lets Get Clicking!");
})
