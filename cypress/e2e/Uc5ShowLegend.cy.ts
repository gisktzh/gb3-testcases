describe('template spec', () => {
  it('passes', () => {
    cy.open_url_with_cordinates();
    cy.select_topic('Verkehr');
    cy.click_map_in_the_list('Strassennetz');
    //Legende wird angezeigts
    cy.get('span:contains("Legende")').should('be.visible').click();
    cy.get('h1:contains("Legende")').should('be.visible');
    cy.get('span:contains("TBAZH")').should('be.visible').click();
  });
});
