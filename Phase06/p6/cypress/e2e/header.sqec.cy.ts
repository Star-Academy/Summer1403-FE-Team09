describe('header test', () => {
  it('header title test', () => {
    cy.visit('http://localhost:4200/');
    cy.get('header p').should('contain.text', '📚 Book Collection Manager 📚');
  });

  it('backgrond color test', () => {
    cy.visit('http://localhost:4200/');
    cy.get('footer').should(
      'have.css',
      'background-color',
      'rgb(153, 153, 153)'
    );
  });
});
