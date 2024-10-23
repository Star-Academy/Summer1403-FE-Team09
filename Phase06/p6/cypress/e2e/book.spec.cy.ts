describe('Book test', () => {
  it('Delete button must delete the book', () => {
    cy.visit('http://localhost:4200/');

    let text: string;
    cy.get('#cont')
      .get('section h2:first')
      .then((element) => {
        text = element.text();
      });

    cy.get('#cont').get('section button').eq(1).click();
    cy.url().should('include', 'http://localhost:4200/');

    cy.get('#cont')
      .get('section h2:first')
      .then((element) => {
        expect(element.text()).not.to.equal(text);
      });
  });

  it('Edit button must edit the book', () => {
    cy.visit('http://localhost:4200/');

    cy.get('#cont').get('section button').eq(0).click();
    cy.url().should('include', 'http://localhost:4200/edit');

    cy.get('form').first().get('input').first().clear().type('test');

    cy.get('form').first().get('button').first().click();

    cy.get('#cont').get('section h2:first').contains('test');
  });
});
