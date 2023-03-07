describe('Map operation', () => {
  it('oparate with the map', () => {
    cy.open_url_with_cordinates('2702555', '1241686');
    //click on the map home view button
    cy.click_by_data_test_id('map-home').should('be.visible').click();
    //assert that map is switched to basic view
    cy.url().should(
      'eq',
      'https://calm-plant-0ecbec603.2.azurestaticapps.net/maps?x=2682260&y=1248390&scale=320000&basemap=arelkbackgroundzh'
    );
    cy.click_by_data_test_id('map-add').should('be.visible').click();
    cy.click_by_data_test_id('map-home').should('be.visible').click();
    cy.click_by_data_test_id('map-remove').should('be.visible').click();
    cy.click_by_data_test_id('map-home').should('be.visible').click();
    cy.url().should(
      'eq',
      'https://calm-plant-0ecbec603.2.azurestaticapps.net/maps?x=2682260&y=1248390&scale=320000&basemap=arelkbackgroundzh'
    );
  });
});
