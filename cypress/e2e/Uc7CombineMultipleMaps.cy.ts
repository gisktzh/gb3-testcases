beforeEach(() => {
  cy.intercept('https://maps.zh.ch/gb3/v0/topics/StatGebAlterZH/feature_info?**', (req) => {
    req.url =
      'https://maps.zh.ch/gb3/v0/topics/StatGebAlterZH/feature_info?bbox=2682784.78639677%2C1250651.5551960485%2C2682784.78639677%2C1250651.5551960485&queryLayers=geb-alter_wohnen';
    req.continue();
  }).as('results1');
  cy.intercept('https://maps.zh.ch/gb3/v0/topics/AreRpMagZH/feature_info?**', (req) => {
    req.url =
      'https://maps.zh.ch/gb3/v0/topics/AreRpMagZH/feature_info?bbox=2682784.78639677%2C1250651.5551960485%2C2682784.78639677%2C1250651.5551960485&queryLayers=mag_gemeinden';
    req.continue();
  }).as('results2');
});

describe('template spec', () => {
  it('passes', () => {
    cy.open_url_with_cordinates('2702555', '1241686');
    //User wählt megr als eine Karte
    cy.select_topic('Raumplanung, Zonenpläne');
    cy.click_map_in_the_list('Gebäudealter');
    cy.click_map_in_the_list('Stand Umsetzung Mehrwertausgleich in den Gemeinden');
    cy.wait(10000);
    //beide Karten sind ausgewählt und angezeigt.
    cy.get('p:contains("Gebäudealter")').should('be.visible');
    cy.get('p:contains("Stand Umsetzung Mehrwertausgleich in den Gemeinden")').should('be.visible');

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

    cy.get('feature-info-item:contains("Gebäudealter")', {timeout: 20000}).click();
    cy.get('span:contains("Gebäudetyp")').should('exist');

    cy.get('feature-info-item:contains("Stand Umsetzung Mehrwertausgleich in den Gemeinden")', {timeout: 20000}).click();
    cy.get('th:contains("BFS-Nummer")').should('exist');
  });
});
