// Test viewports for different devices
['iphone-x', 'macbook-15'].forEach(viewport => {
  it(`Should be able to play an episode on different viewports (${viewport})`, () => {
    cy.goTo('home');
// There are many ways to get an element and I could have drilled down from a parent element
    cy.get(':nth-child(1) > .podcast-episode > .cc-padding').click();
// Verify the path matches the episode
    cy.url().should('contain', '/first-tests');
    cy.get('.cc-play_button')
    .should('be.visible')
    .click();
    
    cy.get('.cc-speed-display')
    .should('be.visible')
    .click();
    
    cy.get('.cc-volume-bar-wrapper > :nth-child(6)')
    .should('be.visible')
    .click();
  });
});


// Localhost 

// // Test viewports for different devices
// ['iphone-x', 'macbook-15'].forEach(viewport => {
//   it(`Should be able to play an episode on different viewports (${viewport})`, () => {
//     cy.visit('/');
// // There are many ways to get an element and I could have drilled down from a parent element
//     cy.get(':nth-child(1) > .podcast-episode > .cc-padding').click();
// // Verify the path matches the episode
//     cy.url().should('contain', '/first-tests');
//     cy.url().should('eq', 'https://thedevpod.netlify.app/first-tests');
//     cy.location('pathname').should('eq', 'https://thedevpod.netlify.app/first-tests');
// // Assertions for play/speedup/changevolume
//     cy.get('.cc-play_button').should('be.visible').click();
//     cy.get('.cc-speed-display').should('be.visible').click();
//     cy.get('.cc-volume-bar-wrapper > :nth-child(6)').should('be.visible').click();
//   });
// });