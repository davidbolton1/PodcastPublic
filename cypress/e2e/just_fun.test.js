// describe('Testing Wikipedia', () => {
//   it('A wiki word search', () => {
//     cy.visit('https://wikipedia.org');
//     cy.get('.other-project-link')
//       .eq(2)
//       .click();
//     cy.url().should('equal', 'https://www.wiktionary.org/');
//     cy.get('#searchInput')
//     .type('Rome{enter}');
//     cy.contains('rome');
//   });
// });

const minus = (x, y) => x - y;

it('Will calculate 10 - 5, and compare it to it\s expected value', () => {
const result = minus(10, 5)
expect(result).to.eql(5)

});