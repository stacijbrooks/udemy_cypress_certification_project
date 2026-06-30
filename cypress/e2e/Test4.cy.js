/// <reference types="Cypress" />

describe('My Second Test Suite', function () {

    it('My FirstTest case', function () {

        // Pop ups
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // Listen for the alert BEFORE clicking
        cy.on('window:alert', (str) => {

            // Verify the alert text
            expect(str).to.equal(
                'Hello , share this practice page and share your knowledge'
            )

        })

        // Click the alert button
        cy.get('#alertbtn').click()

    })

})