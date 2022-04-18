/// <reference types="cypress" />
// sample_spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:

//const cy = require("cypress");

// https://on.cypress.io/writing-first-test
context('Filtering Options', () => {

      beforEach(() => {
        const newCourse = {
            "id": 99,
            "name": "Course for Test",
            "description": "Fake course for Cypress auto test",
            "imageUrl": "",
            "price": 123.45,
            "code": "TST-000",
            "duration": 60,
            "rating": "2",
            "releaseDate": "January 1 2021"
        };

        cy.request("POST", "http://localhost:3100/api/courses", newCourse).then(
            (response) => { }
        )
    });
    beforeEach(() => {
        cy.visit('http://localhost:4200/courses')
      });

    it('Click editing button working', () => {
        // Arrange - setting up initial app state
        // Act - take an action
        cy.get('input').type("rout");
        // Assert - marke an assertion
        cy.get("table")
        .find('tbody tr:last')
        .find('.btn-edit')
        .click();
        
        cy.url().should('include', '/courses/99');
    })
    it('Filtering by non existing Name', () => {
        // Arrange - setting up initial app state
        // Act - take an action
        cy.get('input').type("react");
        // Assert - marke an assertion
        cy.get("tbody")
        .should("be.empty");
    })
})