// Custom commands for reusable actions
Cypress.Commands.add('login', (username, password) => {
  cy.get('[data-testid=username]').type(username)
  cy.get('[data-testid=password]').type(password)
  cy.get('[data-testid=login-button]').click()
})

Cypress.Commands.add('assertVisible', (selector) => {
  cy.get(selector).should('be.visible')
})

Cypress.Commands.add('assertContainsText', (selector, text) => {
  cy.get(selector).should('contain.text', text)
})