describe('template spec', () => {
  it('passes', () => {
    cy.open_url_with_cordinates('2702568', '1242020');
    cy.select_topic('Verkehr');
    cy.click_map_in_the_list('Strassennetz');
    //TODO User sucht Verkehrstehnik
    //User klickt auf markierte Verkehrstehnik um die informationen anzuzeigen
    // Richtig auf de Karte cklicken
    cy.get('map-page').click();
    cy.get('span:contains("TBAZH")').should('be.visible').click();
    cy.get('div:contains("Strassentyp") + div:contains("Kantonale Nebenstrassen")').should('be.visible');
    // Verkehrstehnik
    // Infos asserten
  });
});