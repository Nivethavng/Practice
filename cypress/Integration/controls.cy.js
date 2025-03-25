// <reference types="Cypress"/>
describe('Porduct shopping', () => {
    it('Place an order', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //checkboxes
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type ="checkbox"]').check(['option2', 'option3']).should('be.checked')

        //Static dropdown

        cy.get('select').select('option3').should('have.value', 'option3')
        //Dynamic dropdown

        cy.get('#autocomplete').type('Ind')
        cy.get('.ui-menu-item div').each(($e1, index, $list) => {

            if ($e1.text() === 'India') {
                cy.wrap($e1).click()
            }
        })

        cy.get('#autocomplete').should('have.value', 'India')
        //Hide & Show

        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //Radio Button

        cy.get('input[value="radio2"').click().should('have.value','radio2')




    })
})
