 describe('Filter layers', () => {
    it('passes', () => {
      cy.open_url_with_cordinates('300','300');
      //filter kataster layer
      cy.get('.map-catalogue__filter').type('ÖREB-Kataster');
      //assert  Raumplanung, Zonenpläne topic is visible and others are not
      cy.get('p:contains("Raumplanung, Zonenpläne")').should('be.visible').click();
      cy.get('p:contains("Wasser")').should('not.exist');
      cy.select_topic('Raumplanung, Zonenpläne');
      //assert  ÖREB-Kataster layer is visible
      cy.get('span:contains("ÖREB-Kataster") > button[data-test-id="add-active-map"]').should('be.visible');     
      //tre with other layer;
      cy.get('.map-catalogue__filter').clear().type('Verkehrstechnik (BSA)');
      //assert  Wasser topic is visible and others are not
      cy.get('p:contains("Raumplanung, Zonenpläne")').should('not.exist');
      cy.get('p:contains("Verkehr")').should('be.visible').click();
      //assert  layer is visible
      cy.get('span:contains("Verkehrstechnik (BSA)") > button[data-test-id="add-active-map"]').should('be.visible');
    });
  });