describe('Login', () => {
  it('Login', () => {
    cy.open_url_with_cordinates('2682260', '1248390');
    //assert map Immobilienregister Astra is not visible
    cy.select_topic('Bauten');
    cy.get('span:contains("Immobilienregister Astra")').should('not.be.exist');
    cy.login();
    cy.get('span:contains("GIS-Browser")').last().click();
    //assert request send authorization token
    cy.wait(4000);
    //assert map Immobilienregister Astra (is visible just for loged in user) is visible after log in
    cy.select_topic('Bauten');
    cy.click_map_in_the_list('Immobilienregister Astra').click();
    cy.get('p:contains("Immobilienregister Astra")').should('be.visible');

    cy.get('span:contains("GB3 User View")').should('be.visible').click();
    cy.get('span:contains("Logout")').should('be.visible');
  });
});
