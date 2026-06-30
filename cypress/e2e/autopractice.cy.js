/// <reference types="Cypress" />

describe('My Second Test Suite', function () {

    it('My FirstTest case', function () {
        //checkboxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        //can vice versa single & dbl quotes
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])
        //Static dropdown
        cy.get('select').select('option2').should('have.value', 'option2')

        //Dynamic dropdowns
        //when you type "ind" more options appear
        cy.get('#autocomplete').type('ind')
        //if you wanted to just test India
        //cy.get('select').select('India')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if ($el.text() === "India")
                $el.click()
        })
        //autocomplete
        cy.get('#autocomplete').should('have.value', "India")
        //visible vs invisible
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //radio buttons
        cy.get('[value="radio2"]').check().should('be.checked')

    })

})

