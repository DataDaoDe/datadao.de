describe('HomePage', function() {
    beforeEach(function() {
        cy.visit('http://127.0.0.1:1111/')
    });

    it('has an image of my workdesk', () => {
        let home_image = cy.get('#workdesk-image');
        home_image.should('have.attr', 'title', 'picture of workdesk');
    });

    it('has all navbar items', () => {
        let navbar_items = [
            {'title': 'home', 'text': '道'},
            {'title':'articles'},
            {'title':'projects'},
            {'title':'research'},
            {'title':'contact'},
            {'title':'who am i?'}
        ];

        navbar_items.forEach((navbar_item) => {
            console.log(navbar_item)
            let navbar_item_css = `.uk-navbar-nav li a[title="${navbar_item.title}"]`;

            let elem = cy.get(navbar_item_css).first();
            
            // check title value
            elem.should('have.attr', 'title', navbar_item.title);
            
            // check text value
            elem.should('have.text', navbar_item.text || navbar_item.title );
        });

    });

});