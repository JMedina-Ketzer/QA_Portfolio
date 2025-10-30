// Centralized selectors for maintainable tests

export const SELECTORS = {
  // Navigation
  NAVBAR: '.navbar',
  NAVBRAND: '.navbar-brand',
  BREADCRUMB: '.breadcrumb',
  
  // Forms
  EMAIL_INPUT: '.action-email',
  DISABLED_INPUT: '.action-disabled',
  CHECKBOXES: '.action-checkboxes [type="checkbox"]',
  RADIOS: '.action-radios [type="radio"]',
  SELECT_DROPDOWN: '.action-select',
  
  // Buttons
  QUERY_BUTTON: '#query-btn',
  SUBMIT_BUTTON: '[type="submit"]',
  
  // Content
  BANNER: '.banner',
  MAIN_HEADING: 'h1',
  
  // Lists
  QUERY_LIST: '.query-list',
  QUERY_UL: '.query-ul'
}

// Alternative: Common test data
export const TEST_DATA = {
  USER: {
    username: 'testuser',
    email: 'test@example.com',
    password: 'password123'
  },
  FORM: {
    name: 'John Doe',
    message: 'Test message for form submission'
  }
}

// Custom selector functions
export const getSelector = (key) => SELECTORS[key]
export const getTestData = (category, key) => TEST_DATA[category]?.[key]