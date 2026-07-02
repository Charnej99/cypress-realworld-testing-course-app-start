it.only('AmaTrack Admin Portal', function(){

    cy.visit('https://devamatrackadminportal-fthzaccfgdf3b3hz.westeurope-01.azurewebsites.net/')

it.only('Allows users to login to the Admin Portal')
cy.get('#username').type('demo@zonketech.co.za')
cy.get('#password').type('Test123@')
cy.get('.btn').click()

it.only('Allows users to access the Client Management Screen')
cy.get(':nth-child(3) > a > span').click()

it.only('Allows users to Add a Client but Mark as Inactive')
cy.get('.w-100 > .btn').click()
cy.get('#nameInput').type('Cypress Test ')
cy.get('#activeCheckbox').click()
cy.get('#disableCodeInput').type('J3Z2y7')
cy.get('#companyAddOrUpdateModal > .modal-dialog > .modal-content > .modal-footer > .btn-success').click()



})