describe('Aside spec', () => {
  it('Intract with the form in the aside, the button should be disabled.', () => {
    cy.visit('http://localhost:4200/');

    cy.get('aside').get('form').get('button').should('be.disabled');
  });

  it('Intract with the form in the aside, the button should be enabled when all the inputs are filled.', () => {
    cy.visit('http://localhost:4200/');

    cy.get('aside')
      .get('form')
      .get('input')
      .then(($inputs) => {
        for (let input of $inputs) {
          if (input.id == 'publishData') {
            cy.wrap(input).type('2020-01-01');
          }
          else if (input.id == 'price') {
            cy.wrap(input).type('10');
          } else {
            cy.wrap(input).type('test');
          }
        }
      });

    cy.get('aside').get('form').get('button').should('not.be.disabled');
  });
});
