describe('template spec', () => {
  it('passes', () => {
    cy.open_url_with_cordinates('2702555', '1241686');
    //To Do user macht InfoAnfrage
    cy.select_topic('Verkehr');
  });
});