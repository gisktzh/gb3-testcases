describe('template spec', () => {
  it('passes', () => {
    cy.open_url_with_cordinates('2702555', '1241686');
    cy.wait(3000);
    cy.get('basemap-selector > div > button').click({force: true});
    //User wählt Hinergrund
    cy.get('img[alt="Gelände"]').click({force: true});
    cy.wait(3000);
    //richtige Hintergrund ist angezeigt.
    cy.get('basemap-selector > div > button')
      .should('have.attr', 'style')
      .then((style) => {
        expect(style).to.contain('assets/images/basemaps/aredtmbackgroundzh.png');
      });
    //User wählt andere Hinergrund
    cy.get('basemap-selector > div > button').click({force: true});
    cy.get('basemap-selector > div > button').click({force: true});
    cy.get('img[alt="Amtliche Vermessung"]').click({force: true});
    //richtige Hintergrund ist angezeigt.
    cy.get('basemap-selector > div > button')
      .should('have.attr', 'style')
      .then((style) => {
        expect(style).to.contain('assets/images/basemaps/areavbackgroundzh.png');
      });
  });
});
