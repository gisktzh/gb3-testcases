describe('Add/delete favorite layers', () => {
    it('passes', () => {
        cy.open_url_with_cordinates('2682260', '1248390');
        cy.login();
        cy.get('span:contains("GIS-Browser")').last().click();
        cy.select_topic('Raumplanung, Zonenpläne');
        cy.click_map_in_the_list('ÖREB-Kataster');
        cy.get('mat-icon:contains("star_outlined")').click({force:true});
        cy.get('input[id="name"]').type("MyTestFavoite");
        cy.get('span:contains(" Speichern ")').click();
        //assert that favrite is saved 
        cy.select_topic(' Favoriten ');
        cy.get('p:contains("MyTestFavoite")').should('exist');
        // delete favorite 
        cy.get('p:contains("MyTestFavoite") + button:contains("delete")').click();
        cy.get('span:contains("Löschen")').click();
        // assert that favorite is deleted
        cy.select_topic(' Favoriten ').click();
        cy.get('p:contains("MyTestFavoite")').should('not.exist');
    });
});