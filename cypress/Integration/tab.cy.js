// <reference types="Cypress"/>
describe('Cypress Autoamtion', () => {
    it('Child window', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
        cy.get('#opentab').invoke('removeAttr','target').click();

        cy.origin("https://www.qaclickacademy.com/",() =>{
        cy.get("#navbarSupportedContent a[href*='about']").click();
        cy.get(".mt-50 h2").should('contain','QAClick Academy');
        })
      
    })
})
