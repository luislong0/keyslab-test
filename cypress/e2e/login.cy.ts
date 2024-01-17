describe('Login', () => {
  beforeEach(() => {
    Cypress.Cookies.debug(true)
    cy.visit('/auth/login')
  })

  it('Should be able to login in the app', () => {
    cy.signIn('luisptavio.l.p@gmail.com', '12341234')

    cy.url().should('include', '/')
    cy.contains('longuinho').should('be.visible')
  })

  it('Should be able to logout in the app', () => {
    cy.signIn('luisptavio.l.p@gmail.com', '12341234')

    cy.url().should('include', '/')
    cy.contains('longuinho').should('be.visible')

    cy.contains('Sair').click()

    cy.url().should('include', '/auth/login')
  })

  it('Should not be able to login in the app with wrong password', () => {
    cy.signIn('luisptavio.l.p@gmail.com', '123412345')
    cy.contains('E-mail ou senha incorretos. Tente novamente.').should('exist')
  })

  it('Should not be able to login in the app with password shorter than 8 digits', () => {
    cy.signIn('luisptavio.l.p@gmail.com', '1234')
    cy.contains('Senha precisa de 8 caracteres').should('exist')
  })

  it('Should not be able to login in the app with wrong email', () => {
    cy.signIn('luisptaviu.l.p@gmail.com', '12341234')
    cy.contains('E-mail ou senha incorretos. Tente novamente.').should('exist')
  })
})
