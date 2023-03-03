describe('Overview page', () => {
  it('passes', () => {
    cy.open_url_with_cordinates();
    cy.get('span:contains("Übersicht")').should('be.visible').click();
    cy.get('news-feed').should('not.be.empty');
    cy.get('iframe').its('0.contentDocument').should('exist');
  });
});
