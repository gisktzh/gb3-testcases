describe('Filter layers', () => {
  it('flter', () => {
    cy.open_url_with_cordinates('300', '300');
    //filter Strassennetz layer
    cy.get('input[placeholder="Karten und Layer filtern"]').type('Strassennetz');
    //assert Verkehr topic is visible and others are not
    cy.get('p:contains("Verkehr")').should('exist');
    cy.get('p:contains("Wasser")').should('not.exist');
    //assert Strassennetz layer is visible
    cy.get('p:contains("Strassennetz")').should('exist');
    //try with other layer;
    cy.get('input[placeholder="Karten und Layer filtern"]').clear().type('Verkehrstechnik (BSA)');
    //assert  Verkehr topic is visible and others are not
    cy.get('p:contains("Raumplanung, Zonenpläne")').should('not.exist');
    cy.get('p:contains("Verkehrstechnik (BSA)")').should('exist').click();
  });
});
