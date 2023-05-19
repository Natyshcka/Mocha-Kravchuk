describe('HomeWork', () => {
    
    const test = (Recipients, Subject, Message ) =>

    function () {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
        cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
        cy.get('[title="Forms"]').click();
        cy.get('[title="Form Layouts"]').click();
        cy.get('[placeholder="Recipients"]').type(Recipients);
        cy.get('[placeholder="Recipients"]').should("contain.value", Recipients);
        cy.get('[placeholder="Subject"]').type(Subject);
        cy.get('[placeholder="Subject"]').should("contain.value", Subject);
        cy.get('[placeholder="Message"]').type(Message);
        cy.get('[placeholder="Message"]').should("contain.value", Message);

    };
          it('search for Cypress', test('Jhon','Order', 'Order was not deliver'));
          
    });
    
      





