/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    signIn(email: string, password: string): Chainable<void>
    register(
      username: string,
      email: string,
      password: string,
      confirmPassword: string,
    ): Chainable<void>
    editUser(newUsername: string): Chainable<void>
  }
}

//
// -- This is a parent command --
Cypress.Commands.add('signIn', (email: string, password: string) => {
  cy.visit('/auth/login')

  cy.get('input[type="email"]').type(email)
  cy.get('input[type="password"]').type(password)
  cy.get('button[type="submit"]').click()
})

Cypress.Commands.add(
  'register',
  (
    username: string,
    email: string,
    password: string,
    confirmPassword: string,
  ) => {
    cy.visit('/auth/login')
    cy.contains('Registre-se').click()

    cy.get('input[placeholder="john doe"]').type(username)
    cy.get('input[type="email"]').type(email)
    cy.get('input[id="password"]').type(password)
    cy.get('input[id="confirmPassword"]').type(confirmPassword)
    cy.get('input[type="date"]').type('2000-04-13')

    cy.get('button[type="submit"]').click()
  },
)

Cypress.Commands.add('editUser', (newUsername: string) => {
  cy.get('input[type="text"]').clear().type(newUsername)
  cy.get('button[type="submit"]').click()

  cy.contains('Informações alteradas com sucesso!').should('exist')

  cy.get('a').click()
})
