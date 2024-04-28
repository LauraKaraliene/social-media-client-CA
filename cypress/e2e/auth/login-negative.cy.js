describe('Login functionality - Negative Tests', () => {
  it('Cannot submit the login form with invalid credentials and is shown a message', () => {
    cy.visit('/')
    cy.wait(500)
    cy.get('#registerModal [data-auth="login"]').click()
    cy.wait(500)
    cy.get('input#loginEmail').type(Cypress.env('invalidEmail'))
    cy.get('input#loginPassword').type(Cypress.env('invalidPassword'))
    cy.get('button[type=submit]').contains('Login').click()
    cy.wait(500)
    cy.on('window:alert', (text) => {
      expect(text).to.equal(
        'Please match the requested format. Only Noroff student or teacher emails are valid',
      )
    })
    cy.get('input#loginEmail').should('exist')
  })
})
