describe('Overview page', () => {
  it('passes', () => {
    cy.visit('https://calm-plant-0ecbec603.2.azurestaticapps.net/');
    cy.get('span:contains("Übersicht")').should('be.visible').click();
    cy.get('news-feed', {timeout: 2000}).should('not.be.empty');
  });
});
