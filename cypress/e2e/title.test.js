
describe('title testing', () => {
  it('has the right title', () => {
    cy.goTo('home')
      .title()
      .should('equal', 'David Bolton\'s Blog')
  })
})