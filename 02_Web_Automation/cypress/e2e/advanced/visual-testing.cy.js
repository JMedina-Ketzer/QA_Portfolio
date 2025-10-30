/// <reference types="cypress" />

describe('Visual Testing and UI Validation', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should validate critical UI elements are visible', () => {
    // Verificar elementos críticos da UI
    cy.get('h1').should('be.visible')
    cy.get('nav').should('be.visible')
    cy.get('.banner').should('be.visible')
    
    // Verificar hierarquia de elementos
    cy.get('nav').within(() => {
      cy.get('a').should('have.length.at.least', 1)
    })
  })

  it('should verify responsive layout behavior', () => {
    // Testar diferentes viewports
    cy.viewport('iphone-6')
    cy.get('nav').should('be.visible')
    
    cy.viewport('macbook-15')
    cy.get('nav').should('be.visible')
  })

  it('should validate CSS properties', () => {
    // Verificar estilos importantes
    cy.get('h1').should('have.css', 'font-weight')
    cy.get('.banner').should('have.css', 'background-color')
    
    // Verificar se elementos não estão sobrepostos
    cy.get('h1').should('not.be.covered')
  })

  it('should handle dynamic content correctly', () => {
    // Testar elementos que aparecem com interação
    cy.contains('type').click()
    cy.get('.action-email').should('be.visible')
    
    // Voltar e verificar outro caminho
    cy.go('back')
    cy.contains('Querying').click()
    cy.get('#query-btn').should('be.visible')
  })
})