// <reference types="Cypress"/>
describe('Cypress Automation', () => {
    it('Launch website', () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type("Ca")
        cy.get('.product:visible').should('have.length', 4) //visible keyword used to ignore invisible product
        cy.get('.products').as('productlocator')
        cy.get('@productlocator').find('.product').eq(1).contains('ADD TO CART').click() // Parent child chaining 
// each method - to iterate each element in array & find the match 
        cy.get('@productlocator').find('.product').each(($e1, index, $list) => {

            const vegname = $e1.find('h4.product-name').text()
            if (vegname.includes('Cashews')) {
                cy.wrap($e1).find('button').click()
            }


        })

        /*Not applicable
        const veg = cy.get('.brand')
        cy.log(veg.text()) */

        cy.get('.brand').then(function(title){
            const gw = title.text()
            cy.log(gw)
        })
       

    })

})
