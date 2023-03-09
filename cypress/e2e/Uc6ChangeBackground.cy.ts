describe('template spec', () => {
  it('passes', () => {
    cy.open_url_with_cordinates('2702555', '1241686');
    cy.get('.basemap-selector').click();
    //User wählt Hinergrund
    cy.get('img[alt="Digitales Terrainmodell"]').click({force: true});
    //richtige Hintergrund ist angezeigt.
    cy.get('img[alt="Aktuelle Hintergrundkarte"]').should('have.attr', 'src', 'assets/images/basemaps/aredtmbackgroundzh.png');
    //User wählt andere Hinergrund
    cy.get('.basemap-selector').click();
    cy.get('img[alt="Landeskarte"]').click({force: true});
    //richtige Hintergrund ist angezeigt.
    cy.get('img[alt="Aktuelle Hintergrundkarte"]').should('have.attr', 'src', 'assets/images/basemaps/arelkbackgroundzh.png');
  });
});
