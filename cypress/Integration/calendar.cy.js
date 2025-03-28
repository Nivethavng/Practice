/// <reference types = "cypress"/>

describe('Handling calendar icon', () => {
    it('Select date & assert the value', () => {
        const month = "6"
        const year = "2027"
        const date = "15"
        const expecteddate = [month,date,year]
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        cy.get('.react-date-picker__inputGroup').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.contains('button',year).click()

        cy.get('.react-calendar__year-view__months__month').eq(Number(month)-1).click()
        cy.contains('abbr',date).click()

        //Assertion

        cy.get('.react-date-picker__inputGroup__input').each(($el,index) =>{

           cy.wrap($el).invoke('val').should('eq',expecteddate[index])

        })

        

   
        
    })
})
