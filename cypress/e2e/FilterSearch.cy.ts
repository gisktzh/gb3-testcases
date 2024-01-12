beforeEach(() => {
  cy.intercept('https://maps.zh.ch/gb3/v0/topics/AwelGrundWaHWwwwZH/feature_info?**', (req) => {
    req.url =
      'https://maps.zh.ch/gb3/v0/topics/AwelGrundWaHWwwwZH/feature_info?bbox=2680054.596489865%2C1253456.6824253541%2C2680054.596489865%2C1253456.6824253541&queryLayers=schotter-grundwasserleiter%2Cgrundwassergebiete%2Cgemeindegrenzen%2Cbedeckung-grundwasserleiter%2Cgrundwasser-leiter-linie%2Cbereiche-mit-artesisch-gespanntem-grundwasser%2Ckiesabbau%2Centwaesserungskanaele%2Cdichtungswaende%2Cgrundwasserbegrenzungen%2Cstauwehre%2Cexfiltration-infiltration%2Cfliessrichtungen%2Cgrundwasserbegrenzungen-see%2Cgrundwassermaechtigkeiten%2Cisohypsen-hochwasserstand%2Cquellhorizonte%2Cstockwerkbau%2Climnigraphenstationen%2Cquellfassung-waermenutzung%2Cgrundwasserfassung-waermenutzung%2Cquellfassung-ohne-waermenutzung%2Cgrundwasserfassung-ohne-waermenutzung%2Cgrundwasserpegel%2Csammelschacht%2Cgrundwasserpiezometer%2Cerdregister';
    req.continue();
  }).as('results');
});

describe('Test filter search', () => {
  it('passes', () => {
    cy.open_url_with_cordinates('2702555', '1241686');

    cy.get('input[placeholder="Karten und Layer filtern"]').type('Grundwasserkarte (Hochwasserstand)');
    cy.click_map_in_the_list('Grundwasserkarte (Hochwasserstand)');

    
    cy.wait(5000);
    cy.get('input[placeholder="Suchen nach Adressen, Orten, Karten und mehr..."]').clear().type('b 15-0003');
    cy.get('mat-card-content:contains("b 15-0003")').should('be.visible').click();
   //cy.get('mat-icon:contains("close")').click();

    cy.get('map-page').should('exist').and('be.visible').click();

    cy.wait('@results').then((xhr) => {
      cy.log(xhr.request.url);
      expect(xhr.response.body).to.have.property('feature_info');
    });

    cy.get('h1:contains("Info")').should('exist');
    cy.get('th:contains("Nummer") + td:contains("b 15")').should('exist');
  });
});
