it.only('Open Orders Screen', function(){

    cy.visit('http://localhost:9950/')

it.only('Allows users to login in with username')
cy.get('#username').type('admin')
cy.get('#password').type('Admin@1234')
cy.get('.btn > span').click()

it.only('Allow admin/user to view or checkout open orders')
cy.get('.pos-menu-toggle > .bi').click()
cy.get('[href="openOrders"]').click()

})
