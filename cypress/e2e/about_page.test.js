// A basic test to visit the about section and click the 2nd github link


// Localhost version
// it('does various tests on the about page', () => {
//   // Visit the about page
//   cy.visit('/about')
//   cy.get('.description').should('be.visible').should('have.text', 'David Bolton is a full-stack developer residing in Atlanta, Georgia. He enjoys playing tennis and reading post-Republican era history when not learning new technologies.')
  
//   cy.get('a[href*="github"]').eq(1).click() 
// })
it('verifies the main logo loads', () => {
  cy.goTo('about')
  cy.get('.main-logo')
  .should('be.visible')
})

it(`renders an alt tag`, () => {
  cy.goTo('about')
    .get('.main-logo')
    .should('have.attr', 'alt')
    .and('contains', 'Db Dev Logo')
})

it('visit the about page, verifying the description and clicks the github button', () => {
  // Visit the about page
  cy.goTo('about')
  cy.get('.description')
  .should('be.visible')
  .should('have.text', 'David Bolton is a full-stack developer residing in Atlanta, Georgia. He enjoys playing tennis and reading post-Republican era history when not learning new technologies.')
  
  cy.get('a[href*="github"]')
  .eq(1)
  .click() 
})


