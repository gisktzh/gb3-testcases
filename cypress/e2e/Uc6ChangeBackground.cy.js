describe('template spec', () => {
  it('passes', () => {
    cy.open_url_with_cordinates();
    cy.get('.basemap-selector').click();
    //User wählt Hinergrund
    cy.get('img[alt="Digitales Terrainmodell"]').click({force: true});
     //richtige Hintergrund ist angezeigt.
    cy.get('img[alt="Aktuelle Hintergrundkarte"]').should('have.attr', 'src', 'assets/images/basemaps/aredtmbackgroundzh.png');

  })
})

