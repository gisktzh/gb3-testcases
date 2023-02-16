describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://calm-plant-0ecbec603.2.azurestaticapps.net/maps?x=2702575&y=1242019&scale=148&basemap=arelkbackgroundzh')
    cy.get('p:contains("Verkehr")').click();
    cy.get('p:contains("Verkehrstechnik (BSA)") + button').last().click();
//TODO User sucht Verkehrstehnik
//User klickt auf markierte Verkehrstehnik um die informationen anzuzeigen
// Richtig auf de Karte cklicken
    cy.get('map-page').click()
    cy.get('span:contains("TbaVerkehrstechnikOverlayZH")').should('be.visible').click(); 
    cy.get('div:contains("Strassenname") + div:contains("Bahnhofstrasse")').should('be.visible');
    // Verkehrstehnik
    // Infos asserten
  })
})

