/// <reference types = "cypress"/>

//const { config } = require("chai")

import example from '../fixtures/example.json'

describe('Ecommerce project', () => {
    let userdata;
    before(() => {
        //runs at once before all tests run in this describe block
        cy.fixture('example').then((data) => {
            userdata=data
        })
    })
        it("Login with valid credentials",() => {
               
               // cy.log('DAta: ', this.data)
                const prdName = userdata.prdName
                cy.visit("https://rahulshettyacademy.com/loginpagePractise/")
                cy.get('#username').type(userdata.username)
                cy.get('#password').type(userdata.password)
                cy.get('#usertype').check()
                cy.get('select').select('Student').should('have.value','stud')
                cy.get('input[type="checkbox"]').check().should('be.checked')
                cy.get('#signInBtn').click()
                cy.contains('Shop Name').should('be.visible')
                cy.url().should('include','shop')
                // Selecting a product
                cy.get('app-card').filter(`:contains("${prdName}")`).then($element => {
                    cy.wrap($element).should('have.length',1)
                    cy.wrap($element).contains('button','Add').click()
                })
                cy.get('app-card').eq(0).contains('button','Add').click()
        })
    it.skip("Login with valid credentials",() => {
        cy.fixture('example').then(function (data) {
           
           // cy.log('DAta: ', this.data)
            const prdName = data.prdName
            cy.visit("https://rahulshettyacademy.com/loginpagePractise/")
            cy.get('#username').type(data.username)
            cy.get('#password').type(data.password)
            cy.get('#usertype').check()
            cy.get('select').select('Student').should('have.value','stud')
            cy.get('input[type="checkbox"]').check().should('be.checked')
            cy.get('#signInBtn').click()
            cy.contains('Shop Name').should('be.visible')
            cy.url().should('include','shop')
            // Selecting a product
            cy.get('app-card').filter(`:contains("${prdName}")`).then($element => {
                cy.wrap($element).should('have.length',1)
                cy.wrap($element).contains('button','Add').click()
            })
            cy.get('app-card').eq(0).contains('button','Add').click()
        })
       

       /* cy.contains('a','Checkout').click()
        cy.contains('a', 'ProtoCommerce').should('be.visible')

        //Calculating total
        let tot = 0
        cy.get('tr td:nth-child(4) strong').each($e1 =>{
            const amt = Number($e1.text().split(" ")[1].trim())
            tot = tot + amt
        }).then(() => {
            expect(tot).to.be.lessThan(200000)
        })
        cy.contains('button','Checkout').click()
        cy.get('#country').type('India')
        cy.wait(2000)
        cy.get(".suggestions ul li a").click()
        cy.contains('Purchase').click()
        cy.get('.alert-success').should('contain','Success')*/

    })
})

