/// <reference types="cypress" />
// Example usage in a Cypress test
const baseUrl = Cypress.env('gb3BaseUrl') as string;
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
Cypress.Commands.add('click_map_in_the_list', (name_of_the_map: string) => {
  cy.get('span:contains("' + name_of_the_map + '") > div > button[data-test-id="add-active-map"]')
    .first()
    .click();
});

Cypress.Commands.add('click_by_data_test_id', (test_id: string) => {
  cy.get('[data-test-id="' + test_id + '"]').click();
});

Cypress.Commands.add('select_topic', (name_of_the_topic: string) => {
  cy.get('p:contains("' + name_of_the_topic + '")').click();
});

Cypress.Commands.add('open_url_with_cordinates', (x: string, y: string) => {
  cy.visit(baseUrl + 'maps?x=' + x + '&y=' + y + '&scale=251&basemap=arelkbackgroundzh');
  cy.get('span:contains("Überspringen ")').click();
  cy.wait(4000);
});

Cypress.Commands.add('login', () => {
  cy.get('span:contains("Login")').click();
  // if domain is different from the baseUrl
  //cy.origin('https://maps.zh.ch', () => {
  const userName: string = Cypress.env('eIAM_username') as string;
  const password: string = Cypress.env('eIAM_password') as string;
  cy.get('#user_login').type(userName);
  cy.get('#user_password').type(password);
  cy.get('input[value="Login"]').click();
  //cy.visit(baseUrl);
  // });
});
