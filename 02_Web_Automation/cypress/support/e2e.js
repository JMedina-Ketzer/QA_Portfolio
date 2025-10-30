// Import commands and selectors
import './commands'
import { SELECTORS, TEST_DATA } from './selectors'

// Make selectors available globally
Cypress.SELECTORS = SELECTORS
Cypress.TEST_DATA = TEST_DATA

// Global beforeEach hook
beforeEach(() => {
  cy.log(`Starting test: ${Cypress.currentTest.title}`)
})
// Import commands.js and any other support files
import './commands'

// Alternatively, you can use require syntax:
// require('./commands')

// Global beforeEach hook for consistent test setup
beforeEach(() => {
  // Logging to indicate the start of a test (optional)
  cy.log('Starting test: ' + Cypress.currentTest.title)
})