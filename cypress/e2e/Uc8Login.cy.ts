describe('Login', () => {
  it('Login', () => {
    cy.open_url_with_cordinates('2682260', '1248390');
    //assert map Betriebe is not visible
    cy.select_topic('Bauten');

    cy.login();
    cy.intercept('GET', 'https://maps.zh.ch/v3/auth/userinfo', (req) => {
      req.headers.authorization = 'Bearer eyJ0eXAiOiJKV1QiLCJraWQiOiI4ZVNwdVFIWXZLRlRHMGxtU0l2TEhJWEU4SkRCNlRxdllZanNKTXpad0tBIiwiYWxnIjoiUlM1MTIifQ.eyJpc3MiOiJodHRwczovL21hcHMuemguY2gvIiwic3ViIjoiZ2IzLXVzZXItdmlldyIsInR5cGUiOiJhY2Nlc3MiLCJqdGkiOiI4ZGIyMzM2YS0yNjk5LTQ1ZTktYWRhYS05MWE4ZjBmM2YwYmIiLCJpYXQiOjE2ODI0MzE1NjgsImV4cCI6MTY4MjQ2NzU2OH0.G699kXYVzpHon5j4K1vE2X6vQ0qRXWHiBpzfS8uo--eWU36RfmZ2iiRX0uN8pH6h1LPA7-ks8MkdIyxD7DCbjB2ggkvoUBXO9apZK7uZQAHVdKdFnzliJa5bJ4kzoAXQmZYIwyvMXMET2Psl952nRKreG84YL5QBSeer3u-BuPYwIFLC4Pd6s8-kDmXGulw2acffgkrZEhBsr--Fm3pTa2hPa0qvr2xj20EbmKVOnZuavvg7ZYATW0BcRtHqNS2JmEiY8Wiqn6wWdaJbWzVKcOQ4GFr4Y1pffxzRmSnmzK1sJGAp85B1InNmPW7ta72ehs3FQMQUXrHV6KckljFYdw'
    }).as('topics');
    cy.reload;
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