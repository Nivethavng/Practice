/// <reference types = 'cypress' />
/// <reference types = "cypress-iframe"/>
import 'cypress-iframe'
import testdt from '../fixtures/testdt.json'
import HomePage from '../support/pageObjects/HomePage'
import FormValidation from '../support/pageObjects/FormValidation'

describe('Practice Automation', () => {
    const homepage = new HomePage()
    const formcheck = new FormValidation()
    let userdata;
    before(() => {
        cy.fixture('testdt').then((testdt) => {
            userdata = testdt
        })

    })
    beforeEach('All Tests', () => {

        homepage.goTo("https://practice-automation.com/")
    })
    it.only('Home page validation', () => {
        homepage.validateUI()

        /*cy.contains('Learn More').invoke('removeAttr','target').click()
        cy.origin('https://linktr.ee/automateNow',() => {
            cy.url().should('include','https://linktr.ee/automateNow')
        })*/

    })
    it.only('Form Field Navigation', () => {
        formcheck.validatenav()
    })
    it.only('Form Field Validation', () => {
        formcheck.validateform(userdata.user,userdata.password)
        // Table of contents
        const list = []
        cy.get('form ul li').each(($li) => list.push($li.text()))
        cy.wrap(list).should('deep.equal', [
            'Selenium',
            'Playwright',
            'Cypress',
            'Appium',
            'Katalon Studio'
        ])
        cy.get('#email').type(userdata.email)
        cy.get('#message').type(userdata.capturedMsg)
        cy.get('#submit-btn').click()
        cy.on('window:alert', (str) => {
            expect(str).to.be.equal(userdata.expectedMsg)
        })
        cy.get('.breadcrumbs a').click()
        cy.url().should('include', 'https://practice-automation.com/')

    })
    it.skip('Pop up Validation', () => {
        cy.contains("Popups").click()
        cy.url().should('include', '/popups/')
        cy.get('#alert').click()
        cy.on('window:alert', (str) => {
            expect(str).to.be.equal('Hi there, pal!')
        })

        cy.get('#confirm').click()
        // Verifying text in confirm pop up
        cy.on('window:confirm', (canceltxt) => {
            expect(canceltxt).to.be.equal('OK or Cancel, which will it be?')
        })
        // Clicking on Ok
        cy.on('window:confirm', () => true)
        cy.get('#confirmResult').should('have.text', 'OK it is!')
    })
    it.skip('Confirm Pop up Validation - Cancel', () => {
        cy.contains("Popups").click()
        cy.get('#confirm').click()
        cy.on('window:confirm', () => false)
        cy.get('#confirmResult').should('have.text', 'Cancel it is!')
    })
    it.skip('Prompt Popup & tooltip', () => {
        cy.contains("Popups").click()
        cy.window().then(($win) => {
            cy.stub($win, 'prompt').returns('John')
            cy.contains('Prompt').click()
        })
        cy.get('#promptResult').should('have.text', 'Nice to meet you, John!')
        cy.contains('click me to see a tooltip').click()
        cy.get('#myTooltip').contains('Cool text')
    })
    it('Slider', () => {
        cy.contains("Sliders").click()
        cy.get('#value').contains('25')
        cy.get('#slideMe').invoke('val', 30).trigger('input')
        cy.get('#value').contains('30')
    })
    it('Wait for some time & check element', () => {
        cy.contains("JavaScript Delays").click()
        cy.get('#start').click()
        cy.get('#delay', { timeout: 15000 }).should('be.visible')
    })
    it('Calendars', () => {
        const expecteddate = '2025-01-07'
        cy.contains("Calendars").click()
        cy.get('#g1065-selectorenteradate').click()
        cy.get('a[title="Previous"').click()
        cy.get('a[data-date="7"]').click()
        cy.get('.hasDatepicker').invoke('val').should('contain', expecteddate)
    })
    it('Static Table', () => {
        cy.contains("Tables").click()
        cy.get('.wp-block-table tbody tr td:nth-child(1)').each(($el, index, list) => {
            const txt = $el.text()
            if (txt.includes('Laptop')) {
                cy.get('.wp-block-table tbody tr td:nth-child(1)').eq(index).next().then(function (d) {
                    const r = d.text()
                    cy.log(r)
                    expect(r).contains('1200')
                })
            }
        })
    })
    it('Find the least population from first page of Table', () => {
        cy.contains("Tables").click()
        cy.get('#dt-length-0').select('100').should('have.value', '100')
        let count = 0
        cy.get('tbody.row-striping tr td:nth-child(3)').each(($el, index) => {
            const val = $el.text()
            if (val < 130) {
                cy.get('tbody.row-striping tr td:nth-child(3)').eq(index).prev().then(function (country) {
                    let countries = country.text()
                    cy.log(countries)
                    count = count + 1
                    cy.log(count)
                })
            }

        })
    })
    it('Sort a table using Population', () => {
        cy.contains("Tables").click()
        cy.get('.column-3 .dt-column-title').click()
    })
    it('New tab with diff domain', () => {
        cy.contains("Window").click()
        // cy.contains('New Tab').invoke('removeAttr','target').click()
        cy.origin("https://automatenow.io/", () => {
            cy.visit("https://automatenow.io/")
            cy.get('.logo-left').should('be.visible')
        })
    })
    it('Mouse Hover', () => {
        cy.contains('Hover').click()
        cy.get('#mouse_over').invoke('show').click()
        cy.get('#mouse_over').contains('You did it!')
    })
    it('Ads -- Need to check whether ad got closed', () => {
        cy.contains('Ads').click()
        cy.wait(15000)
        cy.get('#popmake-1272').contains('Hi I am an ad.')
        cy.get('#popmake-1272 .popmake-close').click({ force: true })
    })
    it('Gestures - drag & drop', () => {
        cy.contains('Gestures').click()
        cy.get('#moveMeHeader').trigger('mousedown').trigger('mousemove', { pageX: 200, pageY: 309 }).trigger('mouseleave')
        //cy.get('#moveMeHeader').scrollTo('center')
    })
    it('Click Event', () => {
        cy.contains('Click').click()
        cy.contains('Cat').click()
        cy.get('#demo').should('have.text', 'Meow!')
        cy.contains('Dog').click()
        cy.get('#demo').should('have.text', 'Woof!')
        cy.contains('Pig').click()
        cy.get('#demo').should('have.text', 'Oink!')
        cy.contains('Cow').click()
        cy.get('#demo').should('have.text', 'Moo!')
    })
    it('Spinners', () => {
        cy.contains('Spinners').click()
        cy.get('.spinner-hidden').should('be.visible')
    })
    it('Accordions', () => {
        cy.contains('Accordions').click()
        cy.contains('Click to see more').click()
        cy.get('.wp-block-coblocks-accordion-item__content p').should('be.visible').and('contain', 'This is an accordion item.')
    })
    it('Broken Image', () => {
        cy.contains('Broken Images').click()
        cy.get('img').each(($img) => {
            // Check if the naturalWidth is greater than 0 (indicating the image is loaded correctly)
            cy.wrap($img).should('have.prop', 'naturalWidth').and('be.gte', 0);
        });
        // Select all img elements
        cy.get('img').each(($img) => {
            // Ensure each image has an alt attribute
            cy.wrap($img).should('have.attr', 'alt').and('not.be.empty');
        });
    })

})