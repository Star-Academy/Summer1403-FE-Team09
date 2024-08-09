describe("footer test", () => {

    it('when click on code star link', () => {
        cy.visit('http://localhost:4200/');

        cy.get('footer').get('p').get('a').first().should("have.attr", "href", "https://star-academy.github.io/codestar-documents/");
    });

    it('when click on gtihub repo link', () => {
        cy.visit('http://localhost:4200/');
        cy.get('footer').get('p').get('a').last().should("have.attr", "href", "https://github.com/Star-Academy/Summer1403-FE-Team09");

    });
});