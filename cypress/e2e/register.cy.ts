import { faker } from '@faker-js/faker'

describe('Register', () => {
  beforeEach(() => {
    Cypress.Cookies.debug(true)
    cy.visit('/auth/login')
  })

  it('Should be able to register in the app', () => {
    const password: string = faker.internet.password()

    cy.register(
      faker.person.fullName(),
      faker.internet.email(),
      password,
      password,
    )

    cy.url().should('include', '/auth/login')
    cy.contains('Conta criada com sucesso').should('exist')
  })

  it('Should not be able to register in the app with same username', () => {
    const password: string = faker.internet.password()

    cy.register('longuinho', faker.internet.email(), password, password)

    cy.contains('Usuário ja existente').should('exist')
  })

  it('Should not be able to register in the app with same email', () => {
    const password: string = faker.internet.password()

    cy.register(
      faker.person.fullName(),
      'luisptavio.l.p@gmail.com',
      password,
      password,
    )

    cy.contains('Usuário ja existente').should('exist')
  })

  it('Should not be able to register in the app with password shorter than 8 digits', () => {
    const password = '1234'

    cy.register(
      faker.person.fullName(),
      'luisptavio.l.p@gmail.com',
      password,
      password,
    )

    cy.contains('Senha precisa de 8 caracteres').should('exist')
  })

  it('Should not be able to register in the app with no equals passwords', () => {
    const password = '12345678'

    cy.register(
      faker.person.fullName(),
      'luisptavio.l.p@gmail.com',
      password,
      '123456789',
    )

    cy.contains('As senhas não coincidem').should('exist')
  })
})
