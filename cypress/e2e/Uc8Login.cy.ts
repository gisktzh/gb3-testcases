describe('template spec', () => {
  it('passes', () => {
    cy.open_url_with_cordinates('2682260', '1248390');
    //assert map Betriebe is not visible
    cy.select_topic('Bauten');

    cy.get('span:contains("Betriebe")').should('not.be.exist');

    cy.get('span:contains("Login")').click();

    cy.origin('https://maps.zh.ch', () => {
      const userName: string = Cypress.env('eIAM_username') as string;
      const password: string = Cypress.env('eIAM_password') as string;
      cy.get('#user_login').type(userName);
      cy.get('#user_password').type(password);
      cy.get('input[value="Login"]').click();
    });

    cy.get('span:contains("GIS-Browser")').last().click();
    //assert request send authorization token
    cy.intercept('GET', 'https://maps.zh.ch/v3/topics', (req) => {
      expect(req.headers.authorization).to.include('Bearer');
    }).as('topics');

    cy.wait('@topics');
    //assert map Betriebe is visible after log in
    cy.select_topic('Bauten');
    cy.get('span:contains("Betriebe")').should('be.visible').click();

    cy.get('span:contains("GB3 User View")').should('be.visible').click();
    cy.get('span:contains("Logout")').should('be.visible');
  });
});
