class data_table{
  constructor(){
    this.firstName = '[name="firstname"]';
  }

  fillFirstName(){
    cy.fixture('example.json').then((data)=>{
      cy.get(this.firstName).type(data.name);
    })
  }

} export default new data_table();

