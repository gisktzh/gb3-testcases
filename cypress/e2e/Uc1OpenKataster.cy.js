describe('template spec', () => {
  it('passes', () => {
    cy.open_url_with_cordinates();
    cy.select_topic("Raumplanung, Zonenpläne");
    cy.click_map_in_the_list("ÖREB-Kataster");
//TODO Adresse suchen
// Karte muss Liegenschaft markieren 
    //wait until request is fully loaded
    cy.get('map-page').should('exist').and('be.visible').click();
    cy.intercept({ method: 'GET', url: '**/feature_info?**' }).as("results");
    cy.wait("@results").its('response.statusCode').should('eq', 200);
    cy.get('span:contains("OerebKatasterZH")').should('exist').and('be.visible').click(); 
    // Highlights auswählen 
    cy.get('div:contains("ÖREB-Kataster (1 Treffer)") + b + button').click();
    //Pruefe Daten
    cy.get('div:contains("Fläche") + div:contains("1704")').should('be.visible');
    cy.get('button:contains("Drucken")').should('be.visible');

  })
})