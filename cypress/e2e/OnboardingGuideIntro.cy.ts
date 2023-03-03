describe('Onboarding Guide Intro', () => {
  it('passes', () => {
    cy.visit('https://calm-plant-0ecbec603.2.azurestaticapps.net/maps?x=2702555&y=1241686&scale=251&basemap=arelkbackgroundzh');
    cy.get('img[alt="Onboarding Guide Intro"]').should('be.visible');
    cy.get('span:contains("Weiter ")').should('be.visible').click();
    cy.get('#cdk-overlay-1').should('be.visible');
    cy.get('span:contains("Weiter ")').should('be.visible').click();
    cy.get('mat-card-title:contains("Dargestellte Karten")').should('be.visible');
    cy.get('span:contains("Weiter ")').should('be.visible').click();
    cy.get('mat-card-title:contains("Hintergrund")').should('be.visible');
    cy.get('span:contains("Weiter ")').should('be.visible').click();
    cy.get('mat-card-title:contains("Info-Klick")').should('be.visible');
    cy.get('span:contains("Weiter ")').should('be.visible').click();
    cy.get('mat-card-title:contains("Das wars!")').should('be.visible');
    cy.get('span:contains("Beenden")').should('be.visible').click();
  });
});
