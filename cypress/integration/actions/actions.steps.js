import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import actionsPo from "../../page_objects/actions.po"

Given(/^the Actions page is being displayed$/, () => {
  cy.server();  
  cy.visit('/Actions'); 

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
})

When(/^the user performs the drag-and-drop$/, () => {
  cy.get(actionsPo.draggable).trigger("mousedown", { which: 1 });
  cy.get(actionsPo.droppable).trigger("mousemove");
  cy.get(actionsPo.draggable).trigger("mouseup");
})

When(/^the user double clicks the box$/, () => {
  cy.get(actionsPo.doubleClick).dblclick();
})

Then(/^the text becomes Dropped!$/, () => {
  cy.get(actionsPo.droppable).contains('Dropped!');
})

Then(/^the Double Click box becomes green$/, () => {
  cy.get(actionsPo.doubleClick)
  .invoke('attr', 'background-color', '#93CB5A')
  .should('have.attr', 'background-color', '#93CB5A');
})



