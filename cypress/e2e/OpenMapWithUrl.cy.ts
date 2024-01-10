describe('template spec', () => {
  it('passes', () => {
    const baseUrl = Cypress.env('gb3BaseUrl') as string;
    //visit with selected maps
    cy.visit(baseUrl + 'maps?initialMapIds=OrthoZH,AVfarbigZH');
  //  cy.get('span:contains("Überspringen")').click();
    cy.get('span:contains("Legende")').should('be.visible').click();
    cy.get('h1:contains("Legende")').should('exist');
    cy.get('span:contains(" Amtliche Vermessung in Farbe ")').should('be.visible');
    cy.get('span:contains(" Orthofoto ZH 2014-2021 ")').should('be.visible');
    cy.visit(baseUrl + 'maps?initialMapIds=OerebKatasterZH');
    cy.get('span:contains("Legende")').should('be.visible').click();
    cy.get('h1:contains("Legende")').should('exist');
    cy.get('span:contains(" ÖREB-Kataster ")').should('be.visible');
  });
});
