// ***********************************************
// This example commands.js shows you how to
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


Cypress.Commands.add('click_map_in_the_list', (name_of_the_map) => { 
    cy.get('span:contains("' + name_of_the_map + '") > button').first().click();
   });

Cypress.Commands.add('select_topic', (name_of_the_topic) => { 
    cy.get('p:contains("' + name_of_the_topic + '")').click();
   });

   Cypress.Commands.add('open_url_with_cordinates', (name_of_the_topic) => { 
    cy.visit('https://calm-plant-0ecbec603.2.azurestaticapps.net/maps?x=2702555&y=1241686&scale=251&basemap=arelkbackgroundzh');
    cy.get('span:contains("Überspringen ")').click();
   });
