describe('Edit form spec', () => {
    it('Intract with the form in the edit form, the button should be disabled.', () => {
        cy.visit('http://localhost:4200/');

        cy.get('#cont').get('section button:first').click();

        cy.url().should('include', 'http://localhost:4200/edit');

        cy.get('form').first().get('input').first().clear();

        cy.get('form').first().get('button').first().should('be.disabled');
    });

    it('Intract with the form in the edit form, the button should be enabled when all the inputs are filled, and must change the value of title for the book', () => {
        cy.visit('http://localhost:4200/');

        cy.get('#cont').get('section button:first').click();

        cy.url().should('include', 'http://localhost:4200/edit');

        cy.get('form').first().get('input').first().clear().type('test');

        cy.get('form').first().get('button').first().should('not.be.disabled').click();

        cy.get('#cont').get('section h2:first').contains('test');
    })
})