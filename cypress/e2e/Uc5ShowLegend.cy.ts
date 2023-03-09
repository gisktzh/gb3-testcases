describe('template spec', () => {
  it('passes', () => {
    cy.open_url_with_cordinates('2702555', '1241686');
    cy.select_topic('Verkehr');
    cy.click_map_in_the_list('Strassennetz');
    cy.select_topic('Raumplanung, Zonenpläne');
    cy.click_map_in_the_list('ÖREB-Kataster');
    //Legende wird angezeigt
    cy.get('span:contains("Legende")').should('be.visible').click();
    cy.get('h1:contains("Legende")').should('be.visible');
    cy.get('span:contains("TBAZH")').should('be.visible');
    cy.get('span:contains("OerebKatasterZH")').should('be.visible');
    cy.get('legend-widget > map-overlay > mat-card > mat-card-header > button').click();
    // Eine Karte wird abgeschaltet, Legende wird richtig agezeigt.
    cy.get('p:contains("ÖREB-Kataster") + button').first().click();
    cy.get('span:contains("Legende")').should('be.visible').click();
    cy.get('h1:contains("Legende")').should('be.visible');
    cy.get('span:contains("OerebKatasterZH")').should('not.exist');
  });
});
