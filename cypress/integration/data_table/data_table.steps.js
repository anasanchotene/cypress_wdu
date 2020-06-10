import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import data_table from "../../page_objects/data_table.po"

Given(/^that the user is on the data table page$/, () => {
  cy.server();
  cy.visit('/Data-Table');
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
})

Then(/^the user writes the first name on the text field$/,() => {
  data_table.fillFirstName();
})