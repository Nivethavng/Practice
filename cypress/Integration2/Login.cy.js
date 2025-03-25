/// <reference types = 'cypress' />

describe("Login functionality", () => {
    beforeEach("All Test", () => {
        cy.visit(Cypress.env('baseurl') + "/index.html")
      })
    it("Valid login", () => {
        cy.get('#login2').click()
        cy.get('#loginusername').type("Ven")
        cy.get('#loginpassword').should('be.visible').type("Ven@123")
        cy.get('.btn-primary').eq(2).click()
        cy.get('#logout2').should('be.visible')

    })
})
