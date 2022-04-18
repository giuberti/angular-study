/// <reference types="cypress" />
// sample_spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:

//const cy = require("cypress");

// https://on.cypress.io/writing-first-test
context('Access Routing', () => {
    it('Automatically redirects to main route', () => {
        // Arrange - setting up initial app state
        // Act - take an action
        cy.visit('http://localhost:4200');
        // Assert - marke an assertion
        cy.url().should('include', '/courses');
       // cy.get('.action-email').type("fake@email.com").should('have.value', 'fake@email.com');
    })
    it('404 Error Page Works', () => {
        // Arrange - setting up initial app state
        // Act - take an action
        cy.visit('http://localhost:4200/any');
        // Assert - marke an assertion
        cy.contains('Missing something');
    })
})