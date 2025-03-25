/// <reference types="cypress"/>
describe('Cypress Autoamtion', () => {
    it('Child window', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
        cy.get('#opentab').then(function(el){
            const url = el.prop('href')
            cy.visit(url)
            cy.origin(url, () =>{
                cy.get('')
            })

        })


        })
      
    })
