class click_buttons{
    constructor(){
        this.header = '[id="main-header"]';
        this.webElementBtn = '[id="button1"]';
        this.webElementModalHeader = '[class="modal-title"]';
        this.webElementModalBtn = '[class="btn btn-default"]';
        this.webElementModalClose = '[class="close"]';
    }

    clickButton (button) {
        switch(button) {
            case 'WebElement':
                cy.get(this.webElementBtn).click();
                break;
        }
    }

    checkModal (modal) {
        switch(modal) {
            case 'Congratulations!':
                cy.get(this.webElementModalHeader).should('have.text', 'Congratulations!');
                break;
        }
    }

    closeModal (modal) {

    }

} export default new click_buttons();

