beforeEach(() => {
  cy.intercept('https://maps.zh.ch/v3/topics/OerebKatasterZH/feature_info?**', (req) => {
    req.url =
      'https://maps.zh.ch/v3/topics/OerebKatasterZH/feature_info?bbox=2684475.760832849%2C1245468.3534489027%2C2684475.760832849%2C1245468.3534489027&queryLayers=DPRSF%2CRESF';
    req.continue();
  }).as('results1');
  cy.intercept('https://maps.zh.ch/v3/topics/StatGebZH/feature_info?**', (req) => {
    req.url =
      'https://maps.zh.ch/v3/topics/StatGebZH/feature_info?bbox=2684472.8479644675%2C1245465.5430538866%2C2684472.8479644675%2C1245465.5430538866&queryLayers=umkreis-statistik%2Cgeb%2Cgemeindegrenzen';
    req.continue();
  }).as('results2');
});

describe('template spec', () => {
  it('passes', () => {
    cy.open_url_with_cordinates('2702555', '1241686');
    //User wählt megr als eine Karte
    cy.select_topic(' Raumplanung, Zonenpläne ');
    cy.click_map_in_the_list('ÖREB-Kataster');
    cy.click_map_in_the_list('Gebäudestatistik');

    //beide Karten sind ausgewählt und angezeigt.
    cy.get('p:contains("ÖREB-Kataster")').should('be.visible');
    cy.get('p:contains("Gebäudestatistik")').should('be.visible');

    cy.get('map-page').should('exist').and('be.visible').click();

    cy.wait('@results1').then((xhr) => {
      cy.log(xhr.request.url);
      expect(xhr.response.body).to.have.property('feature_info');
    });
    cy.wait('@results2').then((xhr) => {
      cy.log(xhr.request.url);
      expect(xhr.response.body).to.have.property('feature_info');
    });

    cy.get('h1:contains("Info")').should('exist');
    //beide Resultaten sind ausgewählt und angezeigt.

    cy.get('feature-info-item:contains("ÖREB-Kataster")', {timeout: 20000}).click();
    cy.get('th:contains("Fläche") + td:contains("389")').should('exist');

    cy.get('feature-info-item:contains("Gebäudestatistik")', {timeout: 20000}).click();
    cy.get('p:contains("Wohnungen pro 100mx100m")').should('exist');
  });
});
