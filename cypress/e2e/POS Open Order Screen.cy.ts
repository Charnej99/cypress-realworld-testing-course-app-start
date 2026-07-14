it.only('Open Orders Screen', function(){

    cy.visit('https://ztpos-cfcxdea4hsb0gdbj.westeurope-01.azurewebsites.net/#')

it.only('Allows users to navigate to the Open Orders screen')
cy.get('[href="openOrders"]').click()

it.only('Allows users to click on Proceed to Check option for customer')
cy.get(':nth-child(1) > :nth-child(5) > .card > .card-body > .mb-2').click()
cy.wait(500)

it.only('Allows users to check out a specific order')
cy.get('.col-12 > [data-bs-toggle="modal"]').click()

it.only('Allows users to click on a payment option in this case it is Card')
cy.get('#paymentTypeModal > .modal-dialog > .modal-content > .modal-body > .row > :nth-child(2) > .btn').click()

it.only('Allows users to check out once payment is made')
cy.get('.col-12 > :nth-child(1)').click()

})

