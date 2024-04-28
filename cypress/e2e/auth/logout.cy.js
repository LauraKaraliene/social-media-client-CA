describe('Login functionality', () => {
  it('Can log in and log out successfully', () => {
    cy.visit('/')
    cy.wait(1000)

    // Log in
    cy.get('#registerModal [data-auth="login"]').click()
    cy.wait(1000)
    cy.get('input#loginEmail').type(Cypress.env('email'))
    cy.get('input#loginPassword').type(Cypress.env('password'))
    cy.get('#loginForm').submit()
    cy.wait(1000)
    cy.get('[data-auth="logout"]').should('be.visible')

    // logout
    cy.get('[data-auth="logout"]').click()
    cy.wait(1000)
    cy.get('#registerModal [data-auth="login"]').should('be.visible')
  })
})
