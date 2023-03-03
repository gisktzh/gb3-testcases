describe('Map navigation', () => {
  it('passes', () => {
    cy.open_url_with_cordinates();
    cy.get('map-controls > div > button:nth-child(1)').should('be.visible').click();
    cy.get('map-controls > div > button:nth-child(2)').should('be.visible').click();
    cy.get('map-controls > div > button:nth-child(3)').should('be.visible').click();
  });
});
