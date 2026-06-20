/// <reference types="Cypress" />

describe('My Test Suite', function () {

  it('My Test Suite', function () {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    //selenium get hit url in browser, cypress get acts like findElement of selenium
    cy.get('.product:visible').should('have.length',4)


  })
})