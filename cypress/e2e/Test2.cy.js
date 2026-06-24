/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
 
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.get('.search-keyword').type('ca') //find the search box and type "ca"
cy.wait(2000) //don't typically need 
//selenium get hit url in browser, cypress get acts like findElement of selenium
 
//Parent child chaining
//Find the products container and save as Alias
cy.get('.products').as('productLocator')
cy.get('@productLocator').find('.product')

//Loop through each product one at a  time
.each(($el, index, $list) => {
 
  //Find the product name inside the current card
const textVeg=$el.find('h4.product-name').text()
if(textVeg.includes('Cashews')) //check if product name contains "Cashews"
{
  //Click the Add to Cart button for that product
$el.find('button').click()
}
})
//Click the shopping cart icon & proceed to checkout
cy.get('.cart-icon > img').click()
cy.contains('PROCEED TO CHECKOUT').click()

//instructor used cy.get here, but that was throwing an error for me.
  //Need to explore more
cy.contains('Place Order').click()
})
})