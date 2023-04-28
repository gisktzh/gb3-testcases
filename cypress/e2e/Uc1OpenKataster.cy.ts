beforeEach(() => {
  cy.intercept('https://maps.zh.ch/v3/topics/OerebKatasterZH/feature_info?**', (req) => {
    req.url = 'https://maps.zh.ch/v3/topics/OerebKatasterZH/feature_info?bbox=2684475.760832849%2C1245468.3534489027%2C2684475.760832849%2C1245468.3534489027&queryLayers=DPRSF%2CRESF'
    req.continue();
  }).as('results');
  cy.intercept('**/OerebKatasterZH?**').as('kataster');
});

describe('Open kataster', () => {
  it('passes', () => {
    cy.open_url_with_cordinates('2702555', '1241686');

    // cy.select_topic('Raumplanung, Zonenpläne');
    //cy.click_map_in_the_list('ÖREB-Kataster');

    cy.get('input.search-window__input').type('ÖREB-Kataster');

    cy.wait(2000);

    cy.get('[data-test-id="add-active-map"]').click();

    cy.wait('@kataster');

    cy.wait(2000);

    cy.get('input.search-window__input').clear().type('Fröhlichstrasse 50');
    cy.wait(5000);
    cy.get('input.search-window__input').clear().type('Fröhlichstrasse 50');
    cy.get('mat-card-content:contains("Fröhlichstrasse 50")').click();
    cy.get('mat-icon:contains("close")').click();
    //TODO Adresse suchen
    // Karte muss Liegenschaft markieren
    //wait until request is fully loaded

    cy.get('map-page').should('exist').and('be.visible').click();

    cy.wait('@results').then((xhr) => {
      cy.log(xhr.request.url);
      expect(xhr.response.body).to.have.property('feature_info');
    });

    cy.get('h1:contains("Info")').should('exist');

    cy.get('feature-info-item:contains("ÖREB-Kataster")', {timeout: 20000}).should('be.visible').click();

    // Highlights auswählen
    cy.get('div:contains("ÖREB-Kataster (1 Treffer)") + b + button').should('be.visible');
    //Pruefe Daten
    cy.get('div:contains("Fläche") + div:contains("389")').should('be.visible');
    cy.get('div:contains("Vollstaendigkeit") + div:contains("Vollstaendig")').should('be.visible');
    cy.get('button:contains("Drucken")').should('be.visible');
  });
});