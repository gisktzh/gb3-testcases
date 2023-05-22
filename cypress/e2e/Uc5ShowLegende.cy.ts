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
    cy.get('button.map-overlay__header__close > mat-icon').click({force: true});
    cy.wait(5000);
    // Eine Karte wird abgeschaltet, Legende wird richtig angezeigt.
    cy.get('[data-test-id="delete"]').last().click({force: true});
    cy.get('span:contains("Legende")').should('be.visible').last().click();
    cy.get('h1:contains("Legende")').should('exist');
    cy.get('span:contains("ÖREB-Kataster")').should('be.visible');
  });
});
