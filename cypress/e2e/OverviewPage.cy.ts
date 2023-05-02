describe('Overview page', () => {
  it('passes', () => {
    cy.open_url_with_cordinates('2702555', '1241686');
    cy.get('span:contains("Übersicht")').should('be.visible').click();
    // cy.get('news-feed', {timeout: 2000}).should('not.be.empty').and('be.visible');
  });
});
