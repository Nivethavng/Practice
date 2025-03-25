/// <reference types = 'cypress' />

describe("Signup Fucntionality", () => {
  beforeEach("All Test", () => {
    cy.visit(Cypress.env('baseurl') + "/index.html")
  })
    it("Sign up with valid details", () => {
       
        cy.get('#signin2').click()
        cy.get('#sign-username').should('be.visible').type("SAMue")
        cy.get('#sign-password').type("John@123")
        cy.get('.btn-primary').eq(1).click()
        cy.on('window:alert', (str) =>{
            expect(str).to.be.equal("Sign up successful.")
        })
        

    })
})