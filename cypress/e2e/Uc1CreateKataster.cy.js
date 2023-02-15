describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://calm-plant-0ecbec603.2.azurestaticapps.net/maps?x=2702431&y=1241245&scale=3225&basemap=arelkbackgroundzh')
    cy.get('p:contains("Raumplanung, Zonenpläne")').click();
    cy.get('p:contains("ÖREB-Kataster") + button').click();
//TODO Adresse suchen
// Karte muss Liegenschaft markieren 
    cy.get('map-page').click();
    cy.get('span:contains("OerebKatasterZH")').click(); 
    // Highlights auswählen 
    cy.get('div:contains("ÖREB-Kataster (1 Treffer)") + b + button').click();
    cy.get('button:contains("Drucken")').should('be.visible');
  })
})