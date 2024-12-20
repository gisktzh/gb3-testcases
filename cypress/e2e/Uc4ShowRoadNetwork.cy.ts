beforeEach(() => {
  cy.intercept('https://maps.zh.ch/gb3/v0/topics/TBAZH/feature_info?**', (req) => {
    req.url =
      'https://maps.zh.ch/gb3/v0/topics/TBAZH/feature_info?bbox=2689501.477773899%2C1282734.7206541954%2C2689501.477773899%2C1282734.7206541954&queryLayers=kilometrierung%2Cstrassentypisierung-nach-richtplan%2Cstrasseneigentum%2Cweitere-strassenattribute%2Chaupt-und-nebenstrassen%2Ckilometrierung-rbbs';
    req.continue();
  }).as('results');
});

describe('template spec', () => {
  it('passes', () => {
    cy.open_url_with_cordinates('2702568', '1242020');
    cy.get('input[placeholder="Karten und Layer filtern"]').type('Strassennetz');
    cy.get('span:contains("Strassennetz") > div > button[data-test-id="add-active-map"]').last().click();
    cy.wait(5000);

    cy.get('map-page').should('exist').and('be.visible').click();

    cy.wait('@results').then((xhr) => {
      cy.log(xhr.request.url);
      expect(xhr.response.body).to.have.property('feature_info');
    });

    cy.get('feature-info-item:contains("Strassennetz")').scrollIntoView().should('exist');
    cy.get('th:contains("Routennummer")').should('exist');
    // Verkehrstehnik
    // Infos asserten
  });
});
