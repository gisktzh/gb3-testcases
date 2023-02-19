describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://calm-plant-0ecbec603.2.azurestaticapps.net/maps?x=2702340&y=1241817&scale=148&basemap=arelkbackgroundzh')
    cy.get('p:contains("Verkehr")').click();
    cy.get('p:contains("Strassennetz") + button').click();
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

