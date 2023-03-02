beforeEach(() => {
  cy.intercept('**/feature_info?**').as('results');
  cy.intercept('**/OerebKatasterZH?**').as('kataster');
});


describe('Open kataster', () => {
  it('passes', () => {
    cy.open_url_with_cordinates();

    cy.select_topic("Raumplanung, Zonenpläne");

    cy.click_map_in_the_list("ÖREB-Kataster");

    cy.wait("@kataster", { timeout: 50000 });

    //TODO Adresse suchen
    // Karte muss Liegenschaft markieren 
    //wait until request is fully loaded 

    cy.get('map-page').should('exist').and('be.visible').click();

    cy.wait("@results", { timeout: 90000 });
  
    cy.get('h1:contains("Resultate")').should('exist').and('be.visible').click();

    cy.get('span:contains("OerebKatasterZH")').should('exist').and('be.visible').click();

    // Highlights auswählen 
    cy.get('div:contains("ÖREB-Kataster (1 Treffer)") + b + button').click();
    //Pruefe Daten
    cy.get('div:contains("Fläche") + div:contains("1704")').should('be.visible');
    cy.get('button:contains("Drucken")').should('be.visible');
  });
  })
