// This is a FUTURE test if I add login functionality, maybe adding the ability to save certain episodes

describe('/login', () => {

  beforeEach(() => {
    // Wipe out state from the previous tests
    cy.visit('/#/login')
  })
  // Click the sign in form, verify error message
  it('requires an email', () => {
    cy.get('form').contains('Sign in').click()
    cy.get('.error-messages')
    .should('contain', 'email can\'t be blank')
  })

  // Get the div containing the email field, enter email and press enter
  it('requires a password', () => {
    cy.get('[futuredivcontainingdemailform=email]').type('music@example.com{enter}')
    cy.get('.error-messages')
    .should('contain', 'password can\'t be blank')
  })
  // Get the div containing the password field, enter password and click enter
  it('navigates to #/ on successful login', () => {
    cy.get('[futuredivcontainingdemailform=email]').type('joe@example.com')
    cy.get('[futuredivcontainingdpasswordform=password]').type('joe{enter}')
    cy.hash().should('eq', '#/')
  })

})