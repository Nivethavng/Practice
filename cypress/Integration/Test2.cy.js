// <reference types="Cypress"/>
describe('Porduct shopping', () => {
    it('Place an order', () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type("Ca")
        cy.get('.product:visible').should('have.length', 4) //visible keyword used to ignore invisible product
        cy.get('.products').as('productlocator')

        // each method - to iterate each element in array & find the match 
        cy.get('@productlocator').find('.product').each(($e1, index, $list) => {

            const vegname = $e1.find('h4.product-name').text()
            if (vegname.includes('Cashews')) {
                cy.wrap($e1).find('button').click()
            }
        })
        cy.get('.cart-icon img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    })
})
