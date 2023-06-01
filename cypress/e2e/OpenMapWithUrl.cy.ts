describe('template spec', () => {
    it('passes', () => {
      //visit with selected maps
      cy.visit('https://dev.geo.zh.ch/maps?initialMapIds=OrthoZH,AVfarbigZH');
      cy.get('span:contains("Überspringen ")').click();
      cy.get('span:contains("Legende")').should('be.visible').click();
      cy.get('h1:contains("Legende")').should('exist');
      cy.get('span:contains(" Amtliche Vermessung in Farbe ")').should('be.visible');
      cy.get('span:contains(" Orthofoto ZH 2014-2021 ")').should('be.visible');
      cy.visit('https://dev.geo.zh.ch/maps?initialMapIds=OerebKatasterZH');
      cy.get('span:contains("Legende")').should('be.visible').click();
      cy.get('h1:contains("Legende")').should('exist');
      cy.get('span:contains(" ÖREB-Kataster ")').should('be.visible');
    });
  });
  