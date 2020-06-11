import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import data_table from "../../page_objects/data_table.po";

Given(/^that the user is on the data table page$/, () => {
  cy.server();
  cy.visit('/Data-Table');
  cy.on('uncaught:exception', (err, runnable) => {
    return false
  })
})

Then(/^the user is able to write the first name on the text field$/,() => {
  data_table.fillFirstName();
})

Then(/^the user is able to write (.*) name on the field$/,(name) => {
  data_table.fillNames(name);
})

