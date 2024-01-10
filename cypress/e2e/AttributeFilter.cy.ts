beforeEach(() => {
  cy.intercept('https://wms.zh.ch/StatGebAlterZH?**').as('results');
});
describe('template spec', () => {
  it('passes', () => {
    cy.open_url_with_cordinates('2702604', '1241901');
    cy.select_topic('Raumplanung, Zonenpläne');
    cy.click_map_in_the_list('Gebäudealter');
    cy.wait(2000);
    cy.get('div.active-map-item-header > [data-test-id="show-layers-of-the-map"] > mat-icon').click({force: true});
    cy.get('span:contains("Einstellungen")').click();
    cy.get('span:contains("Attributfilter")').click();
    cy.get('h3:contains("Gebäudealter")').should('be.visible');
    cy.get('label:contains("Gewerbe und Verwaltung")').click();
    cy.wait('@results').then((xhr) => {
      cy.log(xhr.request.url);
      expect(xhr.response.statusCode).to.eq(200);
    });
    cy.get('label:contains("Andere")').click();
    cy.wait('@results').then((xhr) => {
      cy.log(xhr.request.url);
      expect(xhr.response.statusCode).to.eq(200);
    });
  });
});
