// <reference types="Cypress"/>
describe('Porduct shopping', () => {
    it('Place an order', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
        //alerts & confirm
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

        //To verify text in popups, use windows:alert or confirm events 

        cy.on('window:alert',(str) =>{
            expect(str).to.be.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm',(confirmtxt) =>{
            expect(confirmtxt).to.be.equal('Hello , Are you sure you want to confirm?')
        })       

    })
})
