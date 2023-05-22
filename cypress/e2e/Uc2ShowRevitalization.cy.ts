beforeEach(() => {
  cy.intercept('https://maps.zh.ch/v3/topics/AwelWBRevitwwwZH/feature_info?**', (req) => {
    req.url =
      'https://maps.zh.ch/v3/topics/AwelWBRevitwwwZH/feature_info?bbox=2702606.63833073%2C1241906.133671923%2C2702606.63833073%2C1241906.133671923&queryLayers=info_stehgewaesser%2Cinfo_fliessgewaessername%2Cinfo_fliessgewaessernummer%2Cinfo_fliessgewaessereigenschaften%2Cgemeindegrenzen%2Cgeplante_revitalisierung%2Crevitalisierungsnutzen';
    req.continue();
  }).as('results');
});

describe('template spec', () => {
  it('passes', () => {
    cy.open_url_with_cordinates('2702604', '1241901');
    cy.select_topic('Wasser');
    cy.click_map_in_the_list('Revitalisierungsplanung (Gewässerrevitalisierung)');

    cy.wait(2000);

    cy.get('map-page').should('exist').and('be.visible').click();

    cy.wait('@results').then((xhr) => {
      cy.log(xhr.request.url);
      expect(xhr.response.body).to.have.property('feature_info');
    });

    cy.get('h1:contains("Info")').should('exist');

    cy.get('feature-info-item:contains("Revitalisierungsplanung (Gewässerrevitalisierung)")', {timeout: 20000});
    //Objekt markieren
    // Highlights auswählen
    cy.get('label:contains(" Markieren: ")').should('be.visible').first().click();
    // Gewässerinformation
    //cy.get('div:contains("Gemeindegrenzen (1 Treffer)") + b + button').click();
    cy.get('th:contains("Abschnittslänge (m)") + td:contains("107.16932268062004")').should('exist');
    cy.get('label:contains("Markieren:")').first().click();
  });
});
