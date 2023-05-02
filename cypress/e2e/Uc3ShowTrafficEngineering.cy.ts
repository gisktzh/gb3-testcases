beforeEach(() => {
  cy.intercept('**/feature_info?**').as('results');
});

describe('template spec', () => {
  it('passes', () => {
    cy.open_url_with_cordinates('2702568', '1242020');
    cy.select_topic('Verkehr');
    cy.click_map_in_the_list('Verkehrstechnik (BSA)');

    cy.get('map-page').should('exist').and('be.visible').click();

    cy.wait('@results').then((xhr) => {
      cy.log(xhr.request.url);
      expect(xhr.response.body).to.have.property('feature_info');
    });

    cy.get('feature-info-item:contains("Verkehrstechnik (BSA)")', {timeout: 20000}).click();
    cy.get('div:contains("Strassenname") + div:contains("Bahnhofstrasse")').first().should('be.visible');
    // Verkehrstehnik
    // Infos asserten
  });
});
