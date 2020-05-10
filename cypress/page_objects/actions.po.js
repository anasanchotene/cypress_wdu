class actions{
  constructor(){
      this.draggable = '[id="draggable"]';
      this.droppable = '[id="droppable"]';
      this.doubleClick = '[id="double-click"]';

      this.hover = '[class="dropdown hover"]';
      this.hoverFirst = 'Hover Over Me First!';
      this.hoverFirst = 'Hover Over Me Second!';
      this.hoverThird = 'Hover Over Me Third!';

      this.clickHold = '[id="click-box"]';
      this.clickHoldingText = 'Well done! keep holding that click now.....';
      this.clickedClickHold = 'Dont release me!!!';
  }

  hoverElement(element){
    switch(element) {
      case 'first': 
        cy.get(this.hover).should('have.text', this.hoverFirst).trigger('mouseover');
        break;
      case'second': break;
      case 'third': break;

    }

    cy.wait(3000);
  }
  

  hoverLink(link) {}


} export default new actions();

