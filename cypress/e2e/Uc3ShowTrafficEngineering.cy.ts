beforeEach(() => {
  cy.intercept('**/feature_info?**').as('results');
});

describe('template spec', () => {
  it('passes', () => {
    cy.open_url_with_cordinates('2702568', '1242020');
    cy.get('input[placeholder="Karten und Layer filtern"]').type('Verkehrstechnik (BSA)');
    cy.click_map_in_the_list('Verkehrstechnik (BSA)');
    cy.wait(10000);

    cy.get('map-page').should('exist').and('be.visible').click();

    cy.wait('@results').then((xhr) => {
      cy.log(xhr.request.url);
      expect(xhr.response.body).to.have.property('feature_info');
    });

    cy.get('feature-info-item:contains("Verkehrstechnik (BSA)")', {timeout: 20000});
    cy.get('th:contains("Strassenname") + td:contains("Bahnhofstrasse")').first().should('exist');
    // Verkehrstehnik
    // Infos asserten
  });
});
