describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://calm-plant-0ecbec603.2.azurestaticapps.net/maps?x=2702431&y=1241245&scale=3225&basemap=arelkbackgroundzh')
    cy.get('.basemap-selector').click();
    //User wählt Hinergrund
    cy.get('img[alt="Digitales Terrainmodell"]').click({force: true});
     //richtige Hintergrund ist angezeigt.
    cy.get('img[alt="Aktuelle Hintergrundkarte"]').should('have.attr', 'src', 'assets/images/basemaps/aredtmbackgroundzh.png');

  })
})

