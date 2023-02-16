describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://calm-plant-0ecbec603.2.azurestaticapps.net/maps?x=2702431&y=1241245&scale=3225&basemap=arelkbackgroundzh')
    cy.get('p:contains("Verkehr")').click();
    cy.get('p:contains("Strassennetz") + button').click();
    //Legende wird angezeigts
    cy.get('span:contains("Legende")').should('be.visible').click(); 
    cy.get('h1:contains("Legende")').should('be.visible');
    cy.get('span:contains("TBAZH")').should('be.visible').click(); 
  })
})
 
