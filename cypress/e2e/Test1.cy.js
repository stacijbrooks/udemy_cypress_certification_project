/// <reference types="Cypress" />

describe('My Test Suite', function () {

  it('My Test Suite', function () {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    //selenium get hit url in browser, cypress get acts like findElement of selenium
    cy.get('.product:visible').should('have.length', 4)
    
    //Parent child chaining
    cy.get('.products').find('.product').should('have.length', 4)
    cy.get(':nth-child(3) > .product-action > button')
    cy.get('.products').find('.product').eq(3).contains('ADD TO CART').click()
   
    cy.get('.products').find('.product').each(($el, index, $list) => {

      const textVeg=$el.find('.product-name').text()
      if(textVeg.includes('Cashews')) 
        {
          cy.wrap($el).find('.button').click()
        }
    })

  })
})