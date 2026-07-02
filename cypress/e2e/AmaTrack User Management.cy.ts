it.only('AmaTrack Admin Portal Actions', function(){

    cy.visit('https://devamatrackadminportal-fthzaccfgdf3b3hz.westeurope-01.azurewebsites.net/')

it.only('Allows users to login to the Admin Portal')
cy.get('#username').type('demo@zonketech.co.za')
cy.get('#password').type('Test123@')
cy.get('.btn').click()

it.only('Allows users to navigate to the User Managment Screen.')
cy.get(':nth-child(4) > a').click()

})
