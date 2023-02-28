describe('template spec', () => {
  it('passes', () => {
    cy.open_url_with_cordinates();
    cy.select_topic("Raumplanung, Zonenpläne");
    cy.click_map_in_the_list("ÖREB-Kataster");
//TODO Adresse suchen
// Karte muss Liegenschaft markieren 
    //wait until request is fully loaded
    cy.get('map-page', { timeout: 10000 }).click();
    cy.get('span:contains("OerebKatasterZH")', { timeout: 10000 }).should('exist').click(); 
    // Highlights auswählen 
    cy.get('div:contains("ÖREB-Kataster (1 Treffer)") + b + button').click();
    //Pruefe Daten
    cy.get('div:contains("Fläche") + div:contains("1704")').should('be.visible');
    cy.get('button:contains("Drucken")').should('be.visible');

  })
})