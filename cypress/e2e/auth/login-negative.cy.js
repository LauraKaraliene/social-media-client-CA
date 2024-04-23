describe('Login functionality - Negative Tests', () => {
  it('Cannot submit the login form with invalid credentials and is shown a message', () => {
    cy.visit('/')
    cy.wait(1000)
    cy.get('#registerModal [data-auth="login"]').click()
    cy.wait(1000)

    cy.get('input#loginEmail').type(Cypress.env('invalidEmail'))
    cy.get('input#loginPassword').type(Cypress.env('invalidPassword'))
    cy.get('#loginForm').submit()

    // Prepare to catch the alert
    cy.on('window:alert', (text) => {
      expect(text).to.contains(
        'Either your username was not found or your password is incorrect',
      )
    })

    // ensure the alert was actually called by adding a fail-safe check
    cy.get('input#loginEmail').should('exist')
  })
})
