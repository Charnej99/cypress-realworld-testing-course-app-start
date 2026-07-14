it.only('POS Dashboard', function(){

    cy.visit('https://ztpos-cfcxdea4hsb0gdbj.westeurope-01.azurewebsites.net/#')

it.only('allows users to click on products to purchase')
        cy.get('.product-list > .row > :nth-child(1) > .card > .card-body').click()

it.only('Allows user to add reference name of customer ')
        cy.get('#referenceField').type('TestCypress')

it.only('allows users to click on products to purchase')
        cy.get('.product-list > .row > :nth-child(8) > .card > .card-body').click()

it.only('allows users to click on check out for the order')
        cy.get('.col-12 > [data-bs-toggle="modal"]').click()

it.only('allows users to choose payment option which is the cash option')
        cy.get('#paymentTypeModal > .modal-dialog > .modal-content > .modal-body > .row > :nth-child(1) > .btn').click()

it.only('allows users to add the amount due for purchase')
        cy.get('#amountPaidInput').type('R200')
        cy.get('.col-12 > :nth-child(1)').click()

})
