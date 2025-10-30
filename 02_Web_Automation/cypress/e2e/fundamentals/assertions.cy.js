/// <reference types="cypress" />

describe('Assertions Practice', () => {
  beforeEach(() => {
    cy.visit('/commands/querying')
  })

  it('should use various assertion types', () => {
    // Existence and visibility
    cy.get('#query-btn').should('exist').and('be.visible')

    // Text content
    cy.get('#query-btn').should('contain.text', 'Button')

    // CSS class
    cy.get('#query-btn').should('have.class', 'query-btn')

    // Array of elements
    cy.get('.query-list li').should('have.length', 3)

    // Using within to scope assertions
    cy.get('.query-ul').within(() => {
      cy.get('li').first().should('have.text', 'apples')
      cy.get('li').last().should('have.text', 'bananas')
    })
  })

  it('should handle negative assertions', () => {
    cy.get('#query-btn').should('not.have.class', 'active')
    cy.get('.non-existent-element').should('not.exist')
  })
})