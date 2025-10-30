/// <reference types="cypress" />

describe('API Spying and Interception', () => {
  beforeEach(() => {
    // Site que permite testar APIs
    cy.visit('https://jsonplaceholder.typicode.com/')
  })

  it('should intercept and validate API requests', () => {
    // Interceptar requisição GET para /posts
    cy.intercept('GET', '**/posts').as('getPosts')

    // Disparar a requisição (simulação)
    cy.visit('https://jsonplaceholder.typicode.com/posts')

    // Validar a interceptação
    cy.wait('@getPosts').then((interception) => {
      expect(interception.response.statusCode).to.equal(200)
      expect(interception.response.body).to.have.length(100)
    })
  })

  it('should mock API response for testing', () => {
    // Mock de uma resposta de API
    cy.intercept('GET', '**/posts/1', {
      statusCode: 200,
      body: {
        userId: 1,
        id: 1,
        title: 'Mocked Title',
        body: 'This is a mocked response for testing'
      }
    }).as('mockedPost')

    cy.visit('https://jsonplaceholder.typicode.com/posts/1')
    
    cy.wait('@mockedPost')
    cy.contains('Mocked Title').should('exist')
  })

  it('should validate request payloads', () => {
    cy.intercept('POST', '**/posts').as('createPost')

    // Simular criação de post via interface se possível
    // Por enquanto, vamos testar diretamente a API
    cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
      title: 'Test Post',
      body: 'This is a test post',
      userId: 1
    }).then((response) => {
      expect(response.status).to.equal(201)
      expect(response.body).to.have.property('id')
    })
  })
})