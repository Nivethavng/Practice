
describe("HomePage Validation", () => {
    beforeEach("Test URL", () => {
     cy.visit(Cypress.env('baseurl') + "/index.html")
    })
    it("HomePage Validation", () => {
        cy.get("#nava").should('be.visible')
        .find('img')
        .and('have.attr','src', 'bm.png')
        .and('have.attr', 'width', '50')
        .and('have.attr', 'height', '50')

        cy.get("#nava").should('contain.text', 'PRODUCT STORE')

        cy.get('ul[class="navbar-nav ml-auto"] li').should('have.length', 8)
        const navbar = []
        cy.get('ul[class="navbar-nav ml-auto"] li').each(($li) => navbar.push($li.text()))
        /* cy.wrap(navbar).should('contains',[
            "Home (current)",
            "Contact",
            "About us",
            "Cart",
            "Log in",
            "Log Out",
           // "Welcome",
            "Sign up"
        ])*/
       cy.get('ol[class="carousel-indicators"] li').should('have.length',3)

    })
})