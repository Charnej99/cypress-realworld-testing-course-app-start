it.only('Check Out User', function(){

    cy.visit('http://localhost:9950/')

it.only('Allows users to login in with username')
cy.get('#username').type('admin')
cy.get('#password').type('Admin@1234')
cy.get('.btn > span').click()

it.only('Allow admin user to check out employee')
cy.get('.pos-menu-toggle > .bi').click()
cy.get ('.d-flex > .btn-primary').click()
cy.get ('#checkInCheckoutModal > .modal-dialog > .modal-content > .modal-body > form > .mb-3 > #productNameInput').type('EMP-BAR-004')

it.only('Allows admin user to verify the check in of employee')
cy.get('#checkInCheckoutModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()

it.only('Admin user must confirm check in')
cy.get('#checkInCheckoutModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()

it.only('Allow admin user to capture a photo of user')
cy.get('.web-selfie-capture-button').click()
cy.get('.web-selfie-capture-button > :nth-child(2)').click()
cy.get('.web-selfie-capture-button > .bi').click()

it.only('Allow admin to accept and check in/out the user')
cy.get('.web-selfie-action-primary').click()
cy.get('.web-selfie-action-primary > :nth-child(2)').click()
cy.wait('1500')
})