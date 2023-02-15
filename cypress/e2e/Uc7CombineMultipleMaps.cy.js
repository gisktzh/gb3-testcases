describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://calm-plant-0ecbec603.2.azurestaticapps.net/maps?x=2702431&y=1241245&scale=3225&basemap=arelkbackgroundzh')
    //User wählt megr als eine Karte
    cy.get('p:contains("Verkehr")').click();
    cy.get('p:contains("Strassennetz") + button').click();
    cy.get('p:contains("Verkehrsbaulinien") + button').click();
     //beide Karten sind ausgewählt und angezeigt.
     cy.get('button + p:contains("Strassennetz")').should('be.visible');
     cy.get('button + p:contains("Verkehrsbaulinien")').should('be.visible');
  })
})
