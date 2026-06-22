/// <reference types="Cypress" />

describe('My Test Suite', function () {

  it('Search for products and add Cashews to cart', function () {

    // Open the website
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

    // Type "ca" into the search box
    cy.get('.search-keyword').type('ca');

    // Wait for search results
    cy.wait(2000);

    // Verify there are 4 visible products
    cy.get('.product:visible')
      .should('have.length', 4);

    // Parent-child chaining
    //Can use @productLocator instead of declaring multiple times
    cy.get('.products').as('productLocator')
    cy.get('@productLocator')
      .find('.product')
      .should('have.length', 4);

    // Select the 4th product and click Add to Cart
    cy.get('.products')
      .find('.product')
      .eq(3)
      .contains('ADD TO CART')
      .click();

    // Loop through all products (JQuery)
    cy.get('.products')
      .find('.product')
      .each(($el, index, $list) => {

        // Get the product name
        const textVeg = $el.find('.product-name').text();

        // If product contains Cashews
        if (textVeg.includes('Cashews')) {

          // Click its button
          cy.wrap($el).find('button').click();
        }
      });
      //assert if logo text is correctly displayed
      cy.get('.brand')//.should(have.text, 'GRREENKART')

      //this is to print in logs
      cy.get('.brand').then(function(logoelement)
      {
        cy.log(logoelement.text())
      })

    // Get the GREENKART logo text
    cy.get('.brand')
      .then(function (logoElement) {

        // Print text to Cypress log
        cy.log(logoElement.text());

      });

  });

});