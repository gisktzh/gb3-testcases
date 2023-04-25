beforeEach(() => {
  cy.intercept('https://maps.zh.ch/v3/auth/authorize?**', (req) => {
    req.url = 'https://maps.zh.ch/v3/auth/authorize?response_type=code&client_id=gb3&state=eE9MQlQyTmVXbDVwdFgyR2xjU0t6QzA2bm9teXdrNC1LOVJNLVg4ZEV1WHR2&redirect_uri=https%3A%2F%2Fcalm-plant-0ecbec603.2.azurestaticapps.net%2F&scope=openid%20profile&code_challenge=AoYNZ3YMXYS8-kfAEW6OykknvxueAlsi6r0fwePZy64&code_challenge_method=S256&nonce=eE9MQlQyTmVXbDVwdFgyR2xjU0t6QzA2bm9teXdrNC1LOVJNLVg4ZEV1WHR2&response_mode=query';
    req.continue();
  }).as('login');
});

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