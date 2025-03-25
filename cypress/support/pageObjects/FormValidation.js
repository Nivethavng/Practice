export default class FormValidation{
    validatenav(){
        cy.contains('Form Fields').click()
        cy.url().should('include', '/form-fields/')
        cy.go('back').url().should('include', 'https://practice-automation.com/')
        cy.go('forward').url().should('include', '/form-fields/')
    }
    validateform(user,password){
        cy.contains('Form Fields').click()
        //Input field
        cy.get('#name-input').type(user)
        cy.get('.entry-content input[type="password"]').type(password)
        //Checkbox check/Uncheck
        cy.get('#drink1').check().should('be.checked')
        cy.get('#drink2').check().should('be.checked')
        cy.get('#drink3').check().should('be.checked').uncheck().should('not.be.checked')
        // Radio button
        cy.get('#color3').check().should('have.value', 'Yellow')
        //Static Dropdown
        cy.get('select').select('Yes').should('have.value', 'yes')
    }
}