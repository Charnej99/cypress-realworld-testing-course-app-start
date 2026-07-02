it.only('AmaTrack Admin Portal Actions', function(){

    cy.visit('https://devamatrackadminportal-fthzaccfgdf3b3hz.westeurope-01.azurewebsites.net/')

it.only('Allows users to login to the Admin Portal')
cy.get('#username').type('demo@zonketech.co.za')
cy.get('#password').type('Test123@')
cy.get('.btn').click()

it.only('Allows users to access the Client Management Screen')
cy.get(':nth-child(3) > a > span').click()

it.only('Allows users to click on Actions')
cy.get(':nth-child(1) > :nth-child(4) > #actionDropdownDataTable > #dropdownMen1').click()
cy.get(':nth-child(1) > :nth-child(4) > #actionDropdownDataTable > #actionDropdownDataTableMenu > :nth-child(2) > .dropdown-item').click()

it.only('Allows user add a user for a specific client')
cy.get('.w-100 > .btn').click()
cy.get('#nameInput').type('Cypress Test')
cy.get('#lastNameInput').type('Cypress Test')
cy.get('#emailAddressInput').type('CypTest00')
cy.get(':nth-child(4) > .dropdown > .btn > .filter-option').click()
})