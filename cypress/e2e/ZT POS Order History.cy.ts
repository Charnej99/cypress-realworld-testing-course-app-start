
it.only('Order History Screen', function(){

    cy.visit('https://ztpos-cfcxdea4hsb0gdbj.westeurope-01.azurewebsites.net/#')

it.only('Allows users to click on the Order History Screen')
cy.get('[href="OrderHistory"]').click()

it.only('Allows users to click on the View Order items')
cy.get(':nth-child(3) > .card > .card-body > .btn').click()
cy.wait(500)

})
