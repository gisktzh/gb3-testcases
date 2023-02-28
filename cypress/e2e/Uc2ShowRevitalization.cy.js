describe('template spec', () => {
  it('passes', () => {
    cy.open_url_with_cordinates();
    cy.select_topic("Wasser");
    cy.click_map_in_the_list("Revitalisierungsplanung (Gewässerrevitalisierung)");
//TODO User sucht Gewässernamen
// Karte skaliert und zeigt markiert die gewählte Gewässer.
//User klickt auf markierte Gewässerabschnitt um die informationen anzuzeigen
    cy.get('map-page').click()
  //  cy.get('span:contains(" AwelWBRevitwwwZH")').click(); 
    // Gewässerinformation
  //  cy.get('div:contains("Gemeindegrenzen (1 Treffer)") + b + button').click();
  //  cy.get('div:contains("Zuständigkeit") + div:contains("kommunale Gewässer")').click();
  })
})

