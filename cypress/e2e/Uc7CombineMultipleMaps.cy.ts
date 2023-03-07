describe('template spec', () => {
  it('passes', () => {
    cy.open_url_with_cordinates('2702555', '1241686');
    //User wählt megr als eine Karte
    cy.select_topic('Verkehr');
    cy.click_map_in_the_list('Strassennetz');
    cy.click_map_in_the_list('Verkehrsbaulinien');
    //beide Karten sind ausgewählt und angezeigt.
    cy.get('button + p:contains("Strassennetz")').should('be.visible');
    cy.get('button + p:contains("Verkehrsbaulinien")').should('be.visible');
  });
});
