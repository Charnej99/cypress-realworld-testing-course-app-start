it.only('Open Orders Screen', function(){

    cy.visit('https://ztpos-cfcxdea4hsb0gdbj.westeurope-01.azurewebsites.net/#')

it.only('Allows users to navigate to the Open Orders screen')
cy.get('[href="openOrders"]').click()

it.only('Allows users to click on Proceed to Check option for customer')
cy.get(':nth-child(1) > :nth-child(1) > .card > .card-body > .mb-2').click()
cy.pause()

it.only('Allows users to click on check out option')
cy.get('.col-12 > [data-bs-toggle="modal"]')
})
