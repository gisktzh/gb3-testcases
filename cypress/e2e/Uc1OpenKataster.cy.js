beforeEach(() => {
  cy.intercept('https://maps.zh.ch/v3/topics/OerebKatasterZH/feature_info?**').as('results');
  cy.intercept('**/OerebKatasterZH?**').as('kataster');
});


describe('Open kataster', () => {
  it('passes', () => {
    cy.open_url_with_cordinates();

    cy.select_topic("Raumplanung, Zonenpläne");

    cy.click_map_in_the_list("ÖREB-Kataster");

    cy.wait("@kataster");
    cy.wait(3000);
    //TODO Adresse suchen
    // Karte muss Liegenschaft markieren 
    //wait until request is fully loaded 

    cy.get('map-page').should('exist').and('be.visible').click();

    cy.wait("@results").should(xhr => {
      expect(xhr.response.body).to.have.property('feature_info');
  });
  
    cy.get('h1:contains("Resultate")').should('exist').and('be.visible');

    cy.get('span:contains("OerebKatasterZH")', { timeout: 90000 }).should('be.visible').click();

    // Highlights auswählen 
    cy.get('div:contains("ÖREB-Kataster (1 Treffer)") + b + button').click();
    //Pruefe Daten
    cy.get('div:contains("Fläche") + div:contains("1704")').should('be.visible');
    cy.get('button:contains("Drucken")').should('be.visible');
  });
  })
