it('should render the home page', () => {
  cy.visit('/');
  cy.contains('Learning Cypress');
});

