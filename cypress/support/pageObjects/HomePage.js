export default class HomePage{
    goTo(url){
        cy.visit(url)
    }

    validateUI(){
        cy.title().should('eq', 'Learn and Practice Automation | automateNow')
        cy.get('.logo ').should('be.visible')
        cy.get('.menu-item a[data-hover="Blog"]').should('contain', 'Blog')
        cy.get('.menu-item a[data-hover="Courses"]').should('contain', 'Courses')
        cy.contains('Welcome to your software automation practice website! ').should('be.visible')
        cy.get('.entry-content p strong').should('be.visible').contains('We have developed this site as a one-stop place to practice web automation. You can find additional software automated testing, and other resources on our parent website.')
        cy.contains('Learn More').should('be.visible')
        cy.contains('About').should('be.visible')
    }

   
}