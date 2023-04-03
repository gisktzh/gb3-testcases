beforeEach(() => {
  cy.intercept('https://maps.zh.ch/v3/topics/AwelWBRevitwwwZH/feature_info?**').as('results');
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

    cy.get('h1:contains("Resultate")').should('exist').and('be.visible');

    cy.get('span:contains(" AwelWBRevitwwwZH")', {timeout: 20000}).click();

    // Gewässerinformation
    cy.get('div:contains("Gemeindegrenzen (1 Treffer)") + b + button').click();
    cy.get('div:contains("Abschnittslänge (m)") + div:contains("96.9998632696608")').should('exist');
  });
});
