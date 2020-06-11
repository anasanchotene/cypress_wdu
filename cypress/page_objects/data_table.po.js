class data_table{
  constructor(){
    this.firstName = '[name="firstname"]';
    this.lastName = '[name="lastname"]';
  }

  fillFirstName(){
    cy.fixture('example.json').then((data)=>{
      cy.get(this.firstName).type(data.name);
    })
  }

/*
  fillNames(name) {
    switch(name){
      case 'first':
        cy.get(this.firstName).type('Ana');
        break;
      case 'last':
        cy.get(this.lastName).type('Sanchotene');
        break;
    }
  }
*/
} export default new data_table();

