it.only('AmaTrack Admin Portal', function(){

    cy.visit('https://devamatrackadminportal-fthzaccfgdf3b3hz.westeurope-01.azurewebsites.net/')

it.only('Allows users to login to the Admin Portal')
cy.get('#username').type('demo@zonketech.co.za')
cy.get('#password').type('Test123@')
cy.get('.btn').click()

it.only('Allows users to Change Password')
cy.get('.nav-link').click()
cy.get('[data-toggle="modal"]').click()

it.only('Allows users to log out successfully')
cy.get('#passwordUpdateModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click()

})