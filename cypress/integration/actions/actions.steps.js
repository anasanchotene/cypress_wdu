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

When(/^the user hovers the (.*) element$/, (element) => {
  actionsPo.hoverElement(element)
})

Then(/^the (.*) link appears$/, (link) => {
  actionsPo.hoverLink(link)
})

Then(/^the text becomes Dropped!$/, () => {
  cy.get(actionsPo.droppable).contains('Dropped!');
})

Then(/^the Double Click box becomes green$/, () => {
  cy.get(actionsPo.doubleClick)
  .invoke('attr', 'background-color', '#93CB5A')
  .should('have.attr', 'background-color', '#93CB5A');
})

  Then(/^the text becomes Well done! keep holding that click now..... while the user clicks$/, () => {
    cy.get(actionsPo.clickHold).trigger('mousedown').should('have.text', actionsPo.clickHoldingText)
  })

  When(/^the user has clicked on the click and hold element$/, () => {
    cy.get(actionsPo.clickHold).click();
  })

  Then(/^the text becomes Dont release me!!!$/, () => {
    cy.get(actionsPo.clickHold).should('have.text', actionsPo.clickedClickHold);
  })


