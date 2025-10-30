/// <reference types="cypress" />

describe('Form Interactions', () => {
  beforeEach(() => {
    cy.visit('/commands/actions')
  })

  it('should fill out a form', () => {
    cy.get('.action-email')
      .type('test@example.com')
      .should('have.value', 'test@example.com')

    cy.get('.action-disabled')
      .type('disabled input', { force: true })
      .should('have.value', 'disabled input')
  })

  it('should handle checkboxes and radio buttons', () => {
    cy.get('.action-checkboxes [type="checkbox"]')
      .check(['checkbox1', 'checkbox3'])
      .should('be.checked')

    cy.get('.action-radios [type="radio"]')
      .check('radio1')
      .should('be.checked')
  })

  it('should handle dropdown selections', () => {
    cy.get('.action-select')
      .select('apples')
      .should('have.value', 'fr-apples')
  })
})