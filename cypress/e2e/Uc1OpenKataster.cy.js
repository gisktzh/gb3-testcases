describe('template spec', () => {
  it('passes', () => {
    cy.open_url_with_cordinates();
    cy.select_topic("Raumplanung, Zonenpläne");

    cy.intercept('GET', '**/OerebKatasterZH?**').as('kataster');
    
    cy.click_map_in_the_list("ÖREB-Kataster");

    cy.wait("@kataster").its('response.statusCode').should('eq', 200);

    //TODO Adresse suchen
    // Karte muss Liegenschaft markieren 
    //wait until request is fully loaded 


    cy.intercept('GET', '**/feature_info?**').as('results');
   
    cy.get('map-page', {timeout: 5000}).should('exist').and('be.visible').click();
    

    cy.wait("@results").its('response.statusCode').should('eq', 200);


    cy.get('span:contains("OerebKatasterZH")').should('exist').and('be.visible').click();

     // Highlights auswählen 
    cy.get('div:contains("ÖREB-Kataster (1 Treffer)") + b + button').click();
    //Pruefe Daten
    cy.get('div:contains("Fläche") + div:contains("1704")').should('be.visible');
    cy.get('button:contains("Drucken")').should('be.visible');

  })
})