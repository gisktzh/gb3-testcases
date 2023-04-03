beforeEach(() => {
  cy.intercept('https://maps.zh.ch/v3/topics/TBAZH/feature_info?**').as('results');
});

describe('template spec', () => {
  it('passes', () => {
    cy.open_url_with_cordinates('2702568', '1242020');
    cy.select_topic('Verkehr');
    cy.click_map_in_the_list('Strassennetz');

    cy.get('map-page').should('exist').and('be.visible').click();

    cy.wait('@results').then((xhr) => {
      cy.log(xhr.request.url);
      expect(xhr.response.body).to.have.property('feature_info');
    });

    cy.get('span:contains("TBAZH")').should('be.visible').click();
    cy.get('div:contains("Strassentyp") + div:contains("Kantonale Nebenstrassen")').should('be.visible');
    // Verkehrstehnik
    // Infos asserten
  });
});
