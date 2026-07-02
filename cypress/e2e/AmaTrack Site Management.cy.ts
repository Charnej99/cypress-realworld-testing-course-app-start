it.only('AmaTrack Admin Portal Site Management', function(){

    cy.visit('https://devamatrackadminportal-fthzaccfgdf3b3hz.westeurope-01.azurewebsites.net/')

it.only('Allows users to login to the Admin Portal')
cy.get('#username').type('demo@zonketech.co.za')
cy.get('#password').type('Test123@')
cy.get('.btn').click()

it.only('Allows users to navigate to the Site Managment Screen.')
cy.get('#side-menu > :nth-child(5) > a').click()

it.only('Add New Site')
cy.get('#newSiteBtn').click()

it.only('Allows users to add their name')
cy.get('#nameInput').type('Cypress Tester')

it.only('Allows users to add their street address')
cy.get('#streetAddressInput').click().type('CypressLane').click()

it.only("Allows users to add in thei city address")
cy.get('#cityInput').type('Cypress')

it.only('Allows user to select a province')
cy.get('.filter-option').click()
cy.get(':nth-child(3) > .dropdown-item > .text').click()

it.only('Allows users to add their postal code')
cy.get('#postalCodeInput').type('1234')

it.only('Allows users to add their email address')
cy.get('#emailInput').type('CypTester1100@gmail.com')

it.only('Allows users to Save the Site Added')
cy.get('#siteAddOrUpdateModal > .modal-dialog > .modal-content > .modal-footer > .btn-success').click()

})
