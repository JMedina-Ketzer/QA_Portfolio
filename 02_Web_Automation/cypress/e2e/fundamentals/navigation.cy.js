/// <reference types="cypress" />

describe('Navigation Fundamentals', () => {
  beforeEach(() => {
    // Usaremos um site de exemplo para treinamento
    cy.visit('https://example.cypress.io')
  })

  it('should navigate through the application', () => {
    // Teste de navegação básica
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')
    
    // Voltar para página inicial
    cy.get('.navbar-brand').click()
    cy.url().should('eq', 'https://example.cypress.io/')
  })

  it('should verify page content and elements', () => {
    // Verificar elementos críticos na página
    cy.get('h1').should('contain.text', 'Kitchen Sink')
    cy.get('.banner').should('be.visible')
    cy.get('nav').should('have.class', 'navbar')
  })

  it('should handle links and redirects', () => {
    // Abrir o dropdown de Commands primeiro
    cy.contains('Commands').click()
    
    // Agora clicar em Querying (menu está visível)
    cy.contains('Querying').click()
    cy.get('h1').should('contain.text', 'Querying')
    
    // VERIFICAÇÃO ATUALIZADA: Elemento que realmente existe na página
    cy.get('#query-btn').should('exist').and('be.visible')
    cy.get('.query-list').should('exist')
  })
})