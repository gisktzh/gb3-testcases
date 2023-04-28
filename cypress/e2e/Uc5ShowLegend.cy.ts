describe('template spec', () => {
  it('passes', () => {
    cy.open_url_with_cordinates('2702555', '1241686');
    cy.select_topic('Verkehr');
    cy.click_map_in_the_list('Strassennetz');
    cy.select_topic('Raumplanung, Zonenpläne');
    cy.click_map_in_the_list('ÖREB-Kataster');
    //Legende wird angezeigt
    cy.get('span:contains("Legende")').should('be.visible').click();
    cy.get('h1:contains("Legende")').should('exist');
    cy.get('span:contains("Strassennetz")').should('be.visible');
    cy.get('span:contains("ÖREB-Kataster")').should('be.visible');
    cy.get('button.map-overlay__header__close').click();
    cy.wait(2000);
    // Eine Karte wird abgeschaltet, Legende wird richtig agezeigt.
    cy.get('p:contains("ÖREB-Kataster") + button').first().click();
    cy.get('span:contains("Legende")').should('be.visible').click();
    cy.get('h1:contains("Legende")').should('exist');
    cy.get('span:contains("Strassennetz")').should('be.visible');
    // Ein Layer wird angeschaltet, Legende wird richtig agezeigt.
    cy.get('button.map-overlay__header__close').click();
    cy.wait(2000);
    cy.get('.map-catalogue__filter').type('Seen');
    cy.get('mat-icon[data-mat-icon-name="arrow_right"]').first().click({force:true});
    cy.get('p:contains("Seen") + button').first().click();
    cy.get('span:contains("Legende")').should('be.visible').click();
    cy.get('h1:contains("Legende")').should('exist');
    cy.get('span:contains("Strassennetz")').should('be.visible');
    cy.get('span:contains("Seen")').should('be.visible');
  });
});
