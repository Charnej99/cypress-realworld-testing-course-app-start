it.only('New Order Screen', function(){

    cy.visit('http://localhost:9950/')

it.only('Allows users to login in with username')
cy.get('#username').type('admin')
cy.get('#password').type('Admin@1234')
cy.get('.btn > span').click()

it.only('Allows user to click on product for new order screen')
cy.get('.product-list > .row > :nth-child(1) > .card').click()

it.only('Allows users to check out the order')
cy.get('.pos-cart-actions > .btn-primary').click()

it.only('Allows user to select the payment method')
cy.get('#paymentTypeModal > .modal-dialog > .modal-content > .modal-body > .row > :nth-child(1) > .btn').click()

it.only('Allows user to add a tip amount')
cy.get('#tipInput').click().type('50')

it.only('Allows user to complete the paid order')
cy.get('.fixed-bottom > .d-flex > .btn-primary').click()

it.only('Allows user to click on okay for order that is complete')
cy.get('.col-12 > .btn').click()
})