/// <reference types="cypress" />

//const { update } = require("cypress/types/lodash");

// sample_spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:

//const cy = require("cypress");

// https://on.cypress.io/writing-first-test
context('CRUD Server Interations', () => {
    it('Posting new Course', () => {
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

        //let testCourse = cy.readFile('./cypress/fixtures/course.json');
        cy.request("POST", "http://localhost:3100/api/courses", newCourse).then(
            (response) => {
                // response.body is automatically serialized into JSON
                expect(response.body).to.have.property("name", "Course for Test") // true
            }
        )
    });

    it('Updatig the name of new Course', () => {
        const updatedCourse = {
            "id": 99,
            "name": "Course edited",
            "description": "Fake course for Cypress auto test",
            "imageUrl": "",
            "price": 123.45,
            "code": "TST-000",
            "duration": 60,
            "rating": "2",
            "releaseDate": "January 1 2021"
        };
        cy.request("PUT", "http://localhost:3100/api/courses/" + updatedCourse.id, updatedCourse).then(
            (response) => {
                // response.body is automatically serialized into JSON
                expect(response.body).to.have.property("name", "Course edited") // true
            }
        )
    });

    it('Deleting the new Course', () => {
        cy.request("DELETE", "http://localhost:3100/api/courses/99").then(
            (response) => {
                // response.body is automatically serialized into JSON
                expect(response.status).to.eq(204) // true
            }
        )
    });
});