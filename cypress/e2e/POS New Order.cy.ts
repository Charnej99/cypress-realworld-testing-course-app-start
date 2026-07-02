it.only('New Order Screen', function(){

    cy.visit('https://ztpos-cfcxdea4hsb0gdbj.westeurope-01.azurewebsites.net/#')

it.only('Allows user to click on New Order Feature')
cy.get('[href=""]').click()

it.only('Allows users to add reference for customer')
cy.get('#referenceField').type('CypressTest')

it.only('Allows users add preference of where the customer would be eating')
cy.get('.col-7 > .row > :nth-child(2) > .btn').click()

it.only('Allows users to choose products for customer')
cy.get('.product-list > .row > :nth-child(11) > .card > .card-body').click()

it.only('Allows users to click on Remove option')
cy.get(':nth-child(3) > :nth-child(2) > .btn').click()

it.only('Allows users to click on Check Out for New Order')
cy.get('.col-12 > :nth-child(1)').click()
})