// <reference types="Cypress"/>
describe('Porduct shopping', () => {
    it('Place an order', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       cy.get('.mouse-hover-content').invoke('show')
       cy.contains('Top').click()
       //force click
       cy.contains('Top').click({force:true})
       cy.url().should('include','top')
       
    })
})
