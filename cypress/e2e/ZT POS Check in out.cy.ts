it.only('Check in and Out', function(){

    cy.visit('https://ztpos-cfcxdea4hsb0gdbj.westeurope-01.azurewebsites.net/#')

it.only('Allows user to check in')
cy.get('[data-bs-target="#checkInCheckoutModal"]').click()

it.only('Allows users to add their employee name')
cy.get('#checkInCheckoutModal > .modal-dialog > .modal-content > .modal-body > form > .mb-3 > #productNameInput').type('CyTest00')

it.only('Allows users to click on verify')
cy.get('#checkInCheckoutModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
cy.wait(3000)


})
