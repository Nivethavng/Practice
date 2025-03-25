/// <reference types = "cypress"/>
/// <reference types = "cypress-iframe"/>
import 'cypress-iframe'

describe('Handle frames', function () {
    it('Load Iframes & perform action', function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        // To load & perform action on iframes
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href*="mentorship"]]').eq(0).click()
    })
})



















