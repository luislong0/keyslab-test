import { faker } from '@faker-js/faker'

describe('Edit', () => {
  beforeEach(() => {
    Cypress.Cookies.debug(true)
    cy.visit('/auth/login')
  })

  it('Should be able to edit the user username', () => {
    const username = faker.internet.userName()

    cy.signIn('jojocen797@ikuromi.com', '12345678')

    cy.url().should('include', '/')
    cy.contains('Editar Perfil').click()

    cy.editUser(username)

    cy.contains('Sair').click()

    cy.url().should('include', '/auth/login')

    cy.signIn('jojocen797@ikuromi.com', '12345678')

    cy.contains(username).should('be.visible')
  })
})
