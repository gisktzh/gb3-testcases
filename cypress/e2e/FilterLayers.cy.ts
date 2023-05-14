describe('Filter layers', () => {
  it('flter', () => {
    cy.open_url_with_cordinates('300', '300');
    //filter kataster layer
    cy.get('.map-data-catalogue__content__filter__input').type('ÖREB-Kataster');
    //assert  Raumplanung, Zonenpläne topic is visible and others are not
    cy.get('p:contains("Raumplanung, Zonenpläne")').should('exist').click();
    cy.get('p:contains("Wasser")').should('not.exist');
    cy.select_topic('Raumplanung, Zonenpläne');
    //assert  ÖREB-Kataster layer is visible
    cy.select_topic(' Raumplanung, Zonenpläne ');
    cy.get('p:contains("ÖREB-Kataster")').should('exist');
    //tre with other layer;
    cy.get('.map-data-catalogue__content__filter__input').clear().type('Verkehrstechnik (BSA)');
    //assert  Wasser topic is visible and others are not
    cy.get('p:contains("Raumplanung, Zonenpläne")').should('not.exist');
    cy.get('p:contains("Verkehrstechnik (BSA)")').should('exist').click();
    //assert  layer is visible
    cy.get('p:contains("Verkehrstechnik (BSA)")').should('exist');
  });
});
