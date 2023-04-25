describe('Login', () => {
  it('Login', () => {
    cy.open_url_with_cordinates('2682260', '1248390');
    //assert map Betriebe is not visible
    cy.select_topic('Bauten');

    cy.login();

    cy.get('span:contains("GIS-Browser")').last().click();
    //assert request send authorization token
    cy.intercept('GET', 'https://maps.zh.ch/v3/topics', (req) => {
      expect(req.headers.authorization).to.include('Bearer');
    }).as('topics');

    cy.wait('@topics');
    //assert map Betriebe is visible after log in
    cy.select_topic('Bauten');
    cy.get('span:contains("Betriebe")').should('exist').click();

    cy.get('span:contains("GB3 User View")').should('be.visible').click();
    cy.get('span:contains("Logout")').should('be.visible');
  });
});