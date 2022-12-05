describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://maps.zh.ch');
  })
  it('find map', () => {
    cy.get('[id=textfield-1060-inputEl]').type('Gewässerrev');
  })
  it('show map', () => {
    cy.get('div[id=gridview-1040]').find('div').contains('Revitalisierungsplanung ').click();
  })
  it('search Gewässername Binzmühlebach', () => {
    cy.get('[id=gbgewaesserdescriptionsearchcombobox-1107-inputEl]').type('Binzmühle');
  })
  it('select Searchresult', () => {
    cy.get('[id=boundlist-1114-listEl]').find('ul li:first').should('have.class', 'x-boundlist-item').contains('Binzmühlebach').click();
  })
  it('search Kantonale Gewässernummer 61751', () => {
    cy.get('[id=gbgewaesserktnrnpsearchcombobox-1108-inputEl]').type('61751');
  })
  it('select Searchresult', () => {
    cy.get('[id=boundlist-1116-listEl]').find('ul li:first').should('have.class', 'x-boundlist-item').contains('61751').click();
  })
})