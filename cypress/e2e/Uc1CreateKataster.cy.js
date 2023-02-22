describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://calm-plant-0ecbec603.2.azurestaticapps.net/maps?x=2702555&y=1241686&scale=251&basemap=arelkbackgroundzh')
    cy.get('p:contains("Raumplanung, Zonenpläne")').click();
    cy.get('p:contains("ÖREB-Kataster") + button').click();
//TODO Adresse suchen
// Karte muss Liegenschaft markieren 
    cy.get('map-page').click();
    cy.get('span:contains("OerebKatasterZH")', { timeout: 100000 }).click(); 
    // Highlights auswählen 
    cy.get('div:contains("ÖREB-Kataster (1 Treffer)") + b + button').click();
    //Pruefe Daten
    cy.get('div:contains("Fläche") + div:contains("1704")').should('be.visible');
    cy.get('button:contains("Drucken")').should('be.visible');
  })
})