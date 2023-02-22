describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://calm-plant-0ecbec603.2.azurestaticapps.net/maps?x=2702568&y=1242020&scale=150&basemap=arelkbackgroundzh');
    cy.select_topic("Verkehr");
    cy.click_map_in_the_list("Strassennetz");
//TODO User sucht Verkehrstehnik
//User klickt auf markierte Verkehrstehnik um die informationen anzuzeigen
    // Richtig auf de Karte cklicken
    cy.get('map-page').click()
    cy.get('span:contains("TBAZH")').should('be.visible').click(); 
    cy.get('div:contains("Strassentyp") + div:contains("Kantonale Nebenstrassen")').should('be.visible');
    // Verkehrstehnik
    // Infos asserten
  })
})

