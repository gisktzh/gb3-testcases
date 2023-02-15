describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://calm-plant-0ecbec603.2.azurestaticapps.net/maps?x=2702431&y=1241245&scale=3225&basemap=arelkbackgroundzh')
    cy.get('p:contains("Wasser")').click();
    cy.get('p:contains("Revitalisierungsplanung (Gewässerrevitalisierung)") + button').click();
//TODO User sucht Gewässernamen
// Karte skaliert und zeigt markiert die gewählte Gewässer.
//User klickt auf markierte Gewässerabschnitt um die informationen anzuzeigen
    cy.get('map-page').click()
    cy.get('span:contains(" AwelWBRevitwwwZH")').click(); 
    // Gewässerinformation
    cy.get('div:contains("Gemeindegrenzen (1 Treffer)") + b + button').click();
    cy.get('button:contains("Drucken")').should('be.visible');
  })
})

