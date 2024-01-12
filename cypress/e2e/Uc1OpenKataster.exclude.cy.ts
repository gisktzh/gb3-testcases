beforeEach(() => {
  cy.intercept('https://maps.zh.ch/gb3/v0/topics/OerebKatasterZH/feature_info?**', (req) => {
    req.url =
      'https://maps.zh.ch/gb3/v0/topics/OerebKatasterZH/feature_info?bbox=2684475.760832849%2C1245468.3534489027%2C2684475.760832849%2C1245468.3534489027&queryLayers=DPRSF%2CRESF';
    req.continue();
  }).as('results');
 // cy.intercept('**/OerebKatasterZH?**').as('kataster');
});

describe('Open kataster', () => {
  it('UC1', () => {
    const baseUrl = Cypress.env('gb3BaseUrl') as string;
    cy.visit(baseUrl + 'maps?initialMapIds=OerebKatasterZH');

    //cy.get('div[id="mat-snack-bar-container-live-0"] > div > page-notification > div:nth-of-type(2) > button > mat-icon').click({
     // force: true
  //  });
    // cy.select_topic('Raumplanung, Zonenpläne');
    //cy.click_map_in_the_list('ÖREB-Kataster');

   // cy.get('input.search-window__searchbar__input').type('ÖREB-Kataster');

  //  cy.wait(2000);

  //  cy.get('[data-test-id="add-active-map"]').click();

  //  cy.wait('@kataster');


    cy.get('input[placeholder="Suchen nach Adressen, Orten, Karten und mehr..."]').clear().type('Fröhlichstrasse 50');
  cy.get('mat-card-content:contains("Fröhlichstrasse 50")').click({force:true});

    // Karte muss Liegenschaft markieren
    //wait until request is fully loaded
    cy.wait(2000);

    cy.get('map-page').should('exist').and('be.visible').click();

    cy.wait('@results').then((xhr) => {
      cy.log(xhr.request.url);
      expect(xhr.response.body).to.have.property('feature_info');
    });

    cy.get('h1:contains("Info")').should('exist');

    cy.get('feature-info-item:contains("ÖREB-Kataster")', {timeout: 20000}).should('be.visible').click();

    // Highlights auswählen
    cy.get('label:contains(" Markieren: ")').should('be.visible').click();
    cy.compareSnapshot('map-page', 0.2);
    //Pruefe Daten
    cy.get('th:contains("Fläche") + td:contains("389")').should('exist');
    cy.get('th:contains("Vollstaendigkeit") + td:contains("Vollstaendig")').should('exist');
    cy.get('button:contains(" Info drucken ")').should('be.visible');
  });
});
