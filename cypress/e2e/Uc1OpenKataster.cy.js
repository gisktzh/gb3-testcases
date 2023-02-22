describe('template spec', () => {
  it('passes', () => {
    cy.open_url_with_cordinates();
    cy.select_topic("Raumplanung, Zonenpläne");
    cy.click_map_in_the_list("ÖREB-Kataster");
//TODO Adresse suchen
// Karte muss Liegenschaft markieren 
    cy.get('map-page').click();
    cy.get('span:contains("OerebKatasterZH")', { timeout: 30000 }).click(); 
    // Highlights auswählen 
    cy.get('div:contains("ÖREB-Kataster (1 Treffer)") + b + button').click();
    //Pruefe Daten
    cy.get('div:contains("Fläche") + div:contains("1704")').should('be.visible');
    cy.get('button:contains("Drucken")').should('be.visible');
  })
})